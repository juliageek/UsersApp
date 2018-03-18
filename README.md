# UsersApp
The initial requirement, using https://reqres.in as mock API.
Things that bothered me: 
1. lack of consistency between the schemas used for GET and POST. This proved very annoying because I faced the choice to write a model for each of the REST calls. I compromised and wrote one for the POST call and left the GET call with type <any>
2. lack of a complete set of CRUD operations on 1 schema.
  
