(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(73)},41:function(e,a,t){},42:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(32),l=t.n(r),c=(t(41),t(1)),i=t(3),o=t(5),m=t(4),u=t(6),d=(t(42),t(25),t(11)),p=t(9),h=t.n(p),f=function e(){var a=this;Object(c.a)(this,e),this.service=h.a.create({baseURL:"".concat("https://open-fridge-inc.herokuapp.com/api"),withCredentials:!0}),this.signup=function(e,t){return a.service.post("/signup",{username:e,password:t}).then(function(e){return e.data})},this.login=function(e,t){return a.service.post("/login",{username:e,password:t}).then(function(e){return e.data})},this.logout=function(){return a.service.post("/logout").then(function(e){return e.data})},this.updateUser=function(e){return a.service.put("/user/".concat(e.id),{user:e}).then(function(e){return e.data})},this.groceryItems=function(){return a.service.get("/groceryitems").then(function(e){return e.data})},this.foodRequest=function(e){return a.service.post("/foodrequest",e).then(function(e){return e.data})}},g=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={username:"",password:"",error:""},t.service=new f,t.handleChange=function(e){return t.setState(Object(d.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.service.signup(t.state.username,t.state.password).then(function(e){t.setState({username:"",password:""}),t.props.logIn({loggedIn:!0,user:e}),t.props.history.push("/profile")}).catch(function(e){t.setState({username:"",password:"",error:"username taken"}),console.log(e)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit,style:{width:"50%",margin:"auto auto"}},s.a.createElement("h2",null,this.state.error),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input is-success",type:"email",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-user"})),s.a.createElement("span",{className:"icon is-small is-right"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("div",{className:"field"},s.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password:"})),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"button is-link",type:"submit",value:"Sign Up!"}))),s.a.createElement("br",null))}}]),a}(n.Component),E=function(e){return s.a.createElement("div",{style:{margin:"0 auto",display:"flex",width:"100%",justifyContent:"",alignItems:"center"},id:"home-container"},s.a.createElement("div",{className:"container home-item"},s.a.createElement("img",{src:"/fridgehome.png",alt:"",style:{width:"65%"}})),s.a.createElement("div",{style:{width:"100%"}},e.loggedIn?s.a.createElement("div",{className:"home-item"},s.a.createElement("h1",{className:"is-size-1",style:{marginBottom:"20px"}},"Open fridge"),s.a.createElement("h2",null,"Keep it cool!")):s.a.createElement("div",{className:"home-item",style:{width:"100%"}},s.a.createElement("h1",{className:"is-size-1",style:{marginBottom:"20px"}},"Open fridge"),s.a.createElement(g,null))))},v=t(7),N=function(e){var a=new f,t=function(){return a.logout().then(function(a){e.logOut({loggedIn:!1,user:{}}),e.history.push("/")})};document.addEventListener("DOMContentLoaded",function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var a=e.dataset.target,t=document.getElementById(a);e.classList.toggle("is-active"),t.classList.toggle("is-active")})})});return s.a.createElement("div",null,e.loggedIn?s.a.createElement(function(e){return s.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(v.a,{className:"navbar-item",to:"/about"},s.a.createElement("h1",{style:{fontFamily:"Orbitron, sans-serif"}},"Open Fridge")),s.a.createElement("div",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement(v.b,{className:"navbar-item",to:"/",activeClassName:"selected"},"Home"),s.a.createElement(v.a,{className:"navbar-item",to:"/profile"},"Profile"),e.user.foodConsumer?s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{className:"navbar-item",to:"/foodoffers"},"Food offers"),s.a.createElement(v.a,{className:"navbar-item",to:"/requestfood"},"Request food")):s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{className:"navbar-item",to:"/foodrequests"},"Food requests"),s.a.createElement(v.a,{className:"navbar-item",to:"/offerfood"},"Offer food"))),s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},s.a.createElement("div",{onClick:function(){return t()},className:"button is-light"},"Log out"))))))},e):s.a.createElement(function(e){return s.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(v.a,{className:"navbar-item",to:"/about"},s.a.createElement("h1",{style:{fontFamily:"Orbitron, sans-serif"}},"Open Fridge")),s.a.createElement("div",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement(v.b,{className:"navbar-item",to:"/",activeClassName:"selected"},"Home")),s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},s.a.createElement(v.a,{className:"button is-primary",to:"/signup"},"SignUp"),s.a.createElement(v.a,{className:"button is-light",to:"/login"},"SignIn"))))))},e))},b=t(15),y=t(17),O=t(16),w=t.n(O),C=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).form=s.a.createRef(),t.state=Object(y.a)({userType:""},t.props.user,{foodRequests:[],foodOffers:[]}),t.service=new f,t.componentDidMount=function(){h()({method:"get",withCredentials:"true",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/foodrequests/")}).then(function(e){var a=e.data.filter(function(e){return e.foodConsumer._id===t.props.user._id});t.setState({foodRequests:a})}),h()({method:"get",withCredentials:"true",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/foodoffers/")}).then(function(e){var a=e.data.filter(function(e){return e.foodSupplier._id===t.props.user._id});t.setState({foodOffers:a})})},t.handleChange=function(e){return t.setState(Object(d.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var a=new FormData(t.form.current);h()({method:"put",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/user/").concat(t.props.user._id),config:{headers:{"Content-Type":"multipart/form-data"}},data:a,withCredentials:!0}).then(function(e){t.props.logIn({loggedIn:!0,user:e.data.response}),e.data.response.foodSupplier?t.props.history.push("/offerfood/".concat(t.props.user._id)):t.props.history.push("/requestfood/".concat(t.props.user._id))}).catch(function(e){t.setState({err:e.message,success:""})})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.user.foodConsumer?this.state.foodRequests:this.state.foodOffers;return s.a.createElement("div",{className:"columns",style:{margin:"0"}},s.a.createElement("form",{ref:this.form,className:"column is-one-third",style:{padding:"5%",textAlign:"center"},onSubmit:this.handleSubmit},this.state.img&&s.a.createElement("div",{className:"container",style:{maxWidth:"100%",padding:"20px"}},s.a.createElement("figure",{className:"image is-128x128",style:{margin:"auto auto"}},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(this.state.img),alt:"profile pic"}))),s.a.createElement("h2",null,this.state.error),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Username"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input is-success",type:"email",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-user"})),s.a.createElement("span",{className:"icon is-small is-right"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"First name"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",name:"firstName",value:this.state.firstName,onChange:this.handleChange,placeholder:"First name"}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Last name"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",name:"lastName",value:this.state.lastName,onChange:this.handleChange,placeholder:"last name"}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Address"),s.a.createElement("input",{className:"input",type:"text",name:"address",value:this.state.address,onChange:this.handleChange,placeholder:"address"})),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"file",style:{display:"flex",flexDirection:"column"}},s.a.createElement("label",{className:"label",htmlFor:"profile-picture"},"Profile picture"),s.a.createElement("input",{className:"file-input",type:"file",name:"profile-picture",id:"profile-picture"}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Choose a file\u2026")))),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("label",{className:"radio"},s.a.createElement("input",{id:"foodsupplier",type:"radio",name:"userType",value:"foodSupplier",required:!0,checked:"foodSupplier"===this.state.userType||!0===this.state.foodSupplier,onChange:this.handleChange}),"Foodsupplier"),s.a.createElement("label",{className:"radio"},s.a.createElement("input",{id:"foodconsumer",type:"radio",name:"userType",value:"foodConsumer",checked:"foodConsumer"===this.state.userType||!0===this.state.foodConsumer,onChange:this.handleChange}),"Foodconsumer"))),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"button is-link",type:"submit",value:"Submit"})))),s.a.createElement("div",{className:"column is-two-third is-8",style:{padding:"5%",textAlign:"center"}},s.a.createElement("h1",{className:"is-size-2",style:{width:"60%"}},"The food I ",this.state.foodConsumer?"requested":"offered"),s.a.createElement("br",null),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Item"),s.a.createElement("th",null,"Desciption"),s.a.createElement("th",null,"Amount"),s.a.createElement("th",null,"Food hero"),s.a.createElement("th",null,this.state.foodConsumer?"Offered":"Accepted"))),s.a.createElement("tbody",null,this.state.foodRequests&&e.length>0&&e.map(function(e,a){return s.a.createElement("tr",{key:"tr-".concat(a)},s.a.createElement("td",null,e.groceryItem.name),s.a.createElement("td",null," ",e.description),s.a.createElement("td",null,e.amount),e.acceptedBy&&s.a.createElement("td",null,e.acceptedBy.firstName),e.acceptedAt&&s.a.createElement("td",null,w()(e.acceptedAt).toNow(!0)," ago"))})))))}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={username:"",password:"",error:""},t.service=new f,t.handleChange=function(e){return t.setState(Object(d.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.service.login(t.state.username,t.state.password).then(function(e){t.setState({username:"",password:""}),t.props.logIn({loggedIn:!0,user:e}),t.props.history.push("/profile")}).catch(function(e){t.setState({username:"",password:"",error:e.response.data.message}),console.log(e)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit,style:{width:"50%",margin:"auto auto"}},s.a.createElement("h2",null,this.state.error),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input is-success",type:"email",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-user"})),s.a.createElement("span",{className:"icon is-small is-right"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("div",{className:"field"},s.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password:"})),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"button is-link",type:"submit",value:"Sign in!"}))),s.a.createElement("br",null))}}]),a}(n.Component),k=t(35),S=function(e){var a=e.component,t=e.user,n=e.loggedIn,r=e.logIn,l=Object(k.a)(e,["component","user","loggedIn","logIn"]);return s.a.createElement(b.b,Object.assign({},l,{render:function(e){return n?s.a.createElement(a,Object.assign({},e,{user:t,loggedIn:n,logIn:r})):s.a.createElement(b.a,{to:"/login"})}}))},x=t(8),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).form=s.a.createRef(),t.state={description:"",expiryDate:(new Date).toLocaleDateString("fr-CA"),amount:""},t.service=new f,t.handleChange=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.componentDidMount=function(){t.service.groceryItems().then(function(e){t.setState({groceryOptions:e,groceryItem:e[0]._id})})},t.handleSubmit=function(e){e.preventDefault();var a=new FormData(t.form.current);h()({method:"post",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/foodoffer"),config:{headers:{"Content-Type":"multipart/form-data"}},data:a,withCredentials:!0}).then(function(e){t.setState({success:e.data.message,img:e.data.img,err:""}),t.props.history.push("/foodoffers/".concat(t.props.user._id))}).catch(function(e){t.setState({err:e.message})})},t.imageDivStyle={width:"70%",margin:"auto auto"},t.imageStyle={width:"30%"},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.groceryOptions&&this.state.groceryOptions.map(function(e){return s.a.createElement("option",{key:e._id,value:e._id,id:e._id},e.name)}),a={};if(this.state.groceryOptions){var t=!0,n=!1,r=void 0;try{for(var l,c=this.state.groceryOptions[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var i=l.value;a[i._id]=i.defaultImg}}catch(o){n=!0,r=o}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}}return s.a.createElement("div",{className:"columns",style:{margin:"0"}},s.a.createElement("form",{className:"column is-one-third",style:{padding:"5%",textAlign:"left"},ref:this.form,onSubmit:this.handleSubmit},s.a.createElement("h1",{className:"is-size-4"},"What do you have to offer!?"),s.a.createElement("br",null),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Description:"),s.a.createElement("input",{className:"input",type:"text",name:"description",value:this.state.description,onChange:this.handleChange})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label",htmlFor:"groceryitem"},"Grocery item"),s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"groceryItem",onChange:this.handleChange},e))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Amount"),s.a.createElement("input",{className:"input",type:"number",name:"amount",onChange:this.handleChange,value:this.state.amount})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label",htmlFor:"expiryDate"},"Expiry Date"),s.a.createElement("input",{className:"input",type:"date",name:"expiryDate",required:!0,onChange:this.handleChange,value:this.state.expiryDate})),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"file",style:{display:"flex",flexDirection:"column"}},s.a.createElement("label",{className:"label",htmlFor:"groceryitem-picture"},"Grocery image"),s.a.createElement("input",{className:"file-input",type:"file",name:"groceryitem-picture",id:"groceryitem-picture"}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Choose a file\u2026")))),s.a.createElement("br",null),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"button is-link",type:"submit",value:"Offer The food"})))),s.a.createElement("div",{style:this.imageDivStyle,className:"column is-one-third"},this.state.groceryOptions&&s.a.createElement("img",{style:this.imageStyle,src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(this.state.img?this.state.img:a[this.state.groceryItem]),alt:"selectedgroceryitem"})))}}]),a}(n.Component),D=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={form:{amount:"",description:""}},t.service=new f,t.handleChange=function(e){t.setState({form:Object(y.a)({},t.state.form,Object(d.a)({},e.target.name,e.target.value))},function(){return console.log(t.state)})},t.componentDidMount=function(){t.service.groceryItems().then(function(e){t.setState({groceryOptions:e,form:Object(y.a)({},t.state.form,{groceryItem:e[0]._id})})})},t.handleSubmit=function(e){e.preventDefault(),t.service.foodRequest(t.state.form).then(function(e){t.setState({err:""}),t.props.history.push("/foodrequests/".concat(t.props.user._id))}).catch(function(e){t.setState({err:e.message})})},t.imageDivStyle={width:"70%",margin:"auto auto"},t.imageStyle={width:"30%"},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.groceryOptions&&this.state.groceryOptions.map(function(e){return s.a.createElement("option",{key:e._id,value:e._id,id:e._id},e.name)}),a={};if(this.state.groceryOptions){var t=!0,n=!1,r=void 0;try{for(var l,c=this.state.groceryOptions[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var i=l.value;a[i._id]=i.defaultImg}}catch(o){n=!0,r=o}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}}return s.a.createElement("div",{className:"columns",style:{margin:"0"}},s.a.createElement("form",{className:"column is-one-third",style:{padding:"5%",textAlign:"left"},onSubmit:this.handleSubmit},s.a.createElement("h2",null,this.state.err),s.a.createElement("h1",{className:"is-size-4"},"Request Food you hungry human!"),s.a.createElement("br",null),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Description:"),s.a.createElement("input",{className:"input",type:"text",name:"description",value:this.state.description,onChange:this.handleChange})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label",htmlFor:"groceryitem"},"Grocery item"),s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"groceryItem",onChange:this.handleChange},e))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Amount"),s.a.createElement("input",{className:"input",type:"number",name:"amount",onChange:this.handleChange,value:this.state.amount})),s.a.createElement("br",null),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"button is-link",type:"submit",value:"Request the food"})))),s.a.createElement("div",{style:this.imageDivStyle,className:"column is-one-third"},this.state.groceryOptions&&s.a.createElement("img",{style:this.imageStyle,src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(a[this.state.form.groceryItem]),alt:"selectedgroceryitem"})))}}]),a}(n.Component),q=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={foodOffers:[]},t.openModal=function(e,a){document.getElementById("modal-card-".concat(a)).classList.toggle("is-active")},t.acceptOffer=function(e,a){h()({method:"post",withCredentials:"true",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/acceptoffer/").concat(a)}).then(function(e){t.props.history.push("/profile")})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h()({method:"get",withCredentials:"true",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/foodoffers")}).then(function(a){e.setState({foodOffers:a.data})})}},{key:"render",value:function(){var e=this,a={height:"100%"};return s.a.createElement("div",null,s.a.createElement("section",{className:"section cards"},s.a.createElement("div",{className:"columns is-multiline"},this.state.foodOffers&&this.state.foodOffers.map(function(t,n){return s.a.createElement("div",{className:"column is-one-quarter",key:t._id},s.a.createElement("div",{className:"card has-background-light",style:a},s.a.createElement("div",{className:"card-image",style:{width:"80%",margin:"25px",padding:"25px"}},s.a.createElement("figure",{className:"image is-square"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.img?t.img:t.groceryItem.defaultImg),alt:"foodoffer"}))),s.a.createElement("div",{className:"card-content has-text-grey-dark"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-left"},s.a.createElement("figure",{className:"image is-48x48"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.foodSupplier.img&&t.foodSupplier.img),alt:"foodsupplier"}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("p",{className:"title is-4 has-text-black-ter"},t.foodSupplier.firstName),s.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},t.foodSupplier.lastName))),s.a.createElement("div",{className:"content"},s.a.createElement("div",null,t.description),s.a.createElement("br",null),s.a.createElement("div",null,"Offered: ",w()(t.createdAt).format("DD-MM-YY")),s.a.createElement("div",null," ",t.expiryDate&&"Will expire in: "+w()(t.expiryDate).toNow(!0)))),s.a.createElement("footer",{className:"card-footer"},s.a.createElement("p",{className:"card-footer-item"},s.a.createElement("span",null,s.a.createElement("span",{id:"modal-button-".concat(n),onClick:function(a){return e.openModal(a,n)}},"Yeah, gimme!"))))),s.a.createElement("div",{className:"modal",id:"modal-card-".concat(n)},s.a.createElement("div",{className:"modal-background"}),s.a.createElement("div",{className:"modal-card"},s.a.createElement("header",{className:"modal-card-head"},s.a.createElement("p",{className:"modal-card-title"},"You will get ".concat(t.groceryItem.name," from ").concat(t.foodSupplier.firstName," ")),s.a.createElement("button",{className:"delete","aria-label":"close",onClick:function(a){return e.openModal(a,n)}})),s.a.createElement("section",{className:"modal-card-body"},s.a.createElement("figure",{className:"image is-squared"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.img?t.img:t.groceryItem.defaultImg),alt:"foodoffer",style:{width:"200px",margin:"auto"}})),s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-left"},s.a.createElement("figure",{className:"image is-48x48"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.foodSupplier.img&&t.foodSupplier.img),alt:"foodsupplier"}))),s.a.createElement("div",{className:"media-content has-text-black-ter"},s.a.createElement("p",{className:"title is-4 has-text-black-ter"},t.foodSupplier.firstName),s.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},t.foodSupplier.lasttName)))),s.a.createElement("footer",{className:"modal-card-foot"},s.a.createElement("button",{className:"button is-success",onClick:function(a){return e.acceptOffer(a,t._id)}},"Cool!"),s.a.createElement("button",{className:"button",id:"modal-close-".concat(n),onClick:function(a){return e.openModal(a,n)}},"Naaaaaaaah...")))))}))))}}]),a}(n.Component),A=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={foodRequests:[]},t.openModal=function(e,a){document.getElementById("modal-card-".concat(a)).classList.toggle("is-active")},t.acceptRequest=function(e,a){h()({method:"post",withCredentials:"true",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/acceptrequest/").concat(a)}).then(function(e){t.props.history.push("/profile")})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h()({method:"get",withCredentials:"true",url:"".concat("https://open-fridge-inc.herokuapp.com/api","/foodrequests")}).then(function(a){e.setState({foodRequests:a.data})})}},{key:"render",value:function(){var e=this,a={height:"100%"};return s.a.createElement("div",null,s.a.createElement("section",{className:"section cards"},s.a.createElement("div",{className:"columns is-multiline"},this.state.foodRequests&&this.state.foodRequests.map(function(t,n){return s.a.createElement("div",{className:"column is-one-quarter",key:t._id},s.a.createElement("div",{className:"card",style:a},s.a.createElement("div",{className:"card-image",style:{width:"80%",margin:"25px",padding:"25px"}},s.a.createElement("figure",{className:"image is-square"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.img?t.img:t.groceryItem.defaultImg),alt:"foodRequest"}))),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-left"},s.a.createElement("figure",{className:"image is-48x48"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.foodConsumer.img&&t.foodConsumer.img),alt:"foodsupplier"}))),s.a.createElement("div",{className:"media-content has-text-black-ter"},s.a.createElement("p",{className:"title is-4 has-text-black-ter "},t.foodConsumer.firstName),s.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},t.foodConsumer.lastName))),s.a.createElement("div",{className:"content"},s.a.createElement("div",null,t.description),s.a.createElement("div",null,"Requested: ",w()(t.createdAt).format("DD-MM-YY")))),s.a.createElement("footer",{className:"card-footer"},s.a.createElement("p",{className:"card-footer-item"},s.a.createElement("span",{id:"modal-button-".concat(n),onClick:function(a){return e.openModal(a,n)}},"Yes, I have it for you!")))),s.a.createElement("div",{className:"modal",id:"modal-card-".concat(n)},s.a.createElement("div",{className:"modal-background"}),s.a.createElement("div",{className:"modal-card"},s.a.createElement("header",{className:"modal-card-head"},s.a.createElement("p",{className:"modal-card-title"},"You will give ".concat(t.groceryItem.name," to ").concat(t.foodConsumer.firstName," ")),s.a.createElement("button",{className:"delete","aria-label":"close",onClick:function(a){return e.openModal(a,n)}})),s.a.createElement("section",{className:"modal-card-body"},s.a.createElement("figure",{className:"image is-squared"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.img?t.img:t.groceryItem.defaultImg),alt:"foodoffer",style:{width:"200px",margin:"auto"}})),s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-left"},s.a.createElement("figure",{className:"image is-48x48"},s.a.createElement("img",{src:"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(t.foodConsumer.img&&t.foodConsumer.img),alt:"foodsupplier"}))),s.a.createElement("div",{className:"media-content has-text-black-ter"},s.a.createElement("p",{className:"title is-4 has-text-black-ter"},t.foodConsumer.firstName),s.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},t.foodConsumer.lasttName)))),s.a.createElement("footer",{className:"modal-card-foot"},s.a.createElement("button",{className:"button is-success",onClick:function(a){return e.acceptRequest(a,t._id)}},"Cool!"),s.a.createElement("button",{className:"button",id:"modal-close-".concat(n),onClick:function(a){return e.openModal(a,n)}},"Naaaaaaaah...")))))}))))}}]),a}(n.Component),R=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"About us"),s.a.createElement("h2",{className:"subtitle"},"Save the environment or share food trying"),s.a.createElement("div",{className:"container container-about",style:{display:"flex",justifyContent:"space-between",padding:"40px"}},s.a.createElement("div",{className:"img",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px"}},s.a.createElement("img",{src:"/green-removebg.png",alt:"green"}),s.a.createElement("span",null,"Save environment")),s.a.createElement("div",{className:"img",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px"}},s.a.createElement("img",{src:"/money.png",alt:"moneypic"}),s.a.createElement("span",null,"Save money")),s.a.createElement("div",{className:"img",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px"}},s.a.createElement("img",{src:"/Social-removebg.png",alt:"socialpic"}),s.a.createElement("span",{style:{marginTop:"30px"}},"Make social connections"))))),s.a.createElement("section",{className:"section"},s.a.createElement("h1",null,"Comments"),s.a.createElement("article",{className:"media"},s.a.createElement("figure",{className:"media-left"},s.a.createElement("p",{className:"image is-64x64"},s.a.createElement("img",{src:"/profilepics/Dessy.jpg",alt:"comment-starter-pic"}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},s.a.createElement("p",null,s.a.createElement("strong",null,"Dessy Lidyasari"),s.a.createElement("br",null),"I love this app. There is so much good and healthy food that otherwise would be thrown away. I already was able to pick up many vegetables from farmers nearby. I go together with my husband and my babydaughter Stella. She always likes to go to the farm and sometimes see the animals there. The vegetables we get I use to prepare the babyfood.",s.a.createElement("br",null),s.a.createElement("small",null,s.a.createElement("a",{href:"/#"},"Like")," \xb7 ",s.a.createElement("a",{href:"/#"},"Reply")," \xb7 3 hrs"))),s.a.createElement("article",{className:"media"},s.a.createElement("figure",{className:"media-left"},s.a.createElement("p",{className:"image is-48x48"},s.a.createElement("img",{src:"/profilepics/Stella.jpg",alt:"comment-reply-pic"}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},s.a.createElement("p",null,s.a.createElement("strong",null,"Stella Putri Homminga "),s.a.createElement("br",null),"Thanks mummy! The food is so yummy! Especially the tomatoes were so good. Hopefully we can get them I can and daddy can make the delicious spaghetti!",s.a.createElement("br",null),s.a.createElement("small",null,s.a.createElement("a",{href:"/#"},"Like")," \xb7 ",s.a.createElement("a",{href:"/#"},"Reply")," \xb7 2 hrs"))))),s.a.createElement("article",{className:"media"},s.a.createElement("figure",{className:"media-left"},s.a.createElement("p",{className:"image is-48x48"},s.a.createElement("img",{src:"/profilepics/Oma.jpg",alt:"comment-reply-pic1"}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},s.a.createElement("p",null,s.a.createElement("strong",null,"Oma"),s.a.createElement("br",null),"OW this is so nice. I love to cook with all the ingredients we get from this app. And next time I will join to the farm. Or I can watch Stella when you need to go pick up the groceries.",s.a.createElement("br",null),s.a.createElement("small",null,s.a.createElement("a",{href:"/#"},"Like")," \xb7 ",s.a.createElement("a",{href:"/#"},"Reply")," \xb7 2 hrs"))))))),s.a.createElement("article",{className:"media"},s.a.createElement("figure",{className:"media-left"},s.a.createElement("p",{className:"image is-64x64"},s.a.createElement("img",{src:e.user.img?"".concat("https://open-fridge-inc.herokuapp.com","/images/").concat(e.user.img):"https://bulma.io/images/placeholders/128x128.png",alt:"user-image3"}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"field"},s.a.createElement("p",{className:"control"},s.a.createElement("textarea",{className:"textarea",placeholder:"Add a comment..."}))),s.a.createElement("div",{className:"field"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button"},"Post comment")))))))},_=Object(x.a)(),F=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={loggedIn:!1,user:{}},t.service=new f,t.logIn=function(e){var a=e.user,n=e.loggedIn;t.setState({loggedIn:n,user:a}),localStorage.setItem("state",JSON.stringify(e))},t.logOut=function(e){var a=e.user,n=e.loggedIn;t.setState({loggedIn:n,user:a}),localStorage.setItem("state",JSON.stringify(e))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState(JSON.parse(localStorage.getItem("state")))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("section",{className:"hero is-primary is-medium is-bold is-fullheight"},s.a.createElement("div",{className:"hero-head"},s.a.createElement(N,Object.assign({},this.props,{loggedIn:this.state.loggedIn,user:this.state.user,logOut:this.logOut,history:_}))),s.a.createElement("div",{className:"hero-body is-bold is-paddingless is-fullheight"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement(b.d,null,s.a.createElement(b.b,{exact:!0,path:"/",render:function(a){return s.a.createElement(E,Object.assign({},a,{loggedIn:e.state.loggedIn}))}}),s.a.createElement(b.b,{exact:!0,path:"/about",render:function(a){return s.a.createElement(R,Object.assign({},a,{loggedIn:e.state.loggedIn,user:e.state.user}))}}),s.a.createElement(b.b,{path:"/signup",render:function(a){return s.a.createElement(g,Object.assign({},a,{logIn:e.logIn}))}}),s.a.createElement(b.b,{path:"/login",render:function(a){return s.a.createElement(I,Object.assign({},a,{logIn:e.logIn}))}}),s.a.createElement(S,{path:"/profile",user:this.state.user,component:C,loggedIn:this.state.loggedIn,logIn:this.logIn}),s.a.createElement(S,{path:"/offerfood",user:this.state.user,component:j,loggedIn:this.state.loggedIn,logIn:this.logIn}),s.a.createElement(S,{path:"/requestfood",user:this.state.user,component:D,loggedIn:this.state.loggedIn,logIn:this.logIn}),s.a.createElement(S,{path:"/foodoffers",user:this.state.user,component:q,loggedIn:this.state.loggedIn,logIn:this.logIn}),s.a.createElement(S,{path:"/foodrequests",user:this.state.user,component:A,loggedIn:this.state.loggedIn,logIn:this.logIn}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=Object(x.a)();t(70).config(),l.a.render(s.a.createElement(b.c,{history:M},s.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.1d76c847.chunk.js.map