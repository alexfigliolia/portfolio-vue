(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21ad4668"],{"01b5":function(t,n,o){},"0673":function(t,n,o){"use strict";var e=o("01b5"),s=o.n(e);s.a},b8fa:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{class:[t.classes],style:{backgroundPosition:t.moveX?t.moveX+"% 100%":"50% 100%",transition:"background-position "+t.transDur+" 0s, transform 0.5s 0s"},attrs:{id:"contact"}},[o("BackgroundText",{attrs:{text:"Alex"}}),o("BackgroundText",{attrs:{text:"Figliolia"}}),o("div",[o("div",[o("h2",t._l("Contact".split(""),function(n,e){return o("div",{key:e,style:{transition:"transform 0.5s "+e/20+"s"}},[t._v("\n\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t")])}),0)]),o("Button3D",{attrs:{text:"Call Me"},on:{click:t.call}}),o("Button3D",{attrs:{text:"Email Me"},on:{click:t.sendEmail}}),o("Button3D",{attrs:{text:"GitHub"},on:{click:t.github}})],1)],1)},s=[],a=o("1157"),i=o.n(a),c=(o("a093"),o("2de0")),u=o("418a"),r={name:"Contact",components:{BackgroundText:c["a"],Button3D:u["a"]},data:function(){return{classes:"home contact"}},computed:{moveX:function(){return this.$store.state.moveX},transDur:function(){return this.$store.state.transDur},mounts:function(){return this.$store.state.mounts}},methods:{github:function(){window.open("https://github.com/alexfigliolia","_blank")},sendEmail:function(){window.location.href="mailto:alexfigliolia@gmail.com?subject=Subject"},call:function(){return!1}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.classes="home contact contact-show"},1e3),setTimeout(function(){t.classes="home contact contact-show contact-reset-delays"},1500),i()("#contact").ripples({resolution:512,dropRadius:10,perturbance:.02}),0===this.mounts&&this.$store.commit("updateMounts")})},beforeDestroy:function(){i()("#contact").ripples("destroy")}},l=r,m=(o("0673"),o("2877")),d=Object(m["a"])(l,e,s,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-21ad4668.2aa4e942.js.map