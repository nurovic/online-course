const httpStatus = require("http-status");
const CourseService = require("../services/CourseService");
const UserService = require("../services/UserService");
const OrderCartService = require("../services/OrderCartService");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

class OrderCart {
  index(req, res) {
    req.body.user_id = req.user;
    OrderCartService.list(req.body)
      .then((response) => {
        res.status(httpStatus.OK).send(response);
      })
      .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
  }

  create(req, res) {
    req.body.user_id = req.user;
    OrderCartService.create(req.body)
      .then((response) => {
        res.status(httpStatus.CREATED).send(response);
      })
      .catch((e) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
      });
  }

  async checkout(req, res) {
    const { totalAmount, course_name, course_id } = req.body;

    UserService.update(
      { _id: req.user._id },
      { $push: { learnings: course_id } }
    ).then();
      console.log("haasdasd", course_id.length)
    for (let i = 0; i < course_id.length; i++) {
      const userId = req.user._id
            CourseService.update(
            { _id: course_id[i] },
            { $push: { members: userId } }
          )
          .then()

    };
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: course_name,
              },
              unit_amount: parseInt(totalAmount) * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "https://vcourse.netlify.app/",
        cancel_url: "https://vcourse.netlify.app/",
      });
      res.send({ url: session.url });
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }

  deleteAll(req,res){
    OrderCartService.deleteAll()
      .then((deleteAll) => {
        res.status(httpStatus.OK).send({
          message: "Order Deleted",
        });
      })
  }

  deleteOrder(req, res) {
    OrderCartService.delete(req.params?.id)
      .then((deleteOrder) => {
        if (!deleteOrder) {
          return res.status(httpStatus.NOT_FOUND).send({
            message: "This order not found",
          });
        }
        res.status(httpStatus.OK).send({
          message: "Order Deleted",
        });
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: "Error occured while delete order" })
      );
  }

}

module.exports = new OrderCart();
