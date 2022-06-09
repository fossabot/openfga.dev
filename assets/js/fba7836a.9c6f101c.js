"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7626],{9406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(80566),s=n(65488),l=n(85162),p=["components"],c={title:"How to integrate within a framework",sidebar_position:5,slug:"/integration/framework"},u="How to integrate within a framework",d={unversionedId:"content/integration/framework",id:"content/integration/framework",title:"How to integrate within a framework",description:"This section will illustrate how to integrate  within a framework environment, such as Fastify or Fiber.",source:"@site/docs/content/integration/framework.mdx",sourceDirName:"content/integration",slug:"/integration/framework",permalink:"/integration/framework",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/integration/framework.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to integrate within a framework",sidebar_position:5,slug:"/integration/framework"},sidebar:"docs",previous:{title:"How to perform a check",permalink:"/integration/perform-check"},next:{title:"How to get tuple changes",permalink:"/integration/read-tuple-changes"}},m={},f=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Install and setup framework",id:"01-install-and-setup-framework",level:3},{value:"02. Authenticate and get user ID",id:"02-authenticate-and-get-user-id",level:3},{value:"03. Integrate the <ProductName format={ProductNameFormat.ShortForm}/> Check API into the service",id:"03-integrate-the--check-api-into-the-service",level:3},{value:"Related Sections",id:"related-sections",level:2}],h={toc:f};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-integrate-within-a-framework"},"How to integrate within a framework"),(0,i.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"This section will illustrate how to integrate ",(0,i.kt)(o.rZ,{format:o.v7.LongForm,mdxType:"ProductName"})," within a framework environment, such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/"},"Fiber"),"."),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:o.eU.JS_SDK,label:o.UB.get(o.eU.JS_SDK),mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(o.YY,{mdxType:"SdkSetupPrerequisite"})),(0,i.kt)("li",{parentName:"ol"},"You have ",(0,i.kt)("a",{parentName:"li",href:"/integration/install-sdk"},"installed the OpenFGA SDK"),"."),(0,i.kt)("li",{parentName:"ol"},"You have ",(0,i.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,i.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,i.kt)("a",{parentName:"li",href:"/integration/update-tuples"},"updated the ",(0,i.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,i.kt)("li",{parentName:"ol"},"You know how to ",(0,i.kt)("a",{parentName:"li",href:"/integration/perform-check"},"perform a Check"),"."),(0,i.kt)("li",{parentName:"ol"},"You have loaded ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_API_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," as environment variables."))),(0,i.kt)(l.Z,{value:o.eU.GO_SDK,label:o.UB.get(o.eU.GO_SDK),mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(o.YY,{mdxType:"SdkSetupPrerequisite"})),(0,i.kt)("li",{parentName:"ol"},"You have ",(0,i.kt)("a",{parentName:"li",href:"/integration/install-sdk"},"installed the OpenFGA SDK"),"."),(0,i.kt)("li",{parentName:"ol"},"You have ",(0,i.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,i.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,i.kt)("a",{parentName:"li",href:"/integration/update-tuples"},"updated the ",(0,i.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,i.kt)("li",{parentName:"ol"},"You know how to ",(0,i.kt)("a",{parentName:"li",href:"/integration/perform-check"},"perform a Check"),"."),(0,i.kt)("li",{parentName:"ol"},"You have loaded ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_API_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," as environment variables.")))),(0,i.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,i.kt)("p",null,"Assume that you want to have a web service for ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),"s using one of the frameworks mentioned above. The service will authenticate users via ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs/security/tokens/json-web-tokens"},"JWT tokens"),", which contain the user ID."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The reader should set up their own ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," method based on their OpenID connect provider's documentation."))),(0,i.kt)("p",null,"Assume that you want to provide a route ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /read/{document}")," to return documents depending on whether the authenticated user has access to it."),(0,i.kt)("h3",{id:"01-install-and-setup-framework"},"01. Install and setup framework"),(0,i.kt)("p",null,"The first step is to install the framework."),(0,i.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:o.eU.JS_SDK,label:o.UB.get(o.eU.JS_SDK),mdxType:"TabItem"},(0,i.kt)("p",null,"For the context of this example, we will use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify framework"),". For that we need to install the following packages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify"))," package that provides the framework itself"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," package that allows integrating plugins with Fastify"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-jwt"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-jwt"))," package for processing JWT tokens")),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.org"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install fastify fastify-plugin fastify-jwt\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add fastify fastify-plugin fastify-jwt\n")),(0,i.kt)("p",null,"Next, we setup the web service with the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /read/{document}")," route in file ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Require the framework and instantiate it\nconst fastify = require('fastify')({ logger: true });\n\n// Declare the route\nfastify.get('/read/:document', async (request, reply) => {\n  return { read: request.params.document };\n});\n\n// Run the server\nconst start = async () => {\n  try {\n    await fastify.listen(3000);\n  } catch (err) {\n    fastify.log.error(err);\n    process.exit(1);\n  }\n};\nstart();\n"))),(0,i.kt)(l.Z,{value:o.eU.GO_SDK,label:o.UB.get(o.eU.GO_SDK),mdxType:"TabItem"},(0,i.kt)("p",null,"For the context of this example, we will use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/"},"Fiber framework"),". For that we need to install the following Go packages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/"},(0,i.kt)("inlineCode",{parentName:"a"},"gofiber/fiber"))," package that provides the Fiber framework itself"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gofiber/jwt"},(0,i.kt)("inlineCode",{parentName:"a"},"gofiber/jwt"))," middleware authentication layer for JWT"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/golang-jwt/jwt"},(0,i.kt)("inlineCode",{parentName:"a"},"golang-jwt"))," package that provides Go support for JWT")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get -u github.com/gofiber/fiber/v2 github.com/gofiber/jwt/v3 github.com/golang-jwt/jwt/v4\n")),(0,i.kt)("p",null,"Next, we setup the web service with the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /read/{document}")," route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "github.com/gofiber/fiber/v2"\n\nfunc main() {\n  app := fiber.New()\n\n  app.Get("/read/:document", read)\n\n  app.Listen(":3000")\n}\n\nfunc read(c *fiber.Ctx) error {\n  return c.SendString(c.Params("document"))\n}\n')))),(0,i.kt)("h3",{id:"02-authenticate-and-get-user-id"},"02. Authenticate and get user ID"),(0,i.kt)("p",null,"Before we can call ",(0,i.kt)(o.rZ,{format:o.v7.LongForm,mdxType:"ProductName"})," to protect the ",(0,i.kt)("inlineCode",{parentName:"p"},"/read/{document}")," route, we need to validate the user's JWT."),(0,i.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:o.eU.JS_SDK,label:o.UB.get(o.eU.JS_SDK),mdxType:"TabItem"},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify-jwt")," package allows validation of JWT tokens, as well as providing access to the user's identity."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-authenticate.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fp = require('fastify-plugin');\n\nmodule.exports = fp(async function (fastify, opts) {\n  fastify.register(require('fastify-jwt'), {\n    secret: {\n      private: readFileSync(`${path.join(__dirname, 'certs')}/private.key`, 'utf8'),\n      public: readFileSync(`${path.join(__dirname, 'certs')}/public.key`, 'utf8'),\n    },\n    sign: { algorithm: 'RS256' },\n  });\n\n  fastify.decorate('authenticate', async function (request, reply) {\n    try {\n      await request.jwtVerify();\n    } catch (err) {\n      reply.send(err);\n    }\n  });\n});\n")),(0,i.kt)("p",null,"Then, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"preValidation")," hook of a route to protect it and access the user information inside the JWT:"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"route-read.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = async function (fastify, opts) {\n  fastify.get(\n    '/read/:document',\n    {\n      preValidation: [fastify.authenticate],\n    },\n    async function (request, reply) {\n      // the user's id is in request.user\n      return { read: request.params.document };\n    },\n  );\n};\n")),(0,i.kt)("p",null,"Finally, update ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js")," to register the newly added hooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fastify = require('fastify')({ logger: true });\nconst jwt-authenticate = require('./jwt-authenticate');\nconst routeread = require('./route-read');\n\nfastify.register(jwt-authenticate);\nfastify.register(routeread);\n\n// Run the server!\nconst start = async () => {\n  try {\n    await fastify.listen(3000);\n  } catch (err) {\n    fastify.log.error(err);\n    process.exit(1);\n  }\n}\nstart();\n\n"))),(0,i.kt)(l.Z,{value:o.eU.GO_SDK,label:o.UB.get(o.eU.GO_SDK),mdxType:"TabItem"},(0,i.kt)("p",null,"We will now setup middleware to authenticate the incoming JWTs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "crypto/rand"\n  "crypto/rsa"\n  "log"\n\n  "github.com/gofiber/fiber/v2"\n\n  jwtware "github.com/gofiber/jwt/v3"\n  "github.com/golang-jwt/jwt/v4"\n)\n\nvar (\n  // Do not do this in production.\n  // In production, you would have the private key and public key pair generated\n  // in advance. NEVER add a private key to any GitHub repo.\n  privateKey *rsa.PrivateKey\n)\n\nfunc main() {\n  app := fiber.New()\n\n  // Just as a demo, generate a new private/public key pair on each run.\n  rng := rand.Reader\n  var err error\n  privateKey, err = rsa.GenerateKey(rng, 2048)\n  if err != nil {\n    log.Fatalf("rsa.GenerateKey: %v", err)\n  }\n\n  // JWT Middleware\n  app.Use(jwtware.New(jwtware.Config{\n    SigningMethod: "RS256",\n    SigningKey:    privateKey.Public(),\n  }))\n\n  app.Get("/read/:document", read)\n\n  app.Listen(":3000")\n}\n\nfunc read(c *fiber.Ctx) error {\n  user := c.Locals("user").(*jwt.Token)\n  claims := user.Claims.(jwt.MapClaims)\n  name := claims["name"].(string)\n  return c.SendString(name + " read " + c.Params("document"))\n}\n')))),(0,i.kt)("h3",{id:"03-integrate-the--check-api-into-the-service"},"03. Integrate the ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Check API into the service"),(0,i.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:o.eU.JS_SDK,label:o.UB.get(o.eU.JS_SDK),mdxType:"TabItem"},(0,i.kt)("p",null,"First, we will create a decorator ",(0,i.kt)("inlineCode",{parentName:"p"},"preauthorize")," to parse the incoming HTTP method as well as name of the document, and set the appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"relation")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," that we will call Check on."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"preauthorize.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fp = require('fastify-plugin');\n\nmodule.exports = fp(async function (fastify, opts) {\n  fastify.decorate('preauthorize', async function (request, reply) {\n    try {\n      switch (request.method) {\n        case 'GET':\n          request.relation = 'reader';\n          break;\n        case 'POST':\n          request.relation = 'writer';\n          break;\n        case 'DELETE':\n        default:\n          request.relation = 'owner';\n          break;\n      }\n      request.object = `document:${request.params.document}`;\n    } catch (err) {\n      reply.send(err);\n    }\n  });\n});\n")),(0,i.kt)("p",null,"Next, we will create a decorator called ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize"),". This decorator will invoke the ",(0,i.kt)("a",{parentName:"p",href:"/integration/perform-check"},"Check API")," to see if the user has a relationship with the specified document."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fp = require('fastify-plugin');\nconst { OpenFgaApi } = require('@openfga/sdk'); // OR import { OpenFgaApi } from '@openfga/sdk';\n\nmodule.exports = fp(async function (fastify, opts) {\n  fastify.decorate('authorize', async function (request, reply) {\n    try {\n      // configure the openfga api client\n      const fgaClient = new OpenFgaApi({\n        storeId: process.env.FGA_STORE_ID,\n        apiHost: process.env.FGA_API_HOST,\n        apiToken: process.env.FGA_BEARER_TOKEN, // optional\n        apiTokenIssuer: process.env.FGA_API_ISSUER, // optional, required if client id is set\n        apiAudience: process.env.FGA_API_AUDIENCE, // optional, required if client id is set\n        clientId: process.env.FGA_CLIENT_ID, // optional, required if client secret is set\n        clientSecret: process.env.FGA_CLIENT_SECRET, // optional, required if client id is set\n      });\n      const { allowed } = await fgaClient.check({\n        tuple_key: {\n          user: request.user,\n          relation: request.relation,\n          object: request.object,\n        },\n      });\n      if (!allowed) {\n        reply.code(401).send(`Not authenticated`);\n      }\n    } catch (err) {\n      reply.send(err);\n    }\n  });\n});\n")),(0,i.kt)("p",null,"We can now update the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /read/{document}")," route to check for user permissions."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"route-read.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = async function (fastify, opts) {\n  fastify.get(\n    '/read/:document',\n    {\n      preValidation: [fastify.authenticate, fastify.preauthorize, fastify.authorize],\n    },\n    async function (request, reply) {\n      // the user's id is in request.user\n      return { read: request.params.document };\n    },\n  );\n};\n")),(0,i.kt)("p",null,"Finally, we will register the new hooks in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fastify = require('fastify')({ logger: true });\nconst jwt-authenticate = require('./jwt-authenticate');\nconst preauthorize = require('./preauthorize');\nconst authorize = require('./authorize');\nconst routeread = require('./route-read');\n\nfastify.register(jwt-authenticate);\nfastify.register(preauthorize);\nfastify.register(authorize);\nfastify.register(routeread);\n\nconst start = async () => {\n  try {\n    await fastify.listen(3000);\n  } catch (err) {\n    fastify.log.error(err);\n    process.exit(1);\n  }\n}\nstart();\n"))),(0,i.kt)(l.Z,{value:o.eU.GO_SDK,label:o.UB.get(o.eU.GO_SDK),mdxType:"TabItem"},(0,i.kt)("p",null,"We will create two middlewares:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preauthorize")," will parse the user's JWT and prepare variables needed to call Check API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"checkAuthorization")," will call the ",(0,i.kt)("a",{parentName:"li",href:"/integration/perform-check"},(0,i.kt)("inlineCode",{parentName:"a"},"Check API"))," to see if the user has a relationship with the specified document.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "context"\n  "crypto/rand"\n  "crypto/rsa"\n  "log"\n  "os"\n\n  "github.com/gofiber/fiber/v2"\n\n  jwtware "github.com/gofiber/jwt/v3"\n  "github.com/golang-jwt/jwt/v4"\n  fgaSdk "github.com/openfga/go-sdk"\n)\n\nvar (\n  // Do not do this in production.\n  // In production, you would have the private key and public key pair generated\n  // in advance. NEVER add a private key to any GitHub repo.\n  privateKey *rsa.PrivateKey\n)\n\nfunc main() {\n  app := fiber.New()\n\n  // Just as a demo, generate a new private/public key pair on each run.\n  rng := rand.Reader\n  var err error\n  privateKey, err = rsa.GenerateKey(rng, 2048)\n  if err != nil {\n    log.Fatalf("rsa.GenerateKey: %v", err)\n  }\n\n  // JWT Middleware\n  app.Use(jwtware.New(jwtware.Config{\n    SigningMethod: "RS256",\n    SigningKey:    privateKey.Public(),\n  }))\n\n  app.Use("/read/:document", preauthorize)\n\n  app.Use(checkAuthorization)\n\n  app.Get("/read/:document", read)\n\n  app.Listen(":3000")\n}\n\nfunc read(c *fiber.Ctx) error {\n  user := c.Locals("user").(*jwt.Token)\n  claims := user.Claims.(jwt.MapClaims)\n  name := claims["name"].(string)\n  return c.SendString(name + " read " + c.Params("document"))\n}\n\nfunc preauthorize(c *fiber.Ctx) error {\n  // get the user name from JWT\n  user := c.Locals("user").(*jwt.Token)\n  claims := user.Claims.(jwt.MapClaims)\n  name := claims["name"].(string)\n  c.Locals("username", name)\n\n  // parse the HTTP method\n  switch (c.Method()) {\n    case "GET":\n      c.Locals("relation", "reader")\n    case "POST":\n      c.Locals("relation", "writer")\n    case "DELETE":\n      c.Locals("relation", "owner")\n    default:\n      c.Locals("relation", "owner")\n  }\n\n  // get the object name and prepend with type name "document:"\n  c.Locals("object", "document:" + c.Params("document"))\n  return c.Next()\n}\n\n// Middleware to check whether user is authorized to access document\nfunc checkAuthorization(c *fiber.Ctx) error {\n  configuration, err := fgaSdk.NewConfiguration(fgaSdk.UserConfiguration{\n    ApiScheme:      os.Getenv("FGA_API_SCHEME"), // Optional, either "http" or "https"\n    ApiHost:        os.Getenv("FGA_API_HOST"),\n    StoreId:        os.Getenv("FGA_STORE_ID"),\n    BearerToken:    os.Getenv("FGA_BEARER_TOKEN"), // optional\n    ApiTokenIssuer: os.Getenv("FGA_API_TOKEN_ISSUER"), // optional, required if client id is set\n    ApiAudience:    os.Getenv("FGA_API_AUDIENCE"), // optional, required if client id is set\n    ClientId:       os.Getenv("FGA_CLIENT_ID"), // optional\n    ClientSecret:   os.Getenv("FGA_CLIENT_SECRET"), // optional, required if client id is set\n  })\n\n  if err != nil {\n    return fiber.NewError(fiber.StatusServiceUnavailable, "Unable to build OpenFGA client")\n  }\n\n  fgaClient := fgaSdk.NewAPIClient(configuration)\n\n  body := fgaSdk.CheckRequest{\n    TupleKey: &fgaSdk.TupleKey{\n      User: fgaSdk.PtrString(c.Locals("username").(string)),\n      Relation: fgaSdk.PtrString(c.Locals("relation").(string)),\n      Object: fgaSdk.PtrString(c.Locals("object").(string)),\n    },\n  }\n  data, _, err := fgaClient.OpenFga.Check(context.Background()).Body(body).Execute()\n\n  if err != nil {\n    return fiber.NewError(fiber.StatusServiceUnavailable, "Unable to check for authorization")\n  }\n\n  if !(*data.Allowed) {\n    return fiber.NewError(fiber.StatusUnauthorized, "Unauthorized to access document")\n  }\n\n  // Go to the next middleware\n  return c.Next()\n}\n')))),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(o.$q,{description:"Take a look at the following sections for examples that you can try when integrating with SDK.",relatedLinks:[{title:"Entitlements",description:"Modeling Entitlements for a System in {ProductName}.",link:"/modeling/advanced/patterns/entitlements"},{title:"IoT",description:"Modeling Fine Grained Authorization for an IoT Security Camera System with {ProductName}.",link:"/modeling/advanced/use-cases/iot"},{title:"Slack",description:"Modeling Authorization for Slack with {ProductName}.",link:"/modeling/advanced/use-cases/slack"}],mdxType:"RelatedSection"}))}k.isMDXComponent=!0}}]);