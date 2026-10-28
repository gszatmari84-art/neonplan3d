var $f=0,lu=1,Zf=2;var Ks=1,Kf=2,ts=3,Qn=0,nn=1,se=2,ti=0,Bi=1,Le=2,cu=3,Js=4,Jf=5;var hr=100,jf=101,Qf=102,td=103,ed=104,nd=200,id=201,rd=202,sd=203,uu=204,hu=205,od=206,ad=207,ld=208,cd=209,ud=210,hd=211,fd=212,dd=213,pd=214,ma=0,ga=1,ba=2,Wr=3,xa=4,va=5,ya=6,_a=7,fu=0,md=1,gd=2,Un=0,du=1,pu=2,mu=3,gu=4,bu=5,xu=6,vu=7;var yu=300,ki=301,fr=302,Za=303,Ka=304,js=306,sr=1e3,vn=1001,Ma=1002,Ze=1003,bd=1004;var Qs=1005;var tn=1006,Ja=1007;var zi=1008;var _n=1009,_u=1010,Mu=1011,es=1012,ja=1013,Bn=1014,kn=1015,zn=1016,Qa=1017,tl=1018,ns=1020,Su=35902,wu=35899,Tu=1021,Eu=1022,An=1023,$n=1026,Vi=1027,Au=1028,el=1029,Gi=1030,nl=1031;var il=1033,to=33776,eo=33777,no=33778,io=33779,rl=35840,sl=35841,ol=35842,al=35843,ll=36196,cl=37492,ul=37496,hl=37488,fl=37489,ro=37490,dl=37491,pl=37808,ml=37809,gl=37810,bl=37811,xl=37812,vl=37813,yl=37814,_l=37815,Ml=37816,Sl=37817,wl=37818,Tl=37819,El=37820,Al=37821,Rl=36492,Cl=36494,Pl=36495,Il=36283,Ll=36284,so=36285,Fl=36286;var Is=2300,Sa=2301,fa=2302,Jc=2303,jc=2400,Qc=2401,tu=2402;var xd=3200;var Ru=0,vd=1,bi="",Ne="srgb",Ls="srgb-linear",Fs="linear",_e="srgb";var da=7680;var yd=519,_d=512,Md=513,Sd=514,Dl=515,wd=516,Td=517,Nl=518,Ed=519,Ad=35044,Cu=35048;var Pu="300 es",On=2e3,Ds=2001;function gg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){let i=Xr("canvas");return i.style.display="block",i}var bf={},Yr=null;function Iu(...i){let t="THREE."+i.shift();Yr?Yr("log",t,...i):console.log(t,...i)}function Cd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=Cd(i);let t="THREE."+i.shift();if(Yr)Yr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=Cd(i);let t="THREE."+i.shift();if(Yr)Yr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rr(...i){let t=i.join(" ");t in bf||(bf[t]=!0,qt(...i))}function Pd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Id={[ma]:ga,[ba]:ya,[xa]:_a,[Wr]:va,[ga]:ma,[ya]:ba,[_a]:xa,[va]:Wr},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rc=Math.PI/180,wa=180/Math.PI;function oo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function xg(i,t){return(i%t+t)%t}function Cc(i,t,e){return(1-e)*i+e*t}function ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ou=class Ou{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ou.prototype.isVector2=!0;var le=Ou,Kn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],b=s[o+3];if(h!==b||l!==f||c!==d||u!==p){let g=l*f+c*d+u*p+h*b;g<0&&(f=-f,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,a=Math.sin(a*x)/_,l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+b*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+b*a;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uu=class Uu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pc.copy(this).projectOnVector(t),this.sub(Pc)}reflect(t){return this.sub(Pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uu.prototype.isVector3=!0;var $=Uu,Pc=new $,xf=new Kn,Bu=class Bu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],_=r[4],v=r[7],M=r[2],w=r[5],E=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*g+a*_+l*w,s[6]=o*m+a*v+l*E,s[1]=c*b+u*x+h*M,s[4]=c*g+u*_+h*w,s[7]=c*m+u*v+h*E,s[2]=f*b+d*x+p*M,s[5]=f*g+d*_+p*w,s[8]=f*m+d*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=h*b,t[1]=(r*c-u*n)*b,t[2]=(a*n-r*o)*b,t[3]=f*b,t[4]=(u*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bu.prototype.isMatrix3=!0;var Qt=Bu,Ic=new Qt,vf=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yf=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){let i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?Fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:t,whitePoint:n,transfer:Fs,toXYZ:vf,fromXYZ:yf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:vf,fromXYZ:yf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var he=vg();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cr,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cr===void 0&&(Cr=Xr("canvas")),Cr.width=t.width,Cr.height=t.height;let r=Cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yg=0,qr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lc(r[o].image)):s.push(Lc(r[o]))}else s=Lc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Lc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var _g=0,Fc=new $,cn=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vn,r=vn,s=tn,o=zi,a=An,l=_n,c=i.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=oo(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=yu;cn.DEFAULT_ANISOTROPY=1;var ku=class ku{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,M=(m+1)/2,w=(u+f)/4,E=(h+b)/4,y=(p+g)/4;return _>v&&_>M?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=E/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=y/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=E/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-p)*(g-p)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-b)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ku.prototype.isVector4=!0;var Be=ku,Ea=class extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new cn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new qr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ns=class extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $a=class $a{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,b,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Pr.setFromMatrixColumn(t,0).length(),s=1/Pr.setFromMatrixColumn(t,1).length(),o=1/Pr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,b=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,b=c*h;e[0]=f+b*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,b=c*h;e[0]=f-b*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,b=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*h,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*u,e[4]=b-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-b*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+b,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=b*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,Sg)}lookAt(t,e,n){let r=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ei.crossVectors(n,bn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ei.crossVectors(n,bn)),Ei.normalize(),Vo.crossVectors(bn,Ei),r[0]=Ei.x,r[4]=Vo.x,r[8]=bn.x,r[1]=Ei.y,r[5]=Vo.y,r[9]=bn.y,r[2]=Ei.z,r[6]=Vo.z,r[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],M=n[15],w=r[0],E=r[4],y=r[8],A=r[12],S=r[1],T=r[5],I=r[9],O=r[13],C=r[2],k=r[6],R=r[10],F=r[14],D=r[3],L=r[7],U=r[11],z=r[15];return s[0]=o*w+a*S+l*C+c*D,s[4]=o*E+a*T+l*k+c*L,s[8]=o*y+a*I+l*R+c*U,s[12]=o*A+a*O+l*F+c*z,s[1]=u*w+h*S+f*C+d*D,s[5]=u*E+h*T+f*k+d*L,s[9]=u*y+h*I+f*R+d*U,s[13]=u*A+h*O+f*F+d*z,s[2]=p*w+b*S+g*C+m*D,s[6]=p*E+b*T+g*k+m*L,s[10]=p*y+b*I+g*R+m*U,s[14]=p*A+b*O+g*F+m*z,s[3]=x*w+_*S+v*C+M*D,s[7]=x*E+_*T+v*k+M*L,s[11]=x*y+_*I+v*R+M*U,s[15]=x*A+_*O+v*F+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*f,_=a*d-c*h,v=a*f-l*h,M=o*d-c*u,w=o*f-l*u,E=o*h-a*u;return e*(b*x-g*_+m*v)-n*(p*x-g*M+m*w)+r*(p*_-b*M+m*E)-s*(p*v-b*w+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*o,_=e*l-r*o,v=e*c-s*o,M=n*l-r*a,w=n*c-s*a,E=r*c-s*l,y=u*b-h*p,A=u*g-f*p,S=u*m-d*p,T=h*g-f*b,I=h*m-d*b,O=f*m-d*g,C=x*O-_*I+v*T+M*S-w*A+E*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/C;return t[0]=(a*O-l*I+c*T)*k,t[1]=(r*I-n*O-s*T)*k,t[2]=(b*E-g*w+m*M)*k,t[3]=(f*w-h*E-d*M)*k,t[4]=(l*S-o*O-c*A)*k,t[5]=(e*O-r*S+s*A)*k,t[6]=(g*v-p*E-m*_)*k,t[7]=(u*E-f*v+d*_)*k,t[8]=(o*I-a*S+c*y)*k,t[9]=(n*S-e*I-s*y)*k,t[10]=(p*w-b*v+m*x)*k,t[11]=(h*v-u*w-d*x)*k,t[12]=(a*A-o*T-l*y)*k,t[13]=(e*T-n*A+r*y)*k,t[14]=(b*_-p*M-g*x)*k,t[15]=(u*M-h*_+f*x)*k,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,b=o*u,g=o*h,m=a*h,x=l*c,_=l*u,v=l*h,M=n.x,w=n.y,E=n.z;return r[0]=(1-(b+m))*M,r[1]=(d+v)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+m))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(p+_)*E,r[9]=(g-x)*E,r[10]=(1-(f+b))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Pr.set(r[0],r[1],r[2]).length(),a=Pr.set(r[4],r[5],r[6]).length(),l=Pr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ln.copy(this);let c=1/o,u=1/a,h=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=On,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=s/(o-s),b=o*s/(o-s);else if(a===On)p=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Ds)p=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=On,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(o-s),b=o/(o-s);else if(a===On)p=-2/(o-s),b=-(o+s)/(o-s);else if(a===Ds)p=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$a.prototype.isMatrix4=!0;var Te=$a,Pr=new $,Ln=new Te,Mg=new $(0,0,0),Sg=new $(1,1,1),Ei=new $,Vo=new $,bn=new $,_f=new Te,Mf=new Kn,Li=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _f.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_f,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mf.setFromEuler(this),this.setFromQuaternion(Mf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wg=0,Sf=new $,Ir=new Kn,li=new Te,Go=new $,Ts=new $,Tg=new $,Eg=new Kn,wf=new $(1,0,0),Tf=new $(0,1,0),Ef=new $(0,0,1),Af={type:"added"},Ag={type:"removed"},Lr={type:"childadded",child:null},Dc={type:"childremoved",child:null},gn=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new Li,n=new Kn,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new Qt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(wf,t)}rotateY(t){return this.rotateOnAxis(Tf,t)}rotateZ(t){return this.rotateOnAxis(Ef,t)}translateOnAxis(t,e){return Sf.copy(t).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wf,t)}translateY(t){return this.translateOnAxis(Tf,t)}translateZ(t){return this.translateOnAxis(Ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Go.copy(t):Go.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ts,Go,this.up):li.lookAt(Go,Ts,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(li),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Af),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),Dc.child=t,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Af),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new $(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=xg(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Nc(o,s,t+1/3),this.g=Nc(o,s,t),this.b=Nc(o,s,t-1/3)}return he.colorSpaceToWorking(this,r),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return he.workingToColorSpace(ln.copy(this),t),Math.round(de(ln.r*255,0,255))*65536+Math.round(de(ln.g*255,0,255))*256+Math.round(de(ln.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(ln.copy(this),e);let n=ln.r,r=ln.g,s=ln.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ne){he.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,r=ln.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Ho);let n=Cc(Ai.h,Ho.h,e),r=Cc(Ai.s,Ho.s,e),s=Cc(Ai.l,Ho.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new et;et.NAMES=Ld;var Os=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fi=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new $,ci=new $,Oc=new $,ui=new $,Fr=new $,Dr=new $,Rf=new $,Uc=new $,Bc=new $,kc=new $,zc=new Be,Vc=new Be,Gc=new Be,Ii=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fn.subVectors(t,e),r.cross(Fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Fn.subVectors(r,e),ci.subVectors(n,e),Oc.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ci),l=Fn.dot(Oc),c=ci.dot(ci),u=ci.dot(Oc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return zc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),zc.fromBufferAttribute(t,e),Vc.fromBufferAttribute(t,n),Gc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(zc,s.x),o.addScaledVector(Vc,s.y),o.addScaledVector(Gc,s.z),o}static isFrontFacing(t,e,n,r){return Fn.subVectors(n,e),ci.subVectors(t,e),Fn.cross(ci).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Fr.subVectors(r,n),Dr.subVectors(s,n),Uc.subVectors(t,n);let l=Fr.dot(Uc),c=Dr.dot(Uc);if(l<=0&&c<=0)return e.copy(n);Bc.subVectors(t,r);let u=Fr.dot(Bc),h=Dr.dot(Bc);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Fr,o);kc.subVectors(t,s);let d=Fr.dot(kc),p=Dr.dot(kc);if(p>=0&&d<=p)return e.copy(s);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Dr,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return Rf.subVectors(s,r),a=(h-u)/(h-u+(d-p)),e.copy(r).addScaledVector(Rf,a);let m=1/(g+b+f);return o=b*m,a=f*m,e.copy(n).addScaledVector(Fr,o).addScaledVector(Dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pn=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),Xo.subVectors(this.max,Es),Nr.subVectors(t.a,Es),Or.subVectors(t.b,Es),Ur.subVectors(t.c,Es),Ri.subVectors(Or,Nr),Ci.subVectors(Ur,Or),tr.subVectors(Nr,Ur);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-tr.z,tr.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,tr.z,0,-tr.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-tr.y,tr.x,0];return!Hc(e,Nr,Or,Ur,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Hc(e,Nr,Or,Ur,Xo))?!1:(Yo.crossVectors(Ri,Ci),e=[Yo.x,Yo.y,Yo.z],Hc(e,Nr,Or,Ur,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new $,new $,new $,new $,new $,new $,new $,new $],Dn=new $,Wo=new pn,Nr=new $,Or=new $,Ur=new $,Ri=new $,Ci=new $,tr=new $,Es=new $,Xo=new $,Yo=new $,er=new $;function Hc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){er.fromArray(i,s);let a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=t.dot(er),c=e.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var He=new $,qo=new le,Cg=0,En=class extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Us=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pg=new pn,As=new $,Wc=new $,Di=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(As,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Wc)),this.expandByPoint(As.copy(t.center).sub(Wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ig=0,Tn=new Te,Xc=new gn,Br=new $,xn=new pn,Rs=new pn,qe=new $,Xt=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gg(t)?or:Us)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Xc.lookAt(t),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(xn.min,Rs.min),xn.expandByPoint(qe),qe.addVectors(xn.max,Rs.max),xn.expandByPoint(qe)):(xn.expandByPoint(Rs.min),xn.expandByPoint(Rs.max))}xn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)qe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(qe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qe.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(t,c),qe.add(Br)),r=Math.max(r,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new $,l[y]=new $;let c=new $,u=new $,h=new $,f=new le,d=new le,p=new le,b=new $,g=new $;function m(y,A,S){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,y),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(b.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(T),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(T),a[y].add(b),a[A].add(b),a[S].add(b),l[y].add(g),l[A].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,A=x.length;y<A;++y){let S=x[y],T=S.start,I=S.count;for(let O=T,C=T+I;O<C;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new $,v=new $,M=new $,w=new $;function E(y){M.fromBufferAttribute(r,y),w.copy(M);let A=a[y];_.copy(A),_.sub(M.multiplyScalar(M.dot(A))).normalize(),v.crossVectors(w,A);let T=v.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,T)}for(let y=0,A=x.length;y<A;++y){let S=x[y],T=S.start,I=S.count;for(let O=T,C=T+I;O<C;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new En(f,u,h)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Yc=new $,Lg=new $,Fg=new Qt,Nn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Yc.subVectors(n,e).cross(Lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Yc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fg.getNormalMatrix(t),r=this.coplanarPoint(Yc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Dg=0,pi=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Bi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=hu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var fi=new $,qc=new $,$o=new $,Zo=new $,ar=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){qc.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Zo.copy(this.origin).sub(qc);let s=t.distanceTo(e)*.5,o=-this.direction.dot($o),a=Zo.dot(this.direction),l=-Zo.dot($o),c=Zo.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){let b=1/u;h*=b,f*=b,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qc).addScaledVector($o,f),d}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),r=fi.dot(fi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,b=e.y-o.y,g=e.z-o.z,m=n.x-o.x,x=n.y-o.y,_=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(u),E,y,A,S,T,I,O,C,k,R,F,D;if(v>=M&&v>=w?(A=l,I=h,k=p,D=m,l>=0?(E=c,y=u,S=f,T=d,O=b,C=g,R=x,F=_):(E=u,y=c,S=d,T=f,O=g,C=b,R=_,F=x)):M>=w?(A=c,I=f,k=b,D=x,c>=0?(E=u,y=l,S=d,T=h,O=g,C=p,R=_,F=m):(E=l,y=u,S=h,T=d,O=p,C=g,R=m,F=_)):(A=u,I=d,k=g,D=_,u>=0?(E=l,y=c,S=h,T=f,O=p,C=b,R=m,F=x):(E=c,y=l,S=f,T=h,O=b,C=p,R=x,F=m)),A===0)return null;let L=E/A,U=y/A,z=1/A,G=S-L*I,V=T-U*I,W=O-L*k,q=C-U*k,st=R-L*D,X=F-U*D,Y=st*q-X*W,nt=G*X-V*st,j=W*V-q*G;if(r){if(Y<0||nt<0||j<0)return null}else if((Y<0||nt<0||j<0)&&(Y>0||nt>0||j>0))return null;let Q=Y+nt+j;if(Q===0)return null;let dt=z*(Y*I+nt*k+j*D);return(Q>0?dt<0:dt>0)?null:this.at(dt/Q,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cf=new Te,nr=new ar,Ko=new Di,Pf=new $,Jo=new $,jo=new $,Qo=new $,$c=new $,ta=new $,If=new $,ea=new $,It=class extends gn{constructor(t=new Xt,e=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&($c.fromBufferAttribute(h,t),o?ta.addScaledVector($c,u):ta.addScaledVector($c.sub(e),u))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),nr.copy(t.ray).recast(t.near),!(Ko.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Ko,Pf)===null||nr.origin.distanceToSquared(Pf)>(t.far-t.near)**2))&&(Cf.copy(s).invert(),nr.copy(t.ray).applyMatrix4(Cf),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,nr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let w=a.getX(v),E=a.getX(v+1),y=a.getX(v+2);r=na(this,m,t,n,c,u,h,w,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);r=na(this,o,t,n,c,u,h,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let w=v,E=v+1,y=v+2;r=na(this,m,t,n,c,u,h,w,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,_=g+1,v=g+2;r=na(this,o,t,n,c,u,h,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Ng(i,t,e,n,r,s,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Qn,a),l===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:i}}function na(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Jo),i.getVertexPosition(l,jo),i.getVertexPosition(c,Qo);let u=Ng(i,t,e,n,Jo,jo,Qo,If);if(u){let h=new $;Ii.getBarycoord(If,Jo,jo,Qo,h),r&&(u.uv=Ii.getInterpolatedAttribute(r,a,l,c,h,new le)),s&&(u.uv1=Ii.getInterpolatedAttribute(s,a,l,c,h,new le)),o&&(u.normal=Ii.getInterpolatedAttribute(o,a,l,c,h,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Ii.getNormal(Jo,jo,Qo,f.normal),u.face=f,u.barycoord=h}return u}var Ra=class extends cn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Ze,u=Ze,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=new Di,Og=new le(.5,.5),ia=new $,Bs=class{constructor(t=new Nn,e=new Nn,n=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],b=s[9],g=s[10],m=s[11],x=s[12],_=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,m-p,M-x).normalize(),r[1].setComponents(c+o,d+u,m+p,M+x).normalize(),r[2].setComponents(c+a,d+h,m+b,M+_).normalize(),r[3].setComponents(c-a,d-h,m-b,M-_).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,m-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,m-g,M-v).normalize(),e===On)r[5].setComponents(c+l,d+f,m+g,M+v).normalize();else if(e===Ds)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){ir.center.set(0,0,0);let e=Og.distanceTo(t.center);return ir.radius=.7071067811865476+e,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ia.x=r.normal.x>0?t.max.x:t.min.x,ia.y=r.normal.y>0?t.max.y:t.min.y,ia.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var en=class extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ca=new $,Pa=new $,Lf=new Te,Cs=new ar,ra=new Di,Zc=new $,Ff=new $,Ia=class extends gn{constructor(t=new Xt,e=new en){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ca.fromBufferAttribute(e,r-1),Pa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ca.distanceTo(Pa);t.setAttribute("lineDistance",new Bt(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),ra.radius+=s,t.ray.intersectsSphere(ra)===!1)return;Lf.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(Lf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=u.getX(b),x=u.getX(b+1),_=sa(this,t,Cs,l,m,x,b);_&&e.push(_)}if(this.isLineLoop){let b=u.getX(p-1),g=u.getX(d),m=sa(this,t,Cs,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=sa(this,t,Cs,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=sa(this,t,Cs,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function sa(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Ca.fromBufferAttribute(a,r),Pa.fromBufferAttribute(a,s),e.distanceSqToSegment(Ca,Pa,Zc,Ff)>n)return;Zc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Zc);if(!(c<t.near||c>t.far))return{distance:c,point:Ff.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Df=new $,Nf=new $,Je=class extends Ia{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Df.fromBufferAttribute(e,r),Nf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Df.distanceTo(Nf);t.setAttribute("lineDistance",new Bt(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lr=class extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Of=new Te,eu=new ar,oa=new Di,aa=new $,Kr=class extends gn{constructor(t=new Xt,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;Of.copy(r).invert(),eu.copy(t.ray).applyMatrix4(Of);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,b=d;p<b;p++){let g=c.getX(p);aa.fromBufferAttribute(h,g),Uf(aa,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,b=d;p<b;p++)aa.fromBufferAttribute(h,p),Uf(aa,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Uf(i,t,e,n,r,s,o){let a=eu.distanceSqToPoint(i);if(a<e){let l=new $;eu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ks=class extends cn{constructor(t=[],e=ki,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mi=class extends cn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends cn{constructor(t,e,n=Bn,r,s,o,a=Ze,l=Ze,c,u=$n,h=1){if(u!==$n&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},La=class extends Jn{constructor(t,e=Bn,n=ki,r,s,o=Ze,a=Ze,l,c=$n){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zs=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Jr=class i extends Xt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function p(b,g,m,x,_,v,M,w,E,y,A){let S=v/E,T=M/y,I=v/2,O=M/2,C=w/2,k=E+1,R=y+1,F=0,D=0,L=new $;for(let U=0;U<R;U++){let z=U*T-O;for(let G=0;G<k;G++){let V=G*S-I;L[b]=V*x,L[g]=z*_,L[m]=C,c.push(L.x,L.y,L.z),L[b]=0,L[g]=0,L[m]=w>0?1:-1,u.push(L.x,L.y,L.z),h.push(G/E),h.push(1-U/y),F+=1}}for(let U=0;U<y;U++)for(let z=0;z<E;z++){let G=f+z+k*U,V=f+z+k*(U+1),W=f+(z+1)+k*(U+1),q=f+(z+1)+k*U;l.push(G,V,q),l.push(V,W,q),D+=6}a.addGroup(d,D,A),d+=D,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vs=class i extends Xt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new $,u=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Ug(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Fd(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Gg(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Gs(s,o,e,a,l,c,0),o}function Fd(i,t,e,n,r){let s;if(r===Qg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Bf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Bf(o/n|0,i[o],i[o+1],s);return s&&jr(s,s.next)&&(Ws(s),s=s.next),s}function cr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jr(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&qg(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?kg(i,n,r,s):Bg(i)){t.push(l.i,i.i,c.i),Ws(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=zg(cr(i),t),Gs(i,t,e,n,r,s,2)):o===2&&Vg(i,t,e,n,r,s):Gs(cr(i),t,e,n,r,s,1);break}}}function Bg(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Ps(r,a,s,l,o,c,p.x,p.y)&&Oe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kg(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Oe(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),b=Math.max(a,l,c),g=Math.max(u,h,f),m=nu(d,p,t,e,n),x=nu(b,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Ps(a,u,l,h,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ps(a,u,l,h,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Ps(a,u,l,h,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ps(a,u,l,h,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function zg(i,t){let e=i;do{let n=e.prev,r=e.next.next;!jr(n,r)&&Nd(n,e,e.next,r)&&Hs(n,r)&&Hs(r,n)&&(t.push(n.i,e.i,r.i),Ws(e),Ws(e.next),e=i=r),e=e.next}while(e!==i);return cr(e)}function Vg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kg(o,a)){let l=Od(o,a);o=cr(o,o.next),l=cr(l,l.next),Gs(o,t,e,n,r,s,0),Gs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Gg(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Fd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Zg(c))}r.sort(Hg);for(let s=0;s<r.length;s++)e=Wg(r[s],e);return e}function Hg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Wg(i,t){let e=Xg(i,t);if(!e)return t;let n=Od(e,i);return cr(n,n.next),cr(e,e.next)}function Xg(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(jr(i,e))return e;do{if(jr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Dd(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Hs(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Yg(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Yg(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function qg(i,t,e,n){let r=i;do r.z===0&&(r.z=nu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$g(r)}function $g(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function nu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Dd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ps(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Dd(i,t,e,n,r,s,o,a)}function Kg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jg(i,t)&&(Hs(i,t)&&Hs(t,i)&&jg(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||jr(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jr(i,t){return i.x===t.x&&i.y===t.y}function Nd(i,t,e,n){let r=ca(Oe(i,t,e)),s=ca(Oe(i,t,n)),o=ca(Oe(e,n,i)),a=ca(Oe(e,n,t));return!!(r!==s&&o!==a||r===0&&la(i,e,t)||s===0&&la(i,n,t)||o===0&&la(e,i,n)||a===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ca(i){return i>0?1:i<0?-1:0}function Jg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hs(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function jg(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Od(i,t){let e=iu(i.i,i.x,i.y),n=iu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Bf(i,t,e,n){let r=iu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function iu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var ru=class{static triangulate(t,e,n=2){return Ug(t,e,n)}},Xs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];kf(t),zf(n,t);let o=t.length;e.forEach(kf);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,zf(n,e[l]);let a=ru.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function kf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gi=class i extends Xt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<u;m++){let x=m*f-o;for(let _=0;_<c;_++){let v=_*h-s;p.push(v,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,v=x+c*(m+1),M=x+1+c*(m+1),w=x+1+c*m;d.push(_,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ys=class i extends Xt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new $,p=new le;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,v=x+n+1,M=x+n+2,w=x+1;a.push(_,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function dr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Vf(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Vf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=dr(i[e]);for(let r in n)t[r]=n[r]}return t}function Vf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Ud={clone:dr,merge:hn},eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=tb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(r.value);break;case"v2":this.uniforms[n].value=new le().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fa=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Da=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function kr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Kc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ni=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oa=class extends Ni{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qc:s=t,a=2*e-n;break;case tu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qc:o=t,l=2*n-e;break;case tu:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*b+.5*p,v=d*g-d*b;for(let M=0;M!==a;++M)s[M]=m*o[u+M]+x*o[c+M]+_*o[l+M]+v*o[h+M];return s}},Ua=class extends Ni{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Ba=class extends Ni{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ka=class extends Ni{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*b+o[l+g]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=o[c+p],g=o[l+p],m=d*f+p*2,x=h[m],_=h[m+1],v=t*f+p*2,M=u[v],w=u[v+1],E=rb(n,e,x,M,r);s[p]=Bd(E,b,_,w,g)}return s}};function Bd(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function ib(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function rb(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Bd(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=ib(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var yn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Kc(t.settings)&&(n.settings={inTangents:kr(t.settings.inTangents,Array),outTangents:kr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Is:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break;case Jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Kc(this.settings)&&(Gf(this.settings.inTangents,t),Gf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&bg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let b=e[h+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Kc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Gf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Sa;var Oi=class extends yn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Is;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}};za.prototype.ValueTypeName="color";var Va=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}};Va.prototype.ValueTypeName="number";var Ga=class extends Ni{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Kn.slerpFlat(s,0,o,c-a,o,c,l);return s}},qs=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}};qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends yn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Is;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends yn{constructor(t,e,n,r){super(t,e,n,r)}};Ha.prototype.ValueTypeName="vector";var pa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Hf(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Hf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Hf(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Wa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kd=new Wa,Qr=class{constructor(t){this.manager=t!==void 0?t:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=new WeakMap,Xa=class extends Qr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=pa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=zr.get(o);h===void 0&&(h=[],zr.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=Xr("img");function l(){u(),e&&e(this);let h=zr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}zr.delete(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),pa.remove(`image:${t}`);let f=zr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}zr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pa.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var ur=class extends Qr{constructor(t){super(t)}load(t,e,n,r){let s=new cn,o=new Xa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var ua=new $,ha=new Kn,qn=new $,$s=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,ha,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,ha,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new $,Wf=new le,Xf=new le,$e=class extends $s{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Wf,Xf),e.subVectors(Xf,Wf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var jn=class extends $s{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Vr=-90,Gr=1,Ya=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $e(Vr,Gr,t,e);r.layers=this.layers,this.add(r);let s=new $e(Vr,Gr,t,e);s.layers=this.layers,this.add(s);let o=new $e(Vr,Gr,t,e);o.layers=this.layers,this.add(o);let a=new $e(Vr,Gr,t,e);a.layers=this.layers,this.add(a);let l=new $e(Vr,Gr,t,e);l.layers=this.layers,this.add(l);let c=new $e(Vr,Gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},qa=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fu="\\[\\]\\.:\\/",sb=new RegExp("["+Fu+"]","g"),Du="[^"+Fu+"]",ob="[^"+Fu.replace("\\.","")+"]",ab=/((?:WC+[\/:])*)/.source.replace("WC",Du),lb=/(WCOD+)?/.source.replace("WCOD",ob),cb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Du),ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Du),hb=new RegExp("^"+ab+lb+cb+ub+"$"),fb=["material","materials","bones","map"],su=class{constructor(t,e,n){let r=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sb,"")}static parseTrackName(t){let e=hb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);fb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=su;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DS=new Float32Array(1);var Yf=new Te,Zs=class{constructor(t,e,n=0,r=1/0){this.ray=new ar(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yf),this}intersectObject(t,e=!0,n=[]){return ou(t,this,n,e),n.sort(qf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ou(t[r],this,n,e);return n.sort(qf),n}};function qf(i,t){return i.distance-t.distance}function ou(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ou(s[o],t,e,!0)}}var zu=class zu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};zu.prototype.isMatrix2=!0;var au=zu;function Nu(i,t,e,n){let r=db(n);switch(e){case Tu:return i*t;case Au:return i*t/r.components*r.byteLength;case el:return i*t/r.components*r.byteLength;case Gi:return i*t*2/r.components*r.byteLength;case nl:return i*t*2/r.components*r.byteLength;case Eu:return i*t*3/r.components*r.byteLength;case An:return i*t*4/r.components*r.byteLength;case il:return i*t*4/r.components*r.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:case al:return Math.max(i,16)*Math.max(t,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case ll:case cl:case hl:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:case ro:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Il:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case so:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function db(i){switch(i){case _n:case _u:return{byteLength:1,components:1};case es:case Mu:case zn:return{byteLength:2,components:1};case Qa:case tl:return{byteLength:2,components:4};case Bn:case ja:case kn:return{byteLength:4,components:1};case Su:case wu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ap(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function mb(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],b=h[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,h[f]=b)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let b=h[d];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ux=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,px=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ex=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:gb,alphahash_pars_fragment:bb,alphamap_fragment:xb,alphamap_pars_fragment:vb,alphatest_fragment:yb,alphatest_pars_fragment:_b,aomap_fragment:Mb,aomap_pars_fragment:Sb,batching_pars_vertex:wb,batching_vertex:Tb,begin_vertex:Eb,beginnormal_vertex:Ab,bsdfs:Rb,iridescence_fragment:Cb,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Db,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Ub,color_vertex:Bb,common:kb,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:Gb,displacementmap_vertex:Hb,emissivemap_fragment:Wb,emissivemap_pars_fragment:Xb,colorspace_fragment:Yb,colorspace_pars_fragment:qb,envmap_fragment:$b,envmap_common_pars_fragment:Zb,envmap_pars_fragment:Kb,envmap_pars_vertex:Jb,envmap_physical_pars_fragment:lx,envmap_vertex:jb,fog_vertex:Qb,fog_pars_vertex:tx,fog_fragment:ex,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:rx,lights_lambert_fragment:sx,lights_lambert_pars_fragment:ox,lights_pars_begin:ax,lights_toon_fragment:cx,lights_toon_pars_fragment:ux,lights_phong_fragment:hx,lights_phong_pars_fragment:fx,lights_physical_fragment:dx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:bx,lightprobes_pars_fragment:xx,logdepthbuf_fragment:vx,logdepthbuf_pars_fragment:yx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:Mx,map_fragment:Sx,map_pars_fragment:wx,map_particle_fragment:Tx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Cx,morphcolor_vertex:Px,morphnormal_vertex:Ix,morphtarget_pars_vertex:Lx,morphtarget_vertex:Fx,normal_fragment_begin:Dx,normal_fragment_maps:Nx,normal_pars_fragment:Ox,normal_pars_vertex:Ux,normal_vertex:Bx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Hx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:Yx,project_vertex:qx,dithering_fragment:$x,dithering_pars_fragment:Zx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:tv,shadowmask_pars_fragment:ev,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:rv,skinnormal_vertex:sv,specularmap_fragment:ov,specularmap_pars_fragment:av,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:uv,transmission_pars_fragment:hv,uv_pars_fragment:fv,uv_pars_vertex:dv,uv_vertex:pv,worldpos_vertex:mv,background_vert:gv,background_frag:bv,backgroundCube_vert:xv,backgroundCube_frag:vv,cube_vert:yv,cube_frag:_v,depth_vert:Mv,depth_frag:Sv,distance_vert:wv,distance_frag:Tv,equirect_vert:Ev,equirect_frag:Av,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Pv,meshbasic_frag:Iv,meshlambert_vert:Lv,meshlambert_frag:Fv,meshmatcap_vert:Dv,meshmatcap_frag:Nv,meshnormal_vert:Ov,meshnormal_frag:Uv,meshphong_vert:Bv,meshphong_frag:kv,meshphysical_vert:zv,meshphysical_frag:Vv,meshtoon_vert:Gv,meshtoon_frag:Hv,points_vert:Wv,points_frag:Xv,shadow_vert:Yv,shadow_frag:qv,sprite_vert:$v,sprite_frag:Zv},At={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ni={basic:{uniforms:hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:hn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:hn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new et(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:hn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:hn([At.points,At.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:hn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:hn([At.common,At.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:hn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:hn([At.sprite,At.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:hn([At.common,At.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:hn([At.lights,At.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ni.physical={uniforms:hn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Ol={r:0,b:0,g:0},Kv=new Te,lp=new Qt;lp.set(-1,0,0,0,1,0,0,0,1);function Jv(i,t,e,n,r,s){let o=new et(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function p(x){let _=!1,v=d(x);v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===js)?(c===void 0&&(c=new It(new Jr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:dr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lp),c.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new It(new gi(2,2),new un({name:"BackgroundMaterial",uniforms:dr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(Ol,Lu(i)),e.buffers.color.setClear(Ol.r,Ol.g,Ol.b,_,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:p,addToRenderList:b,dispose:m}}function jv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(T,I,O,C,k){let R=!1,F=h(T,C,O,I);s!==F&&(s=F,c(s.object)),R=d(T,C,O,k),R&&p(T,C,O,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,v(T,I,O,C),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function h(T,I,O,C){let k=C.wireframe===!0,R=n[I.id];R===void 0&&(R={},n[I.id]=R);let F=T.isInstancedMesh===!0?T.id:0,D=R[F];D===void 0&&(D={},R[F]=D);let L=D[O.id];L===void 0&&(L={},D[O.id]=L);let U=L[k];return U===void 0&&(U=f(l()),L[k]=U),U}function f(T){let I=[],O=[],C=[];for(let k=0;k<e;k++)I[k]=0,O[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:C,object:T,attributes:{},index:null}}function d(T,I,O,C){let k=s.attributes,R=I.attributes,F=0,D=O.getAttributes();for(let L in D)if(D[L].location>=0){let z=k[L],G=R[L];if(G===void 0&&(L==="instanceMatrix"&&T.instanceMatrix&&(G=T.instanceMatrix),L==="instanceColor"&&T.instanceColor&&(G=T.instanceColor)),z===void 0||z.attribute!==G||G&&z.data!==G.data)return!0;F++}return s.attributesNum!==F||s.index!==C}function p(T,I,O,C){let k={},R=I.attributes,F=0,D=O.getAttributes();for(let L in D)if(D[L].location>=0){let z=R[L];z===void 0&&(L==="instanceMatrix"&&T.instanceMatrix&&(z=T.instanceMatrix),L==="instanceColor"&&T.instanceColor&&(z=T.instanceColor));let G={};G.attribute=z,z&&z.data&&(G.data=z.data),k[L]=G,F++}s.attributes=k,s.attributesNum=F,s.index=C}function b(){let T=s.newAttributes;for(let I=0,O=T.length;I<O;I++)T[I]=0}function g(T){m(T,0)}function m(T,I){let O=s.newAttributes,C=s.enabledAttributes,k=s.attributeDivisors;O[T]=1,C[T]===0&&(i.enableVertexAttribArray(T),C[T]=1),k[T]!==I&&(i.vertexAttribDivisor(T,I),k[T]=I)}function x(){let T=s.newAttributes,I=s.enabledAttributes;for(let O=0,C=I.length;O<C;O++)I[O]!==T[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function _(T,I,O,C,k,R,F){F===!0?i.vertexAttribIPointer(T,I,O,k,R):i.vertexAttribPointer(T,I,O,C,k,R)}function v(T,I,O,C){b();let k=C.attributes,R=O.getAttributes(),F=I.defaultAttributeValues;for(let D in R){let L=R[D];if(L.location>=0){let U=k[D];if(U===void 0&&(D==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),D==="instanceColor"&&T.instanceColor&&(U=T.instanceColor)),U!==void 0){let z=U.normalized,G=U.itemSize,V=t.get(U);if(V===void 0)continue;let W=V.buffer,q=V.type,st=V.bytesPerElement,X=q===i.INT||q===i.UNSIGNED_INT||U.gpuType===ja;if(U.isInterleavedBufferAttribute){let Y=U.data,nt=Y.stride,j=U.offset;if(Y.isInstancedInterleavedBuffer){for(let Q=0;Q<L.locationSize;Q++)m(L.location+Q,Y.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Q=0;Q<L.locationSize;Q++)g(L.location+Q);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Q=0;Q<L.locationSize;Q++)_(L.location+Q,G/L.locationSize,q,z,nt*st,(j+G/L.locationSize*Q)*st,X)}else{if(U.isInstancedBufferAttribute){for(let Y=0;Y<L.locationSize;Y++)m(L.location+Y,U.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Y=0;Y<L.locationSize;Y++)g(L.location+Y);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Y=0;Y<L.locationSize;Y++)_(L.location+Y,G/L.locationSize,q,z,G*st,G/L.locationSize*Y*st,X)}}else if(F!==void 0){let z=F[D];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(L.location,z);break;case 3:i.vertexAttrib3fv(L.location,z);break;case 4:i.vertexAttrib4fv(L.location,z);break;default:i.vertexAttrib1fv(L.location,z)}}}}x()}function M(){A();for(let T in n){let I=n[T];for(let O in I){let C=I[O];for(let k in C){let R=C[k];for(let F in R)u(R[F].object),delete R[F];delete C[k]}}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let I=n[T.id];for(let O in I){let C=I[O];for(let k in C){let R=C[k];for(let F in R)u(R[F].object),delete R[F];delete C[k]}}delete n[T.id]}function E(T){for(let I in n){let O=n[I];for(let C in O){let k=O[C];if(k[T.id]===void 0)continue;let R=k[T.id];for(let F in R)u(R[F].object),delete R[F];delete k[T.id]}}}function y(T){for(let I in n){let O=n[I],C=T.isInstancedMesh===!0?T.id:0,k=O[C];if(k!==void 0){for(let R in k){let F=k[R];for(let D in F)u(F[D].object),delete F[D];delete k[R]}delete O[C],Object.keys(O).length===0&&delete n[I]}}}function A(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Qv(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ty(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==An&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==_n&&E!==kn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(qt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:M,samples:w}}function ey(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Nn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let x=s?0:n,_=x*4,v=m.clippingState||null;l.value=v,v=u(p,f,_,d);for(let M=0;M!==_;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let b=h!==null?h.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==b;++_,v+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var rs=4,ny=6,iy=20,ry=256,ao=new jn,zd=new et,Vu=null,Gu=0,Hu=0,Wu=!1,sy=new $,pr=new $,Bl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=sy}=s;Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vu,Gu,Hu),this._renderer.xr.enabled=Wu,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:zn,format:An,colorSpace:Ls,depthBuffer:!1},r=Vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oy(s)),this._blurMaterial=ly(s,t,e),this._ggxMaterial=ay(s,t,e)}return r}_compileMaterial(t){let e=new It(new Xt,t);this._renderer.compile(e,ao)}_sceneToCubeUV(t,e,n,r,s){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(zd),h.toneMapping=Un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new Jr,new Kt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(zd),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));let M=this._cubeSize;is(r,v*M,_>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(b,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===ki||t.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ao)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-rs?n-p+rs:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,is(s,g,m,3*b,2*b),r.setRenderTarget(s),r.render(a,ao),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,is(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,ao)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-rs?r-this._lodMax+rs:0),f=4*(this._cubeSize-u);is(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,ao)}};function oy(i){let t=[],e=[],n=i,r=i-rs+1+ny;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),b=new Float32Array(d*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,_=m>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];p.set(v,d*f*m);for(let M=0;M<f;M++){let w=u[M*2]*2-1,E=u[M*2+1]*2-1;m===0?pr.set(1,E,w):m===1?pr.set(-w,1,-E):m===2?pr.set(-w,E,1):m===3?pr.set(-1,E,-w):m===4?pr.set(-w,-1,E):pr.set(w,E,-1),pr.toArray(b,(m*f+M)*d)}}let g=new Xt;g.setAttribute("position",new En(p,d)),g.setAttribute("outputDirection",new En(b,d)),e.push(new It(g,null)),n>rs&&n--}return{lodMeshes:e,sizeLods:t}}function Vd(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ay(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ry,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ly(i,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Gd(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Hd(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var kl=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ks(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ti});s.uniforms.tEquirect.value=e;let o=new It(r,s),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=tn),new Ya(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function cy(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Za||d===Ka)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new kl(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Za||d===Ka,b=d===ki||d===fr;if(p||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Bl(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Bl(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===Za?f.mapping=ki:d===Ka&&(f.mapping=fr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function uy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&rr("WebGLRenderer: "+n+" extension not supported."),r}}}function hy(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let M=x[_+0],w=x[_+1],E=x[_+2];f.push(M,w,w,E,E,M)}}else{let x=p.array;b=p.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let M=_+0,w=_+1,E=_+2;f.push(M,w,w,E,E,M)}}let g=new(p.count>=65535?or:Us)(f,1);g.version=b;let m=s.get(h);m&&t.remove(m),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function fy(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function dy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function py(i,t,e){let n=new WeakMap,r=new Be;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let A=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*h),E=new Ns(w,v,M,h);E.type=kn,E.needsUpdate=!0;let y=_*4;for(let S=0;S<h;S++){let T=g[S],I=m[S],O=x[S],C=v*M*4*S;for(let k=0;k<T.count;k++){let R=k*y;d===!0&&(r.fromBufferAttribute(T,k),w[C+R+0]=r.x,w[C+R+1]=r.y,w[C+R+2]=r.z,w[C+R+3]=0),p===!0&&(r.fromBufferAttribute(I,k),w[C+R+4]=r.x,w[C+R+5]=r.y,w[C+R+6]=r.z,w[C+R+7]=0),b===!0&&(r.fromBufferAttribute(O,k),w[C+R+8]=r.x,w[C+R+9]=r.y,w[C+R+10]=r.z,w[C+R+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:E,size:new le(v,M)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function my(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var gy={[du]:"LINEAR_TONE_MAPPING",[pu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[xu]:"AGX_TONE_MAPPING",[vu]:"NEUTRAL_TONE_MAPPING",[bu]:"CUSTOM_TONE_MAPPING"};function by(i,t,e,n,r,s){let o=new Ke(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Xt;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let u=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new It(c,u),f=new jn(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],_=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<x.length;w++){let E=x[w];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let M=o.width,w=o.height;x.length>0&&a===null&&(a=new Ke(M,w,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(M,w,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<x.length;E++){let y=x[E];y.setSize&&y.setSize(M,w)}},this.begin=function(v,M){if(b||v.toneMapping===Un&&x.length===0)return!1;if(m=M,M!==null){let w=M.width,E=M.height;(o.width!==w||o.height!==E)&&this.setSize(w,E)}return _===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Un,!0},this.hasRenderPass=function(){return _},this.end=function(v,M){v.toneMapping=g,b=!0;let w=o,E=a;for(let y=0;y<x.length;y++){let A=x[y];A.enabled!==!1&&(A.render(v,E,w,M),A.needsSwap!==!1&&(w=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,u.defines={},he.getTransfer(d)===_e&&(u.defines.SRGB_TRANSFER="");let y=gy[p];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(h,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var cp=new cn,qu=new Jn(1,1),up=new Ns,hp=new Aa,fp=new ks,Wd=[],Xd=[],Yd=new Float32Array(16),qd=new Float32Array(9),$d=new Float32Array(4);function os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Wd[r];if(s===void 0&&(s=new Float32Array(r),Wd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vl(i,t){let e=Xd[t];e===void 0&&(e=new Int32Array(t),Xd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function _y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function My(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;$d.set(n),i.uniformMatrix2fv(this.addr,!1,$d),Xe(e,n)}}function Sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),Xe(e,n)}}function wy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),Xe(e,n)}}function Ty(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Cy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function Fy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qu.compareFunction=e.isReversedDepthBuffer()?Nl:Dl,s=qu):s=cp,e.setTexture2D(t||s,r)}function Dy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||hp,r)}function Ny(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||fp,r)}function Oy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||up,r)}function Uy(i){switch(i){case 5126:return xy;case 35664:return vy;case 35665:return yy;case 35666:return _y;case 35674:return My;case 35675:return Sy;case 35676:return wy;case 5124:case 35670:return Ty;case 35667:case 35671:return Ey;case 35668:case 35672:return Ay;case 35669:case 35673:return Ry;case 5125:return Cy;case 36294:return Py;case 36295:return Iy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Oy}}function By(i,t){i.uniform1fv(this.addr,t)}function ky(i,t){let e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function zy(i,t){let e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function Vy(i,t){let e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Gy(i,t){let e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hy(i,t){let e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wy(i,t){let e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xy(i,t){i.uniform1iv(this.addr,t)}function Yy(i,t){i.uniform2iv(this.addr,t)}function qy(i,t){i.uniform3iv(this.addr,t)}function $y(i,t){i.uniform4iv(this.addr,t)}function Zy(i,t){i.uniform1uiv(this.addr,t)}function Ky(i,t){i.uniform2uiv(this.addr,t)}function Jy(i,t){i.uniform3uiv(this.addr,t)}function jy(i,t){i.uniform4uiv(this.addr,t)}function Qy(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=qu:o=cp;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function t1(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hp,s[o])}function e1(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||fp,s[o])}function n1(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||up,s[o])}function i1(i){switch(i){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Vy;case 35674:return Gy;case 35675:return Hy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return Yy;case 35668:case 35672:return qy;case 35669:case 35673:return $y;case 5125:return Zy;case 36294:return Ky;case 36295:return Jy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return n1}}var $u=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uy(e.type)}},Zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i1(e.type)}},Ku=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Xu=/(\w+)(\])?(\[|\.)?/g;function Zd(i,t){i.seq.push(t),i.map[t.id]=t}function r1(i,t,e){let n=i.name,r=n.length;for(Xu.lastIndex=0;;){let s=Xu.exec(n),o=Xu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zd(e,c===void 0?new $u(a,i,t):new Zu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Ku(a),Zd(e,h)),e=h}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);r1(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Kd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var s1=37297,o1=0;function a1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Jd=new Qt;function l1(i){he._getMatrix(Jd,he.workingColorSpace,i);let t=`mat3( ${Jd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Fs:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+a1(i.getShaderSource(t),a)}else return s}function c1(i,t){let e=l1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var u1={[du]:"Linear",[pu]:"Reinhard",[mu]:"Cineon",[gu]:"ACESFilmic",[xu]:"AgX",[vu]:"Neutral",[bu]:"Custom"};function h1(i,t){let e=u1[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new $;function f1(){he.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function p1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function co(i){return i!==""}function Qd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(g1,x1)}var b1=new Map;function x1(i,t){let e=oe[t];if(e===void 0){let n=b1.get(t);if(n!==void 0)e=oe[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ju(e)}var v1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(i){return i.replace(v1,y1)}function y1(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function np(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var _1={[Ks]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function M1(i){return _1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var S1={[ki]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE_UV"};function w1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":S1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var T1={[fr]:"ENVMAP_MODE_REFRACTION"};function E1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A1={[fu]:"ENVMAP_BLENDING_MULTIPLY",[md]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};function R1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A1[i.combine]||"ENVMAP_BLENDING_NONE"}function C1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function P1(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=M1(e),c=w1(e),u=E1(e),h=R1(e),f=C1(e),d=d1(e),p=p1(s),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(co).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(co).join(`
`),m.length>0&&(m+=`
`)):(g=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),m=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?oe.tonemapping_pars_fragment:"",e.toneMapping!==Un?h1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,c1("linearToOutputTexel",e.outputColorSpace),f1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(co).join(`
`)),o=Ju(o),o=Qd(o,e),o=tp(o,e),a=Ju(a),a=Qd(a,e),a=tp(a,e),o=ep(o),a=ep(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,v=x+m+a,M=Kd(r,r.VERTEX_SHADER,_),w=Kd(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function E(T){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(b)||"",O=r.getShaderInfoLog(M)||"",C=r.getShaderInfoLog(w)||"",k=I.trim(),R=O.trim(),F=C.trim(),D=!0,L=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let U=jd(r,M,"vertex"),z=jd(r,w,"fragment");Zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+U+`
`+z)}else k!==""?qt("WebGLProgram: Program Info Log:",k):(R===""||F==="")&&(L=!1);L&&(T.diagnostics={runnable:D,programLog:k,vertexShader:{log:R,prefix:g},fragmentShader:{log:F,prefix:m}})}r.deleteShader(M),r.deleteShader(w),y=new ss(r,b),A=m1(r,b)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,s1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var I1=0,ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qu(t),e.set(t,n)),n}},Qu=class{constructor(t){this.id=I1++,this.code=t,this.usedTimes=0}};function L1(i){return i===Gi||i===ro||i===so}function F1(i,t,e,n,r,s){let o=new $r,a=new ju,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,A,S,T,I,O){let C=T.fog,k=I.geometry,R=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,D=t.get(y.envMap||R,F),L=D&&D.mapping===js?D.image.height:null,U=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&qt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=z!==void 0?z.length:0,V=0;k.morphAttributes.position!==void 0&&(V=1),k.morphAttributes.normal!==void 0&&(V=2),k.morphAttributes.color!==void 0&&(V=3);let W,q,st,X;if(U){let Ee=ni[U];W=Ee.vertexShader,q=Ee.fragmentShader}else{W=y.vertexShader,q=y.fragmentShader;let Ee=a.getVertexShaderStage(y),ve=a.getFragmentShaderStage(y);a.update(y,Ee,ve),st=Ee.id,X=ve.id}let Y=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),j=I.isInstancedMesh===!0,Q=I.isBatchedMesh===!0,dt=!!y.map,bt=!!y.matcap,xt=!!D,lt=!!y.aoMap,vt=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,Wt=!!y.normalMap,me=!!y.displacementMap,xe=!!y.emissiveMap,ee=!!y.metalnessMap,be=!!y.roughnessMap,Z=y.anisotropy>0,Ie=y.clearcoat>0,ue=y.dispersion>0,H=y.retroreflectivity>0,P=y.iridescence>0,tt=y.sheen>0,ot=y.transmission>0,ct=Z&&!!y.anisotropyMap,yt=Ie&&!!y.clearcoatMap,_t=Ie&&!!y.clearcoatNormalMap,ut=Ie&&!!y.clearcoatRoughnessMap,ft=P&&!!y.iridescenceMap,Mt=P&&!!y.iridescenceThicknessMap,Vt=tt&&!!y.sheenColorMap,Et=tt&&!!y.sheenRoughnessMap,St=!!y.specularMap,Gt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,ie=ot&&!!y.transmissionMap,J=ot&&!!y.thicknessMap,wt=!!y.gradientMap,ht=!!y.alphaMap,Tt=y.alphaTest>0,Pt=!!y.alphaHash,gt=!!y.extensions,Ht=Un;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Ut={shaderID:U,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:q,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Q,batchingColor:Q&&I._colorsTexture!==null,instancing:j,instancingColor:j&&I.instanceColor!==null,instancingMorph:j&&I.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:dt,matcap:bt,envMap:xt,envMapMode:xt&&D.mapping,envMapCubeUVHeight:L,aoMap:lt,lightMap:vt,bumpMap:pt,normalMap:Wt,displacementMap:me,emissiveMap:xe,normalMapObjectSpace:Wt&&y.normalMapType===vd,normalMapTangentSpace:Wt&&y.normalMapType===Ru,packedNormalMap:Wt&&y.normalMapType===Ru&&L1(y.normalMap.format),metalnessMap:ee,roughnessMap:be,anisotropy:Z,anisotropyMap:ct,clearcoat:Ie,clearcoatMap:yt,clearcoatNormalMap:_t,clearcoatRoughnessMap:ut,dispersion:ue,retroreflection:H,iridescence:P,iridescenceMap:ft,iridescenceThicknessMap:Mt,sheen:tt,sheenColorMap:Vt,sheenRoughnessMap:Et,specularMap:St,specularColorMap:Gt,specularIntensityMap:Yt,transmission:ot,transmissionMap:ie,thicknessMap:J,gradientMap:wt,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:ht,alphaTest:Tt,alphaHash:Pt,combine:y.combine,mapUv:dt&&p(y.map.channel),aoMapUv:lt&&p(y.aoMap.channel),lightMapUv:vt&&p(y.lightMap.channel),bumpMapUv:pt&&p(y.bumpMap.channel),normalMapUv:Wt&&p(y.normalMap.channel),displacementMapUv:me&&p(y.displacementMap.channel),emissiveMapUv:xe&&p(y.emissiveMap.channel),metalnessMapUv:ee&&p(y.metalnessMap.channel),roughnessMapUv:be&&p(y.roughnessMap.channel),anisotropyMapUv:ct&&p(y.anisotropyMap.channel),clearcoatMapUv:yt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(y.sheenRoughnessMap.channel),specularMapUv:St&&p(y.specularMap.channel),specularColorMapUv:Gt&&p(y.specularColorMap.channel),specularIntensityMapUv:Yt&&p(y.specularIntensityMap.channel),transmissionMapUv:ie&&p(y.transmissionMap.channel),thicknessMapUv:J&&p(y.thicknessMap.channel),alphaMapUv:ht&&p(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Wt||Z),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(dt||ht),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Wt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:nt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:V,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:dt&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===se,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||Q)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)A.push(S),A.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(m(A,y),x(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let A=d[y.type],S;if(A){let T=ni[A];S=Ud.clone(T.uniforms)}else S=y.uniforms;return S}function v(y,A){let S=u.get(A);return S!==void 0?++S.usedTimes:(S=new P1(i,A,y,r),c.push(S),u.set(A,S)),S}function M(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function E(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:E}}function D1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function N1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ip(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(f,d,p,b,g,m){let x=a(f,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||N1),n.length>1&&n.sort(d||ip),r.length>1&&r.sort(d||ip)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function O1(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new rp,i.set(n,[o])):r>=s.length?(o=new rp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new et};break;case"SpotLight":e={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function B1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k1=0;function z1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V1(i){let t=new U1,e=B1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,s=new Te,o=new Te;function a(c){let u=0,h=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,_=0,v=0,M=0,w=0,E=0,y=0,A=0,S=0;c.sort(z1);for(let I=0,O=c.length;I<O;I++){let C=c[I],k=C.color,R=C.intensity,F=C.distance,D=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Gi?D=C.shadow.map.texture:D=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=k.r*R,h+=k.g*R,f+=k.b*R;else if(C.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(C.sh.coefficients[L],R);S++}else if(C.isSunLight){let L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let U=C.shadow,z=e.get(C);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=D;let G=U.getViewportCount();for(let V=0;V<G;V++)n.sunShadowMatrix[b+V]=U.getMatrix(V),n.sunShadowCascade[b+V]=U._cascadeData[V];b+=G,p++}n.sun[d]=L,d++}else if(C.isDirectionalLight){let L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let U=C.shadow,z=e.get(C);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=D,n.directionalShadowMatrix[g]=C.shadow.matrix,M++}n.directional[g]=L,g++}else if(C.isSpotLight){let L=t.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(k).multiplyScalar(R),L.distance=F,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,n.spot[x]=L;let U=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,U.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=U.matrix,C.castShadow){let z=e.get(C);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=D,E++}x++}else if(C.isRectAreaLight){let L=t.get(C);L.color.copy(k).multiplyScalar(R),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=L,_++}else if(C.isPointLight){let L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){let U=C.shadow,z=e.get(C);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,z.shadowCameraNear=U.camera.near,z.shadowCameraFar=U.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=C.shadow.matrix,w++}n.point[m]=L,m++}else if(C.isHemisphereLight){let L=t.get(C);L.skyColor.copy(C.color).multiplyScalar(R),L.groundColor.copy(C.groundColor).multiplyScalar(R),n.hemi[v]=L,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==g||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==_||T.hemiLength!==v||T.numSunShadows!==p||T.numDirectionalShadows!==M||T.numPointShadows!==w||T.numSpotShadows!==E||T.numSpotMaps!==y||T.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=S,T.sunLength=d,T.directionalLength=g,T.pointLength=m,T.spotLength=x,T.rectAreaLength=_,T.hemiLength=v,T.numSunShadows=p,T.numDirectionalShadows=M,T.numPointShadows=w,T.numSpotShadows=E,T.numSpotMaps=y,T.numLightProbes=S,n.version=k1++)}function l(c,u){let h=0,f=0,d=0,p=0,b=0,g=0,m=u.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function sp(i){let t=new V1(i),e=[],n=[],r=[];function s(f){h.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function G1(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new sp(i),t.set(r,[a])):s>=o.length?(a=new sp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,X1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Y1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],op=new Te,lo=new $,Yu=new $;function q1(i,t,e){let n=new Bs,r=new le,s=new le,o=new Be,a=new Da,l=new Na,c={},u=e.maxTextureSize,h={[Qn]:nn,[nn]:Qn,[se]:se},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:H1,fragmentShader:W1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new It(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let m=this.type;this.render=function(w,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Kf&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);let A=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=m!==this.type;O&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(k=>k.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,k=w.length;C<k;C++){let R=w[C],F=R.shadow;if(F===void 0){qt("WebGLShadowMap:",R,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let D=F.getFrameExtents();r.multiply(D),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/D.x),r.x=s.x*D.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/D.y),r.y=s.y*D.y,F.mapSize.y=s.y));let L=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=L,F.map===null||O===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ts){if(R.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ke(r.x,r.y,{format:Gi,type:zn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),F.map.texture.name=R.name+".shadowMap",F.map.depthTexture=new Jn(r.x,r.y,kn),F.map.depthTexture.name=R.name+".shadowMapDepth",F.map.depthTexture.format=$n,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ze,F.map.depthTexture.magFilter=Ze}else R.isPointLight?(F.map=new kl(r.x),F.map.depthTexture=new La(r.x,Bn)):(F.map=new Ke(r.x,r.y),F.map.depthTexture=new Jn(r.x,r.y,Bn)),F.map.depthTexture.name=R.name+".shadowMap",F.map.depthTexture.format=$n,this.type===Ks?(F.map.depthTexture.compareFunction=L?Nl:Dl,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ze,F.map.depthTexture.magFilter=Ze);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);let U=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();R.isPointLight!==!0&&F.updateMatrices(R,y);for(let z=0;z<U;z++){let G=F.getCamera(z);if(R.isPointLight){let V=F.camera,W=F.matrix,q=R.distance||V.far;q!==V.far&&(V.far=q,V.updateProjectionMatrix()),lo.setFromMatrixPosition(R.matrixWorld),V.position.copy(lo),Yu.copy(V.position),Yu.add(X1[z]),V.up.copy(Y1[z]),V.lookAt(Yu),V.updateMatrixWorld(),W.makeTranslation(-lo.x,-lo.y,-lo.z),op.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F._frustum.setFromProjectionMatrix(op,V.coordinateSystem,V.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,z),i.clear();else{z===0&&(i.setRenderTarget(F.map),i.clear());let V=F.getViewport(z);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),I.viewport(o)}n=F.getFrustum(z),v(E,y,G,R,this.type)}F.isPointLightShadow!==!0&&this.type===ts&&x(F,y),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,S,T)};function x(w,E){let y=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ke(r.x,r.y,{format:Gi,type:zn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,y,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,y,d,b,null)}function _(w,E,y,A){let S=null,T=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)S=T;else if(S=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=S.uuid,O=E.uuid,C=c[I];C===void 0&&(C={},c[I]=C);let k=C[O];k===void 0&&(k=S.clone(),C[O]=k,E.addEventListener("dispose",M)),S=k}if(S.visible=E.visible,S.wireframe=E.wireframe,A===ts?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=y}return S}function v(w,E,y,A,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ts)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let O=t.update(w),C=w.material;if(Array.isArray(C)){let k=O.groups;for(let R=0,F=k.length;R<F;R++){let D=k[R],L=C[D.materialIndex];if(L&&L.visible){let U=_(w,L,A,S);w.onBeforeShadow(i,w,E,y,O,U,D),i.renderBufferDirect(y,null,O,U,w,D),w.onAfterShadow(i,w,E,y,O,U,D)}}}else if(C.visible){let k=_(w,C,A,S);w.onBeforeShadow(i,w,E,y,O,k,null),i.renderBufferDirect(y,null,O,k,w,null),w.onAfterShadow(i,w,E,y,O,k,null)}}let I=w.children;for(let O=0,C=I.length;O<C;O++)v(I[O],E,y,A,S)}function M(w){w.target.removeEventListener("dispose",M);for(let y in c){let A=c[y],S=w.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}function $1(i,t){function e(){let J=!1,wt=new Be,ht=null,Tt=new Be(0,0,0,0);return{setMask:function(Pt){ht!==Pt&&!J&&(i.colorMask(Pt,Pt,Pt,Pt),ht=Pt)},setLocked:function(Pt){J=Pt},setClear:function(Pt,gt,Ht,Ut,Ee){Ee===!0&&(Pt*=Ut,gt*=Ut,Ht*=Ut),wt.set(Pt,gt,Ht,Ut),Tt.equals(wt)===!1&&(i.clearColor(Pt,gt,Ht,Ut),Tt.copy(wt))},reset:function(){J=!1,ht=null,Tt.set(-1,0,0,0)}}}function n(){let J=!1,wt=!1,ht=null,Tt=null,Pt=null;return{setReversed:function(gt){if(wt!==gt){let Ht=t.get("EXT_clip_control");gt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),wt=gt;let Ut=Pt;Pt=null,this.setClear(Ut)}},getReversed:function(){return wt},setTest:function(gt){gt?Y(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(gt){ht!==gt&&!J&&(i.depthMask(gt),ht=gt)},setFunc:function(gt){if(wt&&(gt=Id[gt]),Tt!==gt){switch(gt){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=gt}},setLocked:function(gt){J=gt},setClear:function(gt){Pt!==gt&&(Pt=gt,wt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){J=!1,ht=null,Tt=null,Pt=null,wt=!1}}}function r(){let J=!1,wt=null,ht=null,Tt=null,Pt=null,gt=null,Ht=null,Ut=null,Ee=null;return{setTest:function(ve){J||(ve?Y(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ve){wt!==ve&&!J&&(i.stencilMask(ve),wt=ve)},setFunc:function(ve,In,Xn){(ht!==ve||Tt!==In||Pt!==Xn)&&(i.stencilFunc(ve,In,Xn),ht=ve,Tt=In,Pt=Xn)},setOp:function(ve,In,Xn){(gt!==ve||Ht!==In||Ut!==Xn)&&(i.stencilOp(ve,In,Xn),gt=ve,Ht=In,Ut=Xn)},setLocked:function(ve){J=ve},setClear:function(ve){Ee!==ve&&(i.clearStencil(ve),Ee=ve)},reset:function(){J=!1,wt=null,ht=null,Tt=null,Pt=null,gt=null,Ht=null,Ut=null,Ee=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,w=null,E=null,y=new et(0,0,0),A=0,S=!1,T=null,I=null,O=null,C=null,k=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,D=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(L)[1]),F=D>=1):L.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),F=D>=2);let U=null,z={},G=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),W=new Be().fromArray(G),q=new Be().fromArray(V);function st(J,wt,ht,Tt){let Pt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(J,gt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<ht;Ht++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(wt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return gt}let X={};X[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(Wr),pt(!1),Wt(lu),Y(i.CULL_FACE),lt(ti);function Y(J){u[J]!==!0&&(i.enable(J),u[J]=!0)}function nt(J){u[J]!==!1&&(i.disable(J),u[J]=!1)}function j(J,wt){return f[J]!==wt?(i.bindFramebuffer(J,wt),f[J]=wt,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Q(J,wt){let ht=p,Tt=!1;if(J){ht=d.get(wt),ht===void 0&&(ht=[],d.set(wt,ht));let Pt=J.textures;if(ht.length!==Pt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ht=Pt.length;gt<Ht;gt++)ht[gt]=i.COLOR_ATTACHMENT0+gt;ht.length=Pt.length,Tt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(ht)}function dt(J){return b!==J?(i.useProgram(J),b=J,!0):!1}let bt={[hr]:i.FUNC_ADD,[jf]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};bt[td]=i.MIN,bt[ed]=i.MAX;let xt={[nd]:i.ZERO,[id]:i.ONE,[rd]:i.SRC_COLOR,[uu]:i.SRC_ALPHA,[ud]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[od]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[hu]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[fd]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(J,wt,ht,Tt,Pt,gt,Ht,Ut,Ee,ve){if(J===ti){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),J!==Jf){if(J!==m||ve!==S){if((x!==hr||M!==hr)&&(i.blendEquation(i.FUNC_ADD),x=hr,M=hr),ve)switch(J){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Js:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",J);break}else switch(J){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cu:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Js:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",J);break}_=null,v=null,w=null,E=null,y.set(0,0,0),A=0,m=J,S=ve}return}Pt=Pt||wt,gt=gt||ht,Ht=Ht||Tt,(wt!==x||Pt!==M)&&(i.blendEquationSeparate(bt[wt],bt[Pt]),x=wt,M=Pt),(ht!==_||Tt!==v||gt!==w||Ht!==E)&&(i.blendFuncSeparate(xt[ht],xt[Tt],xt[gt],xt[Ht]),_=ht,v=Tt,w=gt,E=Ht),(Ut.equals(y)===!1||Ee!==A)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Ee),y.copy(Ut),A=Ee),m=J,S=!1}function vt(J,wt){J.side===se?nt(i.CULL_FACE):Y(i.CULL_FACE);let ht=J.side===nn;wt&&(ht=!ht),pt(ht),J.blending===Bi&&J.transparent===!1?lt(ti):lt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),s.setMask(J.colorWrite);let Tt=J.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),xe(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(J){T!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),T=J)}function Wt(J){J!==$f?(Y(i.CULL_FACE),J!==I&&(J===lu?i.cullFace(i.BACK):J===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),I=J}function me(J){J!==O&&(F&&i.lineWidth(J),O=J)}function xe(J,wt,ht){J?(Y(i.POLYGON_OFFSET_FILL),(C!==wt||k!==ht)&&(C=wt,k=ht,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,ht))):nt(i.POLYGON_OFFSET_FILL)}function ee(J){J?Y(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function be(J){J===void 0&&(J=i.TEXTURE0+R-1),U!==J&&(i.activeTexture(J),U=J)}function Z(J,wt,ht){ht===void 0&&(U===null?ht=i.TEXTURE0+R-1:ht=U);let Tt=z[ht];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[ht]=Tt),(Tt.type!==J||Tt.texture!==wt)&&(U!==ht&&(i.activeTexture(ht),U=ht),i.bindTexture(J,wt||X[J]),Tt.type=J,Tt.texture=wt)}function Ie(){let J=z[U];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function ue(){try{i.compressedTexImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function P(){try{i.texSubImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function tt(){try{i.texSubImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function yt(){try{i.texStorage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function _t(){try{i.texStorage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function ut(){try{i.texImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function ft(){try{i.texImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function Mt(J){return h[J]!==void 0?h[J]:i.getParameter(J)}function Vt(J,wt){h[J]!==wt&&(i.pixelStorei(J,wt),h[J]=wt)}function Et(J){W.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),W.copy(J))}function St(J){q.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),q.copy(J))}function Gt(J,wt){let ht=c.get(wt);ht===void 0&&(ht=new WeakMap,c.set(wt,ht));let Tt=ht.get(J);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,J.name),ht.set(J,Tt))}function Yt(J,wt){let Tt=c.get(wt).get(J);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,J.__bindingPointIndex),l.set(wt,Tt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},U=null,z={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,w=null,E=null,y=new et(0,0,0),A=0,S=!1,T=null,I=null,O=null,C=null,k=null,W.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:nt,bindFramebuffer:j,drawBuffers:Q,useProgram:dt,setBlending:lt,setMaterial:vt,setFlipSided:pt,setCullFace:Wt,setLineWidth:me,setPolygonOffset:xe,setScissorTest:ee,activeTexture:be,bindTexture:Z,unbindTexture:Ie,compressedTexImage2D:ue,compressedTexImage3D:H,texImage2D:ut,texImage3D:ft,pixelStorei:Vt,getParameter:Mt,updateUBOMapping:Gt,uniformBlockBinding:Yt,texStorage2D:yt,texStorage3D:_t,texSubImage2D:P,texSubImage3D:tt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:Et,viewport:St,reset:ie}}function Z1(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(H,P){return p?new OffscreenCanvas(H,P):Xr("canvas")}function g(H,P,tt){let ot=1,ct=ue(H);if((ct.width>tt||ct.height>tt)&&(ot=tt/Math.max(ct.width,ct.height)),ot<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let yt=Math.floor(ot*ct.width),_t=Math.floor(ot*ct.height);f===void 0&&(f=b(yt,_t));let ut=P?b(yt,_t):f;return ut.width=yt,ut.height=_t,ut.getContext("2d").drawImage(H,0,0,yt,_t),qt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+yt+"x"+_t+")."),ut}else return"data"in H&&qt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),H;return H}function m(H){return H.generateMipmaps}function x(H){i.generateMipmap(H)}function _(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(H,P,tt,ot,ct,yt=!1){if(H!==null){if(i[H]!==void 0)return i[H];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let _t;ot&&(_t=t.get("EXT_texture_norm16"),_t||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=P;if(P===i.RED&&(tt===i.FLOAT&&(ut=i.R32F),tt===i.HALF_FLOAT&&(ut=i.R16F),tt===i.UNSIGNED_BYTE&&(ut=i.R8),tt===i.UNSIGNED_SHORT&&_t&&(ut=_t.R16_EXT),tt===i.SHORT&&_t&&(ut=_t.R16_SNORM_EXT)),P===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.R8UI),tt===i.UNSIGNED_SHORT&&(ut=i.R16UI),tt===i.UNSIGNED_INT&&(ut=i.R32UI),tt===i.BYTE&&(ut=i.R8I),tt===i.SHORT&&(ut=i.R16I),tt===i.INT&&(ut=i.R32I)),P===i.RG&&(tt===i.FLOAT&&(ut=i.RG32F),tt===i.HALF_FLOAT&&(ut=i.RG16F),tt===i.UNSIGNED_BYTE&&(ut=i.RG8),tt===i.UNSIGNED_SHORT&&_t&&(ut=_t.RG16_EXT),tt===i.SHORT&&_t&&(ut=_t.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RG8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RG16UI),tt===i.UNSIGNED_INT&&(ut=i.RG32UI),tt===i.BYTE&&(ut=i.RG8I),tt===i.SHORT&&(ut=i.RG16I),tt===i.INT&&(ut=i.RG32I)),P===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),tt===i.UNSIGNED_INT&&(ut=i.RGB32UI),tt===i.BYTE&&(ut=i.RGB8I),tt===i.SHORT&&(ut=i.RGB16I),tt===i.INT&&(ut=i.RGB32I)),P===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),tt===i.UNSIGNED_INT&&(ut=i.RGBA32UI),tt===i.BYTE&&(ut=i.RGBA8I),tt===i.SHORT&&(ut=i.RGBA16I),tt===i.INT&&(ut=i.RGBA32I)),P===i.RGB&&(tt===i.UNSIGNED_SHORT&&_t&&(ut=_t.RGB16_EXT),tt===i.SHORT&&_t&&(ut=_t.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),P===i.RGBA){let ft=yt?Fs:he.getTransfer(ct);tt===i.FLOAT&&(ut=i.RGBA32F),tt===i.HALF_FLOAT&&(ut=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(ut=ft===_e?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&_t&&(ut=_t.RGBA16_EXT),tt===i.SHORT&&_t&&(ut=_t.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function M(H,P){let tt;return H?P===null||P===Bn||P===ns?tt=i.DEPTH24_STENCIL8:P===kn?tt=i.DEPTH32F_STENCIL8:P===es&&(tt=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Bn||P===ns?tt=i.DEPTH_COMPONENT24:P===kn?tt=i.DEPTH_COMPONENT32F:P===es&&(tt=i.DEPTH_COMPONENT16),tt}function w(H,P){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==Ze&&H.minFilter!==tn?Math.log2(Math.max(P.width,P.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?P.mipmaps.length:1}function E(H){let P=H.target;P.removeEventListener("dispose",E),A(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function y(H){let P=H.target;P.removeEventListener("dispose",y),T(P)}function A(H){let P=n.get(H);if(P.__webglInit===void 0)return;let tt=H.source,ot=d.get(tt);if(ot){let ct=ot[P.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(H),Object.keys(ot).length===0&&d.delete(tt)}n.remove(H)}function S(H){let P=n.get(H);i.deleteTexture(P.__webglTexture);let tt=H.source,ot=d.get(tt);delete ot[P.__cacheKey],o.memory.textures--}function T(H){let P=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(P.__webglFramebuffer[ot]))for(let ct=0;ct<P.__webglFramebuffer[ot].length;ct++)i.deleteFramebuffer(P.__webglFramebuffer[ot][ct]);else i.deleteFramebuffer(P.__webglFramebuffer[ot]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[ot])}else{if(Array.isArray(P.__webglFramebuffer))for(let ot=0;ot<P.__webglFramebuffer.length;ot++)i.deleteFramebuffer(P.__webglFramebuffer[ot]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ot=0;ot<P.__webglColorRenderbuffer.length;ot++)P.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[ot]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let tt=H.textures;for(let ot=0,ct=tt.length;ot<ct;ot++){let yt=n.get(tt[ot]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(tt[ot])}n.remove(H)}let I=0;function O(){I=0}function C(){return I}function k(H){I=H}function R(){let H=I;return H>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,H}function F(H){let P=[];return P.push(H.wrapS),P.push(H.wrapT),P.push(H.wrapR||0),P.push(H.magFilter),P.push(H.minFilter),P.push(H.anisotropy),P.push(H.internalFormat),P.push(H.format),P.push(H.type),P.push(H.generateMipmaps),P.push(H.premultiplyAlpha),P.push(H.flipY),P.push(H.unpackAlignment),P.push(H.colorSpace),P.join()}function D(H,P){let tt=n.get(H);if(H.isVideoTexture&&Z(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&tt.__version!==H.version){let ot=H.image;if(ot===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(tt,H,P);return}}else H.isExternalTexture&&(tt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+P)}function L(H,P){let tt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&tt.__version!==H.version){nt(tt,H,P);return}else H.isExternalTexture&&(tt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+P)}function U(H,P){let tt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&tt.__version!==H.version){nt(tt,H,P);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+P)}function z(H,P){let tt=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&tt.__version!==H.version){j(tt,H,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+P)}let G={[sr]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},V={[Ze]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},W={[_d]:i.NEVER,[Ed]:i.ALWAYS,[Md]:i.LESS,[Dl]:i.LEQUAL,[Sd]:i.EQUAL,[Nl]:i.GEQUAL,[wd]:i.GREATER,[Td]:i.NOTEQUAL};function q(H,P){if(P.type===kn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===tn||P.magFilter===Ja||P.magFilter===Qs||P.magFilter===zi||P.minFilter===tn||P.minFilter===Ja||P.minFilter===Qs||P.minFilter===zi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,G[P.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,G[P.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,G[P.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,V[P.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,V[P.minFilter]),P.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,W[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Ze||P.minFilter!==Qs&&P.minFilter!==zi||P.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(H,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function st(H,P){let tt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,P.addEventListener("dispose",E));let ot=P.source,ct=d.get(ot);ct===void 0&&(ct={},d.set(ot,ct));let yt=F(P);if(yt!==H.__cacheKey){ct[yt]===void 0&&(ct[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),ct[yt].usedTimes++;let _t=ct[H.__cacheKey];_t!==void 0&&(ct[H.__cacheKey].usedTimes--,_t.usedTimes===0&&S(P)),H.__cacheKey=yt,H.__webglTexture=ct[yt].texture}return tt}function X(H,P,tt){return Math.floor(Math.floor(H/tt)/P)}function Y(H,P,tt,ot){let yt=H.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,tt,ot,P.data);else{yt.sort((Vt,Et)=>Vt.start-Et.start);let _t=0;for(let Vt=1;Vt<yt.length;Vt++){let Et=yt[_t],St=yt[Vt],Gt=Et.start+Et.count,Yt=X(St.start,P.width,4),ie=X(Et.start,P.width,4);St.start<=Gt+1&&Yt===ie&&X(St.start+St.count-1,P.width,4)===Yt?Et.count=Math.max(Et.count,St.start+St.count-Et.start):(++_t,yt[_t]=St)}yt.length=_t+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Vt=0,Et=yt.length;Vt<Et;Vt++){let St=yt[Vt],Gt=Math.floor(St.start/4),Yt=Math.ceil(St.count/4),ie=Gt%P.width,J=Math.floor(Gt/P.width),wt=Yt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,ie,J,wt,ht,tt,ot,P.data)}H.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function nt(H,P,tt){let ot=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ot=i.TEXTURE_3D);let ct=st(H,P),yt=P.source;e.bindTexture(ot,H.__webglTexture,i.TEXTURE0+tt);let _t=n.get(yt);if(yt.version!==_t.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ht=he.getPrimaries(he.workingColorSpace),Tt=P.colorSpace===bi?null:he.getPrimaries(P.colorSpace),Pt=P.colorSpace===bi||ht===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let ft=g(P.image,!1,r.maxTextureSize);ft=Ie(P,ft);let Mt=s.convert(P.format,P.colorSpace),Vt=s.convert(P.type),Et=v(P.internalFormat,Mt,Vt,P.normalized,P.colorSpace,P.isVideoTexture);q(ot,P);let St,Gt=P.mipmaps,Yt=P.isVideoTexture!==!0,ie=_t.__version===void 0||ct===!0,J=yt.dataReady,wt=w(P,ft);if(P.isDepthTexture)Et=M(P.format===Vi,P.type),ie&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Et,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Et,ft.width,ft.height,0,Mt,Vt,null));else if(P.isDataTexture)if(Gt.length>0){Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,wt,Et,Gt[0].width,Gt[0].height);for(let ht=0,Tt=Gt.length;ht<Tt;ht++)St=Gt[ht],Yt?J&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,St.width,St.height,Mt,Vt,St.data):e.texImage2D(i.TEXTURE_2D,ht,Et,St.width,St.height,0,Mt,Vt,St.data);P.generateMipmaps=!1}else Yt?(ie&&e.texStorage2D(i.TEXTURE_2D,wt,Et,ft.width,ft.height),J&&Y(P,ft,Mt,Vt)):e.texImage2D(i.TEXTURE_2D,0,Et,ft.width,ft.height,0,Mt,Vt,ft.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Yt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Et,Gt[0].width,Gt[0].height,ft.depth);for(let ht=0,Tt=Gt.length;ht<Tt;ht++)if(St=Gt[ht],P.format!==An)if(Mt!==null)if(Yt){if(J)if(P.layerUpdates.size>0){let Pt=Nu(St.width,St.height,P.format,P.type);for(let gt of P.layerUpdates){let Ht=St.data.subarray(gt*Pt/St.data.BYTES_PER_ELEMENT,(gt+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,gt,St.width,St.height,1,Mt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,St.width,St.height,ft.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Et,St.width,St.height,ft.depth,0,St.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,St.width,St.height,ft.depth,Mt,Vt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Et,St.width,St.height,ft.depth,0,Mt,Vt,St.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,wt,Et,Gt[0].width,Gt[0].height);for(let ht=0,Tt=Gt.length;ht<Tt;ht++)St=Gt[ht],P.format!==An?Mt!==null?Yt?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Et,St.width,St.height,0,St.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?J&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,St.width,St.height,Mt,Vt,St.data):e.texImage2D(i.TEXTURE_2D,ht,Et,St.width,St.height,0,Mt,Vt,St.data)}else if(P.isDataArrayTexture)if(Yt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Et,ft.width,ft.height,ft.depth),J)if(P.layerUpdates.size>0){let ht=Nu(ft.width,ft.height,P.format,P.type);for(let Tt of P.layerUpdates){let Pt=ft.data.subarray(Tt*ht/ft.data.BYTES_PER_ELEMENT,(Tt+1)*ht/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,ft.width,ft.height,1,Mt,Vt,Pt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Vt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,ft.width,ft.height,ft.depth,0,Mt,Vt,ft.data);else if(P.isData3DTexture)Yt?(ie&&e.texStorage3D(i.TEXTURE_3D,wt,Et,ft.width,ft.height,ft.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Vt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Et,ft.width,ft.height,ft.depth,0,Mt,Vt,ft.data);else if(P.isFramebufferTexture){if(ie)if(Yt)e.texStorage2D(i.TEXTURE_2D,wt,Et,ft.width,ft.height);else{let ht=ft.width,Tt=ft.height;for(let Pt=0;Pt<wt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Et,ht,Tt,0,Mt,Vt,null),ht>>=1,Tt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ft.parentNode!==ht){ht.appendChild(ft),h.add(P),ht.onpaint=Tt=>{let Pt=Tt.changedElements;for(let gt of h)Pt.includes(gt.image)&&(gt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let Pt=i.RGBA,gt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,gt,Ht,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Yt&&ie){let ht=ue(Gt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Et,ht.width,ht.height)}for(let ht=0,Tt=Gt.length;ht<Tt;ht++)St=Gt[ht],Yt?J&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt,Vt,St):e.texImage2D(i.TEXTURE_2D,ht,Et,Mt,Vt,St);P.generateMipmaps=!1}else if(Yt){if(ie){let ht=ue(ft);e.texStorage2D(i.TEXTURE_2D,wt,Et,ht.width,ht.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Vt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Et,Mt,Vt,ft);m(P)&&x(ot),_t.__version=yt.version,P.onUpdate&&P.onUpdate(P)}H.__version=P.version}function j(H,P,tt){if(P.image.length!==6)return;let ot=st(H,P),ct=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+tt);let yt=n.get(ct);if(ct.version!==yt.__version||ot===!0){e.activeTexture(i.TEXTURE0+tt);let _t=he.getPrimaries(he.workingColorSpace),ut=P.colorSpace===bi?null:he.getPrimaries(P.colorSpace),ft=P.colorSpace===bi||_t===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Mt=P.isCompressedTexture||P.image[0].isCompressedTexture,Vt=P.image[0]&&P.image[0].isDataTexture,Et=[];for(let gt=0;gt<6;gt++)!Mt&&!Vt?Et[gt]=g(P.image[gt],!0,r.maxCubemapSize):Et[gt]=Vt?P.image[gt].image:P.image[gt],Et[gt]=Ie(P,Et[gt]);let St=Et[0],Gt=s.convert(P.format,P.colorSpace),Yt=s.convert(P.type),ie=v(P.internalFormat,Gt,Yt,P.normalized,P.colorSpace),J=P.isVideoTexture!==!0,wt=yt.__version===void 0||ot===!0,ht=ct.dataReady,Tt=w(P,St);q(i.TEXTURE_CUBE_MAP,P);let Pt;if(Mt){J&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ie,St.width,St.height);for(let gt=0;gt<6;gt++){Pt=Et[gt].mipmaps;for(let Ht=0;Ht<Pt.length;Ht++){let Ut=Pt[Ht];P.format!==An?Gt!==null?J?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,Ut.width,Ut.height,Gt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ie,Ut.width,Ut.height,0,Ut.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,Ut.width,Ut.height,Gt,Yt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ie,Ut.width,Ut.height,0,Gt,Yt,Ut.data)}}}else{if(Pt=P.mipmaps,J&&wt){Pt.length>0&&Tt++;let gt=ue(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ie,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Vt){J?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Et[gt].width,Et[gt].height,Gt,Yt,Et[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Et[gt].width,Et[gt].height,0,Gt,Yt,Et[gt].data);for(let Ht=0;Ht<Pt.length;Ht++){let Ee=Pt[Ht].image[gt].image;J?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Ee.width,Ee.height,Gt,Yt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ie,Ee.width,Ee.height,0,Gt,Yt,Ee.data)}}else{J?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Yt,Et[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Gt,Yt,Et[gt]);for(let Ht=0;Ht<Pt.length;Ht++){let Ut=Pt[Ht];J?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Gt,Yt,Ut.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ie,Gt,Yt,Ut.image[gt])}}}m(P)&&x(i.TEXTURE_CUBE_MAP),yt.__version=ct.version,P.onUpdate&&P.onUpdate(P)}H.__version=P.version}function Q(H,P,tt,ot,ct,yt){let _t=s.convert(tt.format,tt.colorSpace),ut=s.convert(tt.type),ft=v(tt.internalFormat,_t,ut,tt.normalized,tt.colorSpace),Mt=n.get(P),Vt=n.get(tt);if(Vt.__renderTarget=P,!Mt.__hasExternalTextures){let Et=Math.max(1,P.width>>yt),St=Math.max(1,P.height>>yt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,yt,ft,Et,St,P.depth,0,_t,ut,null):e.texImage2D(ct,yt,ft,Et,St,0,_t,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,H),be(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ct,Vt.__webglTexture,0,ee(P)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ct,Vt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(H,P,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,H),P.depthBuffer){let ot=P.depthTexture,ct=ot&&ot.isDepthTexture?ot.type:null,yt=M(P.stencilBuffer,ct),_t=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(P),yt,P.width,P.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(P),yt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,yt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,H)}else{let ot=P.textures;for(let ct=0;ct<ot.length;ct++){let yt=ot[ct],_t=s.convert(yt.format,yt.colorSpace),ut=s.convert(yt.type),ft=v(yt.internalFormat,_t,ut,yt.normalized,yt.colorSpace);be(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(P),ft,P.width,P.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(P),ft,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ft,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(H,P,tt){let ot=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,H),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(P.depthTexture);if(ct.__renderTarget=P,(!ct.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ot){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,P.depthTexture.addEventListener("dispose",E)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),q(i.TEXTURE_CUBE_MAP,P.depthTexture);let Mt=s.convert(P.depthTexture.format),Vt=s.convert(P.depthTexture.type),Et;P.depthTexture.format===$n?Et=i.DEPTH_COMPONENT24:P.depthTexture.format===Vi&&(Et=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Et,P.width,P.height,0,Mt,Vt,null)}}else D(P.depthTexture,0);let yt=ct.__webglTexture,_t=ee(P),ut=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,ft=P.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===$n)be(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ut,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ut,yt,0);else if(P.depthTexture.format===Vi)be(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ut,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ut,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(H){let P=n.get(H),tt=H.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==H.depthTexture){let ot=H.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ot){let ct=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ot.removeEventListener("dispose",ct)};ot.addEventListener("dispose",ct),P.__depthDisposeCallback=ct}P.__boundDepthTexture=ot}if(H.depthTexture&&!P.__autoAllocateDepthBuffer)if(tt)for(let ot=0;ot<6;ot++)bt(P.__webglFramebuffer[ot],H,ot);else{let ot=H.texture.mipmaps;ot&&ot.length>0?bt(P.__webglFramebuffer[0],H,0):bt(P.__webglFramebuffer,H,0)}else if(tt){P.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ot]),P.__webglDepthbuffer[ot]===void 0)P.__webglDepthbuffer[ot]=i.createRenderbuffer(),dt(P.__webglDepthbuffer[ot],H,!1);else{let ct=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=P.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}else{let ot=H.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),dt(P.__webglDepthbuffer,H,!1);else{let ct=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(H,P,tt){let ot=n.get(H);P!==void 0&&Q(ot.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&xt(H)}function vt(H){let P=H.texture,tt=n.get(H),ot=n.get(P);H.addEventListener("dispose",y);let ct=H.textures,yt=H.isWebGLCubeRenderTarget===!0,_t=ct.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=P.version,o.memory.textures++),yt){tt.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(P.mipmaps&&P.mipmaps.length>0){tt.__webglFramebuffer[ut]=[];for(let ft=0;ft<P.mipmaps.length;ft++)tt.__webglFramebuffer[ut][ft]=i.createFramebuffer()}else tt.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ut=0;ut<P.mipmaps.length;ut++)tt.__webglFramebuffer[ut]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ut=0,ft=ct.length;ut<ft;ut++){let Mt=n.get(ct[ut]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(H.samples>0&&be(H)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let ft=ct[ut];tt.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let Mt=s.convert(ft.format,ft.colorSpace),Vt=s.convert(ft.type),Et=v(ft.internalFormat,Mt,Vt,ft.normalized,ft.colorSpace,H.isXRRenderTarget===!0),St=ee(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Et,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,tt.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(tt.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),q(i.TEXTURE_CUBE_MAP,P);for(let ut=0;ut<6;ut++)if(P.mipmaps&&P.mipmaps.length>0)for(let ft=0;ft<P.mipmaps.length;ft++)Q(tt.__webglFramebuffer[ut][ft],H,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else Q(tt.__webglFramebuffer[ut],H,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(P)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ut=0,ft=ct.length;ut<ft;ut++){let Mt=ct[ut],Vt=n.get(Mt),Et=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Et=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,Vt.__webglTexture),q(Et,Mt),Q(tt.__webglFramebuffer,H,Mt,i.COLOR_ATTACHMENT0+ut,Et,0),m(Mt)&&x(Et)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(ut=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,ot.__webglTexture),q(ut,P),P.mipmaps&&P.mipmaps.length>0)for(let ft=0;ft<P.mipmaps.length;ft++)Q(tt.__webglFramebuffer[ft],H,P,i.COLOR_ATTACHMENT0,ut,ft);else Q(tt.__webglFramebuffer,H,P,i.COLOR_ATTACHMENT0,ut,0);m(P)&&x(ut),e.unbindTexture()}H.depthBuffer&&xt(H)}function pt(H){let P=H.textures;for(let tt=0,ot=P.length;tt<ot;tt++){let ct=P[tt];if(m(ct)){let yt=_(H),_t=n.get(ct).__webglTexture;e.bindTexture(yt,_t),x(yt),e.unbindTexture()}}}let Wt=[],me=[];function xe(H){if(H.samples>0){if(be(H)===!1){let P=H.textures,tt=H.width,ot=H.height,ct=i.COLOR_BUFFER_BIT,yt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(H),ut=P.length>1;if(ut)for(let Mt=0;Mt<P.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let ft=H.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<P.length;Mt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Vt=n.get(P[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,tt,ot,0,0,tt,ot,ct,i.NEAREST),l===!0&&(Wt.length=0,me.length=0,Wt.push(i.COLOR_ATTACHMENT0+Mt),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(Wt.push(yt),me.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Mt=0;Mt<P.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Vt=n.get(P[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&l){let P=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ee(H){return Math.min(r.maxSamples,H.samples)}function be(H){let P=n.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Z(H){let P=o.render.frame;u.get(H)!==P&&(u.set(H,P),H.update())}function Ie(H,P){let tt=H.colorSpace,ot=H.format,ct=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||tt!==Ls&&tt!==bi&&(he.getTransfer(tt)===_e?(ot!==An||ct!==_n)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",tt)),P}function ue(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=O,this.getTextureUnits=C,this.setTextureUnits=k,this.setTexture2D=D,this.setTexture2DArray=L,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=lt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function K1(i,t){function e(n,r=bi){let s,o=he.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_u)return i.BYTE;if(n===Mu)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Eu)return i.RGB;if(n===An)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Au)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===sl||n===ol||n===al)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===ul||n===hl||n===fl||n===ro||n===dl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ll||n===cl)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ul)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return s.COMPRESSED_R11_EAC;if(n===fl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ro)return s.COMPRESSED_RG11_EAC;if(n===dl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===bl||n===xl||n===vl||n===yl||n===_l||n===Ml||n===Sl||n===wl||n===Tl||n===El||n===Al)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Rl)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Ll||n===so||n===Fl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Il)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===so)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var J1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:J1,fragmentShader:j1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends Zn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new th,m={},x=e.getContextAttributes(),_=null,v=null,M=[],w=[],E=new le,y=null,A=null,S=new $e;S.viewport=new Be;let T=new $e;T.viewport=new Be;let I=[S,T],O=new qa,C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=M[X];return Y===void 0&&(Y=new Zr,M[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=M[X];return Y===void 0&&(Y=new Zr,M[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=M[X];return Y===void 0&&(Y=new Zr,M[X]=Y),Y.getHandSpace()};function R(X){let Y=w.indexOf(X.inputSource);if(Y===-1)return;let nt=M[Y];nt!==void 0&&(nt.update(X.inputSource,X.frame,c||o),nt.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",D);for(let X=0;X<M.length;X++){let Y=w[X];Y!==null&&(w[X]=null,M[X].disconnect(Y))}C=null,k=null,g.reset();for(let X in m)delete m[X];if(t.setRenderTarget(_),d=null,f=null,h=null,r=null,v=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),A!==null){let X=A.camera;X.fov=A.fov,X.zoom=A.zoom,X.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",F),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,j=null,Q=null;x.depth&&(Q=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?Vi:$n,j=x.stencil?ns:Bn);let dt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(dt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ke(f.textureWidth,f.textureHeight,{format:An,type:_n,depthTexture:new Jn(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ke(d.framebufferWidth,d.framebufferHeight,{format:An,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(X){for(let Y=0;Y<X.removed.length;Y++){let nt=X.removed[Y],j=w.indexOf(nt);j>=0&&(w[j]=null,M[j].disconnect(nt))}for(let Y=0;Y<X.added.length;Y++){let nt=X.added[Y],j=w.indexOf(nt);if(j===-1){for(let dt=0;dt<M.length;dt++)if(dt>=w.length){w.push(nt),j=dt;break}else if(w[dt]===null){w[dt]=nt,j=dt;break}if(j===-1)break}let Q=M[j];Q&&Q.connect(nt)}}let L=new $,U=new $;function z(X,Y,nt){L.setFromMatrixPosition(Y.matrixWorld),U.setFromMatrixPosition(nt.matrixWorld);let j=L.distanceTo(U),Q=Y.projectionMatrix.elements,dt=nt.projectionMatrix.elements,bt=Q[14]/(Q[10]-1),xt=Q[14]/(Q[10]+1),lt=(Q[9]+1)/Q[5],vt=(Q[9]-1)/Q[5],pt=(Q[8]-1)/Q[0],Wt=(dt[8]+1)/dt[0],me=bt*pt,xe=bt*Wt,ee=j/(-pt+Wt),be=ee*-pt;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Q[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Z=bt+ee,Ie=xt+ee,ue=me-be,H=xe+(j-be),P=lt*xt/Ie*Z,tt=vt*xt/Ie*Z;X.projectionMatrix.makePerspective(ue,H,P,tt,Z,Ie),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function G(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Y=X.near,nt=X.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),O.near=T.near=S.near=Y,O.far=T.far=S.far=nt,(C!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,k=O.far),O.layers.mask=X.layers.mask|6,S.layers.mask=O.layers.mask&-5,T.layers.mask=O.layers.mask&-3;let j=X.parent,Q=O.cameras;G(O,j);for(let dt=0;dt<Q.length;dt++)G(Q[dt],j);Q.length===2?z(O,S,T):O.projectionMatrix.copy(S.projectionMatrix),A===null&&X.isPerspectiveCamera&&(A={camera:X,fov:X.fov,zoom:X.zoom}),V(X,O,j)};function V(X,Y,nt){nt===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(nt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=wa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(X){return m[X]};let W=null;function q(X,Y){if(u=Y.getViewerPose(c||o),p=Y,u!==null){let nt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let j=!1;nt.length!==O.cameras.length&&(O.cameras.length=0,j=!0);for(let xt=0;xt<nt.length;xt++){let lt=nt[xt],vt=null;if(d!==null)vt=d.getViewport(lt);else{let Wt=h.getViewSubImage(f,lt);vt=Wt.viewport,xt===0&&(t.setRenderTargetTextures(v,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(v))}let pt=I[xt];pt===void 0&&(pt=new $e,pt.layers.enable(xt),pt.viewport=new Be,I[xt]=pt),pt.matrix.fromArray(lt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(lt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(vt.x,vt.y,vt.width,vt.height),xt===0&&(O.matrix.copy(pt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),j===!0&&O.cameras.push(pt)}let Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let xt=h.getDepthInformation(nt[0]);xt&&xt.isValid&&xt.texture&&g.init(xt,r.renderState)}if(Q&&Q.includes("camera-access")&&b){t.state.unbindTexture(),h=n.getBinding();for(let xt=0;xt<nt.length;xt++){let lt=nt[xt].camera;if(lt){let vt=m[lt];vt||(vt=new zs,m[lt]=vt);let pt=h.getCameraImage(lt);vt.sourceTexture=pt}}}}for(let nt=0;nt<M.length;nt++){let j=w[nt],Q=M[nt];j!==null&&Q!==void 0&&Q.update(j,Y,c||o)}W&&W(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}let st=new ap;st.setAnimationLoop(q),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}},Q1=new Te,dp=new Qt;dp.set(-1,0,0,0,1,0,0,0,1);function t_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Lu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,_,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(dp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(g(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",x));let E=M.program;n.updateUBOMapping(v,E);let y=t.render.frame;s[v.id]!==y&&(f(v),s[v.id]=y)}function u(v){let M=h();v.__bindingPointIndex=M;let w=i.createBuffer(),E=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],w=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,A=w.length;y<A;y++){let S=w[y];if(Array.isArray(S))for(let T=0,I=S.length;T<I;T++)d(S[T],y,T,E);else d(S,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,E){if(b(v,M,w,E)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let S=0;for(let T=0;T<A.length;T++){let I=A[T],O=m(I);p(I,v.__data,S),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(S+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function b(v,M,w,E){let y=v.value,A=M+"_"+w;if(E[A]===void 0)return typeof y=="number"||typeof y=="boolean"?E[A]=y:ArrayBuffer.isView(y)?E[A]=y.slice():E[A]=y.clone(),!0;{let S=E[A];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return E[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(v){let M=v.uniforms,w=0,E=16;for(let A=0,S=M.length;A<S;A++){let T=Array.isArray(M[A])?M[A]:[M[A]];for(let I=0,O=T.length;I<O;I++){let C=T[I],k=Array.isArray(C.value)?C.value:[C.value];for(let R=0,F=k.length;R<F;R++){let D=k[R],L=m(D),U=w%E,z=U%L.boundary,G=U+z;w+=z,G!==0&&E-G<L.storage&&(w+=E-G),C.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=L.storage}}}let y=w%E;return y>0&&(w+=E-y),v.__size=w,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}var n_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function i_(){return ei===null&&(ei=new Ra(n_,16,16,Gi,zn),ei.name="DFG_LUT",ei.minFilter=tn,ei.magFilter=tn,ei.wrapS=vn,ei.wrapT=vn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var mr=class{constructor(t={}){let{canvas:e=Rd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let b=d,g=new Set([il,nl,el]),m=new Set([_n,Bn,es,ns,Qa,tl]),x=new Uint32Array(4),_=new Int32Array(4),v=new $,M=null,w=null,E=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1,I=null,O=null,C=null,k=null;this._outputColorSpace=Ne;let R=0,F=0,D=null,L=-1,U=null,z=new Be,G=new Be,V=null,W=new et(0),q=0,st=e.width,X=e.height,Y=1,nt=null,j=null,Q=new Be(0,0,st,X),dt=new Be(0,0,st,X),bt=!1,xt=new Bs,lt=!1,vt=!1,pt=new Te,Wt=new $,me=new Be,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function be(){return D===null?Y:1}let Z=n;function Ie(B,K){return e.getContext(B,K)}let ue,H,P,tt,ot,ct,yt,_t,ut,ft,Mt,Vt,Et,St,Gt,Yt,ie,J,wt,ht,Tt,Pt,gt;try{let B={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",In,!1),Z===null){let K="webgl2";if(Z=Ie(K,B),Z===null)throw Ie(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(B){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",In,!1),Zt("WebGLRenderer: "+B.message),B}function Ht(){ue=new uy(Z),ue.init(),Tt=new K1(Z,ue),H=new ty(Z,ue,t,Tt),P=new $1(Z,ue),H.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),O=Z.createFramebuffer(),C=Z.createFramebuffer(),k=Z.createFramebuffer(),tt=new dy(Z),ot=new D1,ct=new Z1(Z,ue,P,ot,H,Tt,tt),yt=new cy(S),_t=new mb(Z),Pt=new jv(Z,_t),ut=new hy(Z,_t,tt,Pt),ft=new my(Z,ut,_t,Pt,tt),J=new py(Z,H,ct),Gt=new ey(ot),Mt=new F1(S,yt,ue,H,Pt,Gt),Vt=new t_(S,ot),Et=new O1,St=new G1(ue),ie=new Jv(S,yt,P,ft,p,l),Yt=new q1(S,ft,H),gt=new e_(Z,tt,H,P),wt=new Qv(Z,ue,tt),ht=new fy(Z,ue,tt),tt.programs=Mt.programs,S.capabilities=H,S.extensions=ue,S.properties=ot,S.renderLists=Et,S.shadowMap=Yt,S.state=P,S.info=tt}b!==_n&&(A=new by(b,e.width,e.height,a,r,s));let Ut=new eh(S,Z);this.xr=Ut,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let B=ue.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=ue.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(B){B!==void 0&&(Y=B,this.setSize(st,X,!1))},this.getSize=function(B){return B.set(st,X)},this.setSize=function(B,K,at=!0){if(Ut.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=B,X=K,e.width=Math.floor(B*Y),e.height=Math.floor(K*Y),at===!0&&(e.style.width=B+"px",e.style.height=K+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,B,K)},this.getDrawingBufferSize=function(B){return B.set(st*Y,X*Y).floor()},this.setDrawingBufferSize=function(B,K,at){st=B,X=K,Y=at,e.width=Math.floor(B*at),e.height=Math.floor(K*at),this.setViewport(0,0,B,K)},this.setEffects=function(B){if(b===_n){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let K=0;K<B.length;K++)if(B[K].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(Q)},this.setViewport=function(B,K,at,it){B.isVector4?Q.set(B.x,B.y,B.z,B.w):Q.set(B,K,at,it),P.viewport(z.copy(Q).multiplyScalar(Y).round())},this.getScissor=function(B){return B.copy(dt)},this.setScissor=function(B,K,at,it){B.isVector4?dt.set(B.x,B.y,B.z,B.w):dt.set(B,K,at,it),P.scissor(G.copy(dt).multiplyScalar(Y).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(B){P.setScissorTest(bt=B)},this.setOpaqueSort=function(B){nt=B},this.setTransparentSort=function(B){j=B},this.getClearColor=function(B){return B.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(B=!0,K=!0,at=!0){let it=0;if(B){let rt=!1;if(D!==null){let Ct=D.texture.format;rt=g.has(Ct)}if(rt){let Ct=D.texture.type,Ft=m.has(Ct),Rt=ie.getClearColor(),Nt=ie.getClearAlpha(),kt=Rt.r,re=Rt.g,ce=Rt.b;Ft?(x[0]=kt,x[1]=re,x[2]=ce,x[3]=Nt,Z.clearBufferuiv(Z.COLOR,0,x)):(_[0]=kt,_[1]=re,_[2]=ce,_[3]=Nt,Z.clearBufferiv(Z.COLOR,0,_))}else it|=Z.COLOR_BUFFER_BIT}K&&(it|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(it|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&Z.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),I=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",In,!1),ie.dispose(),Et.dispose(),St.dispose(),ot.dispose(),yt.dispose(),ft.dispose(),Pt.dispose(),gt.dispose(),Mt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",lf),Ut.removeEventListener("sessionend",cf),Qi.stop()};function Ee(B){B.preventDefault(),Iu("WebGLRenderer: Context Lost."),T=!0}function ve(){Iu("WebGLRenderer: Context Restored."),T=!1;let B=tt.autoReset,K=Yt.enabled,at=Yt.autoUpdate,it=Yt.needsUpdate,rt=Yt.type;Ht(),tt.autoReset=B,Yt.enabled=K,Yt.autoUpdate=at,Yt.needsUpdate=it,Yt.type=rt}function In(B){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Xn(B){let K=B.target;K.removeEventListener("dispose",Xn),cg(K)}function cg(B){ug(B),ot.remove(B)}function ug(B){let K=ot.get(B).programs;K!==void 0&&(K.forEach(function(at){Mt.releaseProgram(at)}),B.isShaderMaterial&&Mt.releaseShaderCache(B))}this.renderBufferDirect=function(B,K,at,it,rt,Ct){K===null&&(K=xe);let Ft=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Rt=dg(B,K,at,it,rt);P.setMaterial(it,Ft);let Nt=at.index,kt=1;if(it.wireframe===!0){if(Nt=ut.getWireframeAttribute(at),Nt===void 0)return;kt=2}let re=at.drawRange,ce=at.attributes.position,Ot=re.start*kt,ye=(re.start+re.count)*kt;Ct!==null&&(Ot=Math.max(Ot,Ct.start*kt),ye=Math.min(ye,(Ct.start+Ct.count)*kt)),Nt!==null?(Ot=Math.max(Ot,0),ye=Math.min(ye,Nt.count)):ce!=null&&(Ot=Math.max(Ot,0),ye=Math.min(ye,ce.count));let Ge=ye-Ot;if(Ge<0||Ge===1/0)return;Pt.setup(rt,it,Rt,at,Nt);let Re,we=wt;if(Nt!==null&&(Re=_t.get(Nt),we=ht,we.setIndex(Re)),rt.isMesh)it.wireframe===!0?(P.setLineWidth(it.wireframeLinewidth*be()),we.setMode(Z.LINES)):we.setMode(Z.TRIANGLES);else if(rt.isLine){let on=it.linewidth;on===void 0&&(on=1),P.setLineWidth(on*be()),rt.isLineSegments?we.setMode(Z.LINES):rt.isLineLoop?we.setMode(Z.LINE_LOOP):we.setMode(Z.LINE_STRIP)}else rt.isPoints?we.setMode(Z.POINTS):rt.isSprite&&we.setMode(Z.TRIANGLES);if(rt.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))we.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let on=rt._multiDrawStarts,Lt=rt._multiDrawCounts,dn=rt._multiDrawCount,ge=Nt?_t.get(Nt).bytesPerElement:1,wn=ot.get(it).currentProgram.getUniforms();for(let Yn=0;Yn<dn;Yn++)wn.setValue(Z,"_gl_DrawID",Yn),we.render(on[Yn]/ge,Lt[Yn])}else if(rt.isInstancedMesh)we.renderInstances(Ot,Ge,rt.count);else if(at.isInstancedBufferGeometry){let on=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Lt=Math.min(at.instanceCount,on);we.renderInstances(Ot,Ge,Lt)}else we.render(Ot,Ge)};function af(B,K,at,it){I!==null&&B.isNodeMaterial&&I.setObject(it,B),lt===!0&&Gt.setState(B,at,!1),B.transparent===!0&&B.side===se&&B.forceSinglePass===!1?(B.side=nn,B.needsUpdate=!0,zo(B,K,it),B.side=Qn,B.needsUpdate=!0,zo(B,K,it),B.side=se):zo(B,K,it)}this.compile=function(B,K,at=null){at===null&&(at=B),I!==null&&I.renderStart(B,K,at),w=St.get(at),w.init(K),y.push(w),at.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),B!==at&&B.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),vt=this.localClippingEnabled,lt=Gt.init(this.clippingPlanes,vt),lt===!0&&Gt.setGlobalState(this.clippingPlanes,K),I!==null&&Yt.render(w.state.shadowsArray,at,K);let it=new Set;return B.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Ct=rt.material;if(Ct)if(Array.isArray(Ct))for(let Ft=0;Ft<Ct.length;Ft++){let Rt=Ct[Ft];af(Rt,at,K,rt),it.add(Rt)}else af(Ct,at,K,rt),it.add(Ct)}),w=y.pop(),I!==null&&I.renderEnd(),it},this.compileAsync=function(B,K,at=null){let it=this.compile(B,K,at);return new Promise(rt=>{function Ct(){if(it.forEach(function(Ft){let Nt=ot.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&it.delete(Ft)}),it.size===0){rt(B);return}setTimeout(Ct,10)}ue.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ec=null;function hg(B){Ec&&Ec(B)}function lf(){Qi.stop()}function cf(){Qi.start()}let Qi=new ap;Qi.setAnimationLoop(hg),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(B){Ec=B,Ut.setAnimationLoop(B),B===null?Qi.stop():Qi.start()},Ut.addEventListener("sessionstart",lf),Ut.addEventListener("sessionend",cf),this.render=function(B,K){if(K!==void 0&&K.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;I!==null&&I.renderStart(B,K);let at=Ut.enabled===!0&&Ut.isPresenting===!0,it=A!==null&&(D===null||at)&&A.begin(S,D);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(K),K=Ut.getCamera()),B.isScene===!0&&B.onBeforeRender(S,B,K,D),w=St.get(B,y.length),w.init(K),w.state.textureUnits=ct.getTextureUnits(),y.push(w),pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),xt.setFromProjectionMatrix(pt,On,K.reversedDepth),vt=this.localClippingEnabled,lt=Gt.init(this.clippingPlanes,vt),M=Et.get(B,E.length),M.init(),E.push(M),Ut.enabled===!0&&Ut.isPresenting===!0){let Ft=S.xr.getDepthSensingMesh();Ft!==null&&Ac(Ft,K,-1/0,S.sortObjects)}Ac(B,K,0,S.sortObjects),M.finish(),I!==null&&I.updateLights(w.state.lightsArray),S.sortObjects===!0&&M.sort(nt,j),ee=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,ee&&ie.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Gt.beginShadows();let rt=w.state.shadowsArray;if(Yt.render(rt,B,K),lt===!0&&Gt.endShadows(),(it&&A.hasRenderPass())===!1){let Ft=M.opaque,Rt=M.transmissive;if(w.setupLights(),K.isArrayCamera){let Nt=K.cameras;if(Rt.length>0)for(let kt=0,re=Nt.length;kt<re;kt++){let ce=Nt[kt];hf(Ft,Rt,B,ce)}ee&&ie.render(B);for(let kt=0,re=Nt.length;kt<re;kt++){let ce=Nt[kt];uf(M,B,ce,ce.viewport)}}else Rt.length>0&&hf(Ft,Rt,B,K),ee&&ie.render(B),uf(M,B,K)}D!==null&&F===0&&(ct.updateMultisampleRenderTarget(D),ct.updateRenderTargetMipmap(D)),it&&A.end(S),B.isScene===!0&&B.onAfterRender(S,B,K),Pt.resetDefaultState(),L=-1,U=null,y.pop(),y.length>0?(w=y[y.length-1],ct.setTextureUnits(w.state.textureUnits),lt===!0&&Gt.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,I!==null&&I.renderEnd()};function Ac(B,K,at,it){if(B.visible===!1)return;if(B.layers.test(K.layers)){if(B.isGroup)at=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(K);else if(B.isLightProbeGrid)w.pushLightProbeGrid(B);else if(B.isLight)w.pushLight(B),B.castShadow&&w.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(xt)){it&&me.setFromMatrixPosition(B.matrixWorld).applyMatrix4(pt);let Ft=ft.update(B),Rt=B.material;Rt.visible&&M.push(B,Ft,Rt,at,me.z,null,K)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(xt))){let Ft=ft.update(B),Rt=B.material;if(it&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),me.copy(B.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),me.copy(Ft.boundingSphere.center)),me.applyMatrix4(B.matrixWorld).applyMatrix4(pt)),Array.isArray(Rt)){let Nt=Ft.groups;for(let kt=0,re=Nt.length;kt<re;kt++){let ce=Nt[kt],Ot=Rt[ce.materialIndex];Ot&&Ot.visible&&M.push(B,Ft,Ot,at,me.z,ce,K)}}else Rt.visible&&M.push(B,Ft,Rt,at,me.z,null,K)}}let Ct=B.children;for(let Ft=0,Rt=Ct.length;Ft<Rt;Ft++)Ac(Ct[Ft],K,at,it)}function uf(B,K,at,it){let{opaque:rt,transmissive:Ct,transparent:Ft}=B;w.setupLightsView(at),lt===!0&&Gt.setGlobalState(S.clippingPlanes,at),it&&P.viewport(z.copy(it)),rt.length>0&&ko(rt,K,at),Ct.length>0&&ko(Ct,K,at),Ft.length>0&&ko(Ft,K,at),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function hf(B,K,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[it.id]===void 0){let Ot=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[it.id]=new Ke(1,1,{generateMipmaps:!0,type:Ot?zn:_n,minFilter:zi,samples:Math.max(4,H.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Ct=w.state.transmissionRenderTarget[it.id],Ft=it.viewport||z;Ct.setSize(Ft.z*S.transmissionResolutionScale,Ft.w*S.transmissionResolutionScale);let Rt=S.getRenderTarget(),Nt=S.getActiveCubeFace(),kt=S.getActiveMipmapLevel();S.setRenderTarget(Ct),S.getClearColor(W),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),ee&&ie.render(at);let re=S.toneMapping;S.toneMapping=Un;let ce=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),w.setupLightsView(it),lt===!0&&Gt.setGlobalState(S.clippingPlanes,it),ko(B,at,it),ct.updateMultisampleRenderTarget(Ct),ct.updateRenderTargetMipmap(Ct),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ye=0,Ge=K.length;ye<Ge;ye++){let Re=K[ye],{object:we,geometry:on,material:Lt,group:dn}=Re;if(Lt.side===se&&we.layers.test(it.layers)){let ge=Lt.side;Lt.side=nn,Lt.needsUpdate=!0,ff(we,at,it,on,Lt,dn),Lt.side=ge,Lt.needsUpdate=!0,Ot=!0}}Ot===!0&&(ct.updateMultisampleRenderTarget(Ct),ct.updateRenderTargetMipmap(Ct))}S.setRenderTarget(Rt,Nt,kt),S.setClearColor(W,q),ce!==void 0&&(it.viewport=ce),S.toneMapping=re}function ko(B,K,at){let it=K.isScene===!0?K.overrideMaterial:null;for(let rt=0,Ct=B.length;rt<Ct;rt++){let Ft=B[rt],{object:Rt,geometry:Nt,group:kt}=Ft,re=Ft.material;re.allowOverride===!0&&it!==null&&(re=it),Rt.layers.test(at.layers)&&ff(Rt,K,at,Nt,re,kt)}}function ff(B,K,at,it,rt,Ct){I!==null&&rt.isNodeMaterial&&I.setObject(B,rt),B.onBeforeRender(S,K,at,it,rt,Ct),B.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),rt.onBeforeRender(S,K,at,it,B,Ct),rt.transparent===!0&&rt.side===se&&rt.forceSinglePass===!1?(rt.side=nn,rt.needsUpdate=!0,S.renderBufferDirect(at,K,it,rt,B,Ct),rt.side=Qn,rt.needsUpdate=!0,S.renderBufferDirect(at,K,it,rt,B,Ct),rt.side=se):S.renderBufferDirect(at,K,it,rt,B,Ct),B.onAfterRender(S,K,at,it,rt,Ct)}function zo(B,K,at){K.isScene!==!0&&(K=xe);let it=ot.get(B),rt=w.state.lights,Ct=w.state.shadowsArray,Ft=rt.state.version,Rt=Mt.getParameters(B,rt.state,Ct,K,at,w.state.lightProbeGridArray),Nt=Mt.getProgramCacheKey(Rt),kt=it.programs;it.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?K.environment:null,it.fog=K.fog;let re=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;it.envMap=yt.get(B.envMap||it.environment,re),it.envMapRotation=it.environment!==null&&B.envMap===null?K.environmentRotation:B.envMapRotation,kt===void 0&&(B.addEventListener("dispose",Xn),kt=new Map,it.programs=kt);let ce=kt.get(Nt);if(ce!==void 0){if(it.currentProgram===ce&&it.lightsStateVersion===Ft)return pf(B,Rt),ce}else Rt.uniforms=Mt.getUniforms(B),I!==null&&B.isNodeMaterial&&I.build(B,at,Rt),B.onBeforeCompile(Rt,S),ce=Mt.acquireProgram(Rt,Nt),kt.set(Nt,ce),it.uniforms=Rt.uniforms;let Ot=it.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ot.clippingPlanes=Gt.uniform),pf(B,Rt),it.needsLights=mg(B),it.lightsStateVersion=Ft,it.needsLights&&(Ot.ambientLightColor.value=rt.state.ambient,Ot.lightProbe.value=rt.state.probe,Ot.sunLights.value=rt.state.sun,Ot.sunLightShadows.value=rt.state.sunShadow,Ot.directionalLights.value=rt.state.directional,Ot.directionalLightShadows.value=rt.state.directionalShadow,Ot.spotLights.value=rt.state.spot,Ot.spotLightShadows.value=rt.state.spotShadow,Ot.rectAreaLights.value=rt.state.rectArea,Ot.ltc_1.value=rt.state.rectAreaLTC1,Ot.ltc_2.value=rt.state.rectAreaLTC2,Ot.pointLights.value=rt.state.point,Ot.pointLightShadows.value=rt.state.pointShadow,Ot.hemisphereLights.value=rt.state.hemi,Ot.sunShadowMatrix.value=rt.state.sunShadowMatrix,Ot.sunShadowCascade.value=rt.state.sunShadowCascade,Ot.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Ot.spotLightMatrix.value=rt.state.spotLightMatrix,Ot.spotLightMap.value=rt.state.spotLightMap,Ot.pointShadowMatrix.value=rt.state.pointShadowMatrix),it.lightProbeGrid=w.state.lightProbeGridArray.length>0,it.currentProgram=ce,it.uniformsList=null,ce}function df(B){if(B.uniformsList===null){let K=B.currentProgram.getUniforms();B.uniformsList=ss.seqWithValue(K.seq,B.uniforms)}return B.uniformsList}function pf(B,K){let at=ot.get(B);at.outputColorSpace=K.outputColorSpace,at.batching=K.batching,at.batchingColor=K.batchingColor,at.instancing=K.instancing,at.instancingColor=K.instancingColor,at.instancingMorph=K.instancingMorph,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function fg(B,K){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(K.matrixWorld);for(let at=0,it=B.length;at<it;at++){let rt=B[at];if(rt.texture!==null&&rt.boundingBox.containsPoint(v))return rt}return null}function dg(B,K,at,it,rt){K.isScene!==!0&&(K=xe),ct.resetTextureUnits();let Ct=K.fog,Ft=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?K.environment:null,Rt=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:he.workingColorSpace,Nt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,kt=yt.get(it.envMap||Ft,Nt),re=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ce=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ot=!!at.morphAttributes.position,ye=!!at.morphAttributes.normal,Ge=!!at.morphAttributes.color,Re=Un;it.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Re=S.toneMapping);let we=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,on=we!==void 0?we.length:0,Lt=ot.get(it),dn=w.state.lights;if(lt===!0&&(vt===!0||B!==U)){let Ae=B===U&&it.id===L;Gt.setState(it,B,Ae)}let ge=!1;it.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==dn.state.version||Lt.outputColorSpace!==Rt||rt.isBatchedMesh&&Lt.batching===!1||!rt.isBatchedMesh&&Lt.batching===!0||rt.isBatchedMesh&&Lt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Lt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Lt.instancing===!1||!rt.isInstancedMesh&&Lt.instancing===!0||rt.isSkinnedMesh&&Lt.skinning===!1||!rt.isSkinnedMesh&&Lt.skinning===!0||rt.isInstancedMesh&&Lt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Lt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Lt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Lt.instancingMorph===!1&&rt.morphTexture!==null||Lt.envMap!==kt||it.fog===!0&&Lt.fog!==Ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Gt.numPlanes||Lt.numIntersection!==Gt.numIntersection)||Lt.vertexAlphas!==re||Lt.vertexTangents!==ce||Lt.morphTargets!==Ot||Lt.morphNormals!==ye||Lt.morphColors!==Ge||Lt.toneMapping!==Re||Lt.morphTargetsCount!==on||!!Lt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Lt.__version=it.version);let wn=Lt.currentProgram;ge===!0&&(wn=zo(it,K,rt),I&&it.isNodeMaterial&&I.onUpdateProgram(it,wn,Lt));let Yn=!1,Si=!1,Ar=!1,Se=wn.getUniforms(),ze=Lt.uniforms;if(P.useProgram(wn.program)&&(Yn=!0,Si=!0,Ar=!0),it.id!==L&&(L=it.id,Si=!0),Lt.needsLights){let Ae=fg(w.state.lightProbeGridArray,rt);Lt.lightProbeGrid!==Ae&&(Lt.lightProbeGrid=Ae,Si=!0)}if(Yn||U!==B){P.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Se.setValue(Z,"projectionMatrix",B.projectionMatrix),Se.setValue(Z,"viewMatrix",B.matrixWorldInverse);let Ti=Se.map.cameraPosition;Ti!==void 0&&Ti.setValue(Z,Wt.setFromMatrixPosition(B.matrixWorld)),H.logarithmicDepthBuffer&&Se.setValue(Z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Se.setValue(Z,"isOrthographic",B.isOrthographicCamera===!0),U!==B&&(U=B,Si=!0,Ar=!0)}if(Lt.needsLights&&(dn.state.sunShadowMap.length>0&&Se.setValue(Z,"sunShadowMap",dn.state.sunShadowMap,ct),dn.state.directionalShadowMap.length>0&&Se.setValue(Z,"directionalShadowMap",dn.state.directionalShadowMap,ct),dn.state.spotShadowMap.length>0&&Se.setValue(Z,"spotShadowMap",dn.state.spotShadowMap,ct),dn.state.pointShadowMap.length>0&&Se.setValue(Z,"pointShadowMap",dn.state.pointShadowMap,ct)),rt.isSkinnedMesh){Se.setOptional(Z,rt,"bindMatrix"),Se.setOptional(Z,rt,"bindMatrixInverse");let Ae=rt.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Se.setValue(Z,"boneTexture",Ae.boneTexture,ct))}rt.isBatchedMesh&&(Se.setOptional(Z,rt,"batchingTexture"),Se.setValue(Z,"batchingTexture",rt._matricesTexture,ct),Se.setOptional(Z,rt,"batchingIdTexture"),Se.setValue(Z,"batchingIdTexture",rt._indirectTexture,ct),Se.setOptional(Z,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Se.setValue(Z,"batchingColorTexture",rt._colorsTexture,ct));let wi=at.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&J.update(rt,at,wn),(Si||Lt.receiveShadow!==rt.receiveShadow)&&(Lt.receiveShadow=rt.receiveShadow,Se.setValue(Z,"receiveShadow",rt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&K.environment!==null&&(ze.envMapIntensity.value=K.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=i_()),Si){if(Se.setValue(Z,"toneMappingExposure",S.toneMappingExposure),Lt.needsLights&&pg(ze,Ar),Ct&&it.fog===!0&&Vt.refreshFogUniforms(ze,Ct),Vt.refreshMaterialUniforms(ze,it,Y,X,w.state.transmissionRenderTarget[B.id]),Lt.needsLights&&Lt.lightProbeGrid){let Ae=Lt.lightProbeGrid;ze.probesSH.value=Ae.texture,ze.probesMin.value.copy(Ae.boundingBox.min),ze.probesMax.value.copy(Ae.boundingBox.max),ze.probesResolution.value.copy(Ae.resolution)}ss.upload(Z,df(Lt),ze,ct)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ss.upload(Z,df(Lt),ze,ct),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Se.setValue(Z,"center",rt.center),Se.setValue(Z,"modelViewMatrix",rt.modelViewMatrix),Se.setValue(Z,"normalMatrix",rt.normalMatrix),Se.setValue(Z,"modelMatrix",rt.matrixWorld),it.uniformsGroups!==void 0){let Ae=it.uniformsGroups;for(let Ti=0,Rr=Ae.length;Ti<Rr;Ti++){let gf=Ae[Ti];gt.update(gf,wn),gt.bind(gf,wn)}}return wn}function pg(B,K){B.ambientLightColor.needsUpdate=K,B.lightProbe.needsUpdate=K,B.sunLights.needsUpdate=K,B.sunLightShadows.needsUpdate=K,B.directionalLights.needsUpdate=K,B.directionalLightShadows.needsUpdate=K,B.pointLights.needsUpdate=K,B.pointLightShadows.needsUpdate=K,B.spotLights.needsUpdate=K,B.spotLightShadows.needsUpdate=K,B.rectAreaLights.needsUpdate=K,B.hemisphereLights.needsUpdate=K}function mg(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(B,K,at){let it=ot.get(B);it.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),ot.get(B.texture).__webglTexture=K,ot.get(B.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:at,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,K){let at=ot.get(B);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(B,K=0,at=0){D=B,R=K,F=at;let it=null,rt=!1,Ct=!1;if(B){let Rt=ot.get(B);if(Rt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(Z.FRAMEBUFFER,Rt.__webglFramebuffer),z.copy(B.viewport),G.copy(B.scissor),V=B.scissorTest,P.viewport(z),P.scissor(G),P.setScissorTest(V),L=-1;return}else if(Rt.__webglFramebuffer===void 0)ct.setupRenderTarget(B);else if(Rt.__hasExternalTextures)ct.rebindTextures(B,ot.get(B.texture).__webglTexture,ot.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let re=B.depthTexture;if(Rt.__boundDepthTexture!==re){if(re!==null&&ot.has(re)&&(B.width!==re.image.width||B.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(B)}}let Nt=B.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Ct=!0);let kt=ot.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(kt[K])?it=kt[K][at]:it=kt[K],rt=!0):B.samples>0&&ct.useMultisampledRTT(B)===!1?it=ot.get(B).__webglMultisampledFramebuffer:Array.isArray(kt)?it=kt[at]:it=kt,z.copy(B.viewport),G.copy(B.scissor),V=B.scissorTest}else z.copy(Q).multiplyScalar(Y).floor(),G.copy(dt).multiplyScalar(Y).floor(),V=bt;if(at!==0&&(it=O),P.bindFramebuffer(Z.FRAMEBUFFER,it)&&P.drawBuffers(B,it),P.viewport(z),P.scissor(G),P.setScissorTest(V),rt){let Rt=ot.get(B.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Rt.__webglTexture,at)}else if(Ct){let Rt=K;for(let Nt=0;Nt<B.textures.length;Nt++){let kt=ot.get(B.textures[Nt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Nt,kt.__webglTexture,at,Rt)}}else if(B!==null&&at!==0){let Rt=ot.get(B.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Rt.__webglTexture,at)}L=-1};function mf(B){let K=ot.get(B);return(K.__readFormat!==B.format||K.__readType!==B.type)&&(K.__readFormat=B.format,K.__readType=B.type,K.__formatReadable=H.textureFormatReadable(B.format),K.__typeReadable=H.textureTypeReadable(B.type)),K}this.readRenderTargetPixels=function(B,K,at,it,rt,Ct,Ft,Rt=0){if(!(B&&B.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){P.bindFramebuffer(Z.FRAMEBUFFER,Nt);try{let kt=B.textures[Rt],re=kt.format,ce=kt.type;B.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Rt);let Ot=mf(kt);if(Ot.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=B.width-it&&at>=0&&at<=B.height-rt&&Z.readPixels(K,at,it,rt,Tt.convert(re),Tt.convert(ce),Ct)}finally{let kt=D!==null?ot.get(D).__webglFramebuffer:null;P.bindFramebuffer(Z.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(B,K,at,it,rt,Ct,Ft,Rt=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=ot.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt)if(K>=0&&K<=B.width-it&&at>=0&&at<=B.height-rt){P.bindFramebuffer(Z.FRAMEBUFFER,Nt);let kt=B.textures[Rt],re=kt.format,ce=kt.type;B.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Rt);let Ot=mf(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ye),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ct.byteLength,Z.STREAM_READ),Z.readPixels(K,at,it,rt,Tt.convert(re),Tt.convert(ce),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let Ge=D!==null?ot.get(D).__webglFramebuffer:null;P.bindFramebuffer(Z.FRAMEBUFFER,Ge);let Re=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Pd(Z,Re,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ye),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ct),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ye),Z.deleteSync(Re),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,K=null,at=0){let it=Math.pow(2,-at),rt=Math.floor(B.image.width*it),Ct=Math.floor(B.image.height*it),Ft=K!==null?K.x:0,Rt=K!==null?K.y:0;ct.setTexture2D(B,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,at,0,0,Ft,Rt,rt,Ct),P.unbindTexture()},this.copyTextureToTexture=function(B,K,at=null,it=null,rt=0,Ct=0){let Ft,Rt,Nt,kt,re,ce,Ot,ye,Ge,Re=B.isCompressedTexture?B.mipmaps[Ct]:B.image;if(at!==null)Ft=at.max.x-at.min.x,Rt=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,re=at.min.y,ce=at.isBox3?at.min.z:0;else{let ze=Math.pow(2,-rt);Ft=Math.floor(Re.width*ze),Rt=Math.floor(Re.height*ze),B.isDataArrayTexture?Nt=Re.depth:B.isData3DTexture?Nt=Math.floor(Re.depth*ze):Nt=1,kt=0,re=0,ce=0}it!==null?(Ot=it.x,ye=it.y,Ge=it.z):(Ot=0,ye=0,Ge=0);let we=Tt.convert(K.format),on=Tt.convert(K.type),Lt;K.isData3DTexture?(ct.setTexture3D(K,0),Lt=Z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ct.setTexture2DArray(K,0),Lt=Z.TEXTURE_2D_ARRAY):(ct.setTexture2D(K,0),Lt=Z.TEXTURE_2D),P.activeTexture(Z.TEXTURE0),P.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),P.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),P.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);let dn=P.getParameter(Z.UNPACK_ROW_LENGTH),ge=P.getParameter(Z.UNPACK_IMAGE_HEIGHT),wn=P.getParameter(Z.UNPACK_SKIP_PIXELS),Yn=P.getParameter(Z.UNPACK_SKIP_ROWS),Si=P.getParameter(Z.UNPACK_SKIP_IMAGES);P.pixelStorei(Z.UNPACK_ROW_LENGTH,Re.width),P.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Re.height),P.pixelStorei(Z.UNPACK_SKIP_PIXELS,kt),P.pixelStorei(Z.UNPACK_SKIP_ROWS,re),P.pixelStorei(Z.UNPACK_SKIP_IMAGES,ce);let Ar=B.isDataArrayTexture||B.isData3DTexture,Se=K.isDataArrayTexture||K.isData3DTexture;if(B.isDepthTexture){let ze=ot.get(B),wi=ot.get(K),Ae=ot.get(ze.__renderTarget),Ti=ot.get(wi.__renderTarget);P.bindFramebuffer(Z.READ_FRAMEBUFFER,Ae.__webglFramebuffer),P.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Rr=0;Rr<Nt;Rr++)Ar&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,rt,ce+Rr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ot.get(K).__webglTexture,Ct,Ge+Rr)),Z.blitFramebuffer(kt,re,Ft,Rt,Ot,ye,Ft,Rt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);P.bindFramebuffer(Z.READ_FRAMEBUFFER,null),P.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(rt!==0||B.isRenderTargetTexture||ot.has(B)){let ze=ot.get(B),wi=ot.get(K);P.bindFramebuffer(Z.READ_FRAMEBUFFER,C),P.bindFramebuffer(Z.DRAW_FRAMEBUFFER,k);for(let Ae=0;Ae<Nt;Ae++)Ar?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ze.__webglTexture,rt,ce+Ae):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ze.__webglTexture,rt),Se?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,wi.__webglTexture,Ct,Ge+Ae):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,wi.__webglTexture,Ct),rt!==0?Z.blitFramebuffer(kt,re,Ft,Rt,Ot,ye,Ft,Rt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Se?Z.copyTexSubImage3D(Lt,Ct,Ot,ye,Ge+Ae,kt,re,Ft,Rt):Z.copyTexSubImage2D(Lt,Ct,Ot,ye,kt,re,Ft,Rt);P.bindFramebuffer(Z.READ_FRAMEBUFFER,null),P.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Se?B.isDataTexture||B.isData3DTexture?Z.texSubImage3D(Lt,Ct,Ot,ye,Ge,Ft,Rt,Nt,we,on,Re.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(Lt,Ct,Ot,ye,Ge,Ft,Rt,Nt,we,Re.data):Z.texSubImage3D(Lt,Ct,Ot,ye,Ge,Ft,Rt,Nt,we,on,Re):B.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ct,Ot,ye,Ft,Rt,we,on,Re.data):B.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ct,Ot,ye,Re.width,Re.height,we,Re.data):Z.texSubImage2D(Z.TEXTURE_2D,Ct,Ot,ye,Ft,Rt,we,on,Re);P.pixelStorei(Z.UNPACK_ROW_LENGTH,dn),P.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ge),P.pixelStorei(Z.UNPACK_SKIP_PIXELS,wn),P.pixelStorei(Z.UNPACK_SKIP_ROWS,Yn),P.pixelStorei(Z.UNPACK_SKIP_IMAGES,Si),Ct===0&&K.generateMipmaps&&Z.generateMipmap(Lt),P.unbindTexture()},this.initRenderTarget=function(B){ot.get(B).__webglFramebuffer===void 0&&ct.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?ct.setTextureCube(B,0):B.isData3DTexture?ct.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?ct.setTexture2DArray(B,0):ct.setTexture2D(B,0),P.unbindTexture()},this.resetState=function(){R=0,F=0,D=null,P.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};function pp(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function mp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function gp(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var r_=[],ih=new Map,s_=0;function uo(i){r_=i,ih=new Map(i.flatMap(t=>t.items.map(e=>[o_(t.id,e.id),e]))),s_++}function o_(i,t){return`pack:${i}:${t}`}function rh(i){return i.startsWith("pack:")}function Gl(i){return rh(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function sh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function bp(i){return i==="robot_vacuum"||rh(i)&&i.endsWith(":robot_vacuum")}function ho(i){return i.z>.05}function xp(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&ho(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var a_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function vp(i){return Me(i)?.parts.find(t=>t.screen)}function Me(i){if(!rh(i))return;let t=ih.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=a_[e];return r?ih.get(`pack:${r}:${n.join(":")}`):void 0}function rn(i,t){let e=Me(t.type);if(t.mount_y!=null)return t.mount_y;let n=Sp(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Wl;if(yp.has(t.type))return Math.max(0,i.height-_p(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return nh(i,t)+Mp(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?nh(i,t):gr(t)||nh(i,t)}}function nh(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>$t([t.x,t.z],n.points))?0:Hl(i,t.x,t.z)}var as={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Vn(i){return i==="hedge"||i==="fence"||i==="pergola"}function oh(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Vn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Yl(i){return[...i.rooms,...oh(i)]}function c_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=s(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function u_(i,t,e,n){return br(i,t)+as[t.type]-fo(i,t,e,n)}var ah=-.2,Xl={set:!1,level:ah};function Tp(i){let t=i?.settings.terrain??null;Xl={set:t?.level!=null,level:t?.level??ah}}function ls(i,t){return Xl.level}function Ep(i){return i.elevation>.3?0:Xl.set?Xl.level-i.elevation:ah}function br(i,t){return Ep(i)+(t.offset??0)}function fo(i,t,e,n){return t.type==="pool"?0:c_(t,e,n)}function Hl(i,t,e){let n=(i.outdoor??[]).filter(s=>!Vn(s.type)&&s.type!=="pool"&&$t([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?u_(i,r,t,e):Ep(i)}function ql(i,t){return br(i,t)+(t.above?Rp(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function h_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Rp(i):1.5}function lh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Vn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>$t(n,e.points)))}function Ap(i,t){return!t.above&&!lh(i,t)?$l(i,t)-.05:ql(i,t)-h_(t)}function $l(i,t){return ql(i,t)-.15}function Rp(i){return i.height&&i.height>.3?i.height:1.2}var f_={type:"none",pitch:35,overhang:.4},gA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...f_}};var Cp=.3;var Pp=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Wl=1.75;var yp=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function _p(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var Ip=new Set(["stairs","stairs_u"]);function Lp(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:u,rise:e/n}}function Fp(i){return Pp.has(i)||!!Me(i)?.light}var d_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function gr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var wp=.04,p_=1.2;function Mp(i,t,e,n=0){let r=0;for(let s of i.furniture)!(d_.has(s.type)||Me(s.type)?.surface)||!$t([t,e],Xi(s))||s.type==="worktop"&&n>0&&s.h-wp>=p_&&n<=s.h-wp-.02||(r=Math.max(r,s.h));return r}var Zl=new Set(["wall_switch","wall_socket"]),m_=4;function Dp(i){let t=(i.gangs??[]).slice(0,m_);return t.length?t:[{entity:null}]}function Sp(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var l_=new Set([...Pp,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var g_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],b_=["standard","bars","glass_wall"];function Hi(i,t){return i.type==="door"?i.style&&g_.includes(i.style)?i.style:t?"front":"interior":i.style&&b_.includes(i.style)?i.style:"standard"}function Np(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Op(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Mn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Gn(i){return Math.abs(Mn(i))}function Wi(i){let t=Mn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Up(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function Bp(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Xi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function $t(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function uh(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var ke=(i,t)=>[i[0]-t[0],i[1]-t[1]],ii=(i,t)=>[i[0]+t[0],i[1]+t[1]],Rn=(i,t)=>[i[0]*t,i[1]*t],us=(i,t)=>i[0]*t[0]+i[1]*t[1],cs=(i,t)=>i[0]*t[1]-i[1]*t[0],po=i=>Math.hypot(i[0],i[1]),Sn=i=>{let t=po(i)||1;return[i[0]/t,i[1]/t]},ch=i=>[-i[1],i[0]],kp=i=>[i[1],-i[0]];function ri(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let T=0;T<o.length;T++)if(Math.abs(o[T][0]-S[0])<=n&&Math.abs(o[T][1]-S[1])<=n)return T;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let T=S.points;if(T.length<3||Math.abs(Mn(T))<1e-6)continue;let I=Mn(T)>0,O=T.map(a);for(let C=0;C<T.length;C++){let k=O[C],R=O[(C+1)%T.length];k!==R&&l.push(I?{u:k,v:R,room:S.id,edge:C,forward:!0}:{u:R,v:k,room:S.id,edge:C,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),u=new Set;for(let S of i){let T=S.points;T.length<3||(S.wall_splits??[]).forEach((I,O)=>{if(!I||O>=T.length)return;let C=T[O],k=ke(T[(O+1)%T.length],C),R=po(k);for(let F of I)F>n&&F<R-n&&u.add(a(ii(C,Rn(k,F/R))))})}let h=[];for(let S of l){let T=o[S.u],I=o[S.v],O=ke(I,T),C=po(O),k=Rn(O,1/C),R=[];for(let D=0;D<o.length;D++){if(D===S.u||D===S.v)continue;let L=ke(o[D],T),U=us(L,k);U<=n||U>=C-n||Math.abs(cs(k,L))<=n&&R.push({t:U,id:D})}R.sort((D,L)=>D.t-L.t);let F=[{t:0,id:S.u},...R,{t:C,id:S.v}];for(let D=0;D+1<F.length;D++){let L=F[D],U=F[D+1],z=S.forward?L.t:C-U.t,G=S.forward?U.t:C-L.t;h.push({u:L.id,v:U.id,room:S.room,edge:S.edge,t0:z,t1:G})}}let f=new Map;for(let S of h){let T=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,I=f.get(T);I||f.set(T,I=[]),I.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of h){let T=`${S.room}:${S.edge}`;p.set(T,[...p.get(T)??[],S.t0].sort((I,O)=>I-O))}let b=S=>{let T=i.find(O=>O.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(T))return T;let I=p.get(`${S.room}:${S.edge}`)??[];return T[I.indexOf(S.t0)]??null},g=S=>{let T=S.map(b).filter(O=>typeof O=="number"&&O>0);if(T.length)return Math.min(...T);let I=S.map(O=>i.find(C=>C.id===O.room)?.ceiling_height);return I.every(O=>typeof O=="number"&&O>0)?Math.max(...I):void 0},m=S=>{let T=S.map(I=>i.find(O=>O.id===I.room)?.wall_thickness?.[I.edge]).filter(I=>typeof I=="number"&&I>0);return T.length?Math.max(...T):void 0},x=S=>{for(let T of S){let I=i.find(R=>R.id===T.room),O=I?.wall_slopes?.[T.edge];if(!I||!O)continue;let C=I.points[T.edge],k=I.points[(T.edge+1)%I.points.length];return{p:[C[0],C[1]],q:[k[0],k[1]],h0:Math.max(.05,O[0]),h1:Math.max(.05,O[1])}}},_=S=>S.some(T=>b(T)===0),v=S=>{let T=x(S);return T?{height:Math.max(T.h0,T.h1),slope:T}:{height:g(S)}},M=[],w=[];for(let S of f.values()){let T=S[0],I=S.find(O=>O!==T&&O.u===T.v&&O.v===T.u&&O.room!==T.room);for(let O of S)O!==T&&O!==I&&O.room!==T.room&&r.push(`overlap:${T.room}:${O.room}`);if(_(I?[T,I]:[T])){I&&M.push([T.room,I.room]);continue}if(I){let O=m([T,I])??t.interior;w.push({a:T.u,b:T.v,left:O/2,right:O/2,exterior:!1,roomLeft:T.room,roomRight:I.room,sources:[d(T),d(I)],...v([T,I])})}else w.push({a:T.u,b:T.v,left:0,right:m([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[d(T)],...v([T])})}let E=S=>Sn(ke(o[S.b],o[S.a]));for(let S of w){if(S.exterior||S.free)continue;let T=new Set;for(let O of[S.a,S.b])for(let C of w)!C.exterior||C.free||C.a!==O&&C.b!==O||Math.abs(cs(E(S),E(C)))>1e-6||(C.roomLeft===S.roomLeft?T.add("left"):C.roomLeft===S.roomRight&&T.add("right"));if(T.size!==1)continue;let I=S.left+S.right;T.has("left")?(S.left=0,S.right=I):(S.left=I,S.right=0)}s.forEach((S,T)=>{let[I,O]=c[T];if(I===O)return;let C=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],k=i.find(D=>D.points.length>=3&&$t(C,D.points))?.id??null,R=(S.thickness??t.interior)/2,F=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:I,b:O,left:R,right:R,exterior:!1,roomLeft:k,roomRight:k,sources:[],height:F})}),w=v_(w,o,u);let y=__(w,o);return{walls:w.map((S,T)=>{let I=o[S.a],O=o[S.b],C=y.get(`${T}:a`),k=y.get(`${T}:b`),R=M_([C.right,k.left,O,k.right,C.left,I],1e-6);return{id:x_(I,O),a:[I[0],I[1]],b:[O[0],O[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:R,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function x_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function zp(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function v_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=zp(l)),c.a!==o&&(c=zp(c)),l.a===c.b)continue;let u=Sn(ke(t[l.b],t[l.a])),h=Sn(ke(t[c.b],t[c.a]));if(Math.abs(cs(u,h))>1e-6||us(u,h)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:y_(l.sources,c.sources)},d=n.filter((p,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function y_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function __(i,t){let e=new Map;i.forEach((r,s)=>{let o=Sn(ke(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:Rn(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:ii(o,Rn(ch(c.d),c.left)),right:ii(o,Rn(kp(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],h=s[(c+1)%s.length],f=ii(o,Rn(ch(u.d),u.left)),d=ii(o,Rn(kp(h.d),h.right)),p=cs(u.d,h.d);if(Math.abs(p)<1e-4)continue;let b=cs(ke(d,f),h.d)/p,g=ii(f,Rn(u.d,b));po(ke(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function M_(i,t){let e=i.filter((r,s)=>po(ke(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=ke(o,s),c=ke(a,o);if(Math.abs(cs(Sn(l),Sn(c)))<1e-7&&us(l,c)>0){e=e.filter((u,h)=>h!==r),n=!0;break}}}return e}function hh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Sn(ke(r,n));return ii(n,Rn(s,e))}function Vp(i,t){let e=ke(i.b,i.a),n=ch(Sn(e)),r=a=>t.some(l=>l.points.length>=3&&$t(a,l.points)),s=0,o=0;for(let a of[.2,.5,.8]){let l=ii(i.a,Rn(e,a));r(ii(l,Rn(n,i.left+.2)))&&s++,r(ke(l,Rn(n,i.right+.2)))&&o++}return s>=2&&o===0?!0:o>=2&&s===0?!1:null}function hs(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Sn(ke(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,ii(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function fs(i,t,e){if(!t.wall)return S_(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=hh(e.room,0,t.offset);return{wall:n,s:us(ke(r,n.a),Sn(ke(n.b,n.a)))}}function fh(i,t,e){if(!t.exterior||t.free)return null;let n=e?t.b:t.a,r=Sn(ke(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||!a.exterior||a.free||!s(e?a.a:a.b)||us(Sn(ke(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function S_(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=hh(t,e,n);return{wall:r,s:us(ke(o,r.a),Sn(ke(r.b,r.a)))}}return null}function Kl(i,t,e,n){let r=t.rotation*Math.PI/180,s=[-Math.sin(r),Math.cos(r)],o=Math.max(.005,t.d),a=null;for(let c of i){let u=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(u<.05)continue;let h=[(c.b[0]-c.a[0])/u,(c.b[1]-c.a[1])/u],f=(t.x-c.a[0])*h[0]+(t.z-c.a[1])*h[1];if(f<-.02||f>u+.02)continue;let d=[-h[1],h[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=s[0]*d[0]+s[1]*d[1]>=0?1:-1;if(Math.abs(s[0]*d[0]+s[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(g+b*(o/2)));if(!m&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+h[0]*f,v=c.a[1]+h[1]*f,M=m?g+b*(o/2):p,w=c.slope?uh(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:v+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var xr=Math.PI/180;function fn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function sn(i){let t=fn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*xr),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*xr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=qp(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function dh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var ph=.14;function Hp(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function mh(i,t){return sn(i).rh-ph>t+.01}function Wp(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of dh(i)){if(o.open||n!==void 0&&!mh(o,n))continue;let a=o.id==="roof_1wpoq01p"?Math.min(o.x0,o.x1)-.1:Math.min(o.x0,o.x1),l=o.id==="roof_topfhghm"?Math.max(o.x0,o.x1)+.1:Math.max(o.x0,o.x1),c=Math.min(o.z0,o.z1),u=Math.max(o.z0,o.z1);if(t<a-1e-6||t>l+1e-6||e<c-1e-6||e>u+1e-6||o.points&&o.points.length>=3&&!$t([t,e],o.points))continue;let[h,f]=oi(o,t,e),d=o.shape==="flat"||o.shape==="parapet",p=Math.max(0,o.overhang??s),b=d?null:bo(yr(o,{u0:p,u1:p,a:p,b:p}),h,f);if(o.shape==="hip"&&o.points?.length===6&&b===null)continue;let g=(b??sn(o).y(f))-ph;r=r===null?g:Math.max(r,g)}return r}function Ql(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Gn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=Gp([a[0]-o[0],a[1]-o[1]]),u=Gp([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],p=h[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+p*h[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function Gp(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Xp(i,t){if(i.points&&i.points.length>=3)return Ql(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function Yp(i,t,e,n){let r=ri(i,{exterior:e,interior:n},t).walls.filter(h=>h.exterior&&!h.free);if(!r.length)return null;let s=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,o=new Map,a=r.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let f of[h.a,h.b])o.set(s(f),[...o.get(s(f))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let f=[h.a,h.b],d=h.b;for(;;){let p=(o.get(s(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=s(p.a)===s(d)?p.b:p.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(Gn(f))>Math.abs(Gn(c)))&&(c=f)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let f=c[(h+c.length-1)%c.length],d=c[h],p=c[(h+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&u.push(d)}return u.length>=3?Ql(u,e):null}var mo=Math.tan(30*xr);function qp(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+mo*(i-o+s))/(2*mo))),u=a+(c-s)*mo;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*mo:f<=i-o?l+(i-o-f)*mo:e+(i-f)*r}}function yr(i,t){let e=fn(i),n=sn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(D,L)=>[D,L,n.y(L)],u=c(a,-s),h=c(l,-s),f=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*xr),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*xr);if(i.shape==="pent"){let D=[u,h,f,d],L=[[0,n.y(0)],[r,n.y(r)]];return{faces:[D],rim:D,ridges:[[f,d]],gable:L,gables:[L,L]}}if(i.shape==="hip"&&i.points?.length===6&&i.custom_ridge?.length===2&&Number.isFinite(i.custom_ridge_height)){let D=(V,W)=>{let[q,st]=oi(i,V[0],V[1]);return[q,st,W]},L=i.eave_a,U=i.points.map(V=>D(V,L)),z=D(i.custom_ridge[0],i.custom_ridge_height),G=D(i.custom_ridge[1],i.custom_ridge_height);return{faces:[[U[0],U[1],G,z],[U[1],U[2],G],[U[2],U[3],G],[U[3],U[4],G],[U[4],U[5],z,G]],rim:U,ridges:[[z,G],[U[1],G],[U[2],G],[U[3],G],[U[4],G]],gable:null,gables:[null,null]}}if(i.shape==="pyramid"){let D=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[u,h,D],[h,f,D],[f,d,D],[d,u,D]],rim:[u,h,f,d],ridges:[[u,D],[d,D],[h,D],[f,D]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let D=qp(r,i.eave_a,i.eave_b,p,b),L=[[0,n.y(0)],[D.vla,D.yla],[D.vr,D.rh],[r-D.vlb,D.ylb],[r,n.y(r)]],U=[a,D.vla,D.yla],z=[l,D.vla,D.yla],G=[a,r-D.vlb,D.ylb],V=[l,r-D.vlb,D.ylb],W=[a,D.vr,D.rh],q=[l,D.vr,D.rh];return{faces:[[u,h,z,U],[U,z,q,W],[W,q,V,G],[G,V,f,d]],rim:[u,h,z,q,V,f,d,G,W,U],ridges:[[W,q],[U,z],[G,V]],gable:L,gables:[L,L]}}let[g,m]=tc(i)??["gable","gable"],x=gh(i,[g,m]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],E=[l,x.vah,x.yh],y=[l,x.vbh,x.yh],A=g==="halfhip",S=m==="halfhip",T=[[u,h,...S?[E]:[],v,_,...A?[M]:[]],[_,v,...S?[y]:[],f,d,...A?[w]:[]]];g==="hip"&&T.push([d,u,_]),A&&T.push([w,M,_]),m==="hip"&&T.push([h,f,v]),S&&T.push([E,y,v]);let I=[u,h,...m==="gable"?[v]:S?[E,y]:[],f,d,...g==="gable"?[_]:A?[w,M]:[]],O=[[_,v]];g==="hip"&&O.push([u,_],[d,_]),A&&O.push([M,_],[w,_]),m==="hip"&&O.push([h,v],[f,v]),S&&O.push([E,v],[y,v]);let C=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],k=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],R=D=>D==="gable"?C:D==="halfhip"?k:null,F=[R(g),R(m)];return{faces:T,rim:I,ridges:O,gable:F[0]??F[1],gables:F}}function tc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function gh(i,t){let e=fn(i),n=sn(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*xr),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*xr),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),u=c+(n.rh-c)*.55,h=s>1e-6?Math.min(n.vr,(u-i.eave_a)/s):n.vr,f=o>1e-6?Math.max(n.vr,r-(u-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-u)/Math.max(.2,s)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:u,vah:h,vbh:f}}function bo(i,t,e){let n=null;for(let r of i.faces){if(!$t([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],h=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],p=c*d-u*f,b=u*h-l*d,g=l*f-c*h;if(Math.abs(b)<1e-9)continue;let m=s[2]-(p*(t-s[0])+g*(e-s[1]))/b;n=n===null?m:Math.min(n,m)}return n}function oi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function jl(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function vr(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=jl(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function bh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=fn(t),n=sn(t).rh,r=yr(i,{u0:0,u1:0,a:0,b:0}),s=sn(i),o=p=>{let[b,g]=e.at(p,e.w/2),[m,x]=oi(i,b,g);return bo(r,m,x)??s.y(x)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let p=.5;p<h;p+=.05)if(o(l+u*p)>=n-.02){f=l+u*p;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function $p(i,t){let e=bh(i,t),n=fn(e),r=sn(e),s=yr(i,{u0:0,u1:0,a:0,b:0}),o=sn(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,g]=oi(i,d,p);return bo(s,b,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,p=c*(f+1)/h,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let A=n.w*y/40;r.y(A)>m+.02&&(x=Math.min(x,A),_=Math.max(_,A))}if(!(_-x>.05))continue;let v=n.at(b,x),M=n.at(g,_),w=oi(i,v[0],v[1]),E=oi(i,M[0],M[1]);u.push({u0:Math.min(w[0],E[0]),u1:Math.max(w[0],E[0]),v0:Math.min(w[1],E[1]),v1:Math.max(w[1],E[1])})}return u}function si(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function xh(i,t){let e=si(i,0,t.u0,!0),n=si(i,0,t.u1,!1),r=si(si(i,0,t.u0,!1),0,t.u1,!0),s=si(r,1,t.v0,!0),o=si(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Gn(a.map(l=>[l[0],l[1]])))>1e-6)}function ec(i,t,e){let n=fn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(h=>$t(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Zp(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function w_(i){return sn(i).rh}function Kp(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>vr(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>w_(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&f>=Math.min(u.z0,u.z1)&&f<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function vh(i,t,e,n,r=!0){let s=l=>t*l[0]+e*l[1]+n,o=l=>r?l>=-1e-9:l<=1e-9,a=[];for(let l=0;l<i.length;l++){let c=i[l],u=i[(l+1)%i.length],h=s(c),f=s(u),d=o(h),p=o(f);if(d&&a.push(c),d!==p){let b=h/(h-f);a.push([c[0]+(u[0]-c[0])*b,c[1]+(u[1]-c[1])*b,c[2]+(u[2]-c[2])*b])}}return a}function Jl(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=u>=-1e-9){let h=c/(c-u);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function go(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(o)&&(o=p,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],u=s[2]-t[2],h=(c*l-u*r)/o,f=(n*u-a*c)/o;return[h,f,t[2]-h*t[0]-f*t[1]]}var ds=i=>Math.abs(Gn(i.map(t=>[t[0],t[1]])));function nc(i){let t=Mn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function T_(i,t){let e=go(i),n=go(t.poly);if(!e||!n||ds(t.poly)<1e-6)return null;let r=[...nc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function Jp(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=T_(s,n),a=o?s:[];for(let c of o??[])a=Jl(a,c);if(a.length<3||ds(a)<1e-6){r.push(s);continue}let l=s;for(let[c,u,h]of nc(a)){let f=Jl(l,[-c,-u,-h]);if(f.length>=3&&ds(f)>1e-6&&r.push(f),l=Jl(l,[c,u,h]),l.length<3)break}}e=r}return e}function yh(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=go(s.poly);if(!o||ds(s.poly)<1e-6)continue;let a=nc(s.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),u=l(t)-c;a.push([c-.01,u]),Number.isFinite(s.depth)&&a.push([s.depth-c,-u]);let h=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?h=Math.max(h,b):f=Math.min(f,b)}f-h<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,h)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function jp(i,t){let e=go(i),n=go(t);if(!e||!n||ds(t)<1e-6)return null;let r=[...i];for(let c of nc(t))r=Jl(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let u=r[c],h=r[(c+1)%r.length],f=s(u),d=s(h);if(f<0!=d<0){let p=f/(f-d);o.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p,u[2]+(h[2]-u[2])*p])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function Qp(i,t){let e=fn(i),n=s=>s.map(([o,a,l])=>{let[c,u]=e.at(o,a);return[c,u,l]}),r=[];for(let s of t){let o=si(si(si(si(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&ds(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of xh(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:ph})}return r}function _h(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...oi(i,n,r),s]),depth:e.depth}))}function t0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:vr(i,t)!==e&&vr(i,e)!==t}function e0(i,t){if(t.dormer||t.open||!tc(t)||vr(i,t))return null;let e=fn(t),n=sn(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=sn(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=jl(o),[u,h]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=jl(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||g>d+.05)continue;let m=n0(t,o),x=null;e.u0<u-.05&&e.u1>=u-.05&&e.u1<=m+.05?x=1:e.u1>h+.05&&e.u0<=h+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:x})}return s}function n0(i,t){let e=fn(t),n=e.at(e.u0,sn(t).vr);return i.axis==="x"?n[0]:n[1]}function i0(i,t){let e=n0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=jl(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function Mh(i,t){return t.rooms.some(e=>e.points.length>=3)?Yp(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Sh(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Mh(i,t);return!!e&&e.some(([n,r])=>ls(n,r)-t.elevation>-.15)}function r0(i,t,e,n,r){return!e||!Sh(i,t)?!1:n<Math.min(t.height,ls(r[0],r[1])-t.elevation)-.05}function ps(i,t){let e=Mn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],f=a(u),d=a(h);if(f>=0&&n.push(u),f>=0!=d>=0){let p=f/(f-d);n.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p])}}}return n}function s0(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Hn=1e-4;function wh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function o0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Hn&&a<1-Hn&&l>-Hn&&l<1+Hn?a:null}function Th(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Hn||o>=1-Hn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Hn?o:null}function E_(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(o0(n,r,o,a)!==null||Th(o,n,r)!==null||Th(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Hn)return!0}}return $t(i[0],t)||$t(t[0],i)}function A_(i){let t=i.map(s=>wh(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let p=h[d],b=h[(d+1)%h.length],g=o0(l,c,p,b)??Th(p,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Hn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==o&&$t(b,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Hn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Hn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&wh(o)>1e-6&&n.push(o)}return n}function a0(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&E_(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:A_(s))}function R_(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function l0(i,t,e=.03){return i.every(n=>$t(n,t)||t.some((r,s)=>R_(n,r,t[(s+1)%t.length])<=e))}function c0(i,t){let e=wh(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function Ah(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var ms=(i,t)=>!!i.fix&&i.fix.includes(t);function h0(i,t,e,n){if(i==="h")return e>=n-.01&&t>.01?"hi":"lo";let r=(t+e)/2;return Math.abs(r-n/2)<1e-6?"mid":r<n/2?"lo":"hi"}function Eh(i,t,e,n){let r=0,s=0;for(let o of i){if(!ms(o,t))continue;let[a,l]=Ah(o,t,e),c=h0(t,a,l,e);c==="lo"?r=Math.max(r,l):c==="hi"&&(s=Math.max(s,e-a))}return r+s>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0}:{s0:e,s:n,lo:r,hi:s}}function gs(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function u0(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!ic(n))return[gs(t,n),gs(e,n)];let r=h0(i,t,e,n.s0),s=e-t;return r==="mid"?[n.s/2-s/2,n.s/2+s/2]:r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function ic(i){return i.lo>0||i.hi>0}function rc(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:Eh(i.parts,"w",r,t),d:Eh(i.parts,"d",s,e),h:Eh(i.parts,"h",o,n)},l={w:!ic(a.w)&&i.parts.some(c=>ms(c,"w")),d:!ic(a.d)&&i.parts.some(c=>ms(c,"d")),h:!ic(a.h)&&i.parts.some(c=>ms(c,"h"))};return i.parts.map(c=>{let u=x=>{let _=a[x],[v,M]=Ah(c,x,_.s0);return ms(c,x)&&!l[x]?u0(x,v,M,_):[gs(v,_),gs(M,_)]},[h,f]=u("w"),[d,p]=u("d"),[b,g]=u("h"),m={...c,x:(h+f)/2/t-.5,w:(f-h)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(E,y,A,S,T)=>{let I=a[E],O=y??S,C=A??T,k=(O-C/2+.5)*I.s0,R=(O+C/2+.5)*I.s0;if(!ms(c,E)||l[E])return[gs(k,I),gs(R,I)];let[F,D]=Ah(c,E,I.s0),[L]=u0(E,F,D,I),U=L-F;return[k+U,R+U]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);m.tx=(_+v)/2/t-.5,m.tw=(v-_)/t,m.tz=(M+w)/2/e-.5,m.td=(w-M)/e}return m})}var C_=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var P_=["wall","pole","pillar","parcel","bank"];function d0(i){return C_.includes(i.variant??"")?i.variant:"bin240"}function p0(i){return P_.includes(i.variant??"")?i.variant:"wall"}var Ve=["#3a3f47","#3a3f47"],_r=["#23262b","#23262b"],Wn=["#5a3b25","#5a3b25"],Fe=["#1f4fa8","#1f4fa8"],Yi=["#e3b616","#e3b616"],fe=["#2f7d3b","#2f7d3b"],f0={default:{rest:Ve,bio:Wn,paper:Fe,plastic:Yi,glass:fe,garden:fe,recycling:Yi,other:Ve},DE:{rest:_r,bio:Wn,paper:Fe,plastic:Yi,glass:fe,garden:fe,recycling:Yi},AT:{rest:Ve,bio:Wn,paper:[Ve[0],"#c0262d"],plastic:Yi,glass:fe,garden:fe},CH:{rest:["#d8d8d8","#d8d8d8"],bio:fe,paper:Fe,plastic:Ve,glass:fe,garden:fe},NL:{rest:Ve,bio:fe,paper:Fe,plastic:["#3a3f47","#e57a1f"],glass:fe,garden:fe},BE:{rest:Ve,bio:fe,paper:Fe,plastic:Fe,glass:fe,garden:fe},GB:{rest:_r,bio:["#3a3f47","#5a3b25"],paper:Fe,plastic:Fe,glass:_r,garden:Wn,recycling:Fe},US:{rest:_r,bio:fe,paper:Fe,plastic:Fe,glass:Fe,garden:fe,recycling:Fe},CA:{rest:_r,bio:fe,paper:Fe,plastic:Fe,glass:Fe,garden:fe,recycling:Fe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ve,bio:Wn,paper:[Ve[0],"#e3b616"],plastic:[Ve[0],"#e3b616"],recycling:[Ve[0],"#e3b616"],glass:fe,garden:fe},IT:{rest:Ve,bio:Wn,paper:Fe,plastic:Yi,glass:fe,garden:fe},ES:{rest:Ve,bio:Wn,paper:Fe,plastic:Yi,glass:fe,garden:fe},PT:{rest:Ve,bio:Wn,paper:Fe,plastic:Yi,glass:fe,garden:fe},DK:{rest:_r,bio:fe,paper:Fe,plastic:Ve,glass:fe,garden:fe},SE:{rest:_r,bio:Wn,paper:Fe,plastic:Ve,glass:fe,garden:fe},NO:{rest:Ve,bio:Wn,paper:Fe,plastic:Ve,glass:fe,garden:fe},FI:{rest:Ve,bio:Wn,paper:Fe,plastic:Ve,glass:fe,garden:fe}},m0="DE";function g0(){return m0}function I_(i,t){return f0[t]?.[i]??f0.default[i]??Ve}function b0(i,t=m0){let e=I_(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var qi=zt(3662079,.95),Rh=zt(3662079,1),xi=zt(5995775,.34),x0=zt(5995775,.22),sc=[-.55,.83],Jt=-1,oc=16,$i=32,v0=48,Ch=64,te=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Xt;return t.setAttribute("position",new Bt(this.p,3)),t.setAttribute("color",new Bt(this.c,3)),t.setAttribute("fold",new Bt(this.f,1)),this.uv&&t.setAttribute("uv",new Bt(this.uv,2)),this.tile&&t.setAttribute("tile",new Bt(this.tile,2)),t.computeBoundingSphere(),t}},De=class{p=[];c=[];f=[];seg(t,e,n=qi,r=Jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Jt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Jt),this.seg(c,a,n,s)}geometry(){let t=new Xt;return t.setAttribute("position",new Bt(this.p,3)),t.setAttribute("color",new Bt(this.c,3)),t.setAttribute("fold",new Bt(this.f,1)),t}};function y0(i,t,e,n){let s=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((p,b)=>p+(f.p[b]-p)*d),c:h.c.map((p,b)=>p+(f.c[b]-p)*d),uv:h.uv&&f.uv?h.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let p=0;p<3;p++){let b=h*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=f[p].p[g],i.c[b*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<s;g++)i.uv[b*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[p].tile[g];i.f[b]=d}},c=(h,f)=>{let d=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(y=>y.p[1]>e+1e-6),p=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let y=0;y<3;y++)i.f[h*3+y]=n;continue}let b=i.f[h*3],g=(y,A)=>a(y,A,(e-y.p[1])/(A.p[1]-y.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],M=f[(x+2)%3],w=g(_,v),E=g(M,_);m===1?(l(h,[_,w,E],n),c([w,v,M],b),c([w,M,E],b)):(l(h,[_,w,E],b),c([w,v,M],n),c([w,M,E],n))}}function _0(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=h[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ae=Math.PI/180;function zt(i,t){let e=new et(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function L_(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function Cn(i,t=[]){let e=i.map(([n,r])=>new le(n,r));return Xs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new le(r,s))))}function M0(i,t,e,n,r,s,o){let a=new et(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],_=b[1]-p[1],v=Math.hypot(x,_);if(v<1e-6)continue;let w=.8+.28*((_/v*sc[0]-x/v*sc[1]+1)/2),E=(g[0]+m[0]-p[0]-b[0])/2*(-_/v)+(g[1]+m[1]-p[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),A=zt(s,l(n)*w).lerp(a,y),S=zt(s,l(r)*w).lerp(a,y);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],A,S,S),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],A,S,A)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[h[0],r,h[1]],a))}function S0(i,t,e,n,r,s,o,a,l,c){let u=new et(l),h=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;h.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let f=(g,m)=>{let x=t(g,h[m%c].s);return[x[0],h[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,_,v)=>{let M=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),w=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),E=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);M*_[0]+w*_[1]+E*_[2]<0?i.tri(g,x,m,v):i.tri(g,m,x,v)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=zt(a,.62+.4*Math.max(0,Math.cos(m))),_=t((e+n)/2,r+Math.sin(m)*o),v=t((e+n)/2,r),M=[_[0]-v[0],Math.cos(m)*o,_[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){let _=t(g,r),v=[_[0],s,_[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let w=0;w<c;w++)b(v,f(g,w),f(g,w+1),M,u)}}function Pe(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??Jt,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(o.holes??[]).map(p=>L_(p)>0?[...p].reverse():p),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Cn(t,h);if(o.topFace!==!1){let p=new et(s);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=zt(r,.55);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...h])for(let b=0;b<p.length;b++){let g=p[b],m=p[(b+1)%p.length],x=m[0]-g[0],_=m[1]-g[1],v=Math.hypot(x,_);if(v<1e-6||o.skipSide?.(g,m))continue;let w=.8+.28*((_/v*sc[0]-x/v*sc[1]+1)/2),E=a(g),y=a(m),A=zt(r,u(e)*w),S=zt(r,u(E)*w),T=zt(r,u(y)*w);i.tri([g[0],e,g[1]],[g[0],E,g[1]],[m[0],y,m[1]],A,S,T,void 0,c),i.tri([g[0],e,g[1]],[m[0],y,m[1]],[m[0],e,m[1]],A,T,A,void 0,c)}}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},mt=zt(5995775,.3),Dt=zt(5995775,.17),jt=zt(3662079,.45),Ki=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Lh(n)}rotated(t,e,n){let r=n*ae,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Pe(this.buf,Ph(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Ph(l)&&(l.reverse(),c.reverse()),M0(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,h=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(S0(this.buf,g,p-o/2,p+o/2,b,d,f,l,c,u),h)for(let m of[p-o/2,p+o/2])for(let x=0;x<u;x++){let _=x/u*Math.PI*2,v=(x+1)/u*Math.PI*2;this.line(g(m,b+Math.sin(_)*f),g(m,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,h)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Pe(this.buf,Ph(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=mt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Jt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Lh(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Ph(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Mr(i,t,e,n,r,s,o=N.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function vo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,s,h,r,s,Dt)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),f,s+.012,h+Math.min(.1,c/4),f,s+.012,jt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,jt)}}}function w0(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);Mr(i,t,e,.07,.05,.05,N.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,N.fabric,N.fabricTop,.04,mt),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],u-.08,n,N.fabric,N.fabricTop,mt),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,mt),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,mt);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let b=s+c+d*p+.02,g=b+d-.04;i.pad(b,g,u-.08,u+.05,a+h+.02,l-.06,N.cushion,N.cushion,.04),i.loft([b+.01,g-.01,a+h*.55,a+h+.14],[b+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,N.cushion)}}function T0(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(y,A)=>i.loft([y-.015,y+.015,A-.015,A+.015],[y-.025,y+.025,A-.025,A+.025],0,.07,N.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let y of p)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,mt);for(let y of p){let[A,S]=y<0?[s+.02,s+c]:[o-c,o-.02];i.pad(A,S,.07,f-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,mt)}i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],f-.08,n,N.fabric,N.fabricTop,mt);for(let y of p)y<0?i.loft([s,s+u,a+u,l],[s,s+u*.5,a+u,l-.01],f-.08,n,N.fabric,N.fabricTop,mt):i.loft([o-u,o,a+u,l],[o-u*.5,o,a+u,l-.01],f-.08,n,N.fabric,N.fabricTop,mt);for(let y of p){let[A,S]=y<0?[s+u,s+c]:[o-c,o-u];i.pad(A,S,f-.08,d,l-h,l,N.fabric,N.fabricTop,.04,mt)}r||i.pad(o-h,o,f-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,mt);let g=s+u,m=r?o-u:o-h,x=Math.max(1,Math.round((m-g)/.62)),_=(m-g)/x;for(let y=0;y<x;y++){let A=g+_*y+.02,S=A+_-.04;i.pad(A,S,f-.08,f+.05,a+u+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([A+.01,S-.01,a+u*.55,a+u+.14],[A+.03,S-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,N.cushion)}let v=a+c,M=l-h;if(M-v<.2)return;let w=Math.max(1,Math.round((M-v)/.62)),E=(M-v)/w;for(let y of p)for(let A=0;A<w;A++){let S=v+E*A+.02,T=S+E-.04;y<0?(i.pad(s+u+.02,s+c-.04,f-.08,f+.05,S,T,N.cushion,N.cushion,.04),i.loft([s+u*.55,s+u+.14,S+.01,T-.01],[s+u*.4,s+u*.4+.06,S+.03,T-.03],f+.03,n*.93,N.cushion)):(i.pad(o-c+.04,o-u-.02,f-.08,f+.05,S,T,N.cushion,N.cushion,.04),i.loft([o-u-.14,o-u*.55,S+.01,T-.01],[o-u*.4-.06,o-u*.4,S+.03,T-.03],f+.03,n*.93,N.cushion))}}function F_(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Mr(i,t,e,.08,.06,.03,N.wood,!0),i.box(o,a,.08,l,r+.06,s,N.wood,N.woodTop,mt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,N.white,N.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,mt),i.box(o,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Dt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,N.cushion,N.fabricTop,.025,Dt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let p=o+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+f-.03,b,b+g],c,c+.06,N.whiteTop),i.loft([p+.03,p+f-.03,b,b+g],[p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Dt)}}function D_(i,t,e,n){let r=Math.min(.46,n*.52);Mr(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,mt)}function N_(i,t,e,n){Mr(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,jt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function O_(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Dt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,jt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,jt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function Zi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),vo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function U_(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Dt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=u+.006,c++}}}}function B_(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Zi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function k_(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Dt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,jt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,jt)}var ac=(i,t)=>zt(parseInt(i.slice(1),16),t).getHex(),xo=!1;function C0(i){xo=i}function P0(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function z_(i,t,e,n,r,s){let o=f=>{let d=Math.max(...new et(f).toArray());return ac(f,d>.05?Math.max(1,.62/d):1)},a=xo?o(s[0]):ac(s[0],.55),l=xo?o(s[1]):ac(s[1],.8),c=ac(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Dt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Dt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,mt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Dt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Dt);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Dt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Dt);return}let u=Math.min(.2,n*.19),h=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),h+u/2+.01,0,u,.05,u,N.dark,N.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,a,a,mt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,l,c,Dt),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,jt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Dt))}function V_(i,t,e,n,r,s,o){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,o?N.metal:N.white,o?N.metal:N.whiteTop,mt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Dt),!s)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,N.white,N.whiteTop,Dt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Dt);else if(o)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,N.metal,N.metal,Dt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Dt);else{let u=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-u,n/2+u,.004,u*2,N.dark,N.dark,14,Dt),i.seg(c-u*.45,n/2,e/2+.0045,c-u*.45+.004,n/2,e/2+.0045,mt),i.seg(c+u*.45-.004,n/2,e/2+.0045,c+u*.45,n/2,e/2+.0045,mt)}}}function G_(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,mt);let o=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*o,n/2+Math.sin(l)*o,e/2+.002,Math.cos(c)*o,n/2+Math.sin(c)*o,e/2+.002,Dt)}return}let s=Math.min(t,e)/2;i.cyl(0,0,s,0,n,N.white,N.whiteTop,24,mt),i.cyl(0,0,s*.5,n,n+.01,N.metal,N.metal,12)}function H_(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,.05,mt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,N.dark);for(let o of[-t*.2,t*.2])i.cyl(o,0,.012,-.12,0,N.metal,N.metal,6);return}let s=Math.min(t,e)/2;i.cyl(0,0,s,.04,n-.05,N.white,N.whiteTop,20,mt),i.cyl(0,0,s*.85,n-.05,n,N.white,N.whiteTop,20);for(let o=0;o<3;o++){let a=o/3*Math.PI*2;i.cyl(Math.cos(a)*s*.7,Math.sin(a)*s*.7,.03,0,.04,N.dark,N.dark,6)}i.box(-s*.3,s*.3,n*.55,n*.65,s-.01,s+.01,N.dark)}function W_(i,t,e,n,r){let s=N.metal,o=zt(N.metal,1.25).getHex(),a=zt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Dt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Dt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Dt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let u=-t/2+t/3*l+.015,h=n/2*c+.015;i.box(u,u+t/3-.03,h,h+n/2-.03,e/2,e/2+.01,a,o,Dt),i.box(u+.04,u+t/3-.07,h+n/2-.09,h+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function X_(i,t,e,n){let r=e/2-I0;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Dt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Dt))}var I0=.06;function L0(i,t,e,n){let r=t.rotation*ae,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(C,k,R)=>[t.x+C*s-R*o,k,t.z+C*o+R*s],c=(C,k,R,F,D)=>{i.tri(C,k,R,D),i.tri(C,R,F,D),i.tri(C,R,k,D),i.tri(C,F,R,D)},u=(C,k,R,F)=>{let D=l(C[0],C[1],C[2]),L=l(k[0],k[1],k[2]),U=L[0]-D[0],z=L[1]-D[1],G=L[2]-D[2],V=Math.hypot(U,z,G)||1,W=[U/V,z/V,G/V],q=Math.abs(W[1])>.9?[1,0,0]:[0,1,0],st=[W[1]*q[2]-W[2]*q[1],W[2]*q[0]-W[0]*q[2],W[0]*q[1]-W[1]*q[0]],X=Math.hypot(st[0],st[1],st[2])||1,Y=[st[0]/X*R,st[1]/X*R,st[2]/X*R],nt=[W[1]*Y[2]-W[2]*Y[1],W[2]*Y[0]-W[0]*Y[2],W[0]*Y[1]-W[1]*Y[0]],j=[[1,1],[-1,1],[-1,-1],[1,-1]],Q=(dt,bt)=>[dt[0]+Y[0]*j[bt][0]+nt[0]*j[bt][1],dt[1]+Y[1]*j[bt][0]+nt[1]*j[bt][1],dt[2]+Y[2]*j[bt][0]+nt[2]*j[bt][1]];for(let dt=0;dt<4;dt++){let bt=(dt+1)%4;i.tri(Q(D,dt),Q(L,dt),Q(L,bt),F),i.tri(Q(D,dt),Q(L,bt),Q(D,bt),F)}},h=(C,k,R,F,D,L,U,z)=>{c(l(C,F,D),l(k,F,D),l(k,F,L),l(C,F,L),z),c(l(C,R,L),l(k,R,L),l(k,F,L),l(C,F,L),U),c(l(C,R,D),l(k,R,D),l(k,R,L),l(C,R,L),U),c(l(C,R,D),l(C,R,L),l(C,F,L),l(C,F,D),U),c(l(k,R,D),l(k,R,L),l(k,F,L),l(k,F,D),U)},f=new et(N.body),d=new et(N.bodyTop),p=new et(N.accent),b=new et(1929098),g=new et(995141),m=(C,k,R,F,D)=>{let L=(U,z,G)=>[U[0]+(z[0]-U[0])*G,U[1]+(z[1]-U[1])*G,U[2]+(z[2]-U[2])*G];for(let U=0;U<D;U++){let z=L(C,k,U/D),G=L(C,k,(U+1)/D),V=L(R,F,(U+1)/D),W=L(R,F,U/D);c(l(z[0],z[1],z[2]),l(G[0],G[1],G[2]),l(V[0],V[1],V[2]),l(W[0],W[1],W[2]),U%2?b:g)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,E=(C,k)=>{t.awning_valance!==!1&&m([-x+.04,C,k+.01],[x-.04,C,k+.01],[-x+.04,C-.2,k+.01],[x-.04,C-.2,k+.01],M)},y=t.variant??"arm";if(y==="side"){let C=e,k=.05,R=0,F=-x+.08+a*(t.w-.16);h(-x,-x+.1,0,C+.05,R-.05,R+.05,f,d),h(x-.06,x,0,C+.05,R-.03,R+.03,f,d),a>.01&&m([-x+.1,C,R],[-x+.1,k,R],[F,C,R],[F,k,R],Math.max(4,Math.round((C-k)/.3))),u([F,k,R],[F,C,R],.02,p);return}if(y==="vertical"){let C=_,k=Math.min(t.d/2,_+v);h(-x,x,e,e+v,C,k,f,d);let R=(C+k)/2;for(let D of[-x+.02,x-.02])u([D,.02,R],[D,e,R],.02,p);let F=e-a*Math.max(0,e-.04);a>.01&&m([-x+.04,e,R],[x-.04,e,R],[-x+.04,F,R],[x-.04,F,R],M),u([-x+.03,F,R],[x-.03,F,R],.025,p);return}if(y==="pergola"){let C=t.d/2-.05,k=e+v,R=k-(C-_)*Math.tan(w);h(-x,x,e,k,_,_+v,f,d);for(let L of[-x+.05,x-.05])u([L,k,_+v],[L,R,C],.035,p),u([L,0,C],[L,R,C],.045,f);u([-x+.05,R,C],[x-.05,R,C],.035,p);let F=_+v+a*(C-_-v),D=k-(F-_)*Math.tan(w)+.04;a>.01&&m([-x+.08,k+.04,_+v],[x-.08,k+.04,_+v],[-x+.08,D,F],[x-.08,D,F],M),u([-x+.08,D,F],[x-.08,D,F],.025,p);return}let A=_,S=_+v;h(-x,x,e,e+v,A,S,f,d);let T=[S-.02,e+v*.35];if(y==="drop"){let C=Math.max(.3,t.d-v),k=[S,T[1]-C],R=a*(Math.PI/2+w),F=[k[0]+Math.sin(R)*C,k[1]+Math.cos(R)*C];for(let D of[-x+.08,x-.08])u([D,k[1],k[0]],[D,F[1],F[0]],.018,p);a>.01&&m([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,F[1],F[0]],[x-.04,F[1],F[0]],M),u([-x+.02,F[1],F[0]],[x-.02,F[1],F[0]],.03,p),a>.05&&E(F[1],F[0]);return}let I=Math.max(0,t.d-v)*a,O=[T[0]+I,T[1]-I*Math.tan(w)];if(I>.01){m([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,O[1],O[0]],[x-.04,O[1],O[0]],M);let C=Math.max(.3,(t.d-v)/2+.05);for(let k of[-1,1]){let R=k*(x-.12),F=[R,e+.02,S-.04],D=[R,O[1]-.02,O[0]],L=Math.hypot(D[2]-F[2],D[1]-F[1]),U=Math.sqrt(Math.max(0,C*C-(L/2)**2)),z=[R-k*Math.min(U,x-.15),(F[1]+D[1])/2,(F[2]+D[2])/2];u(F,z,.018,p),u(z,D,.018,p)}}u([-x+.02,O[1],O[0]],[x-.02,O[1],O[0]],.03,p),I>.05&&E(O[1],O[0])}function F0(i,t,e,n,r){let s=i.p.length;Y_(i,t,e,n,r),t.mirror&&Nh(i,s)}function Y_(i,t,e,n,r){let s=t.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],u=e+.05,h=e+t.h-.02,f=new et(.75,.1,.14),d=new et(N.dark),p=new et(N.accent),b=t.w/2-.006,g=(v,M,w)=>{let E=w/m,y=new et(2043212).lerp(f,E),A=new et(N.body).lerp(f,E*.8),S=Math.cos(w),T=Math.sin(w),I=(k,R)=>c(v+M*(k*S-R*T),t.d/2+k*T+R*S),O=(k,R,F,D)=>{let[L,U,z,G]=k;i.tri([L[0],R,L[1]],[U[0],R,U[1]],[z[0],F,z[1]],D),i.tri([L[0],R,L[1]],[z[0],F,z[1]],[G[0],F,G[1]],D)},C=(k,R,F,D,L,U,z,G=z)=>{let V=[I(k,U),I(R,U),I(R,L),I(k,L)];O([V[0],V[1],V[1],V[0]],F,D,G),O([V[3],V[2],V[2],V[3]],F,D,z),O([V[0],V[3],V[3],V[0]],F,D,z),O([V[1],V[2],V[2],V[1]],F,D,z),O([V[0],V[1],V[2],V[3]],D,D,z),O([V[3],V[2],V[1],V[0]],F,F,z)};return C(0,b,u,h,-I0,0,A,y),C(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),C},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function q_(i,t,e,n){Zi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,mt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,N.dark,1451583,12,jt)}}function $_(i,t,e,n){Zi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,jt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function Z_(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,jt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function K_(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,jt),i.seg(r,n,s,o,n,a,jt),i.seg(o,.05,a,o,n,a,jt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,jt)}function J_(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function j_(i,t,e,n){Zi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,jt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,jt)}function Q_(i,t,e,n){Zi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,N.dark,N.dark,jt)}function tM(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,N.pot,N.pot,10,mt),i.cyl(0,0,r*.08,s,n*.55,N.wood,N.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,N.plant,N.plantTop,8,a===o-1?Dt:null)}}function eM(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,mt)}function nM(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let h=e/2-o*u,f=h-o,d=s*(u+1);i.box(-t/2,t/2,0,d,f,h,N.wood,N.woodTop),i.seg(-t/2,d,h,t/2,d,h,mt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,mt);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,Dt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),jt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=s*(u+1);i.seg(l,f,h,l,f+a,h,Dt)}}function iM(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:u}=Lp(t,e,n),h=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let E=0;E<s;E++){let y=e/2-c*E,A=u*(E+1);i.box(h,f,0,A,y-c,y,N.wood,N.woodTop),i.seg(h,A,y,f,A,y,mt)}i.seg(h,0,e/2,h,u,e/2,mt);let g=u*r,m=.2;i.box(h,f,0,g,-e/2,b,N.wood,N.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,b,N.wood,N.woodTop),i.seg(h,g,b,f,g,b,mt);for(let E=0;E<o;E++){let y=b+c*E,A=u*(r+1+E);i.box(d,p,Math.max(0,A-u-m),A,y,y+c,N.wood,N.woodTop),i.seg(d,A,y,p,A,y,mt)}i.seg(h,u,e/2,h,g,b,Dt),i.seg(p,g,b,p,n,b+c*(o-1),Dt);let x=.9,_=f-.03,v=d+.03,M=b-.03,w=Math.max(1,o-4);i.seg(_,u+x,e/2-c/2,_,g+x,M,jt),i.seg(_,g+x,M,v,g+x,M,jt),i.seg(v,g+x,M,v,u*(r+w)+x,b+c*(w-.5),jt);for(let E=0;E<s;E+=3){let y=e/2-c*(E+.5);i.seg(_,u*(E+1),y,_,u*(E+1)+x,y,Dt)}for(let E of[_,v])i.seg(E,g,M,E,g+x,M,Dt);for(let E=2;E<w;E+=3){let y=b+c*(E+.5);i.seg(v,u*(r+1+E),y,v,u*(r+1+E)+x,y,Dt)}}function rM(i,t,e,n){Mr(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,mt),vo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function sM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Dt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,jt)}}function oM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,mt),vo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function E0(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,N.wood,N.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,mt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,N.cushion,N.cushion,Dt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,N.wood,N.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,mt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Dt))}function aM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Dt),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,mt)}function lM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function cM(i,t,e,n){Mr(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,mt)}function uM(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,mt),vo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function hM(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,jt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,jt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,jt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,jt)}function fM(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),vo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function dM(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,jt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function A0(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,mt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Dt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,jt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(h)*a,o+Math.sin(h)*a,s,jt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Dt)}}function pM(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Dt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,mt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Dt)}function mM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,mt)}function gM(i,t,e,n){Mr(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Dt)}function bM(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,jt)}function xM(i,t,e,n){let r=Fh;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,mt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Dt)}}function vM(i,t,e,n){let r=Dh;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Dt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,jt)}function bs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,jt)}}function yM(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,mt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,jt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,mt),bs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,jt);for(let a of[-1,1])bs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,jt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Dt)}function _M(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,mt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Dt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,jt)}}function MM(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,s,n*.08,n*.78,N.dark,N.body,18,mt),i.cyl(0,0,s*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,mt),bs(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,N.dark,N.metal,16,mt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,jt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,N.dark,N.body)}function SM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;bs(i,s,o,r,e/2+.004,24),bs(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Dt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Dt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,jt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Dt)}function wM(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,mt);for(let s of[-1,1])bs(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,jt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Dt)}function TM(i,t,e,n){let r=Cp-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function EM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,jt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Dt)}function AM(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,mt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,jt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function RM(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,jt)}function CM(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,jt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,jt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,N.white,N.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,jt)}}var Fh=.12,Dh=2.05;function Oh(i,t){let e=PM(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function PM(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=vp(i.type);if(s){let l=t?rn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?rn(t,i)-gr(i):0,a=IM(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function IM(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?rn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Fh+.02,y1:Fh+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Dh+.015,y1:Dh+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function LM(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=Me(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function FM(i,t,e,n,r,s=!1,o=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new et(1-r,1-r,1-r),c=new et(1,1,1),u=o+.003;if(s){let b=v=>[v[0],u,v[1]],m=(v,M,w)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*w),x=i.p.length,_=b(t(0,0));for(let v=0;v<24;v++){let M=b(m(v,e/2,n/2)),w=b(m(v+1,e/2,n/2)),E=b(m(v,e/2+a,n/2+a)),y=b(m(v+1,e/2+a,n/2+a));i.tri(_,M,w,l),i.tri(M,E,y,l,c,c),i.tri(M,y,w,l,c,l)}Lh(t)&&Nh(i,x);return}let h=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],u,b[1]],p=i.p.length;i.tri(d(h[0]),d(h[1]),d(h[2]),l),i.tri(d(h[0]),d(h[2]),d(h[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(h[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(h[b]),d(f[g]),d(h[g]),l,c,l)}Lh(t)&&Nh(i,p)}function lc(i,t,e,n,r=0,s=!1){DM(i,t,e,n,r,s)}function Nh(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function DM(i,t,e,n,r,s=!1){let o=Me(n.type)?0:r-gr(n);if(Me(n.type)||Math.abs(o)<.001)return R0(i,t,e,n,r,s);let a=i.p.length,l=t.p.length,c=e.p.length;R0(i,t,r<.05?e:new te,n,0);for(let u=a+1;u<i.p.length;u+=3)i.p[u]+=o;for(let u=l+1;u<t.p.length;u+=3)t.p[u]+=o;if(r<0)for(let u=c+1;u<e.p.length;u+=3)e.p[u]+=o}function R0(i,t,e,n,r,s=!1){let o=n.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,u=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],h=new Ki(i,t,u),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":w0(h,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":w0(h,f,d,p,1);break;case"sofa_l":T0(h,f,d,p,!1);break;case"sofa_u":T0(h,f,d,p,!0);break;case"bed":F_(h,f,d,p);break;case"chair":D_(h,f,d,p);break;case"table":N_(h,f,d,p);break;case"desk":O_(h,f,d,p);break;case"nightstand":Zi(h,f,d,p,1,p*.72,!0),h.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Dt);break;case"wardrobe":Zi(h,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":U_(h,f,d,p);break;case"kitchen":B_(h,f,d,p);break;case"fridge":k_(h,f,d,p);break;case"fridge_smart":X_(h,f,d,p);break;case"waste_bin":{let b=i.c.length;z_(h,f,d,p,d0(n),b0(n,g0())),xo&&P0(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;W_(h,f,d,p,p0(n));let m=gr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"wifi_ap":G_(h,f,d,p,n.variant==="wall");return;case"water_heater":if(H_(h,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;V_(h,f,d,p,Dp(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=gr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"awning":return;case"stove":q_(h,f,d,p);break;case"sink":$_(h,f,d,p);break;case"bathtub":Z_(h,f,d,p);break;case"shower":K_(h,f,d,p);break;case"wc":J_(h,f,d,p);break;case"washbasin":j_(h,f,d,p);break;case"tv_board":Q_(h,f,d,p);break;case"plant":tM(h,f,d,p);break;case"rug":eM(h,f,d);return;case"stairs":nM(h,f,d,p);break;case"stairs_u":iM(h,f,d,p);break;case"stairwell":return;case"sideboard":rM(h,f,d,p);break;case"dresser":sM(h,f,d,p);break;case"tall_cabinet":Zi(h,f,d,p,1,p*.5);break;case"coat_rack":oM(h,f,d,p);break;case"bench":E0(h,f,d,p,!1);break;case"corner_bench":E0(h,f,d,p,!0);break;case"bar_stool":aM(h,f,d,p);break;case"office_chair":lM(h,f,d,p);break;case"stool":cM(h,f,d,p);break;case"kitchen_wall":uM(h,f,d,p);return;case"kitchen_tall":hM(h,f,d,p);break;case"island":fM(h,f,d,p);break;case"worktop":h.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,N.whiteTop,N.whiteTop,mt);return;case"dishwasher":dM(h,f,d,p);break;case"washer":A0(h,f,d,p,!1);break;case"dryer":A0(h,f,d,p,!0);break;case"bunk_bed":pM(h,f,d,p);break;case"table_round":mM(h,f,d,p);break;case"coffee_table":gM(h,f,d,p);break;case"tv_wall":bM(h,f,d,p);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let m=0;m<4;m++)h.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Dt);h.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,mt),h.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,mt);return}case"robot_vacuum":h.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,N.white,N.whiteTop,mt),h.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,N.accent);return;case"radiator":xM(h,f,d,p);return;case"ac_unit":vM(h,f,d,p);return;case"inverter":yM(h,f,d,p,n.variant??null);return;case"grid_point":EM(h,f,d,p);break;case"wallbox":AM(h,f,d,p);return;case"pool_pump":_M(h,f,d,p);break;case"pool_filter":MM(h,f,d,p,n.variant??null);break;case"pool_heat_pump":SM(h,f,d,p);break;case"pool_dosing":wM(h,f,d,p);break;case"pool_valve":TM(h,f,d,p);return;case"meter":RM(h,f,d,p);return;case"home_battery":if(CM(h,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=Me(n.type);if(b){let g=Gl(n.type),m=g?x=>sh(g,x):bp(n.type)&&!s?ho:null;if(yo(h,b,f,d,p,r,null,null,m),r>.05)return}else h.box(-f/2,f/2,0,p,-d/2,d/2,N.body,N.bodyTop,mt)}}FM(e,u,f,d,n.type==="plant"?.35:.5,LM(n),Math.min(0,r))}function D0(i){return!!Me(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function Ih(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function yo(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let u of rc(t,e,n,r)){if(l?.(u)||a&&!a(u))continue;let h=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,f=h.glow&&o!==null,d=f?o:Ih(h.color,!1)??N.body,p=f?o:Ih(h.top,!1)??Ih(h.color,!0)??zt(d,1.25).getHex(),b=s+h.y*r,g=s+Math.min(r,(h.y+h.h)*r),m=i.colors.length,x=h.edges==="glow"?qi:h.edges==="faint"?Dt:h.edges?mt:null,_=h.rot?i.rotated(h.x*e,h.z*n,h.rot):i;if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))_.lyingCyl(h.axis,h.x*e,h.z*n,b,g,h.axis==="x"?h.w*e:h.d*n,h.axis==="x"?h.d*n:h.w*e,d,p,14,x);else if(h.shape==="cyl")_.cyl(h.x*e,h.z*n,Math.min(h.w*e,h.d*n)/2,b,g,d,p,14,x);else if(h.shape==="loft"){let v=h.tx??h.x,M=h.tz??h.z,w=h.tw??h.w,E=h.td??h.d;_.loft([(h.x-h.w/2)*e,(h.x+h.w/2)*e,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(v-w/2)*e,(v+w/2)*e,(M-E/2)*n,(M+E/2)*n],b,g,d,p,x)}else _.box((h.x-h.w/2)*e,(h.x+h.w/2)*e,b,g,(h.z-h.d/2)*n,(h.z+h.d/2)*n,d,p,x);xo&&!f&&!c&&(h.color?.startsWith("#")||h.top?.startsWith("#"))&&P0(i.colors,m)}}function N0(i,t,e,n,r,s){let o=s*ae,a=Math.cos(o),l=Math.sin(o),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],u=new Ki(i,new De,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function O0(i,t,e,n,r){let s=xp(t)*n,o=new Ki(i,new De,(c,u)=>[c,u-s]);yo(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,ho);let a=0,l=0;for(let c of rc(t,e,n,r)){if(!ho(c))continue;let u=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&u>a&&(a=u),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function _o(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];yo(new Ki(i,new De,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function U0(i,t,e,n,r,s){let o=NM(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ae,l=Math.cos(a),c=Math.sin(a),u=n.mirror?-1:1,h=(f,d)=>[n.x+u*f*l-d*c,n.z+u*f*c+d*l];yo(new Ki(i,new De,h),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function NM(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>sh(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function B0(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let g of rc(i,n,r,s)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*s,v=Math.min(s,(g.y+g.h)*s),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-_));o+=M,a+=m*M,l+=(_+v)/2*M,c+=x*M}if(!o)return null;let u=a/o,h=c/o,f=t.rotation*ae,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*u*d-h*p,e+l/o,t.z+b*u*p+h*d]}function cc(i,t,e,n,r){let s=e.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*o-h*a,e.z+l*u*a+h*o];yo(new Ki(i,new De,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var OM={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function UM(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],f=u[1]-l[1],d=Math.hypot(h,f)||1;if(Math.abs((r*f-s*h)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+h*p-n[0],l[1]+f*p-n[1])<.4}))}function z0(i,t){return t.type==="pool"?$l(i,t):br(i,t)+(Vn(t.type)?.01:as[t.type])}function Mo(i){return Mn(i)>=0?i:[...i].reverse()}function BM(i,t){let e=i[t];if(Vn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>$t(o,e.points))&&n.push(Mo(s.points))}return n}function k0(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){Pe(i,Mo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let p=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Jt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Jt)},m=new et(a),x=new et(zt(o,.9)),_=new et(zt(o,.6));g([p(s,1),b(s,1),b(s,-1),p(s,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],_),g([p(r,1),b(r,1),b(s,1),p(s,1)],x),g([p(r,-1),b(r,-1),b(s,-1),p(s,-1)],x),g([p(r,1),p(r,-1),p(s,-1),p(s,1)],x),g([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function V0(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=br(e,s),l=(x,_)=>a-fo(e,s,x,_),c=a-(s.type==="pool"?0:s.slope??0),u=Vn(s.type)&&s.height?s.height:as[s.type],h={...OM[s.type],top:u},f=Mo(s.points),d=zt(h.edge,h.edgeAlpha),p=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,b=x=>{if(s.outline!==!1)for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Jt)}},g=n??i,m=new et(n?1734832:h.color);switch(s.type){case"pool":{let x=new et(h.side),_=new et(zt(h.side,.55)),v=new et(932440),M=$l(e,s),w=ql(e,s),E=Ap(e,s);for(let[y,A,S]of Cn(f)){let T=f[y],I=f[A],O=f[S];(n?g:i).tri([T[0],M,T[1]],[O[0],M,O[1]],[I[0],M,I[1]],m,m,m,void 0,Jt),i.tri([T[0],E,T[1]],[O[0],E,O[1]],[I[0],E,I[1]],v,v,v,void 0,Jt)}for(let y=0;y<f.length;y++){let A=f[y],S=f[(y+1)%f.length];i.tri([S[0],E,S[1]],[S[0],w,S[1]],[A[0],w,A[1]],_,x,x,void 0,Jt),i.tri([S[0],E,S[1]],[A[0],w,A[1]],[A[0],E,A[1]],_,x,_,void 0,Jt)}if(!s.above&&lh(e,s)){let y=new et(660258),A=new et(396054),S=E-.2,T=Math.min(a,w);for(let I=0;I<f.length;I++){let O=f[I],C=f[(I+1)%f.length];i.tri([O[0],S,O[1]],[O[0],T,O[1]],[C[0],T,C[1]],A,y,y,void 0,Jt),i.tri([O[0],S,O[1]],[C[0],T,C[1]],[C[0],S,C[1]],A,y,A,void 0,Jt)}for(let[I,O,C]of Cn(f)){let k=f[I],R=f[O],F=f[C];i.tri([k[0],S,k[1]],[R[0],S,R[1]],[F[0],S,F[1]],A,A,A,void 0,Jt)}if(s.outline!==!1)for(let I=0;I<f.length;I++){let O=f[I],C=f[(I+1)%f.length];t.seg([O[0],S,O[1]],[C[0],S,C[1]],zt(h.edge,h.edgeAlpha*.35),Jt),t.seg([O[0],S,O[1]],[O[0],T,O[1]],zt(h.edge,h.edgeAlpha*.25),Jt)}}if(w>a+.02){let y=new et(2044240),A=new et(1187123);for(let S=0;S<f.length;S++){let T=f[S],I=f[(S+1)%f.length];i.tri([T[0],a,T[1]],[T[0],w,T[1]],[I[0],w,I[1]],A,y,y,void 0,Jt),i.tri([T[0],a,T[1]],[I[0],w,I[1]],[I[0],a,I[1]],A,y,A,void 0,Jt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),s.outline!==!1)for(let y=0;y<f.length;y++){let A=f[y],S=f[(y+1)%f.length];t.seg([A[0],E+.005,A[1]],[S[0],E+.005,S[1]],zt(h.edge,h.edgeAlpha*.4),Jt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let _=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-_[0],v[1]-_[1]),w=Math.max(1,Math.round(M/2)),E=p>=0&&x===p-1?w:w-1;for(let y=0;y<=E;y++){let A=y/w,S=_[0]+(v[0]-_[0])*A,T=_[1]+(v[1]-_[1])*A,I=l(S,T);Pe(i,Mo([[S-.04,T-.04],[S+.04,T-.04],[S+.04,T+.04],[S-.04,T+.04]]),I,I+h.top,h.side,h.color)}for(let y of[.35,.85])t.seg([_[0],l(_[0],_[1])+y*h.top,_[1]],[v[0],l(v[0],v[1])+y*h.top,v[1]],d,Jt)}break}case"pergola":{let x=h.top;for(let[_,v]of f){let M=l(_,v);Pe(i,Mo([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),M,M+x,h.side,h.color)}for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length],w=l(v[0],v[1])+x;if(k0(i,v,M,.12,w-.16,w,h.side,h.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let E=l(v[0],v[1]),y=l(M[0],M[1]);t.seg([v[0],E+.25,v[1]],[M[0],y+x-.25,M[1]],d,Jt),t.seg([M[0],y+.25,M[1]],[v[0],E+x-.25,v[1]],d,Jt)}}if(Up(f)){let _=Bp(f),v=_.x1-_.x0,M=_.z1-_.z0,w=v>=M,E=w?v:M,y=Math.max(1,Math.round(E/.6));for(let A=1;A<y;A++){let S=(w?_.x0:_.z0)+E*A/y,T=w?[S,_.z0+.06]:[_.x0+.06,S],I=w?[S,_.z1-.06]:[_.x1-.06,S],O=l(T[0],T[1])+x;k0(i,T,I,.06,O-.04,O+.08,h.side,h.color,l(I[0],I[1])-l(T[0],T[1]))}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{Pe(i,f,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),b(()=>a+h.top+.004);let _=s.height&&s.height>.3?s.height:1,v=zt(9417983,.42),M=zt(3662079,.55);for(let w=0;w<f.length;w++){let E=f[w],y=f[(w+1)%f.length];if(UM(e,E,y))continue;let A=Math.hypot(y[0]-E[0],y[1]-E[1]),S=a+h.top;t.seg([E[0],S+_,E[1]],[y[0],S+_,y[1]],M,Jt),t.seg([E[0],S+.1,E[1]],[y[0],S+.1,y[1]],v,Jt);let T=Math.max(1,Math.round(A/.12));for(let I=0;I<=T;I++){let O=I/T,C=E[0]+(y[0]-E[0])*O,k=E[1]+(y[1]-E[1])*O;t.seg([C,S,k],[C,S+_,k],I===0||I===T?M:v,Jt)}}break}default:{let x=(v,M)=>l(v,M)+h.top,_=BM(r,o);if(Pe(i,f,c,s.slope?x:a+h.top,h.side,h.color,{aoFrom:c,holes:_}),b((v,M)=>x(v,M)+.004),s.type==="hedge"&&b((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of _)for(let M=0;M<v.length;M++){let w=v[M],E=v[(M+1)%v.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[E[0],x(E[0],E[1])+.004,E[1]],d,Jt)}}}})}var hc=Math.PI/180,kM=1.13,zM=1.72,Uh=.025,Sr=.07,G0=.25;function H0(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=ri(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,u=-o/l,h=Math.min(n.height,s.height??n.height),f=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},p=(b,g,m,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:x,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&p(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Bh="ground";function kh(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function W0(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=kh(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Hl(s,o,a)):t.base??0;return{key:Bh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function VM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Tr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>GM(x,ec(i,x,x.overhang??t.overhang)));let e=VM(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(_=>_[0])),r=e.rooms.flatMap(x=>x.points.map(_=>_[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[X0("main",null,o,l,a,c,u+G0)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*hc),b=(x,_,v)=>f?[x,u+v,(l+c)/2+_]:[(o+a)/2+_,u+v,x],[g,m]=f?[o,a]:[l,c];return[-1,1].map(x=>uc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(m,x*d,0),b(g,0,p),t.pitch,()=>[0,m-g]))}function GM(i,t){let e=fn(i),n=sn(i),r=(_,v,M)=>{let[w,E]=e.at(_,v);return[w,M,E]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-s),v=e.at(l,e.w+o);return[X0(i.id,i.id,Math.min(_[0],v[0]),Math.min(_[1],v[1]),Math.max(_[0],v[0]),Math.max(_[1],v[1]),i.eave_a+G0)]}if(i.shape==="pent")return[uc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=tc(i),h=u?gh(i,u):null,f=i.shape==="pyramid"||u?.[0]==="hip",d=i.shape==="pyramid"||u?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?h.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?h.d1:0,g=f?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+s,n.rh-n.y(-s));x.push(uc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/_),c-m*(v/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));x.push(uc(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,v=>[m*(v/_),c-g*(v/_)]))}if(f||d){let _=n.y(-s),v=n.y(e.w+o),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+o,v),r(a,-s,_),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-s,_),r(l,e.w+o,v),r(e.u1-b,n.vr,n.rh)]);for(let[w,E,y,A,S]of M){let T=HM(w,i.id,E,y,A,S);T&&x.push(T)}}return x}function HM(i,t,e,n,r,s){let o=So(wr(r,n));if(o<.3)return null;let a=Ji(wr(r,n)),l=wr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=So(u);if(h<.3)return null;let f=Ji(u),d=Ji($0(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Ji([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/hc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/h));return[c*x,o-(o-c)*x]},facing:[p[0],p[2]]}}function uc(i,t,e,n,r,s,o,a){let l=Ji(wr(r,n)),c=Ji(wr(s,n)),u=Ji($0(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Ji([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:So(wr(r,n)),ls:So(wr(s,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function X0(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Y0(i){let t=i.module_w||kM,e=i.module_h||zM;return i.portrait===!1?[e,t]:[t,e]}function WM(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function q0(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*hc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*hc:0}function XM(i,t){let[,e]=Y0(t),n=q0(i,t);return i.wall?e*Math.cos(n)+Uh:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Uh}function wo(i,t,e=!1){let[n,r]=Y0(t),s=[],o=q0(i,t),a=r*Math.cos(o),l=XM(i,t),c=WM(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?u-b:t.align==="center"?(u-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,v=h.has(_);if(v&&!e)continue;let M=t.u+(x+m)*(n+Uh),w=t.v+g*l,E=M+n,y=w+(i.flat||i.wall?a:r);if(f){if(!(p((M+E)/2,w)&&p((M+E)/2,y)))continue}else if(![[M,w],[E,w],[E,y],[M,y]].every(([C,k])=>p(C,k)))continue;if(i.wall&&o>.001){let C=Sr+r*Math.sin(o),[k,R]=t.flip?[C,Sr]:[Sr,C],F=[d(M,w,k),d(E,w,k),d(E,y,R),d(M,y,R)],D=t.flip?w:y,L=[M+.05,E-.05].map(U=>[d(U,D,0),d(U,D,C)]);s.push({corners:F,posts:L,cell:_,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,w,Sr),d(E,w,Sr),d(E,y,Sr),d(M,y,Sr)],posts:[],cell:_,skipped:v});continue}let A=.15,S=A+r*Math.sin(o),[T,I]=t.flip?[y,w]:[w,y],O=[d(M,T,A),d(E,T,A),d(E,I,S),d(M,I,S)];s.push({corners:O,posts:[M+.05,E-.05].flatMap(C=>[[d(C,T,0),d(C,T,A)],[d(C,I,0),d(C,I,S)]]),cell:_,skipped:v})}}),s}function wr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function So(i){return Math.hypot(i[0],i[1],i[2])}function Ji(i){let t=So(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function $0(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var YM=.78,qM=1.18;function $M(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||YM,module_h:i.h||qM}}function fc(i,t){let e=wo(i,$M(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function dc(i,t,e){let n=t?fc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>$t([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var To=1712952,Eo=2239816,j0=1318193,vi=zt(3662079,.9),xs=zt(5995775,.45),Ye=.14,ZM=9427199,KM=13226982,JM=14936565,jM={black:{glass:new et(329483),edge:zt(9082544,.32),cells:zt(2766160,.22)},blue:{glass:new et(1386842),edge:zt(10467583,.55),cells:zt(4025599,.35)}},QM=zt(13226982,.5),t2=zt(13226982,.85),e2=zt(16757575,.95),Z0=new et(2845583),K0=new et(1713986),n2=new et(3662079).multiplyScalar(.35),J0=new et(4871791);function i2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Q0(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:o2(i),r=e?.type==="custom"?a2(i,e.sections??[],e.overhang):n?[n]:[];return s2(i,r),r2(i,r,t),r}function r2(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Tr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?fc(o,s):null;if(!o||!a)continue;let l=o.section?t.find(R=>R.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?dc(i,o,s):null,u=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,h=u?u.elevation:l.floor.elevation+l.base,f=R=>[R[0],R[1]-h,R[2]],[d,p,b,g]=a.map(f),m=e.get(s.id)??{open:0,tilt:0,cover:0},x=!!c&&(u!==null||c.floor.id===l.floor.id),_=u?(l.winBelow??=new Map).get(u.id)??l.winBelow.set(u.id,{floor:u,solid:new te,lines:new De,glass:new te}).get(u.id):x?l.win??={solid:new te,lines:new De,glass:new te}:l.winRoof??={solid:new te,lines:new De,glass:new te},v=(R,F)=>[R[0]+o.n[0]*F,R[1]+o.n[1]*F,R[2]+o.n[2]*F],M=(R,F,D)=>[R[0]+(F[0]-R[0])*D,R[1]+(F[1]-R[1])*D,R[2]+(F[2]-R[2])*D],w=m.open>.02||m.tilt>.02?e2:t2,E=[d,p,b,g].map(R=>v(R,.06)),y=[d,p,b,g].map(R=>v(R,-.02));for(let R=0;R<4;R++){_.lines.seg(E[R],E[(R+1)%4],w);let F=(R+1)%4;_.solid.tri(y[R],y[F],E[F],J0),_.solid.tri(y[R],E[F],E[R],J0)}let A=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*ae,S=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),T=R=>{let F=o.es;return[R[0]-F[0]*S*Math.cos(A)+o.n[0]*S*Math.sin(A),R[1]-F[1]*S*Math.cos(A)+o.n[1]*S*Math.sin(A),R[2]-F[2]*S*Math.cos(A)+o.n[2]*S*Math.sin(A)]},I=v(g,.065),O=v(b,.065),C=T(I),k=T(O);_.glass.tri(C,k,O,Z0),_.glass.tri(C,O,I,Z0);for(let[R,F]of[[C,k],[k,O],[O,I],[I,C]])_.lines.seg(R,F,w);if(m.cover>.02){let R=Math.min(1,m.cover),F=v(M(I,C,R),.01),D=v(M(O,k,R),.01),L=v(I,.01),U=v(O,.01);_.solid.tri(F,D,U,K0),_.solid.tri(F,U,L,K0);let z=Math.max(1,Math.round(S*R/.05));for(let G=1;G<=z;G++){let V=G/z;_.lines.seg(v(M(L,F,V),.004),v(M(U,D,V),.004),n2)}}}}function s2(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Tr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&zh(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function zh(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=jM[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of wo(e,n)){let[u,h,f,d]=c.corners.map(s);i.tri(u,h,f,o.glass),i.tri(u,f,d,o.glass),i.tri(u,f,h,o.glass),i.tri(u,d,f,o.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,_)=>[m[0]+(x[0]-m[0])*_,m[1]+(x[1]-m[1])*_,m[2]+(x[2]-m[2])*_],g=[u,h,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(b(u,h,m/a)),p(b(d,f,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(b(u,d,m/l)),p(b(h,f,m/l)),o.cells);for(let[m,x]of c.posts)t.seg(s(m),s(x),QM)}}function o2(i){let t=i.settings.roof,e=i2(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(T=>T[0])),r=e.rooms.flatMap(S=>S.points.map(T=>T[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new te,h=new De;if(t.type==="flat"){Pe(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,To,Eo,{bottom:!0});let S=.252;for(let[T,I]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([T[0],S,T[1]],[I[0],S,I[1]],vi),h.seg([T[0],0,T[1]],[I[0],0,I[1]],xs);return{floor:e,base:e.height,solid:u,lines:h,glass:new te}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,b=p*Math.tan(t.pitch*ae),g=(S,T,I)=>d?[S,I,(l+c)/2+T]:[(o+a)/2+T,I,S],[m,x]=d?[o,a]:[l,c],_=new et(Eo),v=new et(To),M=(S,T,I,O,C)=>{u.tri(S,T,I,C),u.tri(S,I,O,C)};for(let S of[-1,1]){M(g(m,S*p,0),g(x,S*p,0),g(x,0,b),g(m,0,b),_),M(g(m,S*p,-Ye),g(m,0,b-Ye),g(x,0,b-Ye),g(x,S*p,-Ye),v),M(g(m,S*p,-Ye),g(x,S*p,-Ye),g(x,S*p,0),g(m,S*p,0),v);for(let T of[m,x])M(g(T,S*p,-Ye),g(T,S*p,0),g(T,0,b),g(T,0,b-Ye),v);h.seg(g(m,S*p,0),g(x,S*p,0),xs);for(let T of[m,x])h.seg(g(T,S*p,0),g(T,0,b),xs)}let w=t.overhang,E=new et(j0),y=p-w,A=y*Math.tan(t.pitch*ae);for(let S of[m+w,x-w])u.tri(g(S,-y,-Ye),g(S,y,-Ye),g(S,0,A-Ye),E),u.tri(g(S,y,-Ye),g(S,-y,-Ye),g(S,0,A-Ye),E);return h.seg(g(m,0,b+.004),g(x,0,b+.004),vi),{floor:e,base:e.height,solid:u,lines:h,glass:new te}}function a2(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(Tr(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=vr(t,l),u=c?null:e0(t,l),h=c?bh(c,l):u?i0(l,u):l,f=ec(i,c?h:l,h.overhang??e),d=u?{...f,[u.end===0?"u0":"u1"]:0}:f,p=!h.open&&h.shape!=="flat"&&h.shape!=="parapet";return[l,{parent:c,junction:u,drawn:h,ov:d,covers:p?Qp(h,yr(h,d).faces):[]}]}));for(let l of o){let c=a.get(l),u=Zp(i,l)??n[0],h=l.open?`${u.id}:open`:u.id,f=r.get(h);f||r.set(h,f={floor:u,base:0,solid:new te,lines:new De,glass:new te,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=u.elevation+u.height>l.base+.05&&!l.dormer&&!d,b=t.filter(M=>M!==l&&vr(t,M)===l).flatMap(M=>$p(l,M));for(let M of i.settings.roof.windows??[]){let w=s.get(M.face),E=w&&w.section===l.id?fc(w,M):null;if(!E)continue;let y=E.map(A=>oi(l,A[0],A[2]));b.push({u0:Math.min(...y.map(A=>A[0])),u1:Math.max(...y.map(A=>A[0])),v0:Math.min(...y.map(A=>A[1])),v1:Math.max(...y.map(A=>A[1]))})}let g=c.drawn,m=t.some(M=>M.shape==="hip"&&M.points?.length===6&&M.custom_ridge?.length===2);m&&l.id==="roof_topfhghm"?g={...g,x1:7.5}:m&&l.id==="roof_1wpoq01p"&&(g={...g,x0:7.5});let x=c.junction?1-c.junction.end:null;if(d){let M=fn(g),w=yr(d,{u0:0,u1:0,a:0,b:0}),E=y=>{let[A,S]=M.at(y,M.w/2),[T,I]=oi(d,A,S);return bo(w,T,I)??sn(d).y(I)};x=E(M.u0)<=E(M.u1)?0:1}let _=o.filter(M=>t0(t,l,M)),v=_.length?{covers:_h(g,_.flatMap(M=>a.get(M).covers)),lines:_h(g,_.filter(M=>o.indexOf(M)>o.indexOf(l)).flatMap(M=>a.get(M).covers)),wallU:c.junction?[fn(l).u0,fn(l).u1]:null}:null;l2(f.solid,f.lines,g,c.ov,u.elevation,f.glass,p,b,x,v)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function l2(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let u=fn(e),h=sn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=u.w,g=u.u0-Math.max(0,f.u0),m=u.u1+Math.max(0,f.u1),x=(D,L,U)=>{let[z,G]=u.at(D,L);return[z,U-r,G]},_=new et(Eo),v=new et(To),M=new et(j0),w=(D,L)=>{for(let U=1;U+1<D.length;U++)i.tri(D[0],D[U],D[U+1],L)},E=[],y=[],A=null,S=[],T=[null,null],I=[];if(e.shape==="flat"||e.shape==="parapet"){let D=e.eave_a,L=e.shape==="parapet",U=e.points&&e.points.length>=3?Xp(e,L?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):L?[u.at(u.u0,0),u.at(u.u1,0),u.at(u.u1,b),u.at(u.u0,b)]:[u.at(g,-d),u.at(m,-d),u.at(m,b+p),u.at(g,b+p)];Pe(i,U,D-r,D-r+.25,To,Eo,{bottom:!0});for(let z=0;z<U.length;z++){let G=U[z],V=U[(z+1)%U.length];t.seg([G[0],D-r+.252,G[1]],[V[0],D-r+.252,V[1]],vi),t.seg([G[0],D-r,G[1]],[V[0],D-r,V[1]],xs)}if(L){let z=q=>Gn(q)>=0?q:[...q].reverse(),G=z(U),V=Ql(G,-.2),W=G.length;for(let q=0;q<W;q++){let st=z([G[q],G[(q+1)%W],V[(q+1)%W],V[q]]);Pe(i,st,D-r+.25,D-r+.65,To,Eo),t.seg([G[q][0],D-r+.652,G[q][1]],[G[(q+1)%W][0],D-r+.652,G[(q+1)%W][1]],vi),t.seg([V[q][0],D-r+.652,V[q][1]],[V[(q+1)%W][0],D-r+.652,V[(q+1)%W][1]],vi)}}}else{let D=yr(e,f);if(E=D.faces,e.id==="roof_topfhghm"||e.id==="roof_1wpoq01p"){let U=e.id==="roof_topfhghm"?{a:-.9506849315068495,b:-.8390996311772799,c:10.079249164807562}:{a:.9506849315068493,b:-.8390996311772799,c:-4.181024807795179};E=E.map((z,G)=>{if(G!==0)return z;let[V,W]=u.at(0,0),[q,st]=u.at(1,0),[X,Y]=u.at(0,1),nt=U.a*(q-V)+U.b*(st-W),j=U.a*(X-V)+U.b*(Y-W),Q=U.a*V+U.b*W+U.c;return vh(z,nt,j,Q,!0)}).filter(z=>z.length>=3)}if(e.id==="roof_polygonhip_prototype"){let U=[{index:0,a:-.9506849315068495,b:-.8390996311772799,c:10.079249164807562},{index:4,a:.9506849315068493,b:-.8390996311772799,c:-4.181024807795179}];E=E.map((z,G)=>{let V=U.find(bt=>bt.index===G);if(!V)return z;let[W,q]=u.at(0,0),[st,X]=u.at(1,0),[Y,nt]=u.at(0,1),j=V.a*(st-W)+V.b*(X-q),Q=V.a*(Y-W)+V.b*(nt-q),dt=V.a*W+V.b*q+V.c;return vh(z,j,Q,dt,!1)}).filter(z=>z.length>=3)}for(let U of a)E=E.flatMap(z=>xh(z,U));y=D.rim;let L=e.id==="roof_topfhghm"?[{a:-.9506849315068495,b:-.8390996311772799,c:10.079249164807562,positive:!0}]:e.id==="roof_1wpoq01p"?[{a:.9506849315068493,b:-.8390996311772799,c:-4.181024807795179,positive:!0}]:e.id==="roof_polygonhip_prototype"?[{a:-.9506849315068495,b:-.8390996311772799,c:10.079249164807562,positive:!1},{a:.9506849315068493,b:-.8390996311772799,c:-4.181024807795179,positive:!1}]:[];if(L.length){A=[];for(let U=0;U<y.length;U++){let z=[y[U],y[(U+1)%y.length]];for(let G of L){if(!z)break;let V=st=>{let[X,Y]=u.at(st[0],st[1]),nt=G.a*X+G.b*Y+G.c;return G.positive?nt:-nt},W=V(z[0]),q=V(z[1]);if(W<-1e-8&&q<-1e-8)z=null;else if(W<-1e-8||q<-1e-8){let st=W/(W-q),X=[z[0][0]+st*(z[1][0]-z[0][0]),z[0][1]+st*(z[1][1]-z[0][1]),z[0][2]+st*(z[1][2]-z[0][2])];z=W<0?[X,z[1]]:[z[0],X]}}z&&A.push(z)}}if(S=D.ridges,e.id==="roof_polygonhip_prototype"){let U=[[[3.85,7.65,4.02],[7.5,3.51461503369809,7.49]],[[7.5,3.51461503369809,7.49],[11.15,7.65,4.02]]],z=(G,V)=>e.axis==="x"?[G,e.flip?Math.max(e.z0,e.z1)-V:V-Math.min(e.z0,e.z1)]:[V,e.flip?Math.max(e.x0,e.x1)-G:G-Math.min(e.x0,e.x1)];for(let[[G,V,W],[q,st,X]]of U){let Y=z(G,V),nt=z(q,st);t.seg(x(Y[0],Y[1],W+.006),x(nt[0],nt[1],X+.006),vi)}}if(e.id==="roof_topfhghm"||e.id==="roof_1wpoq01p"){let U=L[0],z=G=>{let[V,W]=u.at(G[0],G[1]);return U.a*V+U.b*W+U.c};S=S.flatMap(([G,V])=>{let W=z(G),q=z(V);if(W<-1e-8&&q<-1e-8)return[];if(W>=-1e-8&&q>=-1e-8)return[[G,V]];let st=W/(W-q),X=[G[0]+st*(V[0]-G[0]),G[1]+st*(V[1]-G[1]),G[2]+st*(V[2]-G[2])];return W<0?[[X,V]]:[[G,X]]})}if(T=D.gables,c){for(let U of E)for(let z of c.lines){let G=jp(U,z.poly);if(G)for(let[V,W]of yh(G[0],G[1],c.covers.filter(q=>q!==z)))I.push([V,W])}E=E.flatMap(U=>Jp(U,c.covers))}}let O=!!e.open,C=new et(ZM);for(let D of E){if(O){for(let L=1;L+1<D.length;L++)s.tri(x(D[0][0],D[0][1],D[0][2]),x(D[L][0],D[L][1],D[L][2]),x(D[L+1][0],D[L+1][1],D[L+1][2]),C);continue}w(D.map(([L,U,z])=>x(L,U,z)),_),w(D.map(([L,U,z])=>x(L,U,z-Ye)),v)}let k=(D,L)=>c?yh(D,L,c.covers):[[D,L]],R=A??y.map((D,L)=>[D,y[(L+1)%y.length]]);for(let[D,L]of R)for(let[[U,z,G],[V,W,q]]of k(D,L))O||w([x(U,z,G),x(V,W,q),x(V,W,q-Ye),x(U,z,G-Ye)],v),t.seg(x(U,z,G),x(V,W,q),O?vi:xs);if(O){c2(i,t,u,h,f,x,r);return}for(let[D,L]of S)for(let[[U,z,G],[V,W,q]]of k(D,L))t.seg(x(U,z,G+.004),x(V,W,q+.004),vi);for(let[[D,L,U],[z,G,V]]of I)t.seg(x(D,L,U+.004),x(z,G,V+.004),vi);let F=e.base;if(!o){for(let D of[0,1]){let L=T[D];if(!L||l!==null&&l!==D)continue;let U=u2(L,F-Ye),z=D===0?u.u0:u.u1;U.length>=3&&w(U.map(([G,V])=>x(z,G,V)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[D,L]=c?.wallU??[u.u0,u.u1];for(let U of[0,b]){let z=h.y(U)-Ye;z>F+.02&&w([x(D,U,F),x(L,U,F),x(L,U,z),x(D,U,z)],M)}}else if(e.eave_a>F+.02)for(let[D,L,U,z]of[[u.u0,0,u.u1,0],[u.u1,0,u.u1,b],[u.u1,b,u.u0,b],[u.u0,b,u.u0,0]])w([x(D,L,F),x(U,z,F),x(U,z,e.eave_a),x(D,L,e.eave_a)],M)}}function c2(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,h=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,_,v,M,w)=>{let E=[e.at(m,_),e.at(x,_),e.at(x,v),e.at(m,v)],y=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Pe(i,y<0?[...E].reverse():E,M-o,w-o,KM,JM,{bottom:!0})},b=o;for(let[m,x]of[[0,u],[a,h]]){if(!x)continue;let _=n.y(m)-.03,v=m===0?0:a-l;p(e.u0,e.u1,v,v+l,_-c,_),t.seg(s(e.u0,m,_-c),s(e.u1,m,_-c),xs)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,M=a*(_+1)/6,w=Math.min(n.y(v),n.y(M))-.03;p(m,m+l,v,M,w-c,w)}let g=[];for(let[m,x]of[[0,u],[a-l,h]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=v;M++){let w=e.u0+_*M/v;M===0&&!f||M===v&&!d||g.push([w,m])}}if(!u&&!h)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let _=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,_)}}function u2(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Ao={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},tm={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},je=.2,h2=-.06,f2=.01,Ro=8,pc=.42,Vh=.42;function rm(i,t,e,n=[],r=[],s,o){let{walls:a,open:l}=ri(i.rooms,{exterior:t,interior:e},i.walls??[]),c=(R,F,D,L)=>{let U=L?.slope?Math.min(D,uh(L.slope,R,F)):Math.min(D,i.height),z=s?s(R,F):null;if(z===null)return U;let G=o?.(R,F,L)&&!L?.slope&&L?.height===void 0;return Math.max(.05,Math.min(G?D:U,z))},u=(R,F)=>{let D=s?s(R,F):null;return D!==null&&D<h2},h=(R,F,D,L,U,z)=>{if(!s&&!z?.slope)return U;let G=U,V=Math.max(2,Math.ceil((L-D)/.25)+1);for(let W=0;W<V;W++){let q=D+(L-D)*W/(V-1);G=Math.min(G,c(R[0]+F[0]*q,R[1]+F[1]*q,U,z))}return G},f=new te(!0,!0),d=[],p=new De,b=[];for(let R of i.rooms){if(R.points.length<3)continue;let F=mc(R.points),D=tm[R.floor_material]??tm.wood,L=new et(D.color),U=n.flatMap(st=>{if(l0(st,F))return[st];if(!s0(st))return[];let X=ps(F,st);return X.length>=3&&Math.abs(Gn(X))>.01?[mc(X)]:[]}),z=a0(U).map(st=>c0(mc(st),.003));b.push(...z);let G=[...F,...z.flat()],V=f.count;for(let[st,X,Y]of Cn(F,z)){let nt=G[st],j=G[X],Q=G[Y];f.tri([nt[0],0,nt[1]],[Q[0],0,Q[1]],[j[0],0,j[1]],L,L,L,[nt[0],nt[1],Q[0],Q[1],j[0],j[1]],Jt,D.tile)}d.push({roomId:R.id,start:V,end:f.count,color:D.color});let W=new et(Ao.slab),q=st=>{for(let X=0;X<st.length;X++){let Y=st[X],nt=st[(X+1)%st.length];f.tri([Y[0],-je,Y[1]],[Y[0],0,Y[1]],[nt[0],0,nt[1]],W),f.tri([Y[0],-je,Y[1]],[nt[0],0,nt[1]],[nt[0],-je,nt[1]],W)}};q(F);for(let st of z){q([...mc(st)].reverse());for(let X=0;X<st.length;X++){let Y=st[X],nt=st[(X+1)%st.length];p.seg([Y[0],.006,Y[1]],[nt[0],.006,nt[1]],qi),p.seg([Y[0],-je,Y[1]],[nt[0],-je,nt[1]],xi)}}}let g=new Map,m=[],x=new Map,_=new Map;for(let R of a){if(!R.free)continue;let F=Vp(R,i.rooms);F!==null&&_.set(R,F)}for(let R of a){let F="interior",D=null,L=_.get(R);if(R.exterior||L!==void 0){let z=R.b[0]-R.a[0],G=R.b[1]-R.a[1],V=Math.hypot(z,G)||1,W=L===!1?-1:1,q=[W*G/V,-W*z/V],st=(Math.round(Math.atan2(q[1],q[0])/(2*Math.PI)*Ro)%Ro+Ro)%Ro;F=`s${st}`;let X=st/Ro*2*Math.PI;D=[Math.cos(X),Math.sin(X)]}let U=g.get(F);U===void 0&&(U=m.length,g.set(F,U),m.push(D)),x.set(R,U)}let v=new Map,M=[];for(let R of i.openings){let F=hs(R,i.rooms,i.walls??[]);if(!F)continue;let D=fs(a,R,F);if(!D)continue;let{wall:L,s:U}=D,z=bc([L.b[0]-L.a[0],L.b[1]-L.a[1]]),G=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),V=U-R.width/2<-1e-6?fh(a,L,!1):null,W=U+R.width/2>G+1e-6?fh(a,L,!0):null,q=ee=>ee?Math.hypot(ee.b[0]-ee.a[0],ee.b[1]-ee.a[1]):0,st=-q(V),X=G+q(W),Y=Math.min(R.width,X-st),nt=Math.max(st,Math.min(X-Y,U-Y/2)),j=F.room.points,Q=_.get(L),dt=L.free?Q??z[0]*(j[1][0]-j[0][0])+z[1]*(j[1][1]-j[0][1])>0:L.exterior||L.roomLeft===R.room_id,bt=[-z[1],z[0]],xt=dt?bt:[-bt[0],-bt[1]],lt=Math.min(h(L.a,z,nt,nt+Y,Co(L,i.height),L)-.02,R.sill+R.height),vt=Math.max(0,Math.min(R.sill,lt-.1)),pt=[xt[1],-xt[0]],Wt=z[0]*pt[0]+z[1]*pt[1]>0,me={opening:R,bucket:x.get(L),start:[L.a[0]+z[0]*nt,L.a[1]+z[1]*nt],axis:z,width:Y,toRoom:xt,faceRoom:dt?L.left:L.right,faceOut:dt?L.right:L.left,sill:vt,top:lt,hingeAtStart:R.hinge==="left"===Wt,exterior:L.exterior||Q!==void 0};M.push(me);let xe=v.get(L);xe||v.set(L,xe=[]),xe.push({s0:nt,s1:nt+Y,sill:vt,top:lt,info:me});for(let ee of[V,W]){if(!ee)continue;let be=H=>(L.a[0]+z[0]*H-ee.a[0])*z[0]+(L.a[1]+z[1]*H-ee.a[1])*z[1],Z=Math.max(0,be(nt)),Ie=Math.min(q(ee),be(nt+Y));if(Ie-Z<1e-4)continue;let ue=v.get(ee);ue||v.set(ee,ue=[]),ue.push({s0:Z,s1:Ie,sill:vt,top:lt,info:me,cont:!0})}}let w=Math.min(i.cut_height,i.height),E=new te;for(let R of a){let F=x.get(R),D=bc([R.b[0]-R.a[0],R.b[1]-R.a[1]]),L=(v.get(R)??[]).sort((j,Q)=>j.s0-Q.s0),U=Co(R,i.height),z=o&&R.height===void 0&&!R.slope&&s?R.footprint.map(([j,Q])=>o(j,Q,R)?s(j,Q):null).filter(j=>j!==null):[],G=Math.max(U,...z),V=[],W=[-1/0,...new Set(L.flatMap(j=>[j.s0,j.s1])).values(),1/0].sort((j,Q)=>j-Q);for(let j=0;j+1<W.length;j++){let Q=W[j],dt=W[j+1];if(dt-Q<1e-6)continue;let bt=Number.isFinite(Q)&&Number.isFinite(dt)?(Q+dt)/2:Number.isFinite(Q)?Q+1:dt-1,xt=L.filter(pt=>pt.s0<bt&&pt.s1>bt).map(pt=>[pt.sill,pt.top]).sort((pt,Wt)=>pt[0]-Wt[0]),lt=[],vt=-je;for(let[pt,Wt]of xt)pt>vt+1e-4&&lt.push([vt,pt<1e-4?-f2:pt]),vt=Math.max(vt,Wt);G>vt+1e-4&&lt.push([vt,G]),V.push({t0:Q,t1:dt,ranges:lt})}let q=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),st=!!((s||R.slope)&&(h(R.a,D,0,q,G,R)<G-.001||o&&G>i.height+.001)),X=st?V.flatMap(j=>{let Q=Math.max(j.t0,-.5),dt=Math.min(j.t1,q+.5),bt=Math.max(1,Math.ceil((dt-Q)/.3));return Array.from({length:bt},(xt,lt)=>({t0:lt===0?j.t0:Q+(dt-Q)*lt/bt,t1:lt===bt-1?j.t1:Q+(dt-Q)*(lt+1)/bt,ranges:j.ranges,inner0:lt>0,inner1:lt<bt-1}))}):V.map(j=>({...j,inner0:!1,inner1:!1})),Y=j=>(j[0]-R.a[0])*D[0]+(j[1]-R.a[1])*D[1],nt=j=>{if(!s)return[j];let Q=Gh(R.footprint,R.a,D,j.t0,j.t1),dt=Q.filter(([vt,pt])=>u(vt,pt)).length;if(dt===0)return[j];if(dt===Q.length)return[];let bt=Math.max(j.t0,-.5),xt=Math.min(j.t1,q+.5),lt=Math.max(1,Math.ceil((xt-bt)/.05));return Array.from({length:lt},(vt,pt)=>({t0:pt===0?j.t0:bt+(xt-bt)*pt/lt,t1:pt===lt-1?j.t1:bt+(xt-bt)*(pt+1)/lt,ranges:j.ranges,inner0:pt>0||j.inner0,inner1:pt<lt-1||j.inner1})).filter(vt=>!Gh(R.footprint,R.a,D,vt.t0,vt.t1).every(([pt,Wt])=>u(pt,Wt)))};for(let j of st?X.flatMap(nt):X){let Q=Gh(R.footprint,R.a,D,j.t0,j.t1);if(Q.length<3)continue;let dt=(lt,vt)=>Math.abs(Y(lt)-vt)<1e-4,bt=(lt,vt)=>j.inner0&&dt(lt,j.t0)&&dt(vt,j.t0)||j.inner1&&dt(lt,j.t1)&&dt(vt,j.t1),xt=st?Math.min(...Q.map(([lt,vt])=>c(lt,vt,G,R))):G;for(let[lt,vt]of j.ranges){let pt=Math.min(vt,st?Math.max(...Q.map(([ee,be])=>c(ee,be,G,R))):vt);if(pt-lt<1e-4||xt-lt<.01)continue;let Wt=lt>.01,me=st&&vt>xt,xe=(ee,be)=>Math.min(vt,c(ee,be,G,R));if(lt<w-1e-6){let ee=pt>w+1e-6?v0+F:$i+F,be=me&&xt<w?(Z,Ie)=>Math.min(w,xe(Z,Ie)):Math.min(pt,w);Pe(E,Q,lt,be,Ao.wall,Ao.wallTop,{aoFrom:0,bottom:Wt,fold:$i+F,topFold:ee,skipSide:bt})}pt>w+1e-6&&xt>w+1e-6&&Pe(E,Q,Math.max(lt,w),me?xe:pt,Ao.wall,Ao.wallTop,{aoFrom:0,fold:F,bottom:Wt&&lt>=w,skipSide:bt})}}}let y=a.flatMap(R=>R.footprint),A=m2(a,y),S=new De;S.p.push(...p.p),S.c.push(...p.c),S.f.push(...p.f);let T=(R,F)=>(v.get(R)??[]).filter(F);for(let R of A.edges){let F=x.get(R.wall);for(let[L,U]of gc(R,T(R.wall,z=>z.sill<=.005)))S.seg([L[0],.004,L[1]],[U[0],.004,U[1]],x0);for(let[L,U]of gc(R,T(R.wall,z=>z.sill<w&&z.top>w)))S.seg([L[0],w,L[1]],[U[0],w,U[1]],Rh,oc+F);let D=Co(R.wall,i.height);for(let[L,U]of gc(R,T(R.wall,z=>z.top>=D-.021))){if(!s&&!R.wall.slope){S.seg([L[0],D,L[1]],[U[0],D,U[1]],qi,D<=w+1e-6?$i+F:F);continue}let z=Math.max(1,Math.ceil(Math.hypot(U[0]-L[0],U[1]-L[1])/.3));for(let G=0;G<z;G++){let V=[L[0]+(U[0]-L[0])*G/z,L[1]+(U[1]-L[1])*G/z],W=[L[0]+(U[0]-L[0])*(G+1)/z,L[1]+(U[1]-L[1])*(G+1)/z];if(u(V[0],V[1])&&u(W[0],W[1]))continue;let q=c(V[0],V[1],D,R.wall),st=c(W[0],W[1],D,R.wall);S.seg([V[0],q,V[1]],[W[0],st,W[1]],qi,Math.max(q,st)<=w+1e-6?$i+F:F)}}}let I=(R,F)=>c(F[0],F[1],Co(R,i.height),R);for(let R of A.corners){if(u(R.p[0],R.p[1]))continue;let F=R.walls.reduce((L,U)=>I(U,R.p)>I(L,R.p)+1e-6?U:L,R.wall),D=c(R.p[0],R.p[1],Co(F,i.height),F);S.segSplit([R.p[0],.004,R.p[1]],[R.p[0],D,R.p[1]],xi,Math.min(w,D),x.get(F))}for(let R of A.joints){let[F,D]=R.walls,L=[I(F,R.a),I(D,R.a)],U=[I(F,R.b),I(D,R.b)];if(Math.abs(L[0]-L[1])<.01&&Math.abs(U[0]-U[1])<.01)continue;let z=L[1]+U[1]>=L[0]+U[0]?D:F,G=x.get(z),V=Math.max(...L),W=Math.max(...U);S.seg([R.a[0],V,R.a[1]],[R.b[0],W,R.b[1]],qi,Math.max(V,W)<=w+1e-6?$i+G:G);for(let[q,st]of[[R.a,L],[R.b,U]]){let X=Math.min(...st),Y=Math.max(...st);Y-X>.01&&S.segSplit([q[0],X,q[1]],[q[0],Y,q[1]],xi,w,G)}}for(let R of v.values())for(let F of R)F.cont||d2(S,F,w);let O=g2(A.edges,i.rooms,v),C=new te;V0(E,S,i,C);for(let R of r)zh(E,S,R.face,R.field,i.elevation);let k=[];for(let R of i.furniture){if(Fp(R.type))continue;let F=E.count,D=S.p.length/6,L=R,U=rn(i,L);if(Zl.has(L.type)){let z=Kl(a,L,i.height,U);L={...L,x:z.x,z:z.z},U=z.y}lc(E,S,O,L,U),U+L.h>w+.05&&(y0(E,F,w,Ch),_0(S,D,w,Ch)),k.push({id:L.id,start:F,end:E.count})}return{floor:f.geometry(),roomTris:d,holes:b,walls:E.geometry(),water:C.geometry(),lines:S.geometry(),shadow:O.geometry(),buckets:m,openings:M,walls2d:a,openRooms:l,wallBuckets:a.map(R=>x.get(R)),furnitureTris:k,roofUnder:s}}function d2(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),xi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),xi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),xi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),xi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),xi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Rh,oc+r)}function Gh(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=em(o,a=>s(a)-n)),Number.isFinite(r)&&(o=em(o,a=>r-s(a))),o}function em(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var nm=i=>Math.round(i*1e3),Po=i=>`${nm(i[0])},${nm(i[1])}`,im=(i,t)=>{let e=Po(i),n=Po(t);return e<n?`${e}|${n}`:`${n}|${e}`};function p2(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-r[0])*o+(h[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=r;for(let h of c){let f=[r[0]+o*h,r[1]+a*h];Po(f)!==Po(u)&&e.push([u,f]),u=f}e.push([u,s])}return e}function m2(i,t){let e=i.map(u=>({wall:u,edges:p2(u.footprint,t)})),n=new Map,r=new Map;for(let{wall:u,edges:h}of e)for(let[f,d]of h){let p=im(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(u):r.set(p,{a:f,b:d,walls:[u]})}let s=[];for(let u of r.values())u.walls.length===2&&u.walls[0]!==u.walls[1]&&s.push({a:u.a,b:u.b,walls:[u.walls[0],u.walls[1]]});let o=[],a=new Map,l=(u,h,f)=>{let d=Po(u),p=a.get(d);p||a.set(d,p={p:u,wall:h,walls:[],d:[]}),p.d.push(f),p.walls.includes(h)||p.walls.push(h)};for(let{wall:u,edges:h}of e)for(let[f,d]of h){if(n.get(im(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;o.push({a:f,b:d,wall:u});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,u,b),l(d,u,b)}let c=[];for(let{p:u,wall:h,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:u,wall:h,walls:f});return{edges:o,corners:c,joints:s}}function gc(i,t){if(!t.length)return[[i.a,i.b]];let e=bc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=bc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let p=[];return h.s0>f&&p.push([f,h.s0]),h.s1<d&&p.push([h.s1,d]),p});let u=h=>{let f=(h-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>s<=o?[u(h),u(f)]:[u(f),u(h)])}function g2(i,t,e){let n=new te,r=new et(Vh,Vh,Vh),s=new et(1,1,1),o=.002;for(let a of i)for(let[l,c]of gc(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&$t(p,m.points)))continue;let b=[l[0]+d[0]*pc,l[1]+d[1]*pc],g=[c[0]+d[0]*pc,c[1]+d[1]*pc];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function sm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Xi),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>(Ip.has(s.type)||Me(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(Xi);return[...e,...r]}function Co(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function bc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function mc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var b2=new et(1516340),x2=new et(527897),Hh=new et(1779256),Io=new et(1120808),v2=new et(4163256),om=new et(5995161),y2=new et(2240842),_2=new et(1318704),M2=.35,vs=.8,S2=.2,am=.1;function w2(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||Vn(o.type)||!$t(e,o.points)||(r=Math.max(r,s.elevation+br(s,o)+as[o.type]-t.elevation));return r>n?r-n:0}function lm(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Mh(i,t);if(!r)return null;let s=(p,b)=>ls(p,b)-t.elevation,o=n&&r.some(([p,b])=>s(p,b)<-je-.03);if(!o&&!Sh(i,t))return null;let a=t.height,l=-M2,c=(p,b)=>Math.min(a,ls(p,b)-t.elevation),u=new te,h=new te,f=new De,d=(p,b,g,m,x,_,v,M)=>{let w=[b[0]-p[0],b[2]-p[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(p,b,g,_,_,v),M.tri(p,g,m,_,v,v)):(M.tri(p,g,b,_,v,_),M.tri(p,m,g,_,v,v))};for(let p=0;p<r.length;p++){let b=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<1e-4)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[x[1],-x[0]],v=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];$t(v,r)&&(_=[-_[0],-_[1]]);let M=(S,T=.012)=>[b[0]+x[0]*S+_[0]*T,b[1]+x[1]*S+_[1]*T],w=[];for(let S of e){if(S.opening.type!=="window"||!S.exterior||S.opening.well===!1)continue;let T=S.start[0]+S.axis[0]*(S.width/2)-S.toRoom[0]*S.faceOut,I=S.start[1]+S.axis[1]*(S.width/2)-S.toRoom[1]*S.faceOut,O=(T-b[0])*x[0]+(I-b[1])*x[1];Math.abs((T-b[0])*_[0]+(I-b[1])*_[1])>.08||O<-.05||O>m+.05||r0(i,t,S.exterior,S.sill,[T,I])&&w.push({s0:Math.max(0,O-S.width/2-am),s1:Math.min(m,O+S.width/2+am),bottom:Math.max(l+.05,S.sill-S2),rim:S.opening.well_rim??0})}let E=new Set([0,m]);for(let S of w)E.add(S.s0),E.add(S.s1);let y=[...E].sort((S,T)=>S-T),A=[];for(let S=0;S<y.length-1;S++){let T=Math.max(1,Math.ceil((y[S+1]-y[S])/.5));for(let I=0;I<T;I++)A.push(y[S]+(y[S+1]-y[S])*I/T)}A.push(m);for(let S=0;S<A.length-1;S++){let T=A[S],I=A[S+1],O=w.find(G=>T>=G.s0-1e-6&&I<=G.s1+1e-6),C=M(T),k=M(I),R=c(C[0],C[1]),F=c(k[0],k[1]),D=O?Math.min(R,O.bottom):R,L=O?Math.min(F,O.bottom):F;if(D>l+.01||L>l+.01){let G=Math.min(D,l),V=Math.min(L,l);d([C[0],G,C[1]],[k[0],V,k[1]],[k[0],Math.max(L,l),k[1]],[C[0],Math.max(D,l),C[1]],_,x2,b2,u)}let U=s(C[0],C[1]),z=s(k[0],k[1]);if(o&&(U<-je-.01||z<-je-.01)&&d([C[0],Math.min(U,-je),C[1]],[k[0],Math.min(z,-je),k[1]],[k[0],-je,k[1]],[C[0],-je,C[1]],_,_2,y2,u),R>l||F>l||o&&(U<-je||z<-je)){let G=o?Math.min(U,Math.max(R,l)):Math.max(R,l),V=o?Math.min(z,Math.max(F,l)):Math.max(F,l);f.seg([C[0],G+.004,C[1]],[k[0],V+.004,k[1]],v2)}}for(let S of w){let T=M(S.s0,0),I=M(S.s1,0),O=[T[0]+_[0]*vs,T[1]+_[1]*vs],C=[I[0]+_[0]*vs,I[1]+_[1]*vs],k=[(T[0]+I[0]+O[0]+C[0])/4,(T[1]+I[1]+O[1]+C[1])/4],R=w2(i,t,k,c(k[0],k[1])),F=Math.max(S.rim,R>0?R+.02:0),D=W=>c(W[0],W[1])+F,L=S.bottom,U=(W,q)=>[W[0],q,W[1]];h.tri(U(T,L),U(I,L),U(C,L),Io),h.tri(U(T,L),U(C,L),U(O,L),Io);let z=(W,q)=>{h.tri(U(W,L),U(q,L),U(q,D(q)),Io,Io,Hh),h.tri(U(W,L),U(q,D(q)),U(W,D(W)),Io,Hh,Hh)};z(T,O),z(I,C),z(O,C);let G=W=>[W[0],D(W)+.01,W[1]];for(let[W,q]of[[T,I],[I,C],[C,O],[O,T]])f.seg(G(W),G(q),om);let V=Math.max(3,Math.round((S.s1-S.s0)/.12));for(let W=1;W<V;W++){let q=W/V,st=[T[0]+(I[0]-T[0])*q,T[1]+(I[1]-T[1])*q];f.seg(G(st),G([st[0]+_[0]*vs,st[1]+_[1]*vs]),om)}}}return u.count||h.count?{earth:u,wells:h,lines:f}:null}var cm=i=>Math.round(i*1e3)/1e3;function T2(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return o(c)>.02||o(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function um(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&$t([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Mn(a)>=0?1:-1,c=Xi({...t}),u=e,h=n;for(let f=0;f<2;f++){let d=Xi({...t,x:u,z:h});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[-x[1]*l,x[0]*l],v=T2(i,o.id,b,g)?r/2:0,M=0;d.forEach((w,E)=>{let y=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(y<-.01||y>m+.01)return;let A=(w[0]-b[0])*_[0]+(w[1]-b[1])*_[1]-v,S=c[E];(S[0]-b[0])*_[0]+(S[1]-b[1])*_[1]-v<-s||A<M&&(M=A)}),M<-1e-4&&(u-=_[0]*M,h-=_[1]*M)}}return[cm(u),cm(h)]}var E2=500,A2=1e3;function hm(i,t){let e=t-i.timeStamp;return e>A2&&e<6e4}var fm=.12,dm=1.35,R2=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,xc=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=R2(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Wh(this.view.phi+this.velocity.phi,fm,dm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},E2)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(hm(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Wh(this.view.phi+c,fm,dm),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!hm(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Wh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Wh(i,t,e){return Math.min(e,Math.max(t,i))}function ai(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var _c=5,vc=512,pm=.7,yc=class{projectors=new Map;loader=new ur;loggedIds="";depthMaterial=new Kt({colorWrite:!1,side:se});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new Ke(vc,vc);a.depthTexture=new Jn(vc,vc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new $e(60,16/9,pm,40),target:a,matrix:new Te,uniforms:{uProjMat:{value:new Te},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(_c),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ne;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){for(let o of this.projectors.values()){let a=o.texture?r(o.id):null;if(o.texture&&!a&&!o.noPoseLogged&&(o.noPoseLogged=!0,console.warn(`NeonPlan lab: ${o.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of o.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of o.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),o.overlays.delete(b));for(let b of n){let g=o.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new It(b.geometry,this.material(o,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),o.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${o.aspect.toFixed(3)},${s}`;if(c===o.poseKey)continue;o.poseKey=c;let u=o.camera,h=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);u.fov=2*Math.atan(Math.tan(h/2)/o.aspect)*180/Math.PI,u.aspect=o.aspect,u.far=a.reach,u.near=pm,u.position.copy(a.position),u.lookAt(a.position.clone().add(a.direction)),u.updateProjectionMatrix(),o.uniforms.uNearFar.value=[u.near,u.far],u.updateMatrixWorld(),o.uniforms.uProjMat.value.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(o.target),t.clear(),t.render(e,u),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Kt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?ai(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r?.(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function mm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function gm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=mm(s,o),c=mm(o,a),u=Math.min(t,l*.45,c*.45),h=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(u<.005||h[0]*f[0]+h[1]*f[1]+h[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+h[0]*u,o[1]+h[1]*u,o[2]+h[2]*u],p=[o[0]+f[0]*u,o[1]+f[1]*u,o[2]+f[2]*u];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([m*d[0]+x*o[0]+_*p[0],m*d[1]+x*o[1]+_*p[1],m*d[2]+x*o[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var bm=new et(7568261),xm=new et(4869974),C2=new et(3116287),vm=new et(3948872),Xh=Er([.35,.85,.4]),ym=10;function Er(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Lo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function _m(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Er(Lo(i,t));return[e,Er(Lo(i,e))]}function yi(i,t){let e=.5+.5*Math.max(0,t[0]*Xh[0]+t[1]*Xh[1]+t[2]*Xh[2]);return i.clone().multiplyScalar(e)}function ys(i,t,e,n,r,s=!1){let o=Er([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=_m(o),c=(u,h)=>{let f=h/ym*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<ym;u++){let h=c(t,u),f=c(t,u+1),d=c(e,u),p=c(e,u+1);i.tri(h.p,p.p,d.p,yi(r,h.n),yi(r,p.n),yi(r,d.n)),i.tri(h.p,f.p,p.p,yi(r,h.n),yi(r,f.n),yi(r,p.n)),s&&(i.tri([...t],f.p,h.p,yi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,yi(r,o)))}}function P2(i,t,e,n,r,s,o,a){let l=Er(Lo(e,n)),c=(h,f,d)=>[t[0]+e[0]*h*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*h*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*h*r+n[2]*f*s+l[2]*d*o],u=[];for(let[h,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([h,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[h,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[h,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[h,f]of u){let d=yi(a,h);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function Mm(i,t){if(t.points.length<2)return;let e=t.radius,n=gm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?bm.clone().multiplyScalar(.55):bm;ys(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);ys(i,o,a,e*1.22,xm,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);ys(i,o,a,e*1.08,t.water?new et(...t.water).multiplyScalar(.9):new et(10475240),!0);for(let l of s(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];ys(i,c,u,e*1.3,xm,!0)}}else{let[o,a]=s(.055);ys(i,o,a,e*1.4,vm,!0);let[l]=_m(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];ys(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],u,e*.35,vm,!0);let h=r.open===!1?Er(Lo(r.dir,c)):r.dir,f=Er(Lo(h,c)),d=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];P2(i,d,h,f,.1,.028,.012,C2)}}}var Yh=1.62,Mc=.2,qh=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=ri(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=hs(a,e.rooms,e.walls??[]);if(!c)continue;let u=fs(this.walls,a,c);if(!u)continue;let h=u.wall,f=h.b[0]-h.a[0],d=h.b[1]-h.a[1],p=Math.hypot(f,d)||1,b=f/p,g=d/p,m=[h.a[0]+b*u.s,h.a[1]+g*u.s],x=h.left+.45,_=h.right+.45,v=[[m[0]-g*x,m[1]+b*x],[m[0]+g*_,m[1]-b*_]];if(h.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&$t(v[1],w.points)))continue;let M=o.get(h)??[];M.push([u.s-a.width/2+.05,u.s+a.width/2-.05]),o.set(h,M),this.doors.push({centre:m,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c);u<1e-6||this.solids.push({a:a.a,u:[l/u,c/u],len:u,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=Mc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Mc){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Mc){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>$t(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>I2(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=Mc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let u=new Map,h=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=u.get(b);return g===void 0&&(g=this.clear(s[d],s[p]),u.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<o;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<o;p++){if(c[p]||p===d)continue;let b=Math.hypot(s[d][0]-s[p][0],s[d][1]-s[p][1]);a[d]+b>=a[p]||h(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(s[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=hs(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=fs(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,f=c/u,d=[a.a[0]+h*o.s,a.a[1]+f*o.s],p=[d[0]-f*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-f))}}let e=[...this.rooms].sort((r,s)=>Sm(s)-Sm(r))[0],n=e?this.freeNear(Wi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function I2(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function Sm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var $h=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Yh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-Yh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Wi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,u=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,f=Math.hypot(u,h),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/f*d,r.z+=h/f*d,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*h*f+m[0]*s*h,p[1]+b[1]*r*h*f+m[1]*s*h,p[2]+b[2]*r*h*f+m[2]*s*h];if(x[1]>=-.02)return null;let _=Yh/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function L2(i,t){let e=Me(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Zh(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?L2(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function Kh(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=F2(c.id)%1e3/1e3;for(let b of wo(l,c)){let[g,m,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[m,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[w,E,y]=v[M];e.push(w[0],w[1],w[2]),n.push(E,y),r.push(h,f),s.push(d)}}let p=e.length/3-u;p&&o.push({id:c.id,start:u,count:p})}if(!e.length)return null;let a=new Xt;return a.setAttribute("position",new Bt(e,3)),a.setAttribute("uv",new Bt(n,2)),a.setAttribute("aCells",new Bt(r,2)),a.setAttribute("aPhase",new Bt(s,1)),a.setAttribute("aLevel",new Bt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Fo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Jh(i){let t=new Kt({transparent:!0,blending:Le,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function F2(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Tm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,D2=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,N2=Tm,O2=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function wm(i,t){let e=[];for(let[r,s,o]of Cn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Xt;return n.setAttribute("position",new Bt(e,3)),n}function Em(i,t){let e=new Ue;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new It(wm(n.points,o),new un({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Tm,fragmentShader:D2,transparent:!0,blending:Le,depthWrite:!1,side:se}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,u,h]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=h-u,d=Math.min(1,n.cover),p=f?[[l-.1,u-.1],[l+(c-l)*d,u-.1],[l+(c-l)*d,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*d],[l-.1,u+(h-u)*d]],b=ps(n.points,p);if(b.length>=3){let g=new It(wm(b,n.y+.03),new un({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:N2,fragmentShader:O2,transparent:!0,side:se}));g.renderOrder=6,e.add(g);let m=[];for(let _=0;_<b.length;_++){let v=b[_],M=b[(_+1)%b.length];m.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Xt;x.setAttribute("position",new Bt(m,3)),e.add(new Je(x,new en({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Am(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Rm=["neon","blueprint","day"];function Cm(i){return Rm.indexOf(i)}var _s={value:new $(.22,.88,1)},Ms={value:0};function Pm(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var U2=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function Qe(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=_s,s.uniforms.uAccentOn=Ms,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${U2}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Do(i){return i==="day"?Bi:Le}var _i=.012,B2=.012;function Lm(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],u=[],h=(m,x,_,v,M,w,E)=>{for(let y of[m,x,_,m,_,v])a.push(y[0],y[1],y[2]),l.push(M[0],M[1],M[2]),c.push(w),u.push(E)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let _=m.points.map(T=>T[0]),v=m.points.map(T=>T[1]),M=Math.min(..._),w=Math.min(...v),E=Math.max(..._),y=Math.max(...v),A=Math.max(1,Math.ceil((E-M)/r)),S=Math.max(1,Math.ceil((y-w)/r));for(let T=0;T<A;T++)for(let I=0;I<S;I++){let O=M+T*r,C=w+I*r,k=Math.min(O+r,E),R=Math.min(C+r,y),F=ps(m.points,[[O,C],[k,C],[k,R],[O,R]]),D=F.length>=3?Math.abs(W2(F)):0;if(D<1e-4)continue;let L=X2(F);if(!s.some(U=>$t(L,U))){if(D>(k-O)*(R-C)-1e-6){h([O,_i,C],[O,_i,R],[k,_i,R],[k,_i,C],[0,1,0],x,-1);continue}for(let[U,z,G]of Cn(F)){let V=F[U],W=F[G],q=F[z];(q[1]-V[1])*(W[0]-V[0])-(q[0]-V[0])*(W[1]-V[1])<0&&([V,W]=[W,V]),h([V[0],_i,V[1]],[q[0],_i,q[1]],[W[0],_i,W[1]],[W[0],_i,W[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!Vn(m.type));if(d.length){let m=d.flatMap(y=>y.points.map(A=>A[0])),x=d.flatMap(y=>y.points.map(A=>A[1])),_=Math.floor(Math.min(...m)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),E=(y,A,S)=>z0(i,y)-fo(i,y,A,S)+_i;for(let y=0;y<M;y++)for(let A=0;A<w;A++){let S=_+y*r,T=v+A*r,I,O=[S+r/2,T+r/2];I=d.find(k=>k.type==="pool"&&$t(O,k.points));for(let k=d.length-1;k>=0&&!I;k--)$t(O,d[k].points)&&(I=d[k]);if(!I)continue;let C=(k,R)=>[k,E(I,k,R),R];h(C(S,T),C(S,T+r),C(S+r,T+r),C(S+r,T),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let _=Math.min(i.height,m.height??i.height),v=Math.min(p,_-.02),M=m.b[0]-m.a[0],w=m.b[1]-m.a[1],E=Math.hypot(M,w);if(E<.05)return;let y=[M/E,w/E],A=[-y[1],y[0]],S=e[x],T=z2(m,y,E,n),I=(R,F)=>R?i.rooms.findIndex(D=>D.id===R):F?f:-1;b.push({a:m.a,b:m.b,h:_,ra:I(m.roomLeft,!1),rb:I(m.roomRight,m.exterior),gaps:T});let O=(R,F,D)=>[F,D,...R.filter(L=>L>F+.005&&L<D-.005)].sort((L,U)=>L-U).filter((L,U,z)=>U===0||L>z[U-1]+.005),C=O([v,(v+_)/2,...T.flatMap(R=>[R.y0+.01,R.y1-.01])],.02,_-.02),k=O(T.flatMap(R=>[R.s0,R.s1]),0,E);for(let R of[1,-1]){let F=R>0?m.roomLeft:m.roomRight,D=F?i.rooms.findIndex(V=>V.id===F):m.exterior?f:-1;if(D<0)continue;let L=(R>0?m.left:m.right)+B2,U=[A[0]*R,A[1]*R],z=(V,W)=>[m.a[0]+y[0]*V+U[0]*L,W,m.a[1]+y[1]*V+U[1]*L],G=V=>{let W=z(V,0),q=o?.(W[0],W[2]);return q==null?1/0:q-.02};for(let V=0;V<k.length-1;V++){let W=k[V+1]-k[V],q=Math.max(1,Math.ceil(W/r));for(let st=0;st<q;st++){let X=k[V]+W/q*st,Y=k[V]+W/q*(st+1),nt=(X+Y)/2;for(let j=0;j<C.length-1;j++){let Q=C[j],dt=C[j+1];if(dt-Q<.01)continue;let bt=(Q+dt)/2;if(T.some(pt=>nt>pt.s0&&nt<pt.s1&&bt>pt.y0&&bt<pt.y1))continue;let xt=Q>=p-1e-6?S:$i+S,lt=Math.min(dt,G(X)),vt=Math.min(dt,G(Y));lt<=Q+.005&&vt<=Q+.005||h(z(X,Q),z(Y,Q),z(Y,Math.max(Q,vt)),z(X,Math.max(Q,lt)),[U[0],0,U[1]],D,xt)}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>Fm(M,m)&&k2(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||v<0||g.push({id:m.opening.id,a:_,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:g,blockers:b}}function Fm(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function k2(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function z2(i,t,e,n){let r=[];for(let s of n){if(!Fm(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function V2(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function G2(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Im(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=G2(i),d=1/(1+u/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/h);return i.level*p*(.2+.8*b)*V2(i.kind,l/h)}function Dm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,p]of[[u.a,u.b],[u.b,u.a]]){let b=[0,0,0];for(let m of t){if(m.room!==d)continue;let x=m.x-u.x,_=m.y-u.y,v=m.z-u.z,M=Math.hypot(x,_,v)||1,w=Im(m,u.x,u.y,u.z,x/M,_/M,v/M);b[0]+=m.color[0]*w,b[1]+=m.color[1]*w,b[2]+=m.color[2]*w}let g=Math.max(b[0],b[1],b[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[b[0]/g,b[1]/g,b[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let s=new Map;for(let u of r){let h=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),f={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:h};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=s.get(l[u]);if(!h)continue;let f=u*3,d=0,p=0,b=0;for(let g of h){if(g.walls.length&&H2(g,g.walls,o[f],o[f+1],o[f+2]))continue;let m=Im(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,b+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function H2(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=s*c-o*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,f=a.a[1]-i.z,d=(h*c-f*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let p=(h*o-f*s)/u;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function jh(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&$t([t,e],r.points));return n<0?i.rooms.length:n}function No(i,t){return i&&t>=0&&t<i.length?i[t]:t}function W2(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function X2(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Oo={open:0,open2:0,tilt:0,tilt2:0,cover:null},Nm=2043986,Om=2769520,Y2=2242399,Qh=1845831,q2=1450554,Mi=16758087,Sc=3662079,$2=1.2,Z2=1.5,K2=1846349,J2=2572395,j2=1120816,Q2=1845831,Um=5995775,Bm=9085695,Ss=zt(3662079,.08),tS=.2;function wc(i,t,e,n,r,s,o,a,l,c,u){let h=(d,p,b)=>t(d,p,b),f=[[h(e,r,a),h(n,r,a),h(n,s,a),h(e,s,a),c],[h(e,r,o),h(n,r,o),h(n,s,o),h(e,s,o),zt(l.getHex(),.6)],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),l],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),zt(l.getHex(),.85)],[h(e,r,o),h(e,s,o),h(e,s,a),h(e,r,a),zt(l.getHex(),.92)],[h(n,r,o),h(n,s,o),h(n,s,a),h(n,r,a),zt(l.getHex(),.92)]];for(let[d,p,b,g,m]of f)i.tri(d,p,b,m,m,m,void 0,u),i.tri(d,b,g,m,m,m,void 0,u)}function pe(i,t,e,n,r,s,o,a,l,c,u,h){if(a<=u+1e-6)return wc(i,t,e,n,r,s,o,a,l,c,Jt);if(o>=u-1e-6)return wc(i,t,e,n,r,s,o,a,l,c,h);wc(i,t,e,n,r,s,o,u,l,c,Jt),wc(i,t,e,n,r,s,u,a,l,c,h)}function ji(i,t,e,n,r,s,o,a,l,c,u=0){let h=(f,d,p)=>{let b=v=>u?(o-v)/u:.5,g=t(e,r,f),m=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};o<=l+1e-6?h(s,o,Jt):s>=l-1e-6?h(s,o,c):(h(s,l,Jt),h(l,o,c))}function eS(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),h=t(n,r,o),f=t(n,s,o),d=t(e,s,o),p=0,b=(s-r)/c;i.tri(u,h,f,a,a,a,[0,p,1,p,1,b],l),i.tri(u,f,d,a,a,a,[0,p,1,b,0,b],l)}function nS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,u=c+r.width;if(Math.min(i.width,u)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function iS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!nS(i,t)&&Hi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function km(i,t,e,n,r,s,o,a,l){let c=iS(i,t),u=i.width,h=Math.max(i.sill,.03);c.inside&&pe(e,n,-.04,u+.04,r+s,i.faceRoom+.07,h-.03,h,new et(Qh),o,a,l),c.outside&&pe(e,n,-.03,u+.03,-i.faceOut-.06,r-s,h-.04,h-.02,new et(Qh),o,a,l)}function zm(i,t,e){let n=new te,r=new te,s=new te(!0),o=new et(Nm),a=new et(Om),l=[],c=[],u=[];for(let h of i){let f=n.count,d=r.count,p=s.count,b=t.get(h.opening.id)??Oo,g=h.width,{sill:m,top:x,bucket:_}=h,v=(y,A,S)=>[h.start[0]+h.axis[0]*y+h.toRoom[0]*A,S,h.start[1]+h.axis[1]*y+h.toRoom[1]*A],M=(h.faceRoom-h.faceOut)/2,w=h.opening.mark==="closed",E=h.opening.type==="door"&&Hi(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!E||h.opening.type==="garage"){let y=-h.faceOut-.012,A=h.faceRoom+.012,S=h.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),T=S?zt(Mi,.8):new et(Nm),I=S?zt(Mi,1):new et(Om);pe(n,v,-.045,.02,y,A,0,x+.045,T,I,e,_),pe(n,v,g-.02,g+.045,y,A,0,x+.045,T,I,e,_),pe(n,v,.02,g-.02,y,A,x-.02,x+.045,T,I,e,_)}if(h.opening.type==="door"){let y=Hi(h.opening,h.exterior),A=Op(y),S=h.opening.swing==="out"?-1:1,T=S>0?h.faceRoom:-h.faceOut,I=h.opening.leaves===2,O=.02,C=g-.02,k=Np(g,y,h.hingeAtStart,h.opening);if(k){let L=-h.faceOut-.012,U=h.faceRoom+.012,z=T-S*(A?.06:.04)/2,G=.06;for(let[V,W]of k.panels)pe(n,v,V,V+G,L,U,.02,x-.02,o,a,e,_),pe(n,v,W-G,W,L,U,.02,x-.02,o,a,e,_),pe(n,v,V+G,W-G,L,U,.02,.12,o,a,e,_),ji(r,v,V+G,W-G,z,.12,x-.02,Ss,e,_);O=k.x0,C=k.x1}let R=I?(C-O)/2-.004:C-O,F=A?.06:.04;A&&(pe(n,v,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new et(Qh),a,e,_),h.exterior&&pe(n,v,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,x+.1,x+.17,zt(Mi,.55),zt(Mi,.85),e,Jt));let D=E?[]:[[h.hingeAtStart,b.open]];I&&!E&&D.push([!h.hingeAtStart,b.open2??0]);for(let[L,U]of D){let z=Math.min(1,Math.max(0,U)),G=y==="sliding"?0:z*Z2,V=y==="sliding"?z*R:0,W=(bt,xt,lt)=>{let vt=bt*Math.cos(G)-xt*Math.sin(G)-V,pt=T+S*(xt*Math.cos(G)+bt*Math.sin(G)+(V?.05:0));return v(L?O+vt:C-vt,pt,lt)},q=z>.05?Jt:_,st=w?!!b.sensed&&z<.05:z>.9,X=st?zt(Mi,.7):new et(A?j2:K2),Y=st?zt(Mi,.9):new et(A?Q2:J2);y==="glass"?(pe(n,W,0,.05,-F,0,.01,x-.01,X,Y,e,q),pe(n,W,R-.05,R,-F,0,.01,x-.01,X,Y,e,q),pe(n,W,.05,R-.05,-F,0,.01,.12,X,Y,e,q),pe(n,W,.05,R-.05,-F,0,x-.08,x-.01,X,Y,e,q),ji(r,W,.05,R-.05,-F/2,.12,x-.08,Ss,e,q)):pe(n,W,0,R,-F,0,.01,x-.01,X,Y,e,q);for(let bt of[.001,-F-.001])y==="front_glass"?ji(r,W,.12,R-.12,bt,x*.55,x-.18,Ss,e,q):A&&ji(r,W,.1,.18,bt,.3,x-.3,Ss,e,q);let nt=Math.min(1.05,x*.5),j=A?.3:.012,Q=A?R-.11:R-.16,dt=A?R-.08:R-.05;pe(n,W,Q,dt,.004,.05,nt-j,nt+j,new et(Um),new et(Bm),e,q),pe(n,W,Q,dt,-F-.05,-F-.004,nt-j,nt+j,new et(Um),new et(Bm),e,q),b.unlocked&&L===h.hingeAtStart&&pe(n,W,R-.022,R+.004,-F-.006,.006,.03,x-.03,zt(Sc,.85),zt(Sc,1),e,q)}}else if(h.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),A=new et(13951231),S=h.faceRoom-.03,T=x*(1-y);y>.01&&ji(s,v,.02,g-.02,S,T,x,A,e,_,.5);let I=(1-y)*x;I>.01&&eS(s,v,.02,g-.02,S,S+I,x+.03,A,_,.5)}else if(Hi(h.opening,h.exterior)==="glass_wall"){pe(n,v,0,.04,M-.025,M+.025,m,x,o,a,e,_),pe(n,v,g-.04,g,M-.025,M+.025,m,x,o,a,e,_),pe(n,v,.04,g-.04,M-.025,M+.025,m,m+.03,o,a,e,_),pe(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,o,a,e,_),km(h,i,n,v,M,.025,a,e,_);let S=Math.max(1,Math.round((g-2*.04)/.9)),T=(g-2*.04)/S;for(let I=1;I<S;I++){let O=.04+I*T;pe(n,v,O-.02,O+.02,M-.025,M+.025,m+.03,x-.04,o,a,e,_)}for(let I=0;I<S;I++){let O=.04+I*T+(I?.02:0),C=.04+(I+1)*T-(I<S-1?.02:0);ji(r,v,O,C,M,m+.03,x-.04,Ss,e,_)}}else{pe(n,v,0,.06,M-.035,M+.035,m,x,o,a,e,_),pe(n,v,g-.06,g,M-.035,M+.035,m,x,o,a,e,_),pe(n,v,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),o,a,e,_),pe(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,o,a,e,_),km(h,i,n,v,M,.035,a,e,_);let S=.055,T=m+(m>.05?.06:.03),I=x-.06,O=M+.035,C=M+.035+.06,R=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let F of R){let D=F.open>.02||F.tilt>.02,L=w?!!b.sensed&&!D:D,U=L?zt(Mi,.75):new et(Y2),z=L?zt(Mi,.95):a,G=F.x0,V=F.x1,W=V-G,q=F.open*$2*(h.opening.swing==="out"?-1:1),st=F.tilt*tS,X=(nt,j,Q)=>{let dt=Q-T,bt=j+dt*Math.sin(st),xt=T+dt*Math.cos(st),lt=nt*Math.cos(q)-(bt-O)*Math.sin(q);bt=O+(bt-O)*Math.cos(q)+nt*Math.sin(q);let vt=F.atStart?G+lt:V-lt;return v(vt,bt,xt)},Y=Math.abs(q)>.05?Jt:_;if(pe(n,X,0,S,O,C,T,I,U,z,e,Y),pe(n,X,W-S,W,O,C,T,I,U,z,e,Y),pe(n,X,S,W-S,O,C,T,T+S,U,z,e,Y),pe(n,X,S,W-S,O,C,I-S,I,U,z,e,Y),ji(r,X,S,W-S,(O+C)/2,T+S,I-S,L?zt(Mi,.16):Ss,e,Y),b.unlocked&&F.atStart===h.hingeAtStart&&pe(n,X,W-.022,W+.004,O-.006,C+.006,T+.02,I-.02,zt(Sc,.85),zt(Sc,1),e,Y),Hi(h.opening,h.exterior)==="bars"){let nt=(T+I)/2,j=(O+C)/2;pe(n,X,S,W-S,j-.012,j+.012,nt-.012,nt+.012,U,z,e,Y),pe(n,X,W/2-.012,W/2+.012,j-.012,j+.012,T+S,I-S,U,z,e,Y)}}}if(b.cover!==null){let y=-h.faceOut,A=x+.2;pe(n,v,-.05,g+.05,y-.15,y,x,A,new et(q2),a,e,_);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let T=x-S*(x-m);ji(s,v,0,g,y-.07,T,x,new et(16777215),e,_,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),u.push({id:h.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var rS=.3,Vm=2.6;function Gm(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,h=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],E=[...w,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return w.every(y=>$t(y,i))&&!n.some(y=>E.some(A=>$t(A,y)))},d=(M,w)=>f(u?[M,w]:[w,M]),p=(M,w)=>{let E=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let y=1;y<E;y++)if(!f([M[0]+(w[0]-M[0])*y/E,M[1]+(w[1]-M[1])*y/E]))return!1;return!0},[b,g,m,x]=u?[o,a,l,c]:[l,c,o,a],_=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let w=null,E=null,y=.05;for(let I=m;I<=x+1e-6;I+=y)if(d(M,I)&&(E??=I),(!d(M,I)||I+y>x+1e-6)&&E!==null){let O=d(M,I)?I:I-y;(!w||O-E>w[1]-w[0])&&(w=[E,O]),E=null}if(!w||w[1]-w[0]<.2)continue;let A=I=>{let[O,C]=I?w:[w[1],w[0]];return[u?[M,O]:[O,M],u?[M,C]:[C,M]]},S=A(v),T=_[_.length-1];if(T&&n.length&&!p(T,S[0])){let I=A(!v);if(!p(T,I[0]))continue;S=I,v=!v}_.push(S[0],S[1]),v=!v}return _}function ef(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var tf=i=>Math.atan2(Math.sin(i),Math.cos(i));function Hm(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=tf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Vm*e),!0)}let a=Math.atan2(r,s),l=tf(a-i.heading);if(i.heading=tf(i.heading+Math.sign(l)*Math.min(Math.abs(l),Vm*e)),Math.abs(l)<.35){let c=Math.min(o,rS*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function Wm(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var sS=66,oS=250;function Xm(i,t){return i?t>=3e4?oS:sS:0}function Ym(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var Pn=null,qm=new Map;function Zm(i,t=0){let e=new te,n=new De,r=Me(i.type);if(r?.light)cc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)nf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};lc(e,n,new te,s,0,!0)}return{buf:e,lines:n}}function aS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=qm.get(r);if(s)return s;e&&uo(e),Pn??=new mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Pn.setSize(t,t,!1),Pn.setClearColor(0,0);let{buf:o,lines:a}=Zm(i),l=new Fi,c=new It(o.geometry(),new Kt({vertexColors:!0,color:new et(n,n,n)})),u=new Je(a.geometry(),new en({vertexColors:!0,color:new et(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new pn().setFromObject(c),f=h.getCenter(new $),d=new jn(-1,1,1,-1,.01,100);d.position.copy(f).add(new $(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let m of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let _ of[h.min.z,h.max.z]){let v=new $(m,x,_).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(v.x),Math.abs(v.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),Pn.render(l,d);let g=Pn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),qm.set(r,g),g}function lS(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=$m.get(s);if(o)return o;n&&uo(n);let{buf:a,lines:l}=Zm(i,t),c=new It(a.geometry(),new Kt({vertexColors:!0,color:new et(r,r,r)})),u=new Je(l.geometry(),new en({vertexColors:!0,color:new et(r*1.8,r*1.8,r*1.8)})),h=new pn().setFromObject(c);if(h.isEmpty())return null;let f=h.min.x,d=h.max.x,p=Math.max(0,h.min.y),b=h.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));Pn??=new mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(1),Pn.setSize(g,m,!1),Pn.setClearColor(0,0);let x=new Fi;x.add(c,u);let _=new jn(f,d,b,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),Pn.render(x,_);let v=Pn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let M={url:v,x0:f,x1:d,y0:p,y1:b};return $m.set(s,M),M}var $m=new Map;var NR={Group:Ue,Mesh:It,MeshBasicMaterial:Kt,CanvasTexture:mi,Color:et,PlaneGeometry:gi,BufferGeometry:Xt,Float32BufferAttribute:Bt,DoubleSide:se},Jm={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},cS=[.22,.88,1],uS=2.4,jm=1.4,hS=.22,Qm=.94,tg=140,eg=1.5;function fS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,u=l-o,h=c*c+u*u||1,f=Math.max(0,Math.min(1,((i-s)*c+(t-o)*u)/h));n=Math.min(n,Math.hypot(i-(s+c*f),t-(o+u*f)))}return n}var sf=32,dS=500,ng=160,pS=33,ig=.028,mS=.026,gS=.012,bS=.09,ne=2767456,xS=2240847,vS=3096944,yS=1911110,_S=1,rg=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Tc=450,sg=125,MS=200,SS=.08,Bo={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},wS=new et(1714765);function TS(){let i=navigator;return Ym(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var of=class{host;options;renderer;scene=new Fi;camera=new $e(38,1,.1,400);controls;labels;root=new Ue;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Je(new Xt,new en({color:10471679,transparent:!0,opacity:.4,blending:Le,depthWrite:!1}));snow=new Kr(new Xt,new lr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new It(new Vs(1,28),new Kt({color:16767370,transparent:!0,opacity:0,blending:Le,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=AS(),this.blindTexture=CS(),this.haloTexture=LS(),this.ground=new It(new gi(1,1),new Kt({transparent:!1,blending:Le,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=Xm(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return Wm(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){uo(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,Tp(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>Yl(u.floor).some(h=>h.id===t)),n=e?Yl(e.floor).find(u=>u.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let u=e.floor.elevation+e.ty,[h,f]=Wi(n.points),d=r.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+u,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=Wi(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new $(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Fo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Fo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Am(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Em(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ue;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let h=new It(new Ys(.92,1,48),new Kt({color:3662079,transparent:!0,opacity:0,blending:Le,depthWrite:!1,side:se}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let h=s.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new Xt;c.setAttribute("position",new Bt(a,3));let u=new Je(c,new en({color:3662079,transparent:!0,opacity:.45,blending:Le,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Uo(r),o=rf(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let u=Math.min(1,c.opacity);for(let h of Cn(c.points))for(let f of h)s.push(c.points[f][0],c.y,c.points[f][1]),o.push(c.color[0],c.color[1],c.color[2],u)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Xt;l.setAttribute("position",new Bt(s,3)),l.setAttribute("color",new Bt(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new te;for(let s of e)Mm(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(f,d,p,b,g)=>{let m=Math.hypot(p-f,b-d)||1,x=-(b-d)/m*(g/2+o),_=(p-f)/m*(g/2+o);a.push(f+x,d+_,0,p+x,b+_,0,p-x,b-_,0,f+x,d+_,0,p-x,b-_,0,f-x,d-_,0)},u=.14+o;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*u,1.47+Math.sin(d)*u,0,Math.cos(p)*u,1.47+Math.sin(p)*u,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let h=new Xt;return h.setAttribute("position",new Bt(a,3)),h},n=new It(e(0),new Kt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:se})),r=new It(e(.05),new Kt({color:t,transparent:!0,opacity:.22,blending:Le,depthWrite:!1,side:se}));n.renderOrder=6,r.renderOrder=5;let s=new Ue;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let u=l.currentTarget.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,u.left+u.width/2-h.left,u.top+u.height/2-h.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Pm(t),n=e?1:0;n===Ms.value&&(!e||_s.value.equals(new $(...e)))||(Ms.value=n,e&&_s.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Cm(t),C0(t!=="neon"),this.building?.floors.some(s=>s.furniture.some(o=>o.type==="waste_bin"||D0(o.type)))&&this.rebuild();let n=Do(t),r=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of r)s.blending=n,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new et(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Os(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),h=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new Xt;l.setAttribute("position",new Bt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ae,o=(r?t.azimuth+180:t.azimuth)*ae,a=Math.max(10,Math.abs(t.elevation))*ae,l=this.weatherBox,c=new $((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new $(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Oo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/ng),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new te;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);F0(e,n,rn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&L0(e,n,rn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=Gl(n.type),s=r?Me(n.type):void 0;r&&s&&U0(e,s,r,n,rn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new yc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new $(e.x,a,e.z),direction:new $(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(_c);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(_c),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&TS();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new mr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ne,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new xc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},dS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Lm(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=og(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=No(r,a.ra),a.rb=No(r,a.rb)}t.lightSurface=n;let s=new Xt;s.setAttribute("position",new Bt(n.pos,3)),s.setAttribute("color",new Bt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Bt(n.fold,1));let o=new or(new Uint32Array(n.pos.length/3),1);o.setUsage(Cu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=Me(t.pack);if(!e)return null;let[n,r,s]=t.size??Bo.wall;return B0(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=jh(t.floor,n.x,n.z),a=No(t.lightZones,o),[l,,c]=n.size??(n.lamp?Bo[n.lamp]:[.3,.3,.3]),u=n.base??0,h={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],fan:[Math.max(.5,s-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<_S?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=n.lamp?h[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ae,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:u+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*ae;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:p+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:m||_?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let u of this.devices){if(u.floorId!==n.floor.id)continue;let h=this.glowOf(u);if(!h)continue;let f=$t([u.x,u.z],s)?0:fS(u.x,u.z,s);if(f>eg)continue;let d=h.level*(1-f/eg);for(let p=0;p<3;p++)a[p]+=h.color[p]*d;o+=d}if(o<.02)continue;let[l,c]=Wi(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:No(t.lightZones,jh(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(h=>{let f=t.geo.openings.find(p=>p.opening.id===h.id);if(f&&Hi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Dm(e,n,.42,r);if(this.roomTint){let h=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Qe(new Kt({vertexColors:!0}),this.themeUniform),pattern:RS(this.patternTexture),wall:Qe(ai(new Kt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:ai(new Kt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Kt({vertexColors:!0,blending:Js,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Qe(ai(new en({vertexColors:!0,transparent:!0,blending:Do(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ai(new Kt({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Qe(ai(new Kt({vertexColors:!0,side:se}),t),this.themeUniform),glass:ai(new Kt({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:se}),t),blinds:Qe(ai(new Kt({map:this.blindTexture,vertexColors:!0,side:se}),t),this.themeUniform),water:Qe(new Kt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:se}),this.themeUniform),flow:IS(this.flowTime),pipeLine:PS(this.flowTime),patch:new Kt({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Kt({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Jh(this.flowTime),lamps:Qe(new Kt({vertexColors:!0}),this.themeUniform),halos:new lr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1}),cones:new Kt({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:se}),screens:new Kt({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:se}),earth:Qe(new Kt({vertexColors:!0}),this.themeUniform),earthWell:Qe(new Kt({vertexColors:!0,side:se}),this.themeUniform),earthLines:Qe(new en({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=kh(n)?.id===s.id?o.filter(lt=>lt.face===Bh).map(lt=>({field:lt,face:W0(n,lt)})):[],l=o.filter(lt=>lt.face.startsWith(`wall:${s.id}:`));if(l.length){let lt=new Map(H0(n,s.id).map(vt=>[vt.key,vt]));for(let vt of l){let pt=lt.get(vt.face);pt&&a.push({field:vt,face:pt})}}let u=dh(n).some(lt=>Hp(lt,s.elevation+s.height)&&mh(lt,s.elevation))?(lt,vt)=>{let pt=Wp(n,lt,vt,s.elevation);return pt===null?null:pt-s.elevation}:void 0,h=(lt,vt,pt)=>{if(pt){let Wt=pt.b[0]-pt.a[0],me=pt.b[1]-pt.a[1],xe=Math.hypot(Wt,me);if(xe>1e-6){let ee=-me/xe,be=Wt/xe,Z=H=>{let P=H<0?-(pt.right+.05):pt.left+.05;for(let tt of[.25,.5,.75]){let ot=pt.a[0]+Wt*tt+ee*P,ct=pt.a[1]+me*tt+be*P,yt=s.rooms.find(_t=>_t.points.length>=3&&$t([ot,ct],_t.points));if(yt)return yt.id}return null},Ie=Z(-1),ue=Z(1);if(Ie&&ue&&Ie!==ue)return!1}}return(n.settings.roof.sections??[]).some(Wt=>!Wt.open&&Wt.shape==="hip"&&Wt.points?.length===6&&Wt.custom_ridge?.length===2&&Wt.custom_ridge_height!=null&&Wt.custom_ridge_height>s.elevation&&$t([lt,vt],Wt.points))},f=rm(Zh(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,sm(n.floors,s),a,u,h),d={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(d),b=new Ue,g=new It(f.floor,p.floor),m=new It(f.shadow,p.shadow);m.renderOrder=1;let x=new It(f.floor,p.pattern);x.renderOrder=2;let _=new It(new Xt,p.glow);_.renderOrder=3,_.visible=!1;let v=new It(new Xt,p.frames),M=new It(new Xt,p.blinds),w=new It(new Xt,p.glass);w.renderOrder=4;let E=new It(new Xt,p.lamps);E.visible=!1;let y=new It(new Xt,p.cones);y.visible=!1,y.renderOrder=3;let A=new Kr(new Xt,p.halos);A.visible=!1,A.renderOrder=7;let S=new It(new Xt,p.cones);S.visible=!1,S.renderOrder=7;let T=new It(new Xt,p.cones);T.visible=!1,T.renderOrder=7;let I=new It(new Xt,p.lamps);I.visible=!1;let O=new It(new Xt,p.lamps);O.visible=!1;let C=new It(new Xt,p.patch);C.visible=!1,C.renderOrder=3;let k=new It(new Xt,p.patchGlow);k.visible=!1,k.renderOrder=3;let R=new It(new Xt,p.screens);R.visible=!1,R.renderOrder=5;let F=new It(new Xt,p.flow);F.renderOrder=5,F.frustumCulled=!1;let D=new It(new Xt,p.pipeLine),L=new It(new Xt,p.pipeLine),U=new It(new Xt,p.pipeLine);for(let lt of[D,L,U])lt.renderOrder=4,lt.frustumCulled=!1,lt.visible=!1;let z=Kh(a,s.elevation),G=z?new It(z.geometry,p.solarLive):null;G&&(G.renderOrder=6,Fo(z,this.solarLevels));for(let lt of[v,M,w])lt.frustumCulled=!1;let V=new It(f.walls,p.glassWall),W=new It(f.walls,p.wall);V.renderOrder=6;let q=new It(f.water,p.water);q.renderOrder=4;let st=Math.min(...n.floors.filter(lt=>lt.rooms.length).map(lt=>lt.elevation)),X=lm(n,s,f.openings,s.elevation===st),Y=X?[new It(X.earth.geometry(),p.earth),new It(X.wells.geometry(),p.earthWell),new Je(X.lines.geometry(),p.earthLines)]:[];for(let lt of Y)lt.userData.earth=!0;b.add(g,m,x,_,W,q,new Je(f.lines,p.lines),v,M,w,F,D,L,U,E,y,A,S,T,I,O,C,k,R,V,...G?[G]:[],...Y),this.root.add(b);let nt=document.createElement("button");nt.className="fp3d-pin fp3d-pin-floor",nt.dataset.floor=s.id;let j=document.createElement("b");j.textContent=s.name||"\u2013";let Q=document.createElement("span");Q.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",nt.append(j,Q),nt.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(nt);let dt=t.get(s.id),bt=[],xt=null;for(let lt of Yl(s)){let vt=document.createElement("button");vt.className="fp3d-pin",vt.dataset.room=lt.id,vt.dataset.floor=s.id,this.fillRoomPin(vt,lt.name,this.roomInfo.get(lt.id)),vt.addEventListener("click",()=>this.options.onRoomTap?.(s.id,lt.id)),this.labels.append(vt);let[pt,Wt]=Wi(lt.points);if(bt.push({pin:vt,room:lt,cx:pt,cz:Wt}),!lt.outdoor)for(let[me,xe]of lt.points)xt??={x0:me,x1:me,z0:xe,z1:xe},xt.x0=Math.min(xt.x0,me),xt.x1=Math.max(xt.x1,me),xt.z0=Math.min(xt.z0,xe),xt.z1=Math.max(xt.z1,xe)}this.floors.push({floor:s,rank:r.indexOf(s),group:b,geo:f,floorMesh:g,shadowMesh:m,patternMesh:x,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:v,glassMesh:w,blindsMesh:M,flowMesh:F,pipeLineMesh:D,pipeHouseMesh:L,pipeFloorMesh:U,pipeLineSig:"",solarMesh:G,solarLive:z,lampMesh:E,sunMesh:y,sunSig:"",haloMesh:A,coneMesh:S,trailMesh:T,fridgeMesh:I,pipeMesh:O,pipeSig:"",patchMesh:C,patchGlowMesh:k,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:W,screenMesh:R,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:xt,roomPins:bt,labelSize:null,materials:p,mask:d,openings:new Map,y:dt?.y??0,o:dt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:nt})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s),this.buildPatches(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Oo);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Q0(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Tr(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Jh(this.flowTime),s=[],o=new Ue,a=Qe(new Kt({vertexColors:!0,transparent:!0,side:se}),this.themeUniform),l=Qe(new en({vertexColors:!0,transparent:!0,blending:Do(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Qe(new Kt({vertexColors:!0,transparent:!0,side:se,depthWrite:!1}),this.themeUniform),u=new Ue,h=Qe(new Kt({vertexColors:!0,side:se}),this.themeUniform),f=Qe(new Kt({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),d=Qe(new Kt({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),p=Qe(new en({vertexColors:!0,transparent:!0,blending:Do(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(m=>{let x=new Ue;x.add(new It(m.solid.geometry(),a),new Je(m.lines.geometry(),l)),m.glass.count&&x.add(new It(m.glass.geometry(),c));let _=n.flatMap(w=>{let E=e.get(w.face);return E&&(E.section?m.sections?.includes(E.section):m===t[0])?[{face:E,field:w}]:[]}),v=Kh(_,m.floor.elevation+m.base);if(v){let w=new It(v.geometry,r);w.renderOrder=9,x.add(w),s.push(v),Fo(v,this.solarLevels)}m.winRoof?.solid.count&&x.add(new It(m.winRoof.solid.geometry(),h),new Je(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&x.add(new It(m.winRoof.glass.geometry(),d)),x.renderOrder=8,o.add(x);let M=null;(m.win?.solid.count||m.win?.glass.count)&&(M=new Ue,M.add(new It(m.win.solid.geometry(),h),new Je(m.win.lines.geometry(),p)),m.win.glass.count&&M.add(new It(m.win.glass.geometry(),f)),u.add(M));for(let[w,E]of m.winBelow??[]){if(!E.solid.count&&!E.glass.count)continue;let y=new Ue;y.add(new It(E.solid.geometry(),h),new Je(E.lines.geometry(),p)),E.glass.count&&y.add(new It(E.glass.geometry(),f)),u.add(y),b.push({floorId:w,win:y})}return{group:x,floorId:m.floor.id,rideId:Kp(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:M}});o.renderOrder=8,this.scene.add(o),this.scene.add(u),this.roof={group:o,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:u,winSolid:h,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Qm)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Qm*n:0,o=1-Math.exp(-t/tg),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+this.roofLift()+(l.lift?h*jm:0),l.win&&(l.win.position.y=c.floor.elevation+u.y+l.base+(l.lift?h*jm:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:hS)):r=this.explode?n.rank*uS:0,n.ty=r,n.to=s;let a=e===n?nn:Qn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/tg);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/ng);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??Oo,u=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(u(c.open,l.open)&&u(c.open2??0,l.open2??0)&&u(c.tilt,l.tilt)&&u(c.tilt2??0,l.tilt2??0)&&u(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let h={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,g=p-b;Math.abs(g)<.003?h[d]=p:(h[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)h.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?h.cover=c.cover:(h.cover=l.cover+d*n,f=!0)}(h.open!==l.open||h.open2!==(l.open2??0)||h.tilt!==l.tilt||h.tilt2!==(l.tilt2??0)||h.cover!==l.cover||!!h.sensed!=!!l.sensed||!!h.unlocked!=!!l.unlocked)&&(r.openings.set(a,h),s=!0),e||=f,o||=f}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=MS)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new et(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*SS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>Tc?.5+.5*Math.sin(f/140):f/Tc;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.rise??0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new te,h=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?rg.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let m=u.count,x=b.pack?Me(b.pack):void 0,[_,v,M]=b.size??[.3,.3,.3];b.model?N0(u,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?cc(u,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:v,h:M,mirror:b.mirror},b.base??0,65280):nf(u,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:m,end:u.count}),b.pickable!==!1&&h.push({id:b.id,start:m,end:u.count}),b.furnitureId&&f.push({id:b.furnitureId,start:m,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=pp(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],p=d?.55+.45*d.level:0,b=d?new et(...d.color.map(x=>Math.min(1,x*p))):new et(yS),g=n(u.id);g>0&&b.lerp(new et(1,1,1),.7*g);let m=new et(b.getHex());mp(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ae,r=this.weather?.cloud??0,s=og(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new te;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ae,u=e.azimuth*ae,h=[Math.sin(n+u),-Math.cos(n+u)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*h[0]+p[1]*h[1];if(b<.05)continue;let g=t.openings.get(d.opening.id),m=d.top-(g?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let x=(T,I)=>{let O=Math.min(7,I*f);return[d.start[0]+d.axis[0]*T+d.toRoom[0]*d.faceRoom-h[0]*O,.02,d.start[1]+d.axis[1]*T+d.toRoom[1]*d.faceRoom-h[1]*O]},_=.14*l*Math.min(1,b*1.5),v=new et(1*_,.82*_,.55*_),M=v.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(T=>T.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let E=s[w],y=t.floor.rooms.filter((T,I)=>s[I]===E&&T.points.length>=3).map(T=>T.points),A=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),S=Math.max(1,Math.ceil(d.width/.3));for(let T=0;T<A;T++){let I=d.sill+(m-d.sill)*T/A,O=d.sill+(m-d.sill)*(T+1)/A,C=T/A,k=(T+1)/A,R=v.clone().lerp(M,C),F=v.clone().lerp(M,k);for(let D=0;D<S;D++){let L=d.width*D/S,U=d.width*(D+1)/S,z=x((L+U)/2,(I+O)/2);if(!y.some(st=>$t([z[0],z[2]],st)))continue;let G=x(L,I),V=x(U,I),W=x(U,O),q=x(L,O);a.tri(G,V,W,R,R,F),a.tri(G,W,q,R,F,F)}}}this.pushRoofSun(t,a,s,h,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Tr(a).map(h=>[h.key,h])),u=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let h of l){let f=c.get(h.face),d=dc(a,f,h);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*u[0]+f.n[1]*u[1]+f.n[2]*u[2],[b,g,m,x]=d.corners,_=Math.min(1,this.roofWindows.get(h.id)?.cover??0);if(_>.95)continue;let v=(C,k,R)=>[C[0]+(k[0]-C[0])*R,C[1]+(k[1]-C[1])*R,C[2]+(k[2]-C[2])*R],M=v(x,b,_),w=v(m,g,_),E=t.floor.rooms.findIndex(C=>C.id===d.roomId);if(E<0)continue;let y=t.floor.rooms.filter((C,k)=>n[k]===n[E]&&C.points.length>=3).map(C=>C.points),A=(C,k)=>{let R=(D,L)=>v(v(C[0],C[1],D),v(C[3],C[2],D),L);for(let D=0;D<6;D++)for(let L=0;L<6;L++){let U=R((D+.5)/6,(L+.5)/6);if(!y.some(q=>$t([U[0],U[2]],q)))continue;let z=R(D/6,L/6),G=R((D+1)/6,L/6),V=R((D+1)/6,(L+1)/6),W=R(D/6,(L+1)/6);e.tri(z,G,V,k,k,k),e.tri(z,V,W,k,k,k)}},S=C=>[C[0],.019,C[2]],T=.06*o;if(A([S(b),S(g),S(w),S(M)],new et(.75*T,.85*T,1*T)),p<.05)continue;let I=C=>{let k=Math.min(7,(C[1]-t.floor.elevation)/Math.tan(s));return[C[0]-r[0]*k,.02,C[2]-r[1]*k]},O=.16*o*Math.min(1,p*1.5);A([I(b),I(g),I(w),I(M)],new et(1*O,.84*O,.6*O))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new te,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ae,_=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*ae/2,E=l.motion?new et(.9,.12,.16):new et(.04,.22,.28),y=new et(0,0,0),A=Math.max(4,Math.round(w/.15)),S=.015,T=t.geo.walls2d,I=F=>{let D=F.b[0]-F.a[0],L=F.b[1]-F.a[1],U=D*D+L*L||1,z=Math.max(0,Math.min(1,((l.x-F.a[0])*D+(l.z-F.a[1])*L)/U));return Math.hypot(l.x-(F.a[0]+D*z),l.z-(F.a[1]+L*z))},O=null;for(let F of T)I(F)<.45&&(!O||I(F)<I(O))&&(O=F);let C=F=>{let D=_[0]*Math.cos(F)-_[1]*Math.sin(F),L=_[1]*Math.cos(F)+_[0]*Math.sin(F),U=M;for(let z of T){let G=z.b[0]-z.a[0],V=z.b[1]-z.a[1],W=D*V-L*G;if(Math.abs(W)<1e-9)continue;let q=((z.a[0]-l.x)*V-(z.a[1]-l.z)*G)/W,st=((z.a[0]-l.x)*L-(z.a[1]-l.z)*D)/W;z===O&&q<=.45||q>.02&&q<U&&st>=0&&st<=1&&(U=q)}return U},k=F=>{let D=C(F);return[l.x+(_[0]*Math.cos(F)-_[1]*Math.sin(F))*D,S,l.z+(_[1]*Math.cos(F)+_[0]*Math.sin(F))*D]},R=s.count;for(let F=0;F<A;F++)s.tri([l.x,S,l.z],k(-w+2*w*(F+1)/A),k(-w+2*w*F/A),E,y,y);o.push({id:l.id,start:R,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||rg.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[h,f,d]=l.size??Bo[l.lamp],p=l.base??0,b=(l.rotation??0)*ae,g={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(.4,u-d)+.08,fan:Math.max(.5,u-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,_,v=1)=>{n.push(x,g,_),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+h*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*ae;n.push(l.x+Math.cos(b)*h*x*Math.cos(_),g+Math.sin(_)*h*x,l.z+Math.sin(b)*h*x*Math.cos(_)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else m(l.x+Math.cos(b)*h*x,l.z+Math.sin(b)*h*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(_=>_*c.level*.7))):m(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new et(...c.color.map(E=>E*.09*c.level)),_=new et(0,0,0),v=Math.max(.03,h/2),M=.45+.35*c.level,w=16;for(let E=0;E<w;E++){let y=E/w*Math.PI*2,A=(E+1)/w*Math.PI*2,S=[l.x+Math.cos(y)*v,g,l.z+Math.sin(y)*v],T=[l.x+Math.cos(A)*v,g,l.z+Math.sin(A)*v],I=[l.x+Math.cos(y)*M,.02,l.z+Math.sin(y)*M],O=[l.x+Math.cos(A)*M,.02,l.z+Math.sin(A)*M];s.tri(S,I,O,x,_,_),s.tri(S,O,T,x,_,x)}}}let a=new Xt;a.setAttribute("position",new Bt(n,3)),a.setAttribute("color",new Bt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Zh(t.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),r=(Ms.value?_s.value.toArray().map(o=>Math.round(o*255)).join(","):"")+"|"+e.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let s=new te;for(let o of e){let a=this.screens.get(o.id),l=Zl.has(o.type)?Kl(t.geo.walls2d,o,t.floor.height,rn(t.floor,o)):null,c=l?{...o,x:l.x,z:l.z,mount_y:l.y}:o,u=c.rotation*ae,h=Math.cos(u),f=Math.sin(u),d=(E,y,A)=>[c.x+E*h-A*f,y,c.z+E*f+A*h];if(a.faces){let E=Math.max(.05,c.w)*(c.mirror?-1:1),y=Math.max(.05,c.d),A=Math.max(.005,c.h),S=rn(t.floor,c);for(let T of a.faces){if(T.part==="lights"){let G=Me(c.type),V=W=>["#e8f4ff","#ff3b4f"].includes(W.color.toLowerCase());if(G&&G.parts.some(V)){let W=new et(...T.color.map(q=>Math.min(1,q*(.4+.6*T.level))));_o(s,G,c,S,W.getHex(),V)}continue}if(T.part==="cabin"){let G=Me(c.type),V=W=>W.color.toLowerCase()==="#13283a"||W.color==="glass";if(G&&G.parts.some(V)){let W=new et(...T.color.map(q=>Math.min(1,q*(.3+.5*T.level))));_o(s,G,c,S,W.getHex(),V);continue}}if(T.part==="burners"&&Me(c.type)){let G=Me(c.type),V=new et(...T.color.map(W=>Math.min(1,W*(.25+.6*T.level))));_o(s,G,c,S,V.getHex(),gp);continue}if(T.part==="burners"){let G=new et(...T.color.map(W=>Math.min(1,W*(.25+.6*T.level)))),V=S+A+.008;for(let[W,q,st]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let X=W*Math.abs(E)/.6,Y=q*y/.62,nt=14;for(let j=0;j<nt;j++){let Q=j/nt*Math.PI*2,dt=(j+1)/nt*Math.PI*2;s.tri(d(X,V,Y),d(X+Math.cos(Q)*st,V,Y+Math.sin(Q)*st),d(X+Math.cos(dt)*st,V,Y+Math.sin(dt)*st),G)}}continue}if(T.part==="band"||T.part==="cabin"){let G=T.part==="cabin",V=S+A*(G?.6:.42),W=G?S+A*.86:V+.07,q=new et(...T.color.map(nt=>Math.min(1,nt*(.3+.45*T.level)))),st=Math.abs(E)/2+(G?.012:.02),X=y/2+(G?.012:.02),Y=[[-st,-X],[st,-X],[st,X],[-st,X]];for(let nt=0;nt<4;nt++){let j=Y[nt],Q=Y[(nt+1)%4],dt=d(j[0]*Math.sign(E),V,j[1]),bt=d(Q[0]*Math.sign(E),V,Q[1]),xt=d(Q[0]*Math.sign(E),W,Q[1]),lt=d(j[0]*Math.sign(E),W,j[1]);s.tri(dt,bt,xt,q),s.tri(dt,xt,lt,q)}continue}if(T.part==="strata"){let G=T.top??T.color,V=.22+.4*T.level,W=new et(...T.color.map(Q=>Math.min(1,Q*V))),q=new et(...G.map(Q=>Math.min(1,Q*V))),st=S+A*.06,X=S+A*.94,Y=Math.abs(E)/2+.012,nt=y/2+.012,j=20;for(let Q=0;Q<j;Q++){let dt=Q/j*Math.PI*2,bt=(Q+1)/j*Math.PI*2,xt=[Math.cos(dt)*Y,Math.sin(dt)*nt],lt=[Math.cos(bt)*Y,Math.sin(bt)*nt];s.tri(d(xt[0],st,xt[1]),d(lt[0],st,lt[1]),d(lt[0],X,lt[1]),W,W,q),s.tri(d(xt[0],st,xt[1]),d(lt[0],X,lt[1]),d(xt[0],X,xt[1]),W,q,q)}continue}if(T.part==="apring"){let G=c.variant==="wall",V=Math.abs(E),W=G?Math.min(V,A)*.3:Math.min(V,y)*.3,q=new et(...T.color.map(nt=>Math.min(1,nt*(.4+.6*T.level)))),st=new et(0,0,0),X=24,Y=(nt,j)=>G?d(Math.cos(nt)*j,S+A/2+Math.sin(nt)*j,y/2+.004):d(Math.cos(nt)*j,S-.003,Math.sin(nt)*j);for(let nt=0;nt<X;nt++){let j=nt/X*Math.PI*2,Q=(nt+1)/X*Math.PI*2;s.tri(Y(j,W*.8),Y(j,W),Y(Q,W),q),s.tri(Y(j,W*.8),Y(Q,W),Y(Q,W*.8),q),s.tri(Y(j,W),Y(j,W*1.5),Y(Q,W*1.5),q,st,st),s.tri(Y(j,W),Y(Q,W*1.5),Y(Q,W),q,st,q)}continue}if(T.part==="drum"){let G=Math.abs(E),V=Math.min(G*.36,(A-.2)*.42),W=S+(A-.14)/2+.04,q=y/2-.006,st=new et(...T.color.map(Q=>Math.min(1,Q*(.35+.65*T.level)))),X=st.clone().multiplyScalar(.12),Y=new et(0,0,0),nt=28,j=(Q,dt)=>d(Math.cos(Q)*dt,W+Math.sin(Q)*dt,q);for(let Q=0;Q<nt;Q++){let dt=Q/nt*Math.PI*2,bt=(Q+1)/nt*Math.PI*2;s.tri(d(0,W,q),j(dt,V*.78),j(bt,V*.78),X),s.tri(j(dt,V*.78),j(dt,V),j(bt,V),st),s.tri(j(dt,V*.78),j(bt,V),j(bt,V*.78),st),s.tri(j(dt,V),j(dt,V*1.18),j(bt,V*1.18),st,Y,Y),s.tri(j(dt,V),j(bt,V*1.18),j(bt,V),st,Y,st)}continue}if(T.part==="gang"){let G=Math.max(1,T.of??1),V=Math.abs(E),W=V/G,q=(-V/2+W*((T.index??0)+.5))*Math.sign(E),st=y/2+(c.variant==="outdoor"?.02:.008),X=T.accent?Ms.value?_s.value.toArray():cS:T.color,Y=new et(...X.map(pt=>Math.min(1,pt*(.35+.65*T.level)))),nt=Y.clone().multiplyScalar(.5),j=new et(0,0,0),Q=W*.34,dt=S+A*.16,bt=S+A*.84,xt=[d(q-Q,dt,st),d(q+Q,dt,st),d(q+Q,bt,st),d(q-Q,bt,st)];s.tri(xt[0],xt[1],xt[2],Y),s.tri(xt[0],xt[2],xt[3],Y);let lt=.012+.015*T.level,vt=[d(q-Q-lt,dt-lt,st-.001),d(q+Q+lt,dt-lt,st-.001),d(q+Q+lt,bt+lt,st-.001),d(q-Q-lt,bt+lt,st-.001)];for(let pt=0;pt<4;pt++){let Wt=(pt+1)%4;s.tri(xt[pt],vt[Wt],vt[pt],nt,j,j),s.tri(xt[pt],xt[Wt],vt[Wt],nt,nt,j)}continue}if(T.part==="beacon"){let G=new et(...T.color.map(bt=>Math.min(1,bt*(.25+.45*T.level)))),V=new et(0,0,0),W=S+A+.01,q=.6+.6*T.level,st=Math.min(Math.abs(E),y)*.38;for(let[bt,xt]of[[st,0],[0,st]]){let lt=d(-bt,W,-xt),vt=d(bt,W,xt),pt=d(bt*.4,W+q,xt*.4),Wt=d(-bt*.4,W+q,-xt*.4);s.tri(lt,vt,pt,G,G,V),s.tri(lt,pt,Wt,G,V,V)}let X=rn(t.floor,{...c,mount_y:0})+.012,Y=Math.abs(E)/2+.03,nt=y/2+.03,j=.22+.18*T.level,Q=(bt,xt,lt)=>d(bt*(Y+lt),X,xt*(nt+lt)),dt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let bt=0;bt<4;bt++){let[xt,lt]=dt[bt],[vt,pt]=dt[(bt+1)%4];s.tri(Q(xt,lt,0),Q(vt,pt,0),Q(vt,pt,j),G,G,V),s.tri(Q(xt,lt,0),Q(vt,pt,j),Q(xt,lt,j),G,V,V)}continue}let I=T.part==="right"?.03:-Math.abs(E)/2+.03,O=T.part==="left"?-.03:Math.abs(E)/2-.03,C=S+(T.part==="bottom"?A*.45:A)+.006,k=new et(...T.color.map(G=>Math.min(1,G*(.35+.65*T.level)))),R=new et(0,0,0),F=(G,V,W=C)=>d(G*Math.sign(E),W,V),D=[F(I,-y/2+.03),F(O,-y/2+.03),F(O,y/2-.03),F(I,y/2-.03)];s.tri(D[0],D[2],D[1],k),s.tri(D[0],D[3],D[2],k);let L=T.part==="lid"?.025+.02*T.level:.12+.1*T.level,U=k.clone().multiplyScalar(T.part==="lid"?.7:.5),z=[F(I-L,-y/2-L,C+.004),F(O+L,-y/2-L,C+.004),F(O+L,y/2+L,C+.004),F(I-L,y/2+L,C+.004)];for(let G=0;G<4;G++){let V=(G+1)%4;s.tri(D[G],z[V],z[G],U,R,R),s.tri(D[G],D[V],z[V],U,U,R)}}continue}let p=Me(c.type);if(p&&!p.light&&a.ring&&p.parts.some(E=>E.glow)){let E=new et(...a.color.map(y=>Math.min(1,y*(.45+.55*a.level))));_o(s,p,c,rn(t.floor,c),E.getHex())}let b=Oh(c,t.floor);if(!b)continue;let g=new et(...a.color.map(E=>Math.min(1,E*(.35+.65*a.level)))),m=new et(0,0,0),x=b.z+.004;if(s.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),s.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],w=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let E=0;E<4;E++){let y=(E+1)%4;s.tri(M[E],w[E],w[y],v,m,m),s.tri(M[E],w[y],M[y],v,m,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Oh(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new It(new gi(1,1),new Kt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new ur().load(o.picture,h=>{if(t.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Ne,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,h=e.rotation*ae,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-h,0),t.position.set(e.x+f*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+f*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(u=>u.floorId===t.floor.id&&!u.pipe).map(Uo).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id||u.pipe)continue;let h=this.flowPhase.get(Uo(u))??{speed:rf(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(x=>x*f),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let b=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[ig*1.4,1]]:[[bS,.25],[ig,1]];for(let[x,_]of m)for(let v of g){let M=x*(u.width??1)/2,w=(y,A)=>[y[0]+v[0]*M*A,y[1]+v[1]*M*A,y[2]+v[2]*M*A],E=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+p,0],[w(u.b,1),u.dist+p,1],[w(u.a,1),u.dist,1]];for(let y of[0,1,2,0,2,3]){let[A,S,T]=E[y];n.push(A[0],A[1],A[2]),r.push(d[0]*_,d[1]*_,d[2]*_),s.push(S,T),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Xt;c.setAttribute("position",new Bt(n,3)),c.setAttribute("color",new Bt(r,3)),c.setAttribute("uv",new Bt(s,2)),c.setAttribute("flowSpeed",new Bt(o,1)),c.setAttribute("flowOffset",new Bt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(Uo(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(Uo(f))??{speed:rf(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let m=mS*(f.width??1),x=f.power>.5?1:.62,_=[[m+gS*2,[.02,.025,.05],.78,2],[m,f.color.map(v=>v*x),1,0]];for(let[v,M,w,E]of _)for(let y of g){let A=v/2,S=E===0?.002:0,T=(O,C)=>[O[0]+y[0]*A*C,O[1]+y[1]*A*C+S,O[2]+y[2]*A*C],I=[[T(f.a,-1),f.dist,E],[T(f.b,-1),f.dist+d,E],[T(f.b,1),f.dist+d,E+1],[T(f.a,1),f.dist,E+1]];for(let O of[0,1,2,0,2,3]){let[C,k,R]=I[O];s.push(C[0],C[1],C[2]),o.push(M[0],M[1],M[2],w),a.push(k,R),l.push(p.speed),c.push(p.offset)}}}let u=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,h=new Xt;h.setAttribute("position",new Bt(s,3)),h.setAttribute("color",new Bt(o,4)),h.setAttribute("uv",new Bt(a,2)),h.setAttribute("flowSpeed",new Bt(l,1)),h.setAttribute("flowOffset",new Bt(c,1)),u.geometry.dispose(),u.geometry=h,u.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=zm(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let s=new et(r.color),o=this.roomTint?.get(r.roomId);o&&s.lerp(new et(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(wS,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,s.r,s.g,s.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new pn;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new $(p,f,b)),e.expandByPoint(new $(p,f+h.floor.height,b))}e.isEmpty()&&e.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new $),r=e.getSize(new $),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new $(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new pn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=FS();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new $),r=t.getSize(new $),s=sf*Math.ceil((Math.max(r.x,r.z)+16)/sf);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-je-.02,n.z)}distanceFor(t){let e=this.camera.fov*ae,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Zs;return r.setFromCamera(new le(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Jt;if(f!==Jt&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(!u&&a.face&&a.face.normal.y>.7){let f=oh(c.floor).find(d=>$t([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,b=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<p)!==0;if(!b){let m=n.ray.direction,x=Math.hypot(m.x,m.z)||1,_=[a.point.x-m.x/x*.3,a.point.z-m.z/x*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&$t(_,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Tc),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||s(h).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ae,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,u=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:s.id,d:h})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(h=>h.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(s!==void 0&&-u.y<.34){let h=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-u.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?um(s.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new De,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new et(.25,.9,1):new et(1,.71,.28)))}n&&(this.ghost=new Je(e.geometry(),new en({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),u=Me(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?rn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:rn(e.floor,n),h=n.rotation*ae,f=Math.cos(h),d=Math.sin(h),p=(g,m,x)=>[s+g*f-m*d,x,o+g*d+m*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,x]=b[g],[_,v]=b[(g+1)%4];t.seg(p(m,x,u+.01),p(_,v,u+.01),r),t.seg(p(m,x,u+c),p(_,v,u+c),r),t.seg(p(m,x,u+.01),p(m,x,u+c),r)}t.seg(p(-n.w/2,n.d/2+.03,u+.02),p(n.w/2,n.d/2+.03,u+.02),new et(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ke(s,o);a.texture.colorSpace=Ne;let l=new jn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let O of this.floors)O.group.visible=O===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(O=>O.points),_=m.floor.elevation,v=new pn(new $(Math.min(...x.map(O=>O[0]))-.3,_,Math.min(...x.map(O=>O[1]))-.3),new $(Math.max(...x.map(O=>O[0]))+.3,_+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(O=>O[1]))+.3)),M=v.getCenter(new $),w=-.6,E=.8,y=new $(Math.sin(E)*Math.sin(w),Math.cos(E),Math.sin(E)*Math.cos(w));l.position.copy(M).addScaledVector(y,100),l.lookAt(M),l.updateMatrixWorld();let A=.5,S=.5;for(let O of[v.min.x,v.max.x])for(let C of[v.min.y,v.max.y])for(let k of[v.min.z,v.max.z]){let R=new $(O,C,k).applyMatrix4(l.matrixWorldInverse);A=Math.max(A,Math.abs(R.x)),S=Math.max(S,Math.abs(R.y))}let T=s/o;A/S>T?S=A/T:A=S*T,l.left=-A*1.05,l.right=A*1.05,l.top=S*1.05,l.bottom=-S*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let I=b.createImageData(s,o);for(let O=0;O<o;O++)I.data.set(d.subarray((o-1-O)*s*4,(o-O)*s*4),O*s*4);b.putImageData(I,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Gm(n.room,void 0,void 0,n.obstacles):ef(n.rest),l=a.length?a:ef(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!$t(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Jm[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&Me(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Kt({color:Jm[t.mode]}),r=this.robotModelKey(t),s=t.model?Me(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,u=new te,{radius:h,top:f}=O0(u,s,a,l,c),d=new te,p=Math.min(.05,h*.3),b=Math.min(.1,h*.55);Pe(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Kt({vertexColors:!0});let g=[u.geometry(),d.geometry()],m=new Ue;return m.add(new It(g[0],this.robotMat),new It(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new te,l=(u,h,f,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*u,Math.sin(g/20*Math.PI*2)*u]);Pe(a,b,h,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Kt({vertexColors:!0});let c=new te;Pe(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new Ue;return o.add(new It(this.robotGeo,this.robotMat),new It(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[s,,o]=n.size??Bo.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=s/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let u=new te;lg(u,0,0,0,l,0),this.fanMat??=new Kt({vertexColors:!0});let h=new It(u.geometry(),this.fanMat),f=new Ue;f.add(h),f.rotation.y=-((n.rotation??0)*ae),c={group:f,mesh:h,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=ag(a,o),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let s=this.floorMap.get(r.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(s.floor.cut_height,s.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Hm(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new et(.25-.2*a,.95-.83*a,1-.7*a),r=new et(0,0,0),s=new et(.3,1,.6),o=.02;for(let a of this.floors){let l=new te;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([h,f],d)=>{let p=u.points[d-1];if(p){let b=Math.hypot(h-p[0],f-p[1])||1,g=-(f-p[1])/b*.1,m=(h-p[0])/b*.1;l.tri([p[0]+g,o,p[1]+m],[h+g,o,f+m],[h-g,o,f-m],s,s,s),l.tri([p[0]+g,o,p[1]+m],[h-g,o,f-m],[p[0]-g,o,p[1]-m],s,s,s)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([h,o,f],[h+Math.cos(m)*.35,o,f+Math.sin(m)*.35],[h+Math.cos(g)*.35,o,f+Math.sin(g)*.35],s,r,r)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let f=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/f*.06,p=(u.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,o,c.z+p],[u.x+d,o,u.z+p],[u.x-d,o,u.z-p],b,h,h),l.tri([c.x+d,o,c.z+p],[u.x-d,o,u.z-p],[c.x-d,o,c.z-p],b,h,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([u.x,o,u.z],[u.x+Math.cos(p)*.22,o,u.z+Math.sin(p)*.22],[u.x+Math.cos(d)*.22,o,u.z+Math.sin(d)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new $(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new $(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Tc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new $(e,a.floor.elevation+a.ty+r,n),radius:o?.radius??5.5,phi:o?.phi??.78,...o?.theta!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let m=new Set;for(let[x,_]of this.flashes){let v=this.deviceFloor.get(x);v&&m.add(v),_<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepFans(t),h=this.stepWeather(t),f=r||s||o||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),u&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let p=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||u||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let b=this.effectFloors.size?this.decor(this.lowQuality?2*sg:sg):null;if(b!==null&&!this.effectTimer&&!document.hidden){let m=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let m=c||g||u?this.decor(u?83:0,u?83:void 0):null;!f&&m!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},m));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&u&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},pS))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/s+u[1]*r/s>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new $,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,u,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length();if(o.near!==void 0&&h>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=u.normalize().dot(new $(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new $,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId),l=this.figures.get(s.id);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(s.id);if(!c||c.floorId!==s.floorId)c={floorId:s.floorId,x:s.x,z:s.z};else{let f=s.x-c.x,d=s.z-c.z;Math.hypot(f,d)>.02?(c={floorId:s.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:s.floorId,x:s.x,z:s.z}}this.personAt.set(s.id,c);let u=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==u||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,u,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,u+(l?1.85:.9),c.z).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=ES(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function ES(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function AS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new mi(t);return s.flipY=!1,s.wrapS=vn,s.wrapT=vn,s.anisotropy=4,s.colorSpace=Ne,s}function RS(i){let t=new Kt({map:i,transparent:!0,blending:Le,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function CS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new mi(i);return e.wrapS=sr,e.wrapT=sr,e.colorSpace=Ne,e}function Uo(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function rf(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function PS(i){let t=new Kt({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function IS(i){let t=new Kt({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function og(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function LS(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new mi(t);return r.colorSpace=Ne,r}function FS(){let t=sf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new mi(e);return s.anisotropy=4,s.colorSpace=Ne,s}function $R(i,t){return new of(i,t)}function ag(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function lg(i,t,e,n,r,s){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=s+l*Math.PI/2,u=Math.cos(c),h=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*u-b*h,n+p*h+b*u]);Pe(i,d,e-.006,e+.006,xS,vS,{aoFrom:0,bottom:!0})}}function nf(i,t,e,n,r=!0){let[s,o,a]=t.size??Bo[t.lamp],l=t.base??0,c=(t.rotation??0)*ae,u=Math.cos(c),h=Math.sin(c),f=(g,m)=>[t.x+g*u-m*h,t.z+g*h+m*u],d=(g,m,x,_,v,M=14)=>{let w=[];for(let E=0;E<M;E++){let y=E/M*Math.PI*2;w.push([t.x+Math.cos(y)*g,t.z+Math.sin(y)*g])}Pe(i,w,m,x,_,v,{aoFrom:0,bottom:!0})},p=(g,m,x,_,v,M,w,E=w)=>Pe(i,[f(g,x),f(m,x),f(m,_),f(g,_)],v,M,w,E,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(s,o)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,ne,ne,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,ne,ne,8);let m=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,m,e-.02,ne,ne,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,ne,ne,10),d(.012,g+.16,e-.03,ne,ne,6),d(.13,g+.07,g+.16,ne,ne,16),d(.11,g,g+.07,n,n,16),r&&lg(i,t.x,ag(e,a),t.z,s/2,c);break}case"downlight":d(b,e-.012,e,ne,ne,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,ne,ne,10),d(b,e-Math.max(.06,a),e-.02,ne,ne,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-s/2,s/2,-o/2,o/2,e-Math.max(.015,a),e,ne,ne),p(-s/2+.02,s/2-.02,-o/2+.02,o/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,ne,ne),d(.014,l+.03,l+a-.12,ne,ne,6),d(b,l+a-.14,l+a-.02,ne,ne),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,ne,ne,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,ne,ne,10);break;case"garden":d(.012,l,l+a-.08,ne,ne,5),d(b,l+a-.08,l+a-.01,ne,ne,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,ne,ne),d(.014,l+.03,l+a-.28,ne,ne,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,ne,ne),d(.012,l+.03,l+a-.16,ne,ne,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??Wl;p(-s/2+.03,s/2-.03,-o/2,-o/2+.02,g,g+a,ne),p(-s/2,s/2,-o/2+.02,o/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-s/2,s/2,-o/2,o/2,m-g,m,n);break}let x=(t.roll??0)*ae,_=Math.cos(x),v=Math.sin(x),M=t.upright?l+s/2:m-g/2,w=(t.upright?0:t.rise??0)*ae,E=(I,O,C)=>{let k=I,R=O*_-C*v,F=O*v+C*_;return w&&([k,R]=[k*Math.cos(w)-R*Math.sin(w),k*Math.sin(w)+R*Math.cos(w)]),t.upright&&([k,R]=[-R,k]),[t.x+k*u-F*h,M+R,t.z+k*h+F*u]},y=[E(-s/2,-g/2,-o/2),E(s/2,-g/2,-o/2),E(s/2,-g/2,o/2),E(-s/2,-g/2,o/2),E(-s/2,g/2,-o/2),E(s/2,g/2,-o/2),E(s/2,g/2,o/2),E(-s/2,g/2,o/2)],A=new et(n),S=[t.x,M,t.z],T=(I,O,C,k)=>{let[R,F,D]=[y[I],y[O],y[C]],L=[(F[1]-R[1])*(D[2]-R[2])-(F[2]-R[2])*(D[1]-R[1]),(F[2]-R[2])*(D[0]-R[0])-(F[0]-R[0])*(D[2]-R[2]),(F[0]-R[0])*(D[1]-R[1])-(F[1]-R[1])*(D[0]-R[0])],U=[R[0]-S[0],R[1]-S[1],R[2]-S[2]],z=L[0]*U[0]+L[1]*U[1]+L[2]*U[2]<0,[G,V,W,q]=z?[y[k],y[C],y[O],y[I]]:[y[I],y[O],y[C],y[k]];i.tri(G,V,W,A,A,A),i.tri(G,W,q,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{qh as FloorMap,of as FloorplanViewer,$h as WalkCamera,$R as createViewer,NR as funLib,lS as furnitureFront,aS as furniturePreview,TS as isLowEnd,lg as pushFanBlades,nf as pushLampModel};
