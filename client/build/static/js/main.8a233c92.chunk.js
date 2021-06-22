(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,a){e.exports=a(51)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=a(54),s=a(55),i=a(56),m=a(6),u=a(7),d=a(10),E=a(9),h=a(5),b=a.n(h),v=function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},f=function(){return b.a.get("/api/books")},p=function(e){return b.a.post("/api/books",e)},k=function(e){return b.a.delete("/api/books/"+e)};function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function B(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var y=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"BookSearchLabel"},l.a.createElement("h3",null,"Search For Book")),l.a.createElement("br",null),l.a.createElement("input",{className:"col-12 form-control",value:e.search,type:"text",name:"searchBook",placeholder:"Search for a book!",onChange:e.handleInputChange})),l.a.createElement("button",{type:"submit",className:"submitBtn btn btn-primary",onClick:e.handleFormSubmit},"Enter"))},S=(a(45),function(e){return 0===e.books.length?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Books Found: ")))):l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Books found: "),e.books.map((function(t){return l.a.createElement("section",null,l.a.createElement("li",{className:"search-list list-group-item"},l.a.createElement(g,{className:"SearchResult row",id:t.title+"Card",key:t._id},l.a.createElement(B,{size:"2",className:"bookImage"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(B,{size:"1",className:"emptyCol"}),l.a.createElement(B,{size:"9",className:"bookInfo"},l.a.createElement(g,null,l.a.createElement("h3",{className:"bookTitle"},t.title)),l.a.createElement(g,null,l.a.createElement("h4",{className:"bookAuthor"},t.author)),l.a.createElement(g,null,l.a.createElement("p",null,t.description)))),l.a.createElement("br",null),l.a.createElement(g,{className:"buttonDiv"},l.a.createElement("button",{className:"saveBook btn btn-info",id:t.id,onClick:function(t){return e.handleSavedButton(t)}},"Save"),l.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"viewBook btn btn-success"},"View Online")))),l.a.createElement("br",null))})))))});a(46);var w=function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid d-flex align-items-center"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("h1",{className:"header-text"},"Shh! Quiet in the Library!")))},C=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",books:[],error:"",message:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),v(e.state.search).then((function(t){if("error"===t.data.items)throw new Error(t.data.items);var a=t.data.items;a=a.map((function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}})),e.setState({books:a,error:""})})).catch((function(t){return e.setState({error:t.items})}))},e.handleSavedButton=function(t){t.preventDefault(),console.log(e.state.books);var a=e.state.books.filter((function(e){return e.id===t.target.id}));a=a[0],p(a).then(e.setState()).catch((function(e){return console.log(e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(N,{fluid:!0},l.a.createElement(w,null),l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(B,{size:"12"},l.a.createElement(y,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})))),l.a.createElement("br",null),l.a.createElement(N,null,l.a.createElement(S,{books:this.state.books,handleSavedButton:this.handleSavedButton})))}}]),a}(n.Component),I=function(e){return 0===e.savedBooks.length?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Saved Books")))):l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Saved Books"),e.savedBooks.map((function(t){return l.a.createElement("section",null,l.a.createElement("li",{className:"saved-list list-group-item"},l.a.createElement(g,{className:"SearchResult",id:t.title+"Card",key:t._id},l.a.createElement(B,{size:"2",className:"bookImage"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(B,{size:"1",className:"emptyCol"}),l.a.createElement(B,{size:"9",className:"bookInfo"},l.a.createElement(g,null,l.a.createElement("h2",{className:"bookTitle"},t.title)),l.a.createElement(g,null,l.a.createElement("h3",{className:"bookAuthor"},t.authors)),l.a.createElement(g,null,l.a.createElement("p",{className:"bookDescription"},t.description)))),l.a.createElement("br",null),l.a.createElement(g,{className:"buttonDiv "},l.a.createElement("button",{className:"deleteBook btn btn-danger",id:t._id,onClick:function(){return e.handleDeleteButton(t._id)}},"Delete"),l.a.createElement("a",{href:t.link,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("button",{className:"viewBook btn btn-success"},"View Online"))),l.a.createElement("br",null)),l.a.createElement("br",null))})))))},D=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={savedBooks:[]},e.handleDeleteButton=function(t){k(t).then((function(t){return e.componentDidMount()})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({savedBooks:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(N,{fluid:!0,className:"container"},l.a.createElement(w,null),l.a.createElement(N,null,l.a.createElement(I,{savedBooks:this.state.savedBooks,handleDeleteButton:this.handleDeleteButton})))}}]),a}(n.Component);var x=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-primary bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("h2",{className:"text-white"},"Search Books")),l.a.createElement("div",{id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item",id:"home"},l.a.createElement("a",{className:"nav-link",href:"/"},l.a.createElement("button",{type:"button",className:"btn btn-info text-white"},"Find a Book"))),l.a.createElement("li",{className:"nav-item",id:"saved"},l.a.createElement("a",{className:"nav-link",href:"/saved"},l.a.createElement("button",{type:"button",className:"btn btn-danger text-white"},"View Saved Books"))))))};a(47);var j=function(){return l.a.createElement("footer",{className:"page-footer"},l.a.createElement("div",{className:"container-fluid text-center"},l.a.createElement("a",{href:"https://seanmonaghan.github.io/reactPortfolio/#/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",{className:"footer"},"Sean Monaghan - Web Development"))))};var O=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(s.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:C}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:D})),l.a.createElement(j,null)))};c.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8a233c92.chunk.js.map