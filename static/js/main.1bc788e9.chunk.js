(this.webpackJsonpmovie_app_hychoi=this.webpackJsonpmovie_app_hychoi||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),s=a.n(i),o=a(3),c=a.n(o),m=a(14),l=a(15),u=a(16),v=a(18),d=a(19),p=a(17),g=a.n(p),y=a(2),_=a.n(y);a(45);function f(e){var t=e.year,a=e.title,n=e.summary,i=e.poster,s=e.rating,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:i,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h4",{className:"movie__rating"},s),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},o.map((function(e,t){return r.a.createElement("li",{className:"movie__genre",key:t},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,120),"...")))}f.prototype={year:_.a.number.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,rating:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var h=f,E=(a(46),"https://yts-proxy.now.sh/"),N=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movieList:[]},e.getMovies=Object(m.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get(E+"list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movieList:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(e){return e.isLoading=!1}))}),5e3),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.isLoading,a=e.movieList;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres})}))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1bc788e9.chunk.js.map