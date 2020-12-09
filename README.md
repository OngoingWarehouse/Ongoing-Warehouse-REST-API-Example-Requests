<a href="https://www.ongoingwarehouse.com">![Logo](https://www.ongoingwarehouse.com/images/logotype.png)</a>
# Ongoing Warehouse REST API example requests
[Ongoing Warehouse](https://www.ongoingwarehouse.com/) is a Warehouse Management System (WMS).

We provide several [Application Programming Interfaces (APIs)](https://developer.ongoingwarehouse.com/). One of them is [based on REST](https://developer.ongoingwarehouse.com/REST/v1/index.html). In this repository, we provide examples of what the requests and responses look like.

In the directory called ``v1-Postman`` you will find a [Postman](https://www.postman.com/) collection containing the requests. Postman is a program which can make API requests. You can use it to test out APIs. Note that the collection uses [Postman variables](https://learning.postman.com/docs/sending-requests/managing-environments/), which you will have to modify to suit your particular case. You will also have to fill in the username and password for your API user.

If you do not wish to use Postman, look in  the directory called ``v1`` where you will find simple text files containing some example requests and responses.

These examples will show you how to:
* Create and update articles (including attaching files to articles).
* Create and update orders (including attaching files to orders).
* Create and update purchase orders.
* Create and update return orders.
* Read inventory adjustments.
* Read transporter contracts (shipping methods).

We provide an [OpenAPI specification file](https://developer.ongoingwarehouse.com/REST/v1/openapi.json) for our API. This is a machine-readable specification of the API, which allows you to automatically generate client code for your own programming language.