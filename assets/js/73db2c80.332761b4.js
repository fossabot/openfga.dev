"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9302],{31527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),r=a(5270);const o={title:"Relationship Queries: Check, Read, Expand, and ListObjects",sidebar_position:6,slug:"/interacting/relationship-queries",description:"An overview of how to use the Check, Read, Expand, and ListObject APIs"},l="Relationship Queries: Check, Read, Expand, and ListObjects",s={unversionedId:"content/interacting/relationship-queries",id:"content/interacting/relationship-queries",title:"Relationship Queries: Check, Read, Expand, and ListObjects",description:"An overview of how to use the Check, Read, Expand, and ListObject APIs",source:"@site/docs/content/interacting/relationship-queries.mdx",sourceDirName:"content/interacting",slug:"/interacting/relationship-queries",permalink:"/docs/interacting/relationship-queries",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/relationship-queries.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Relationship Queries: Check, Read, Expand, and ListObjects",sidebar_position:6,slug:"/interacting/relationship-queries",description:"An overview of how to use the Check, Read, Expand, and ListObject APIs"},sidebar:"docs",previous:{title:"Transactional Writes",permalink:"/docs/interacting/transactional-writes"},next:{title:"How to get tuple changes",permalink:"/docs/interacting/read-tuple-changes"}},p={},u=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Check",id:"check",level:2},{value:"What Is It For?",id:"what-is-it-for",level:3},{value:"When To Use?",id:"when-to-use",level:3},{value:"Caveats And When Not To Use It",id:"caveats-and-when-not-to-use-it",level:3},{value:"Read",id:"read",level:2},{value:"What Is It For?",id:"what-is-it-for-1",level:3},{value:"When To Use?",id:"when-to-use-1",level:3},{value:"1. A Particular User To Any Objects Of A Specific Type With A Particular Relation",id:"1-a-particular-user-to-any-objects-of-a-specific-type-with-a-particular-relation",level:4},{value:"2. A Particular User To Any Objects Of A Specific Type With Any Relation",id:"2-a-particular-user-to-any-objects-of-a-specific-type-with-any-relation",level:4},{value:"3. A Particular Object To Any User With A Particular Relation",id:"3-a-particular-object-to-any-user-with-a-particular-relation",level:4},{value:"Caveats And When Not To Use It",id:"caveats-and-when-not-to-use-it-1",level:3},{value:"Expand",id:"expand",level:2},{value:"What Is It For?",id:"what-is-it-for-2",level:3},{value:"When To Use?",id:"when-to-use-2",level:3},{value:"Caveats And When Not To Use It",id:"caveats-and-when-not-to-use-it-2",level:3},{value:"ListObjects",id:"listobjects",level:2},{value:"What Is It For?",id:"what-is-it-for-3",level:3},{value:"When To Use?",id:"when-to-use-3",level:3},{value:"Caveats And When Not To Use It",id:"caveats-and-when-not-to-use-it-3",level:3},{value:"Summary",id:"summary",level:2},{value:"Related Sections",id:"related-sections",level:2}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"relationship-queries-check-read-expand-and-listobjects"},"Relationship Queries: Check, Read, Expand, and ListObjects"),(0,n.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,n.kt)("p",null,"In this guide you will learn the uses of and limitations for the Check, Read, Expand, and ListObjects API endpoints."),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,n.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("p",null,"Assume that you have the following ",(0,n.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,n.kt)("br",null),"\nYou have a ",(0,n.kt)(r.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,n.kt)("inlineCode",{parentName:"p"},"document")," that can have a ",(0,n.kt)("inlineCode",{parentName:"p"},"reader"),"\nand ",(0,n.kt)("inlineCode",{parentName:"p"},"writer"),". All writers are readers. ",(0,n.kt)("inlineCode",{parentName:"p"},"bob")," has a ",(0,n.kt)("inlineCode",{parentName:"p"},"writer")," relationship with ",(0,n.kt)("inlineCode",{parentName:"p"},"document:planning"),".")),(0,n.kt)(r.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{writer:{this:{}},reader:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"writer"}}]}}},metadata:{relations:{writer:{directly_related_user_types:[{type:"user"}]},reader:{directly_related_user_types:[{type:"user"}]}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,n.kt)(r.Wz,{relationshipTuples:[{_description:"Bob has writer relationship with planning document",user:"user:bob",relation:"writer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In addition, you will need to know the following:"),(0,n.kt)("h3",{id:"direct-access"},"Direct Access"),(0,n.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,n.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,n.kt)("h3",{id:"-concepts"},(0,n.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,n.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})))),(0,n.kt)("h2",{id:"check"},"Check"),(0,n.kt)("h3",{id:"what-is-it-for"},"What Is It For?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/api/service#Relationship%20Queries/Check"},"Check API")," is an API endpoint that returns whether the user has a certain relationship with an object. ",(0,n.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will resolve all prerequisite relationships to establish whether a relationship exists."),(0,n.kt)("h3",{id:"when-to-use"},"When To Use?"),(0,n.kt)("p",null,"Check can be called if you need to establish whether a particular user has a specific relationship with a particular object."),(0,n.kt)("p",null,"For example, you can call check to determine whether ",(0,n.kt)("inlineCode",{parentName:"p"},"bob")," has a ",(0,n.kt)("inlineCode",{parentName:"p"},"reader")," relationship with ",(0,n.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,n.kt)(r.uT,{user:"user:bob",relation:"reader",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,n.kt)("p",null,"The ",(0,n.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," API will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," because there is an implied relationship as"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"every ",(0,n.kt)("inlineCode",{parentName:"li"},"writer")," is also a ",(0,n.kt)("inlineCode",{parentName:"li"},"reader")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bob")," is a ",(0,n.kt)("inlineCode",{parentName:"li"},"writer")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"document:planning"))),(0,n.kt)("h3",{id:"caveats-and-when-not-to-use-it"},"Caveats And When Not To Use It"),(0,n.kt)("p",null,'Check is designed to answer the question "Does user:X have relationship Y with object:Z?". It is ',(0,n.kt)("em",{parentName:"p"},"not")," designed to answer the following questions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Who has relationship Y with object:Z?"'),(0,n.kt)("li",{parentName:"ul"},'"What are the objects that userX has relationship Y with?"'),(0,n.kt)("li",{parentName:"ul"},'"Why does user:X have relationship Y with object:Z?"')),(0,n.kt)("h2",{id:"read"},"Read"),(0,n.kt)("h3",{id:"what-is-it-for-1"},"What Is It For?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/api/service#Relationship%20Tuples/Read"},"Read API")," is an API endpoint that returns the relationship tuples that are stored in the system that satisfy a query."),(0,n.kt)("h3",{id:"when-to-use-1"},"When To Use?"),(0,n.kt)("p",null,"Read can be called if you need to get all the stored relationship tuples that relate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#1-a-particular-user-to-any-objects-of-a-specific-type-with-a-particular-relation"},"a particular user to any objects of a specific type with a particular relation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#2-a-particular-user-to-any-objects-of-a-specific-type-with-any-relation"},"a particular user to any objects of a specific type with any relation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#3-a-particular-object-to-any-user-with-a-particular-relation"},"a particular object to any user with a particular relation"))),(0,n.kt)("h4",{id:"1-a-particular-user-to-any-objects-of-a-specific-type-with-a-particular-relation"},"1. A Particular User To Any Objects Of A Specific Type With A Particular Relation"),(0,n.kt)("p",null,"For example, to query all the stored relationship tuples ",(0,n.kt)("inlineCode",{parentName:"p"},"bob")," has a ",(0,n.kt)("inlineCode",{parentName:"p"},"writer")," relationship with, one can ask"),(0,n.kt)(r.Nq,{user:"user:bob",relation:"writer",object:"document:",tuples:[{user:"user:bob",relation:"writer",object:"document:planning"}],mdxType:"ReadRequestViewer"}),(0,n.kt)("h4",{id:"2-a-particular-user-to-any-objects-of-a-specific-type-with-any-relation"},"2. A Particular User To Any Objects Of A Specific Type With Any Relation"),(0,n.kt)("p",null,"For example, to query all the stored relationship tuples in which ",(0,n.kt)("inlineCode",{parentName:"p"},"bob")," is related to objects of type ",(0,n.kt)("inlineCode",{parentName:"p"},"document")," as any relation, one can issue the following call:"),(0,n.kt)(r.Nq,{user:"user:bob",object:"document:",tuples:[{user:"user:bob",relation:"writer",object:"document:planning"}],mdxType:"ReadRequestViewer"}),(0,n.kt)("h4",{id:"3-a-particular-object-to-any-user-with-a-particular-relation"},"3. A Particular Object To Any User With A Particular Relation"),(0,n.kt)("p",null,"For example, to query all the stored relationship tuples in which any user is related to ",(0,n.kt)("inlineCode",{parentName:"p"},"document:planning")," as a ",(0,n.kt)("inlineCode",{parentName:"p"},"writer"),", one can issue the following call:"),(0,n.kt)(r.Nq,{relation:"writer",object:"document:planning",tuples:[{user:"user:bob",relation:"writer",object:"document:planning"}],mdxType:"ReadRequestViewer"}),(0,n.kt)("h3",{id:"caveats-and-when-not-to-use-it-1"},"Caveats And When Not To Use It"),(0,n.kt)("p",null,"The Read API will only return all the stored relationships that match the query specification.\nIt does not expand or traverse the graph by taking the authorization model into account."),(0,n.kt)("p",null,"For example, if you specify that ",(0,n.kt)("inlineCode",{parentName:"p"},"writers")," are ",(0,n.kt)("inlineCode",{parentName:"p"},"viewers")," in the authorization model, the Read API will ignore that and it will return tuples where a user is a ",(0,n.kt)("inlineCode",{parentName:"p"},"viewer")," if and only if the ",(0,n.kt)("inlineCode",{parentName:"p"},'(user_id, "viewer", object_type:object_id)')," relationship tuple exists in the system."),(0,n.kt)("p",null,"In the following case, although all ",(0,n.kt)("inlineCode",{parentName:"p"},"writers")," have reader ",(0,n.kt)("inlineCode",{parentName:"p"},"relationships")," for document objects and ",(0,n.kt)("inlineCode",{parentName:"p"},"bob")," is a ",(0,n.kt)("inlineCode",{parentName:"p"},"writer")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"document:planning"),", if you query for all objects that ",(0,n.kt)("inlineCode",{parentName:"p"},"bob")," has ",(0,n.kt)("inlineCode",{parentName:"p"},"reader")," relationships, it will not return ",(0,n.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,n.kt)(r.Nq,{user:"user:bob",relation:"reader",object:"document:",tuples:[],mdxType:"ReadRequestViewer"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Although bob is a writer to document:planning and every writer is also a reader, the Read API will return an empty list because there are no stored relationship tuples that relate bob to document:planning as reader.")),(0,n.kt)("h2",{id:"expand"},"Expand"),(0,n.kt)("h3",{id:"what-is-it-for-2"},"What Is It For?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/api/service#/Relationship%20Queries/Expand"},"Expand API")," returns all users (including users and usersets) that have a specific relationship with an object.\nThe response is represented as a tree of users or usersets. To build the full graph of access, you would need to recursively call expand on the leaves returned from the previous expand call."),(0,n.kt)("h3",{id:"when-to-use-2"},"When To Use?"),(0,n.kt)("p",null,"Expand is used for debugging and to understand why a user has a particular relationship with a specific object."),(0,n.kt)("p",null,"For example, to understand why ",(0,n.kt)("inlineCode",{parentName:"p"},"bob")," can have a ",(0,n.kt)("inlineCode",{parentName:"p"},"reader")," relationship with ",(0,n.kt)("inlineCode",{parentName:"p"},"document:planning"),", one could first call"),(0,n.kt)(r.s0,{relation:"reader",object:"document:planning",mdxType:"ExpandRequestViewer"}),(0,n.kt)("p",null,"The result of this call will be like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "tree":{\n    "root":{\n      "type":"document:planning#reader",\n        "leaf":{\n          "computed":{\n            "userset":"document:planning#writer"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,n.kt)("p",null,"The returned tree will contain ",(0,n.kt)("inlineCode",{parentName:"p"},"writer"),", for which we will call"),(0,n.kt)(r.s0,{relation:"writer",object:"document:planning",mdxType:"ExpandRequestViewer"}),(0,n.kt)("p",null,"The result of this call will be like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "tree":{\n    "root":{\n      "type":"document:planning#writer",\n        "leaf":{\n          "users":{\n            "users":[\n              "user:bob"\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,n.kt)("p",null,"From there, we will learn that"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"those related to ",(0,n.kt)("inlineCode",{parentName:"li"},"document:planning")," as ",(0,n.kt)("inlineCode",{parentName:"li"},"reader")," are all those who are related to that document as ",(0,n.kt)("inlineCode",{parentName:"li"},"writer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bob")," is related to ",(0,n.kt)("inlineCode",{parentName:"li"},"document:planning")," as ",(0,n.kt)("inlineCode",{parentName:"li"},"writer"))),(0,n.kt)("h3",{id:"caveats-and-when-not-to-use-it-2"},"Caveats And When Not To Use It"),(0,n.kt)("p",null,"The Expand call is expensive and has high latency. As such, it is designed to be used for debugging and understanding why a user has a particular relationship with a specific object. It is not designed for checking whether a user has a particular relationship with a specific object. In that case the Check API call should be used instead."),(0,n.kt)("h2",{id:"listobjects"},"ListObjects"),(0,n.kt)("h3",{id:"what-is-it-for-3"},"What Is It For?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/api/service#/Relationship%20Queries/ListObjects"},"ListObjects API")," is an API endpoint that returns the list of all the object IDs of a particular type that a specific user has a specific relationship with."),(0,n.kt)("p",null,"It provides a solution to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/interacting/search-with-permissions#option-3-build-a-list-of-ids-then-search"},"Search with Permissions (Option 3)")," use case for access-aware filtering on small object collections."),(0,n.kt)("admonition",{title:"Note",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The current implementation of List Objects API is not optimized and can return incomplete results. ",(0,n.kt)("a",{parentName:"p",href:"/docs/interacting/relationship-queries#caveats-and-when-not-to-use-it-3"},"See below")," for more details.")),(0,n.kt)("h3",{id:"when-to-use-3"},"When To Use?"),(0,n.kt)("p",null,"Use the ListObjects API to get what objects a user can see based on the relationships they have. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/interacting/search-with-permissions"},"Search with Permissions")," for more guidance."),(0,n.kt)(r.wA,{authorizationModelId:"1uHxCSuTP0VKPYSnkq1pbb1jeZw",objectType:"document",relation:"reader",user:"user:bob",contextualTuples:[{object:"document:otherdoc",relation:"reader",user:"user:bob"}],expectedResults:["document:otherdoc","document:planning"],mdxType:"ListObjectsRequestViewer"}),(0,n.kt)("p",null,"There's two variations of the List Objects API."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/api/service#Relationship%20Queries/ListObjects"},"standard version"),", which waits until all results are ready and sends them in one response."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/api/service#Relationship%20Queries/StreamedListObjects"},"streaming version"),", which should be used if you want the individual results as soon as they become available.")),(0,n.kt)("h3",{id:"caveats-and-when-not-to-use-it-3"},"Caveats And When Not To Use It"),(0,n.kt)("p",null,"The number of results returned by this API (both the standard and streaming version) may be incomplete depending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"listObjectsDeadline")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"listObjectsMaxResults")," configuration values (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/setup-openfga#configuring-the-server"},"Configuring the Server"),") provided to the ",(0,n.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," server at startup. If you configure both values, the first one to be satisfied will terminate the request."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you set ",(0,n.kt)("inlineCode",{parentName:"li"},"listObjectsDeadline")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"1s"),", the server will spend at most 1 second finding results."),(0,n.kt)("li",{parentName:"ul"},"If you set ",(0,n.kt)("inlineCode",{parentName:"li"},"listObjectsMaxResults")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"10"),", the server will return, at most, 10 object IDs.")),(0,n.kt)("p",null,"Internally, the API runs concurrent checks against all the objects of the specified type. If the number of objects of that type is high, you should set a high value for ",(0,n.kt)("inlineCode",{parentName:"p"},"listObjectsDeadline"),". If the number of objects of that type the user could have access to is high, you should set a high value for ",(0,n.kt)("inlineCode",{parentName:"p"},"listObjectsMaxResults"),"."),(0,n.kt)("admonition",{title:"Warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This API is provided to gather your feedback. Due to performance and high-latency considerations, we do not recommend using it in production yet.")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Check"),(0,n.kt)("th",{parentName:"tr",align:null},"Read"),(0,n.kt)("th",{parentName:"tr",align:null},"Expand"),(0,n.kt)("th",{parentName:"tr",align:null},"ListObjects"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,n.kt)("td",{parentName:"tr",align:null},"Check if user has particular relationship with certain object"),(0,n.kt)("td",{parentName:"tr",align:null},"Return all stored relationship tuples that match query"),(0,n.kt)("td",{parentName:"tr",align:null},"Expand the specific relationship on a particular object"),(0,n.kt)("td",{parentName:"tr",align:null},"List all objects of a particular type that a user has a specific relationship with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"When to use"),(0,n.kt)("td",{parentName:"tr",align:null},"Validate if user X can perform Y on object Z"),(0,n.kt)("td",{parentName:"tr",align:null},"List stored relationships in system"),(0,n.kt)("td",{parentName:"tr",align:null},"Understand why user X can perform Y on object Z"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter the objects a user has access to")))),(0,n.kt)("h2",{id:"related-sections"},"Related Sections"),(0,n.kt)(r.$q,{description:"Check out this additional content for more information on how to query relationships.",relatedLinks:[{title:"Check API Reference",description:"Official reference guide for the Check API",link:"/api/service#Relationship%20Queries/Check"},{title:"Read API Reference",description:"Official reference guide for the Read API",link:"/api/service#Relationship%20Tuples/Read"},{title:"Expand API Reference",description:"Official reference guide for the Expand API",link:"/api/service#Relationship%20Queries/Expand"},{title:"ListObjects API Reference",description:"Official reference guide for the ListObjects API",link:"/api/service#Relationship%20Queries/ListObjects"}],mdxType:"RelatedSection"}))}c.isMDXComponent=!0}}]);