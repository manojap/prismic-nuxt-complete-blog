__NUXT_JSONP__("/blog/how-to-create-deno-cli", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{document:{id:"YM16vRIAACoAUEMd",uid:"how-to-create-deno-cli",url:b,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YM9oEBIAACsAWL1o&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YM16vRIAACoAUEMd%22%29+%5D%5D",tags:[],first_publication_date:h,last_publication_date:h,slugs:["cli-using-deno"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:e,text:"CLI using Deno",spans:[]}],post_excerpt:[{type:a,text:"How to create deno CLI ",spans:[]}],featured_img_link:{link_type:"Web",url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1604478373761-eaa0a2c961fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"},category:{link_type:"Document"},sticky_post:b,body:[{slice_type:d,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"With Deno you can make beautiful scripts with command line arguments and install them locally in your system, even an executable is plausible.",spans:[]}]}},{slice_type:g,slice_label:b,items:[{}],primary:{header_rich_text_field:[{type:e,text:"catching the command line",spans:[]}]}},{slice_type:d,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"So how do we catch command line arguments, for example",spans:[]},{type:a,text:"sayHi manoj",spans:[]},{type:a,text:"The above CLI supposed to say hi to first argument(manoj) , hi manoj. Now you under stand what an argument in command line is .",spans:[{start:42,end:50,type:c},{start:51,end:56,type:c},{start:i,end:j,type:c},{start:i,end:j,type:f}]},{type:a,text:"Let's build a simple command line program with Deno",spans:[]}]}},{slice_type:k,slice_label:b,items:[{}],primary:{cod_text_field:[{type:l,text:" \u002F\u002Fapp.ts\nconst {args:\\[name\\]}=Deno\nconsole.log(\\`hi ${name}\\`);",spans:[]}]}},{slice_type:d,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"and you can run it as",spans:[]},{type:a,text:"deno run app.ts Joe \u002F\u002Fresult hi jol",spans:[]},{type:a,text:"How to catch multiple argument separated by white space ? Here is a quick inundation to our script.",spans:[]},{type:a,text:"const {args:[hus,wife]}=Deno console.log(\\hi ${hus} ,${wife}\\);",spans:[]}]}},{slice_type:g,slice_label:b,items:[{}],primary:{header_rich_text_field:[{type:e,text:"Install CLI locally",spans:[]}]}},{slice_type:d,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[]}},{slice_type:d,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"We can install our script locally using the deno install command so that can run without a deno command along shell.",spans:[]}]}},{slice_type:k,slice_label:b,items:[{}],primary:{cod_text_field:[{type:l,text:"deno install --unstable -f -n sayHi app.ts",spans:[]}]}},{slice_type:d,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"Here -f is used to overwrite the existing file which is optional , -n is used to specify the name of the command which also optional (it will take the name of the .ts file instead, if no name is specified). The install command will place the file in your deno home directory.",spans:[{start:m,end:n,type:c},{start:m,end:n,type:f},{start:o,end:p,type:c},{start:o,end:p,type:f},{start:93,end:97,type:c},{start:134,end:204,type:c}]}]}},{slice_type:g,slice_label:b,items:[{}],primary:{header_rich_text_field:[{type:e,text:"Run",spans:[]}]}},{slice_type:d,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"Running the command is as simple as running dir in shell.",spans:[{start:q,end:r,type:c},{start:q,end:r,type:f}]},{type:a,text:"sayHi Geethu",spans:[]},{type:a,text:"We can build much more advanced CLI with options and commands using some of the interesting deno CLI framework. I leave it to the second part.",spans:[]}]}}]}}}],fetch:{},mutations:[]}}("paragraph",null,"em","paragraph_slice","heading1","strong","heading_slice","2021-06-19T05:04:01+0000",98,106,"code_slice","preformatted",5,7,67,69,44,47)));