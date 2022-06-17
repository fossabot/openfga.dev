"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[265],{51376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return m}});var a,o=n(87462),s=n(63366),l=(n(67294),n(3905)),r=n(80966),i=n(65488),p=n(85162),d=["components"],u={title:"Install SDK Client",sidebar_position:2,slug:"/getting-started/install-sdk"},c="Install SDK Client",g={unversionedId:"content/getting-started/install-sdk",id:"content/getting-started/install-sdk",title:"Install SDK Client",description:"To get started, install the  SDK packages.",source:"@site/docs/content/getting-started/install-sdk.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/install-sdk",permalink:"/docs/getting-started/install-sdk",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/install-sdk.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install SDK Client",sidebar_position:2,slug:"/getting-started/install-sdk"},sidebar:"docs",previous:{title:"Setup OpenFGA Server",permalink:"/docs/getting-started/setup-openfga"},next:{title:"Create a Store",permalink:"/docs/getting-started/create-store"}},k={},m=[{value:"Related Sections",id:"related-sections",level:2}],h=(a="ProductConcept",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:m};function N(e){var t=e.components,n=(0,s.Z)(e,d);return(0,l.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-sdk-client"},"Install SDK Client"),(0,l.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,l.kt)("p",null,"To get started, install the ",(0,l.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," SDK packages."),(0,l.kt)(i.Z,{groupId:"languages",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:r.eU.JS_SDK,label:r.UB.get(r.eU.JS_SDK),mdxType:"TabItem"},(0,l.kt)("p",null,"You can find the Node.js package on npm at: ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfga/sdk"},"@openfga/sdk"),"."),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @openfga/sdk\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @openfga/sdk\n"))),(0,l.kt)(p.Z,{value:r.eU.GO_SDK,label:r.UB.get(r.eU.GO_SDK),mdxType:"TabItem"},(0,l.kt)("p",null,"You can find the Go package on GitHub at: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openfga/go-sdk"},"@openfga/go-sdk"),"."),(0,l.kt)("p",null,"To install:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"go get -u github.com/openfga/go-sdk\n")),(0,l.kt)("p",null,"In your code, import the module and use it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  fgaSdk "github.com/openfga/go-sdk"\n)\n\nfunc main() {\n    configuration, err := fgaSdk.NewConfiguration(fgaSdk.UserConfiguration{})\n}\n')),(0,l.kt)("p",null,"You can then run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"go mod tidy\n")),(0,l.kt)("p",null,"to update ",(0,l.kt)("inlineCode",{parentName:"p"},"go.mod")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"go.sum")," if you are using them.")),(0,l.kt)(p.Z,{value:r.eU.DOTNET_SDK,label:r.UB.get(r.eU.DOTNET_SDK),mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," .NET SDK is available on ",(0,l.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/OpenFga.Sdk"},"NuGet"),"."),(0,l.kt)("p",null,"You can install it using:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-dotnet-cli"},"dotnet CLI"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet add package OpenFGA.Sdk\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell"},"Package Manager Console")," inside Visual Studio:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Package OpenFGA.Sdk\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"},"Visual Studio"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough"},"Visual Studio for Mac")," and ",(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/rider/Using_NuGet.html"},"IntelliJ Rider"),": Search for and install ",(0,l.kt)("inlineCode",{parentName:"li"},"OpenFGA.Sdk")," in each of their respective package manager UIs.")))),(0,l.kt)(h,{section:"what-is-a-check-request",linkName:"check API",mdxType:"ProductConcept"}),(0,l.kt)("h2",{id:"related-sections"},"Related Sections"),(0,l.kt)(r.$q,{description:"Get {ProductName}'s SDKs to add authorization to your API.",relatedLinks:[{title:"{ProductName} Node.js SDK",description:"Install our Node.js & JavaScript SDK to get started.",link:"https://www.npmjs.com/package/@openfga/sdk"},{title:"{ProductName} Go SDK",description:"Use our Go SDK to easily connect your Go application to the {ProductName} API",link:"https://github.com/openfga/go-sdk"},{title:"{ProductName} .NET SDK",description:"Connect your .NET service with {ProductName} using our .NET SDK",link:"https://github.com/openfga/dotnet-sdk"}],mdxType:"RelatedSection"}))}N.isMDXComponent=!0}}]);