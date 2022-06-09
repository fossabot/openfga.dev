"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5007],{75985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=n(80566),l=["components"],s={sidebar_position:9,slug:"/modeling/basics/multiple-restrictions"},d="Modeling with Multiple Restrictions",c={unversionedId:"content/modeling/basics/multiple-restrictions",id:"content/modeling/basics/multiple-restrictions",title:"Modeling with Multiple Restrictions",description:"In this guide we are going to model requiring multiple authorizations before allowing users to perform actions on particular objects using .",source:"@site/docs/content/modeling/basics/multiple-restrictions.mdx",sourceDirName:"content/modeling/basics",slug:"/modeling/basics/multiple-restrictions",permalink:"/modeling/basics/multiple-restrictions",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/basics/multiple-restrictions.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/modeling/basics/multiple-restrictions"},sidebar:"docs",previous:{title:"Modeling Public Access",permalink:"/modeling/basics/public-access"},next:{title:"Modeling Custom Roles",permalink:"/modeling/basics/custom-roles"}},p={},m=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling Parent-Child Objects",id:"modeling-parent-child-objects",level:3},{value:"Modeling Roles and Permissions",id:"modeling-roles-and-permissions",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm} /> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Add can_delete relation to only allow writers that are members of the ownership organization",id:"01-add-can_delete-relation-to-only-allow-writers-that-are-members-of-the-ownership-organization",level:3},{value:"02. Verify that our solutions work",id:"02-verify-that-our-solutions-work",level:3},{value:"Related Sections",id:"related-sections",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modeling-with-multiple-restrictions"},"Modeling with Multiple Restrictions"),(0,a.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,a.kt)("p",null,"In this guide we are going to model requiring multiple authorizations before allowing users to perform actions on particular objects using ",(0,a.kt)(r.rZ,{format:r.v7.ProductLink,mdxType:"ProductName"}),".\nFor example, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-a-user",linkName:"users",mdxType:"ProductConcept"}))," are allowed to delete a ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," if both of these conditions are met:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"they are a member of the organization that owns the document"),(0,a.kt)("li",{parentName:"ul"},"they have writer permissions on the document")),(0,a.kt)("p",null,"In this way, we prevent other users from deleting such document."),(0,a.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,a.kt)("div",null,(0,a.kt)("p",null,"This is useful when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Limiting certain actions (such as deleting or reading sensitive document) to privileged users."),(0,a.kt)("li",{parentName:"ul"},"Adding restrictions and requiring multiple authorization paths before granting access."))),mdxType:"CardBox"}),(0,a.kt)("h2",{id:"before-you-start"},"Before you start"),(0,a.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,a.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("p",null,"You will start with the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}))," below,\nit represents a ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"}))," that can have users\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-a-relation",linkName:"related",mdxType:"ProductConcept"}))," as ",(0,a.kt)("inlineCode",{parentName:"p"},"writer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"organizations")," related as ",(0,a.kt)("inlineCode",{parentName:"p"},"owner"),".\nDocument's ",(0,a.kt)("inlineCode",{parentName:"p"},"can_write")," relation is based on whether user is a writer to the document. The ",(0,a.kt)("inlineCode",{parentName:"p"},"organization")," type can have users related as ",(0,a.kt)("inlineCode",{parentName:"p"},"member"),"."),(0,a.kt)("p",null,"Let us also assume that we have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),' called "planning" owned by the ABC ',(0,a.kt)("inlineCode",{parentName:"li"},"organization"),"."),(0,a.kt)("li",{parentName:"ul"},"Becky is a member of the ABC ",(0,a.kt)("inlineCode",{parentName:"li"},"organization"),"."),(0,a.kt)("li",{parentName:"ul"},"Carl is a member of the XYZ ",(0,a.kt)("inlineCode",{parentName:"li"},"organization"),"."),(0,a.kt)("li",{parentName:"ul"},"Becky and Carl both have ",(0,a.kt)("inlineCode",{parentName:"li"},"writer"),' access to the "planning" ',(0,a.kt)("inlineCode",{parentName:"li"},"document"),"."))),(0,a.kt)(r.lG,{configuration:{type_definitions:[{type:"document",relations:{owner:{this:{}},writer:{this:{}},can_write:{computedUserset:{object:"",relation:"writer"}}}},{type:"organization",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("p",null,"The current state of the system is represented by the following relationship tuples being in the system already:"),(0,a.kt)(r.Wz,{relationshipTuples:[{_description:"organization ABC is the owner of planning document",user:"organization:ABC",relation:"owner",object:"document:planning"},{_description:"Becky is a writer to the planning document",user:"becky",relation:"writer",object:"document:planning"},{_description:"Carl is a writer to the planning document",user:"carl",relation:"writer",object:"document:planning"},{_description:"Becky is a member of the organization ABC",user:"becky",relation:"member",object:"organization:ABC"},{_description:"Carl is a member of the organization XYZ",user:"carl",relation:"member",object:"organization:XYZ"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that we assign the organization, not the organization's members, as owner to the planning document."))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In addition, you will need to know the following:"),(0,a.kt)("h3",{id:"modeling-parent-child-objects"},"Modeling Parent-Child Objects"),(0,a.kt)("p",null,"You need to know how to model access based on parent-child relationships, e.g.: folders and documents. ",(0,a.kt)("a",{parentName:"p",href:"/modeling/basics/parent-child"},"Learn more \u2192")),(0,a.kt)("h3",{id:"modeling-roles-and-permissions"},"Modeling Roles and Permissions"),(0,a.kt)("p",null,"You need to know how to model roles for users at the object level and model permissions for those roles. ",(0,a.kt)("a",{parentName:"p",href:"/modeling/basics/roles-and-permissions"},"Learn more \u2192")),(0,a.kt)("h3",{id:"-concepts"},(0,a.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,a.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modeling/configuration-language#the-intersection-operator"},"Intersection Operator"),": the intersection operator can be used to indicate a relationship exists if the user is in all the sets of users"))),(0,a.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,a.kt)("p",null,"With the above authorization model and relationship tuples, ",(0,a.kt)(r.rZ,{format:r.v7.LongForm,mdxType:"ProductName"})," will correctly respond with ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed":true}')," when ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})),"is called to see if Carl and Becky can write this ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,a.kt)("p",null,"We can verify that by issuing two check requests:"),(0,a.kt)(r.uT,{user:"becky",relation:"can_write",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)(r.uT,{user:"carl",relation:"can_write",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"What we would like to do is offer a way so that a document can be written by Becky and Carl, but only writers who are also members of the organization that owns the document can remove it."),(0,a.kt)("p",null,"To do this, we need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#01-add-can_delete-relation-to-only-allow-writers-that-are-members-of-the-ownership-organization"},"Add can_delete relation to only allow writers that are members of the ownership organization")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#02-verify-that-our-solutions-work"},"Verify that our solutions work"))),(0,a.kt)("h3",{id:"01-add-can_delete-relation-to-only-allow-writers-that-are-members-of-the-ownership-organization"},"01. Add can_delete relation to only allow writers that are members of the ownership organization"),(0,a.kt)("p",null,"The first step is to add the relation definition for ",(0,a.kt)("inlineCode",{parentName:"p"},"can_delete")," so that it requires users to be both ",(0,a.kt)("inlineCode",{parentName:"p"},"writer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"member")," of the owner. This is accomplished via the keyword ",(0,a.kt)("a",{parentName:"p",href:"/modeling/configuration-language#the-intersection-operator"},(0,a.kt)("inlineCode",{parentName:"a"},"and")),"."),(0,a.kt)(r.lG,{configuration:{type_definitions:[{type:"document",relations:{owner:{this:{}},writer:{this:{}},can_write:{computedUserset:{object:"",relation:"writer"}},can_delete:{intersection:{child:[{computedUserset:{object:"",relation:"writer"}},{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"member"}}}]}}}},{type:"organization",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("h3",{id:"02-verify-that-our-solutions-work"},"02. Verify that our solutions work"),(0,a.kt)("p",null,"To verify that our solutions work, we need to check that Becky can delete the planning document because she is a writer AND she is a member of organization:ABC that owns the planning document."),(0,a.kt)(r.uT,{user:"becky",relation:"can_delete",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"However, Carl cannot delete the planning document because although he is a writer, Carl is not a member of organization:ABC that owns the planning document."),(0,a.kt)(r.uT,{user:"carl",relation:"can_delete",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,a.kt)("h2",{id:"related-sections"},"Related Sections"),(0,a.kt)(r.$q,{description:"Check the following sections for more on how to model privileged access.",relatedLinks:[{title:"Modeling: User Groups",description:"Learn about how to add group members.",link:"/modeling/basics/user-groups",id:"../user-groups"},{title:"Modeling: Blocklists",description:"Learn about how to set block lists.",link:"/modeling/basics/blocklists",id:"../blocklists"},{title:"Modeling: Public Access",description:"Learn about model public access.",link:"/modeling/basics/public-access",id:"./public-access"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);