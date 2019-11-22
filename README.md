# test-dog-server
NC Lesson from 22/11/19

Notes from class 2019-11-22

WORKING HTML SERVER FOR HANDLING REQUESTS FOR DOGS
RUN CODE REGULARLY! DEBUGGING IS HARD!

Making a request from Google Chrome:
Navigate to 'localhost:8080/dogs' and the server should return dogs.json

Insomnia is an http request tool - better than chrome

-----------------------------------------

REST - Representative State Transfer
- Use CRUD HTTP methods correctly!
GET -> Read info.
POST -> Create data. 
PUT -> Replace data. 
PATCH -> Update Data. 
DELETE -> Delete data.
- Statelessness - idempotency (all requests should be handled according to the same set of rules, in the same way)
- URLs -> resources at a specified address (sometimes with parameters on the end) (eg rooms/101/cats/oswald)
- Use parameters to denote individual resources
- Use queries to apply actions to your data (eg /rooms?sortby=age&order-desc)
- Use JSON or XML in req / res (XML is older & less popular)

-----------------------------------------

MVC - Model View Controller

Client
 |
 V
Request (URL/path, method,body)
 |
 V
Server entry point 
 |  [Routing]
 V
Controllers  <--->  Models
 |
 V
Response  <----->  Views
 |
 V
Client

(Controllers, models & shapes are all just functions)
