import { n as n_1, t } from "./index-DUxJjXqx.js";
import { $ as $_1, $n as $n_1, A, An as An_1, At as At_1, B, Bt as Bt_1, C, Cn as Cn_1, Ct as Ct_1, D, Dt as Dt_1, E, Et as Et_1, F, Fn as Fn_1, Ft as Ft_1, G, Gn as Gn_1, H, I, In as In_1, J, Jn as Jn_1, K, Kn as Kn_1, Ln as Ln_1, M as M_1, Mn as Mn_1, Mt as Mt_1, N, Nn as Nn_1, Nt as Nt_1, O, Ot as Ot_1, P, Q as Q_1, Qn as Qn_1, R, Rn as Rn_1, S, Sn as Sn_1, St, T, Tt as Tt_1, U, Un as Un_1, V as V_1, Vn as Vn_1, W, Wn as Wn_1, X as X_1, Xn as Xn_1, Y as Y_1, Yn as Yn_1, Z as Z_1, Zn as Zn_1, _, _n as _n_1, _t as _t_1, a, ar as ar_1, at, b, bt, c, cr as cr_1, ct, d, dt, er as er_1, et, f, ft as ft_1, g, gn as gn_1, gt, h, ht, i, ir as ir_1, jn as jn_1, jt as jt_1, k, kn as kn_1, kt as kt_1, lr as lr_1, mt as colorSpace, n as n_2, nr as nr_1, nt, o, or as or_1, ot as ot_1, p, pt, q, qn as qn_1, r, rr as rr_1, rt as rt_1, s, sr as sr_1, st, t as t_1, tr as tr_1, tt, u, ut, v, vn as vn_1, vt, w, wn as wn_1, wt as wt_1, x, xn as xn_1, xt, y, yn as yn_1, yt, z as z_1, zn as zn_1, zt as zt_1 } from "./kit-Ce41oYCW.js";
function Ct() {
    let e = null;
    let t = false;
    let n = null;
    let r = null;
    function i(t, a) {
        r = e.requestAnimationFrame(i);
        n(t, a);
    }
    return {
        start: function() {
            if (t !== true && n !== null && e !== null) {
                r = e.requestAnimationFrame(i);
                t = true;
            }
        },
        stop: function() {
            if (e !== null) {
                e.cancelAnimationFrame(r);
            }
            t = false;
        },
        setAnimationLoop: function(e) {
            n = e;
        },
        setContext: function(t) {
            e = t;
        }
    };
}
function wt(e) {
    let t = new WeakMap;
    function n(t, n) {
        let t_array = t.array;
        let t_usage = t.usage;
        let r_byteLength = t_array.byteLength;
        let buffer = e.createBuffer();
        e.bindBuffer(n, buffer);
        e.bufferData(n, t_array, t_usage);
        t.onUploadCallback();
        let s;
        if (t_array instanceof Float32Array) {
            s = e.FLOAT;
        } else if (typeof Float16Array < `u` && t_array instanceof Float16Array) {
            s = e.HALF_FLOAT;
        } else if (t_array instanceof Uint16Array) {
            s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
        } else if (t_array instanceof Int16Array) {
            s = e.SHORT;
        } else if (t_array instanceof Uint32Array) {
            s = e.UNSIGNED_INT;
        } else if (t_array instanceof Int32Array) {
            s = e.INT;
        } else if (t_array instanceof Int8Array) {
            s = e.BYTE;
        } else if (t_array instanceof Uint8Array) {
            s = e.UNSIGNED_BYTE;
        } else if (t_array instanceof Uint8ClampedArray) {
            s = e.UNSIGNED_BYTE;
        } else {
            throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: ` + t_array);
        }
        return {
            buffer,
            type: s,
            bytesPerElement: t_array.BYTES_PER_ELEMENT,
            version: t.version,
            size: r_byteLength
        };
    }
    function r(buffer, n, r) {
        let n_array = n.array;
        let n_updateRanges = n.updateRanges;
        e.bindBuffer(r, buffer);
        if (n_updateRanges.length === 0) {
            e.bufferSubData(r, 0, n_array);
        } else {
            n_updateRanges.sort((e, t)=>e.start - t.start);
            let t = 0;
            for(let e = 1; e < n_updateRanges.length; e++){
                let n = n_updateRanges[t];
                let updateRange = n_updateRanges[e];
                if (updateRange.start <= n.start + n.count + 1) {
                    n.count = Math.max(n.count, updateRange.start + updateRange.count - n.start);
                } else {
                    ++t;
                    n_updateRanges[t] = updateRange;
                }
            }
            n_updateRanges.length = t + 1;
            for(let t = 0, n = n_updateRanges.length; t < n; t++){
                let updateRange = n_updateRanges[t];
                e.bufferSubData(r, updateRange.start * n_array.BYTES_PER_ELEMENT, n_array, updateRange.start, updateRange.count);
            }
            n.clearUpdateRanges();
        }
        n.onUploadCallback();
    }
    function i(e) {
        if (e.isInterleavedBufferAttribute) {
            e = e.data;
        }
        return t.get(e);
    }
    function a(n) {
        if (n.isInterleavedBufferAttribute) {
            n = n.data;
        }
        let r = t.get(n);
        if (r) {
            e.deleteBuffer(r.buffer);
            t.delete(n);
        }
    }
    function o(e, i) {
        if (e.isInterleavedBufferAttribute) {
            e = e.data;
        }
        if (e.isGLBufferAttribute) {
            let n = t.get(e);
            if (!n || n.version < e.version) {
                t.set(e, {
                    buffer: e.buffer,
                    type: e.type,
                    bytesPerElement: e.elementSize,
                    version: e.version
                });
            }
            return;
        }
        let a = t.get(e);
        if (a === undefined) {
            t.set(e, n(e, i));
        } else if (a.version < e.version) {
            if (a.size !== e.array.byteLength) {
                throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);
            }
            r(a.buffer, e, i);
            a.version = e.version;
        }
    }
    return {
        get: i,
        remove: a,
        update: o
    };
}
const Y = {
    alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
    alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
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
#endif`,
    alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
    alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
    alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    aomap_fragment: `#ifdef USE_AOMAP
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
#endif`,
    aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    batching_pars_vertex: `#ifdef USE_BATCHING
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
#endif`,
    batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
    begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
    beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    bsdfs: `float G_BlinnPhong_Implicit( ) {
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
} // validated`,
    iridescence_fragment: `#ifdef USE_IRIDESCENCE
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
#endif`,
    bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
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
#endif`,
    clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
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
#endif`,
    clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    color_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
    color_pars_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
    color_pars_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
    color_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,
    common: `#define PI 3.141592653589793
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
} // validated`,
    cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,
    defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
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
#endif`,
    displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
    emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    colorspace_fragment: `gl_FragColor = linearToOutputTexel( gl_FragColor );`,
    colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    envmap_fragment: `#ifdef USE_ENVMAP
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
#endif`,
    envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
    envmap_pars_fragment: `#ifdef USE_ENVMAP
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
#endif`,
    envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
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
#endif`,
    envmap_vertex: `#ifdef USE_ENVMAP
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
#endif`,
    fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
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
}`,
    lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
    lights_lambert_pars_fragment: `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
    lights_pars_begin: `uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,
    lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    lights_toon_pars_fragment: `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
    lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    lights_phong_pars_fragment: `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
    lights_physical_fragment: `PhysicalMaterial material;
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
#endif`,
    lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
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
}`,
    lights_fragment_begin: `
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
#endif`,
    lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
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
#endif`,
    lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
    lightprobes_pars_fragment: `#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,
    logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
    map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,
    map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
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
#endif`,
    metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
    morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
    morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
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
#endif`,
    morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,
    normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,
    normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
    normalmap_pars_fragment: `#ifdef USE_NORMALMAP
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
#endif`,
    clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
    clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
    clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
    iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
    opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    packing: `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,
    premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,
    shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,
    shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,
    shadowmask_pars_fragment: `float getShadowMask() {
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
}`,
    skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    skinning_pars_vertex: `#ifdef USE_SKINNING
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
#endif`,
    skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    skinnormal_vertex: `#ifdef USE_SKINNING
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
#endif`,
    specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    tonemapping_pars_fragment: `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    transmission_fragment: `#ifdef USE_TRANSMISSION
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
#endif`,
    transmission_pars_fragment: `#ifdef USE_TRANSMISSION
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
#endif`,
    uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
    uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
    uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
    worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
    background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    background_frag: `uniform sampler2D t2D;
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
}`,
    backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
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
}`,
    cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    depth_vert: `#include <common>
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
}`,
    depth_frag: `#if DEPTH_PACKING == 3200
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
}`,
    distance_vert: `#define DISTANCE
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
}`,
    distance_frag: `#define DISTANCE
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
}`,
    equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    linedashed_vert: `uniform float scale;
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
}`,
    linedashed_frag: `uniform vec3 diffuse;
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
}`,
    meshbasic_vert: `#include <common>
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
}`,
    meshbasic_frag: `uniform vec3 diffuse;
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
}`,
    meshlambert_vert: `#define LAMBERT
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
}`,
    meshlambert_frag: `#define LAMBERT
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
}`,
    meshmatcap_vert: `#define MATCAP
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
}`,
    meshmatcap_frag: `#define MATCAP
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
}`,
    meshnormal_vert: `#define NORMAL
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
}`,
    meshnormal_frag: `#define NORMAL
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
}`,
    meshphong_vert: `#define PHONG
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
}`,
    meshphong_frag: `#define PHONG
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
}`,
    meshphysical_vert: `#define STANDARD
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
}`,
    meshphysical_frag: `#define STANDARD
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
}`,
    meshtoon_vert: `#define TOON
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
}`,
    meshtoon_frag: `#define TOON
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
}`,
    points_vert: `uniform float size;
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
}`,
    points_frag: `uniform vec3 diffuse;
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
}`,
    shadow_vert: `#include <common>
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
}`,
    shadow_frag: `uniform vec3 color;
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
}`,
    sprite_vert: `uniform float rotation;
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
}`,
    sprite_frag: `uniform vec3 diffuse;
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
}`
};
const X = {
    common: {
        diffuse: {
            value: new B(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new gt
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new gt
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new gt
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new gt
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: 0.98
        },
        dfgLUT: {
            value: null
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new gt
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new gt
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new gt
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new gt
        },
        normalScale: {
            value: new qn_1(1, 1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new gt
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new gt
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new gt
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new gt
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 0.00025
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2000
        },
        fogColor: {
            value: new B(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        sunLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        sunLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        sunShadowMatrix: {
            value: []
        },
        sunShadowCascade: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        },
        probesSH: {
            value: null
        },
        probesMin: {
            value: new Jn_1
        },
        probesMax: {
            value: new Jn_1
        },
        probesResolution: {
            value: new Jn_1
        }
    },
    points: {
        diffuse: {
            value: new B(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new gt
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new gt
        }
    },
    sprite: {
        diffuse: {
            value: new B(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new qn_1(0.5, 0.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new gt
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new gt
        },
        alphaTest: {
            value: 0
        }
    }
};
const Tt = {
    basic: {
        uniforms: or_1([
            X.common,
            X.specularmap,
            X.envmap,
            X.aomap,
            X.lightmap,
            X.fog
        ]),
        vertexShader: Y.meshbasic_vert,
        fragmentShader: Y.meshbasic_frag
    },
    lambert: {
        uniforms: or_1([
            X.common,
            X.specularmap,
            X.envmap,
            X.aomap,
            X.lightmap,
            X.emissivemap,
            X.bumpmap,
            X.normalmap,
            X.displacementmap,
            X.fog,
            X.lights,
            {
                emissive: {
                    value: new B(0)
                },
                envMapIntensity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Y.meshlambert_vert,
        fragmentShader: Y.meshlambert_frag
    },
    phong: {
        uniforms: or_1([
            X.common,
            X.specularmap,
            X.envmap,
            X.aomap,
            X.lightmap,
            X.emissivemap,
            X.bumpmap,
            X.normalmap,
            X.displacementmap,
            X.fog,
            X.lights,
            {
                emissive: {
                    value: new B(0)
                },
                specular: {
                    value: new B(1118481)
                },
                shininess: {
                    value: 30
                },
                envMapIntensity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Y.meshphong_vert,
        fragmentShader: Y.meshphong_frag
    },
    standard: {
        uniforms: or_1([
            X.common,
            X.envmap,
            X.aomap,
            X.lightmap,
            X.emissivemap,
            X.bumpmap,
            X.normalmap,
            X.displacementmap,
            X.roughnessmap,
            X.metalnessmap,
            X.fog,
            X.lights,
            {
                emissive: {
                    value: new B(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Y.meshphysical_vert,
        fragmentShader: Y.meshphysical_frag
    },
    toon: {
        uniforms: or_1([
            X.common,
            X.aomap,
            X.lightmap,
            X.emissivemap,
            X.bumpmap,
            X.normalmap,
            X.displacementmap,
            X.gradientmap,
            X.fog,
            X.lights,
            {
                emissive: {
                    value: new B(0)
                }
            }
        ]),
        vertexShader: Y.meshtoon_vert,
        fragmentShader: Y.meshtoon_frag
    },
    matcap: {
        uniforms: or_1([
            X.common,
            X.bumpmap,
            X.normalmap,
            X.displacementmap,
            X.fog,
            {
                matcap: {
                    value: null
                }
            }
        ]),
        vertexShader: Y.meshmatcap_vert,
        fragmentShader: Y.meshmatcap_frag
    },
    points: {
        uniforms: or_1([
            X.points,
            X.fog
        ]),
        vertexShader: Y.points_vert,
        fragmentShader: Y.points_frag
    },
    dashed: {
        uniforms: or_1([
            X.common,
            X.fog,
            {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }
        ]),
        vertexShader: Y.linedashed_vert,
        fragmentShader: Y.linedashed_frag
    },
    depth: {
        uniforms: or_1([
            X.common,
            X.displacementmap
        ]),
        vertexShader: Y.depth_vert,
        fragmentShader: Y.depth_frag
    },
    normal: {
        uniforms: or_1([
            X.common,
            X.bumpmap,
            X.normalmap,
            X.displacementmap,
            {
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Y.meshnormal_vert,
        fragmentShader: Y.meshnormal_frag
    },
    sprite: {
        uniforms: or_1([
            X.sprite,
            X.fog
        ]),
        vertexShader: Y.sprite_vert,
        fragmentShader: Y.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new gt
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: Y.background_vert,
        fragmentShader: Y.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new gt
            }
        },
        vertexShader: Y.backgroundCube_vert,
        fragmentShader: Y.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: Y.cube_vert,
        fragmentShader: Y.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Y.equirect_vert,
        fragmentShader: Y.equirect_frag
    },
    distance: {
        uniforms: or_1([
            X.common,
            X.displacementmap,
            {
                referencePosition: {
                    value: new Jn_1
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1000
                }
            }
        ]),
        vertexShader: Y.distance_vert,
        fragmentShader: Y.distance_frag
    },
    shadow: {
        uniforms: or_1([
            X.lights,
            X.fog,
            {
                color: {
                    value: new B(0)
                },
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Y.shadow_vert,
        fragmentShader: Y.shadow_frag
    }
};
Tt.physical = {
    uniforms: or_1([
        Tt.standard.uniforms,
        {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatMapTransform: {
                value: new gt
            },
            clearcoatNormalMap: {
                value: null
            },
            clearcoatNormalMapTransform: {
                value: new gt
            },
            clearcoatNormalScale: {
                value: new qn_1(1, 1)
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatRoughnessMapTransform: {
                value: new gt
            },
            dispersion: {
                value: 0
            },
            retroreflectivity: {
                value: 0
            },
            iridescence: {
                value: 0
            },
            iridescenceMap: {
                value: null
            },
            iridescenceMapTransform: {
                value: new gt
            },
            iridescenceIOR: {
                value: 1.3
            },
            iridescenceThicknessMinimum: {
                value: 100
            },
            iridescenceThicknessMaximum: {
                value: 400
            },
            iridescenceThicknessMap: {
                value: null
            },
            iridescenceThicknessMapTransform: {
                value: new gt
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: new B(0)
            },
            sheenColorMap: {
                value: null
            },
            sheenColorMapTransform: {
                value: new gt
            },
            sheenRoughness: {
                value: 1
            },
            sheenRoughnessMap: {
                value: null
            },
            sheenRoughnessMapTransform: {
                value: new gt
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionMapTransform: {
                value: new gt
            },
            transmissionSamplerSize: {
                value: new qn_1
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            thicknessMapTransform: {
                value: new gt
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: new B(0)
            },
            specularColor: {
                value: new B(1, 1, 1)
            },
            specularColorMap: {
                value: null
            },
            specularColorMapTransform: {
                value: new gt
            },
            specularIntensity: {
                value: 1
            },
            specularIntensityMap: {
                value: null
            },
            specularIntensityMapTransform: {
                value: new gt
            },
            anisotropyVector: {
                value: new qn_1
            },
            anisotropyMap: {
                value: null
            },
            anisotropyMapTransform: {
                value: new gt
            }
        }
    ]),
    vertexShader: Y.meshphysical_vert,
    fragmentShader: Y.meshphysical_frag
};
const Et = {
    r: 0,
    b: 0,
    g: 0
};
const Dt = new _t_1;
const Ot = new gt;
Ot.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function kt(e, t, n, i, o, c) {
    let l = new B(0);
    let u = o === true ? 0 : 1;
    let d;
    let f;
    let p = null;
    let m = 0;
    let h = null;
    function g(e) {
        let n = e.isScene === true ? e.background : null;
        if (n && n.isTexture) {
            let r = e.backgroundBlurriness > 0;
            n = t.get(n, r);
        }
        return n;
    }
    function render(t) {
        let r = false;
        let i = g(t);
        if (i === null) {
            y(l, u);
        } else if (i && i.isColor) {
            y(i, 1);
            r = true;
        }
        let a = e.xr.getEnvironmentBlendMode();
        if (a === `additive`) {
            n.buffers.color.setClear(0, 0, 0, 1, c);
        } else if (a === `alpha-blend`) {
            n.buffers.color.setClear(0, 0, 0, 0, c);
        }
        if (e.autoClear || r) {
            n.buffers.depth.setTest(true);
            n.buffers.depth.setMask(true);
            n.buffers.color.setMask(true);
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil);
        }
    }
    function addToRenderList(t, n) {
        let o = g(n);
        if (o && (o.isCubeTexture || o.mapping === 306)) {
            if (f === undefined) {
                f = new vt(new P(1, 1, 1), new Mn_1({
                    name: `BackgroundCubeMaterial`,
                    uniforms: $n_1(Tt.backgroundCube.uniforms),
                    vertexShader: Tt.backgroundCube.vertexShader,
                    fragmentShader: Tt.backgroundCube.fragmentShader,
                    side: 1,
                    depthTest: false,
                    depthWrite: false,
                    fog: false,
                    allowOverride: false
                }));
                f.geometry.deleteAttribute(`normal`);
                f.geometry.deleteAttribute(`uv`);
                f.onBeforeRender = function(e, t, n) {
                    this.matrixWorld.copyPosition(n.matrixWorld);
                };
                Object.defineProperty(f.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                });
                i.update(f);
            }
            f.material.uniforms.envMap.value = o;
            f.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness;
            f.material.uniforms.backgroundIntensity.value = n.backgroundIntensity;
            f.material.uniforms.backgroundRotation.value.setFromMatrix4(Dt.makeRotationFromEuler(n.backgroundRotation)).transpose();
            if (o.isCubeTexture && o.isRenderTargetTexture === false) {
                f.material.uniforms.backgroundRotation.value.premultiply(Ot);
            }
            f.material.toneMapped = V_1.getTransfer(o.colorSpace) !== An_1;
            if (p !== o || m !== o.version || h !== e.toneMapping) {
                f.material.needsUpdate = true;
                p = o;
                m = o.version;
                h = e.toneMapping;
            }
            f.layers.enableAll();
            t.unshift(f, f.geometry, f.material, 0, 0, null);
        } else if (o && o.isTexture) {
            if (d === undefined) {
                d = new vt(new Mt_1(2, 2), new Mn_1({
                    name: `BackgroundMaterial`,
                    uniforms: $n_1(Tt.background.uniforms),
                    vertexShader: Tt.background.vertexShader,
                    fragmentShader: Tt.background.fragmentShader,
                    side: 0,
                    depthTest: false,
                    depthWrite: false,
                    fog: false,
                    allowOverride: false
                }));
                d.geometry.deleteAttribute(`normal`);
                Object.defineProperty(d.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                });
                i.update(d);
            }
            d.material.uniforms.t2D.value = o;
            d.material.uniforms.backgroundIntensity.value = n.backgroundIntensity;
            d.material.toneMapped = V_1.getTransfer(o.colorSpace) !== An_1;
            if (o.matrixAutoUpdate === true) {
                o.updateMatrix();
            }
            d.material.uniforms.uvTransform.value.copy(o.matrix);
            if (p !== o || m !== o.version || h !== e.toneMapping) {
                d.material.needsUpdate = true;
                p = o;
                m = o.version;
                h = e.toneMapping;
            }
            d.layers.enableAll();
            t.unshift(d, d.geometry, d.material, 0, 0, null);
        }
    }
    function y(t, r) {
        t.getRGB(Et, ir_1(e));
        n.buffers.color.setClear(Et.r, Et.g, Et.b, r, c);
    }
    function b() {
        if (f !== undefined) {
            f.geometry.dispose();
            f.material.dispose();
            f = undefined;
        }
        if (d !== undefined) {
            d.geometry.dispose();
            d.material.dispose();
            d = undefined;
        }
    }
    return {
        getClearColor: function() {
            return l;
        },
        setClearColor: function(e, t = 1) {
            l.set(e);
            u = t;
            y(l, u);
        },
        getClearAlpha: function() {
            return u;
        },
        setClearAlpha: function(e) {
            u = e;
            y(l, u);
        },
        render,
        addToRenderList,
        dispose: b
    };
}
function At(e, t) {
    let n = e.getParameter(e.MAX_VERTEX_ATTRIBS);
    let r = {};
    let i = f(null);
    let a = i;
    let o = false;
    function s(n, r, i, s, c) {
        let u = false;
        let f = d(n, s, i, r);
        if (a !== f) {
            a = f;
            l(a.object);
        }
        u = p(n, s, i, c);
        if (u) {
            m(n, s, i, c);
        }
        if (c !== null) {
            t.update(c, e.ELEMENT_ARRAY_BUFFER);
        }
        if (u || o) {
            o = false;
            b(n, r, i, s);
            if (c !== null) {
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer);
            }
        }
    }
    function c() {
        return e.createVertexArray();
    }
    function l(object) {
        return e.bindVertexArray(object);
    }
    function u(object) {
        return e.deleteVertexArray(object);
    }
    function d(e, t, n, i) {
        let a = i.wireframe === true;
        let o = r[t.id];
        if (o === undefined) {
            o = {};
            r[t.id] = o;
        }
        let s = e.isInstancedMesh === true ? e.id : 0;
        let l = o[s];
        if (l === undefined) {
            l = {};
            o[s] = l;
        }
        let u = l[n.id];
        if (u === undefined) {
            u = {};
            l[n.id] = u;
        }
        let d = u[a];
        if (d === undefined) {
            d = f(c());
            u[a] = d;
        }
        return d;
    }
    function f(object) {
        let newAttributes = [];
        let enabledAttributes = [];
        let attributeDivisors = [];
        for(let e = 0; e < n; e++){
            newAttributes[e] = 0;
            enabledAttributes[e] = 0;
            attributeDivisors[e] = 0;
        }
        return {
            geometry: null,
            program: null,
            wireframe: false,
            newAttributes,
            enabledAttributes,
            attributeDivisors,
            object,
            attributes: {},
            index: null
        };
    }
    function p(e, t, n, r) {
        let a_attributes = a.attributes;
        let t_attributes = t.attributes;
        let s = 0;
        let c = n.getAttributes();
        for(let t in c){
            if (c[t].location >= 0) {
                let n = a_attributes[t];
                let r = t_attributes[t];
                if (r === undefined) {
                    if (t === `instanceMatrix` && e.instanceMatrix) {
                        r = e.instanceMatrix;
                    }
                    if (t === `instanceColor` && e.instanceColor) {
                        r = e.instanceColor;
                    }
                }
                if (n === undefined || n.attribute !== r || r && n.data !== r.data) {
                    return true;
                }
                s++;
            }
        }
        return a.attributesNum !== s || a.index !== r;
    }
    function m(e, t, n, r) {
        let i = {};
        let t_attributes = t.attributes;
        let s = 0;
        let c = n.getAttributes();
        for(let t in c){
            if (c[t].location >= 0) {
                let n = t_attributes[t];
                if (n === undefined) {
                    if (t === `instanceMatrix` && e.instanceMatrix) {
                        n = e.instanceMatrix;
                    }
                    if (t === `instanceColor` && e.instanceColor) {
                        n = e.instanceColor;
                    }
                }
                let r = {};
                r.attribute = n;
                if (n && n.data) {
                    r.data = n.data;
                }
                i[t] = r;
                s++;
            }
        }
        a.attributes = i;
        a.attributesNum = s;
        a.index = r;
    }
    function initAttributes() {
        let a_newAttributes = a.newAttributes;
        for(let t = 0, n = a_newAttributes.length; t < n; t++){
            a_newAttributes[t] = 0;
        }
    }
    function enableAttribute(e) {
        _(e, 0);
    }
    function _(t, n) {
        let a_newAttributes = a.newAttributes;
        let a_enabledAttributes = a.enabledAttributes;
        let a_attributeDivisors = a.attributeDivisors;
        a_newAttributes[t] = 1;
        if (a_enabledAttributes[t] === 0) {
            e.enableVertexAttribArray(t);
            a_enabledAttributes[t] = 1;
        }
        if (a_attributeDivisors[t] !== n) {
            e.vertexAttribDivisor(t, n);
            a_attributeDivisors[t] = n;
        }
    }
    function disableUnusedAttributes() {
        let a_newAttributes = a.newAttributes;
        let a_enabledAttributes = a.enabledAttributes;
        for(let r = 0, i = a_enabledAttributes.length; r < i; r++){
            if (a_enabledAttributes[r] !== a_newAttributes[r]) {
                e.disableVertexAttribArray(r);
                a_enabledAttributes[r] = 0;
            }
        }
    }
    function y(t, n, r, i, a, o, s) {
        if (s === true) {
            e.vertexAttribIPointer(t, n, r, a, o);
        } else {
            e.vertexAttribPointer(t, n, r, i, a, o);
        }
    }
    function b(n, r, i, a) {
        initAttributes();
        let a_attributes = a.attributes;
        let s = i.getAttributes();
        let r_defaultAttributeValues = r.defaultAttributeValues;
        for(let r in s){
            let i = s[r];
            if (i.location >= 0) {
                let s = a_attributes[r];
                if (s === undefined) {
                    if (r === `instanceMatrix` && n.instanceMatrix) {
                        s = n.instanceMatrix;
                    }
                    if (r === `instanceColor` && n.instanceColor) {
                        s = n.instanceColor;
                    }
                }
                if (s !== undefined) {
                    let r = s.normalized;
                    let o = s.itemSize;
                    let c = t.get(s);
                    if (c === undefined) {
                        continue;
                    }
                    let l = c.buffer;
                    let u = c.type;
                    let d = c.bytesPerElement;
                    let f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
                    if (s.isInterleavedBufferAttribute) {
                        let t = s.data;
                        let c = t.stride;
                        let p = s.offset;
                        if (t.isInstancedInterleavedBuffer) {
                            for(let e = 0; e < i.locationSize; e++){
                                _(i.location + e, t.meshPerAttribute);
                            }
                            if (n.isInstancedMesh !== true && a._maxInstanceCount === undefined) {
                                a._maxInstanceCount = t.meshPerAttribute * t.count;
                            }
                        } else {
                            for(let e = 0; e < i.locationSize; e++){
                                enableAttribute(i.location + e);
                            }
                        }
                        e.bindBuffer(e.ARRAY_BUFFER, l);
                        for(let e = 0; e < i.locationSize; e++){
                            y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
                        }
                    } else {
                        if (s.isInstancedBufferAttribute) {
                            for(let e = 0; e < i.locationSize; e++){
                                _(i.location + e, s.meshPerAttribute);
                            }
                            if (n.isInstancedMesh !== true && a._maxInstanceCount === undefined) {
                                a._maxInstanceCount = s.meshPerAttribute * s.count;
                            }
                        } else {
                            for(let e = 0; e < i.locationSize; e++){
                                enableAttribute(i.location + e);
                            }
                        }
                        e.bindBuffer(e.ARRAY_BUFFER, l);
                        for(let e = 0; e < i.locationSize; e++){
                            y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
                        }
                    }
                } else if (r_defaultAttributeValues !== undefined) {
                    let t = r_defaultAttributeValues[r];
                    if (t !== undefined) {
                        switch(t.length){
                            case 2:
                                e.vertexAttrib2fv(i.location, t);
                                break;
                            case 3:
                                e.vertexAttrib3fv(i.location, t);
                                break;
                            case 4:
                                e.vertexAttrib4fv(i.location, t);
                                break;
                            default:
                                e.vertexAttrib1fv(i.location, t);
                        }
                    }
                }
            }
        }
        disableUnusedAttributes();
    }
    function x() {
        T();
        for(let e in r){
            let t = r[e];
            for(let e in t){
                let n = t[e];
                for(let e in n){
                    let t = n[e];
                    for(let e in t){
                        u(t[e].object);
                        delete t[e];
                    }
                    delete n[e];
                }
            }
            delete r[e];
        }
    }
    function releaseStatesOfGeometry(e) {
        if (r[e.id] === undefined) {
            return;
        }
        let t = r[e.id];
        for(let e in t){
            let n = t[e];
            for(let e in n){
                let t = n[e];
                for(let e in t){
                    u(t[e].object);
                    delete t[e];
                }
                delete n[e];
            }
        }
        delete r[e.id];
    }
    function releaseStatesOfProgram(e) {
        for(let t in r){
            let n = r[t];
            for(let t in n){
                let r = n[t];
                if (r[e.id] === undefined) {
                    continue;
                }
                let i = r[e.id];
                for(let e in i){
                    u(i[e].object);
                    delete i[e];
                }
                delete r[e.id];
            }
        }
    }
    function releaseStatesOfObject(e) {
        for(let t in r){
            let n = r[t];
            let i = e.isInstancedMesh === true ? e.id : 0;
            let a = n[i];
            if (a !== undefined) {
                for(let e in a){
                    let t = a[e];
                    for(let e in t){
                        u(t[e].object);
                        delete t[e];
                    }
                    delete a[e];
                }
                delete n[i];
                if (Object.keys(n).length === 0) {
                    delete r[t];
                }
            }
        }
    }
    function T() {
        resetDefaultState();
        o = true;
        if (a !== i) {
            a = i;
            l(a.object);
        }
    }
    function resetDefaultState() {
        i.geometry = null;
        i.program = null;
        i.wireframe = false;
    }
    return {
        setup: s,
        reset: T,
        resetDefaultState,
        dispose: x,
        releaseStatesOfGeometry,
        releaseStatesOfObject,
        releaseStatesOfProgram,
        initAttributes,
        enableAttribute,
        disableUnusedAttributes
    };
}
function jt(e, t, n) {
    let r;
    function i(e) {
        r = e;
    }
    function a(t, i) {
        e.drawArrays(r, t, i);
        n.update(i, r, 1);
    }
    function o(t, i, a) {
        if (a !== 0) {
            e.drawArraysInstanced(r, t, i, a);
            n.update(i, r, a);
        }
    }
    function s(e, i, a) {
        if (a === 0) {
            return;
        }
        t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r, e, 0, i, 0, a);
        let o = 0;
        for(let e = 0; e < a; e++){
            o += i[e];
        }
        n.update(o, r, 1);
    }
    this.setMode = i;
    this.render = a;
    this.renderInstances = o;
    this.renderMultiDraw = s;
}
function Mt(e, t, n, r) {
    let i;
    function getMaxAnisotropy() {
        if (i !== undefined) {
            return i;
        }
        if (t.has(`EXT_texture_filter_anisotropic`) === true) {
            let n = t.get(`EXT_texture_filter_anisotropic`);
            i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else {
            i = 0;
        }
        return i;
    }
    function textureFormatReadable(t) {
        return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
    }
    function textureTypeReadable(n) {
        let i = n === 1016 && (t.has(`EXT_color_buffer_half_float`) || t.has(`EXT_color_buffer_float`));
        return !(n !== 1009 && n !== 1015 && !i && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
    }
    function getMaxPrecision(t) {
        if (t === `highp`) {
            if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) {
                return `highp`;
            }
            t = `mediump`;
        }
        if (t === `mediump` && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0) {
            return `mediump`;
        }
        return `lowp`;
    }
    let precision = n.precision === undefined ? `highp` : n.precision;
    let u = getMaxPrecision(precision);
    if (u !== precision) {
        cr_1(`WebGLRenderer:`, precision, `not supported, using`, u, `instead.`);
        precision = u;
    }
    let logarithmicDepthBuffer = n.logarithmicDepthBuffer === true;
    let reversedDepthBuffer = n.reversedDepthBuffer === true && t.has(`EXT_clip_control`);
    if (n.reversedDepthBuffer === true && reversedDepthBuffer === false) {
        cr_1(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);
    }
    let maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
    let maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    let maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE);
    let maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE);
    let maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS);
    let maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS);
    let maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS);
    let maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS);
    let maxSamples = e.getParameter(e.MAX_SAMPLES);
    let samples = e.getParameter(e.SAMPLES);
    return {
        isWebGL2: true,
        getMaxAnisotropy,
        getMaxPrecision,
        textureFormatReadable,
        textureTypeReadable,
        precision,
        logarithmicDepthBuffer,
        reversedDepthBuffer,
        maxTextures,
        maxVertexTextures,
        maxTextureSize,
        maxCubemapSize,
        maxAttributes,
        maxVertexUniforms,
        maxVaryings,
        maxFragmentUniforms,
        maxSamples,
        samples
    };
}
function Nt(e) {
    let t = this;
    let n = null;
    let r = 0;
    let i = false;
    let a = false;
    let o = new jt_1;
    let s = new gt;
    let c = {
        value: null,
        needsUpdate: false
    };
    this.uniform = c;
    this.numPlanes = 0;
    this.numIntersection = 0;
    this.init = function(e, t) {
        let n = e.length !== 0 || t || r !== 0 || i;
        i = t;
        r = e.length;
        return n;
    };
    this.beginShadows = function() {
        a = true;
        u(null);
    };
    this.endShadows = function() {
        a = false;
    };
    this.setGlobalState = function(e, t) {
        n = u(e, t, 0);
    };
    this.setState = function(t, o, s) {
        let t_clippingPlanes = t.clippingPlanes;
        let t_clipIntersection = t.clipIntersection;
        let t_clipShadows = t.clipShadows;
        let m = e.get(t);
        if (!i || t_clippingPlanes === null || t_clippingPlanes.length === 0 || a && !t_clipShadows) {
            if (a) {
                u(null);
            } else {
                l();
            }
        } else {
            let e = a ? 0 : r;
            let t = e * 4;
            let i = m.clippingState || null;
            c.value = i;
            i = u(t_clippingPlanes, o, t, s);
            for(let e = 0; e !== t; ++e){
                i[e] = n[e];
            }
            m.clippingState = i;
            this.numIntersection = t_clipIntersection ? this.numPlanes : 0;
            this.numPlanes += e;
        }
    };
    function l() {
        if (c.value !== n) {
            c.value = n;
            c.needsUpdate = r > 0;
        }
        t.numPlanes = r;
        t.numIntersection = 0;
    }
    function u(e, n, r, i) {
        let a = e === null ? 0 : e.length;
        let l = null;
        if (a !== 0) {
            l = c.value;
            if (i !== true || l === null) {
                let t = r + a * 4;
                let i = n.matrixWorldInverse;
                s.getNormalMatrix(i);
                if (l === null || l.length < t) {
                    l = new Float32Array(t);
                }
                for(let t = 0, n = r; t !== a; ++t, n += 4){
                    o.copy(e[t]).applyMatrix4(i, s);
                    o.normal.toArray(l, n);
                    l[n + 3] = o.constant;
                }
            }
            c.value = l;
            c.needsUpdate = true;
        }
        t.numPlanes = a;
        t.numIntersection = 0;
        return l;
    }
}
const Pt = 4;
const Ft = 6;
const SAMPLES = 20;
const GGX_SAMPLES = 256;
const Rt = new kt_1;
const zt = new B;
let Bt = null;
let Vt = 0;
let Ht = 0;
let Ut = false;
const Wt = new Jn_1;
const Gt = new Jn_1;
class Kt {
    constructor(e){
        this._renderer = e;
        this._pingPongRenderTarget = null;
        this._lodMax = 0;
        this._cubeSize = 0;
        this._sizeLods = [];
        this._lodMeshes = [];
        this._backgroundBox = null;
        this._cubemapMaterial = null;
        this._equirectMaterial = null;
        this._blurMaterial = null;
        this._ggxMaterial = null;
    }
    fromScene(e, t = 0, n = 0.1, r = 100, { size = 256, position = Wt } = {}) {
        Bt = this._renderer.getRenderTarget();
        Vt = this._renderer.getActiveCubeFace();
        Ht = this._renderer.getActiveMipmapLevel();
        Ut = this._renderer.xr.enabled;
        this._renderer.xr.enabled = false;
        this._setSize(size);
        let s = this._allocateTargets();
        s.depthBuffer = true;
        this._sceneToCubeUV(e, n, r, s, position);
        if (t > 0) {
            this._blur(s, 0, 0, t);
        }
        this._applyPMREM(s);
        this._cleanup(s);
        return s;
    }
    fromEquirectangular(e, t = null) {
        return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
        return this._fromTexture(e, t);
    }
    compileCubemapShader() {
        if (this._cubemapMaterial === null) {
            this._cubemapMaterial = $t();
            this._compileMaterial(this._cubemapMaterial);
        }
    }
    compileEquirectangularShader() {
        if (this._equirectMaterial === null) {
            this._equirectMaterial = Qt();
            this._compileMaterial(this._equirectMaterial);
        }
    }
    dispose() {
        this._dispose();
        if (this._cubemapMaterial !== null) {
            this._cubemapMaterial.dispose();
        }
        if (this._equirectMaterial !== null) {
            this._equirectMaterial.dispose();
        }
        if (this._backgroundBox !== null) {
            this._backgroundBox.geometry.dispose();
            this._backgroundBox.material.dispose();
        }
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e));
        this._cubeSize = 2 ** this._lodMax;
    }
    _dispose() {
        if (this._blurMaterial !== null) {
            this._blurMaterial.dispose();
        }
        if (this._ggxMaterial !== null) {
            this._ggxMaterial.dispose();
        }
        if (this._pingPongRenderTarget !== null) {
            this._pingPongRenderTarget.dispose();
        }
        for(let e = 0; e < this._lodMeshes.length; e++){
            this._lodMeshes[e].geometry.dispose();
        }
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Bt, Vt, Ht);
        this._renderer.xr.enabled = Ut;
        e.scissorTest = false;
        Yt(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
        if (e.mapping === 301 || e.mapping === 302) {
            this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width);
        } else {
            this._setSize(e.image.width / 4);
        }
        Bt = this._renderer.getRenderTarget();
        Vt = this._renderer.getActiveCubeFace();
        Ht = this._renderer.getActiveMipmapLevel();
        Ut = this._renderer.xr.enabled;
        this._renderer.xr.enabled = false;
        let n = t || this._allocateTargets();
        this._textureToCubeUV(e, n);
        this._applyPMREM(n);
        this._cleanup(n);
        return n;
    }
    _allocateTargets() {
        let e = 3 * Math.max(this._cubeSize, 112);
        let t = 4 * this._cubeSize;
        let n = {
            magFilter: dt,
            minFilter: dt,
            generateMipmaps: false,
            type: ot_1,
            format: zt_1,
            colorSpace,
            depthBuffer: false
        };
        let r = Jt(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            if (this._pingPongRenderTarget !== null) {
                this._dispose();
            }
            this._pingPongRenderTarget = Jt(e, t, n);
            let { _lodMax } = this;
            ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = qt(_lodMax));
            this._blurMaterial = Zt(_lodMax, e, t);
            this._ggxMaterial = Xt(_lodMax, e, t);
        }
        return r;
    }
    _compileMaterial(e) {
        let t = new vt(new I, e);
        this._renderer.compile(t, Rt);
    }
    _sceneToCubeUV(e, t, n, r, i) {
        let a = new At_1(90, 1, t, n);
        let s = [
            1,
            -1,
            1,
            1,
            1,
            1
        ];
        let c = [
            1,
            1,
            1,
            -1,
            -1,
            -1
        ];
        let _renderer = this._renderer;
        let l_autoClear = _renderer.autoClear;
        let l_toneMapping = _renderer.toneMapping;
        _renderer.getClearColor(zt);
        _renderer.toneMapping = 0;
        _renderer.autoClear = false;
        if (_renderer.state.buffers.depth.getReversed()) {
            _renderer.setRenderTarget(r);
            _renderer.clearDepth();
            _renderer.setRenderTarget(null);
        }
        if (this._backgroundBox === null) {
            this._backgroundBox = new vt(new P, new yt({
                name: `PMREM.Background`,
                side: 1,
                depthWrite: false,
                depthTest: false
            }));
        }
        let _backgroundBox = this._backgroundBox;
        let f_material = _backgroundBox.material;
        let m = false;
        let e_background = e.background;
        if (e_background) {
            if (e_background.isColor) {
                f_material.color.copy(e_background);
                e.background = null;
                m = true;
            }
        } else {
            f_material.color.copy(zt);
            m = true;
        }
        for(let t = 0; t < 6; t++){
            let n = t % 3;
            switch(n){
                case 0:
                    a.up.set(0, s[t], 0);
                    a.position.set(i.x, i.y, i.z);
                    a.lookAt(i.x + c[t], i.y, i.z);
                    break;
                case 1:
                    a.up.set(0, 0, s[t]);
                    a.position.set(i.x, i.y, i.z);
                    a.lookAt(i.x, i.y + c[t], i.z);
                    break;
                default:
                    a.up.set(0, s[t], 0);
                    a.position.set(i.x, i.y, i.z);
                    a.lookAt(i.x, i.y, i.z + c[t]);
            }
            let o = this._cubeSize;
            Yt(r, n * o, t > 2 ? o : 0, o, o);
            _renderer.setRenderTarget(r);
            if (m) {
                _renderer.render(_backgroundBox, a);
            }
            _renderer.render(e, a);
        }
        _renderer.toneMapping = l_toneMapping;
        _renderer.autoClear = l_autoClear;
        e.background = e_background;
    }
    _textureToCubeUV(e, t) {
        let _renderer = this._renderer;
        let r = e.mapping === 301 || e.mapping === 302;
        if (r) {
            if (this._cubemapMaterial === null) {
                this._cubemapMaterial = $t();
            }
            this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1;
        } else if (this._equirectMaterial === null) {
            this._equirectMaterial = Qt();
        }
        let i = r ? this._cubemapMaterial : this._equirectMaterial;
        let a = this._lodMeshes[0];
        a.material = i;
        let i_uniforms = i.uniforms;
        i_uniforms.envMap.value = e;
        let _cubeSize = this._cubeSize;
        Yt(t, 0, 0, 3 * _cubeSize, 2 * _cubeSize);
        _renderer.setRenderTarget(t);
        _renderer.render(a, Rt);
    }
    _applyPMREM(e) {
        let _renderer = this._renderer;
        let t_autoClear = _renderer.autoClear;
        _renderer.autoClear = false;
        let length = this._lodMeshes.length;
        for(let t = 1; t < length; t++){
            this._applyGGXFilter(e, t - 1, t);
        }
        _renderer.autoClear = t_autoClear;
    }
    _applyGGXFilter(e, t, n) {
        let _renderer = this._renderer;
        let _pingPongRenderTarget = this._pingPongRenderTarget;
        let _ggxMaterial = this._ggxMaterial;
        let o = this._lodMeshes[n];
        o.material = _ggxMaterial;
        let a_uniforms = _ggxMaterial.uniforms;
        let c = n / (this._lodMeshes.length - 1);
        let l = t / (this._lodMeshes.length - 1);
        let u = Math.sqrt(c * c - l * l) * (c * 1.25);
        let { _lodMax } = this;
        let f = this._sizeLods[n];
        let p = 3 * f * (n > _lodMax - Pt ? n - _lodMax + Pt : 0);
        let m = 4 * (this._cubeSize - f);
        a_uniforms.envMap.value = e.texture;
        a_uniforms.roughness.value = u;
        a_uniforms.mipInt.value = _lodMax - t;
        Yt(_pingPongRenderTarget, p, m, 3 * f, 2 * f);
        _renderer.setRenderTarget(_pingPongRenderTarget);
        _renderer.render(o, Rt);
        a_uniforms.envMap.value = _pingPongRenderTarget.texture;
        a_uniforms.roughness.value = 0;
        a_uniforms.mipInt.value = _lodMax - n;
        Yt(e, p, m, 3 * f, 2 * f);
        _renderer.setRenderTarget(e);
        _renderer.render(o, Rt);
    }
    _blur(e, t, n, r) {
        let _pingPongRenderTarget = this._pingPongRenderTarget;
        let a = Math.min(r, Math.PI) / Math.SQRT2;
        this._blurPass(e, _pingPongRenderTarget, t, n, a);
        this._blurPass(_pingPongRenderTarget, e, n, n, a);
    }
    _blurPass(e, t, n, r, i) {
        let _renderer = this._renderer;
        let _blurMaterial = this._blurMaterial;
        let s = this._lodMeshes[r];
        s.material = _blurMaterial;
        let o_uniforms = _blurMaterial.uniforms;
        o_uniforms.envMap.value = e.texture;
        o_uniforms.sigma.value = i;
        o_uniforms.mipInt.value = this._lodMax - n;
        let l = this._sizeLods[r];
        Yt(t, 3 * l * (r > this._lodMax - Pt ? r - this._lodMax + Pt : 0), 4 * (this._cubeSize - l), 3 * l, 2 * l);
        _renderer.setRenderTarget(t);
        _renderer.render(s, Rt);
    }
}
function qt(_lodMax) {
    let sizeLods = [];
    let lodMeshes = [];
    let r = _lodMax;
    let i = _lodMax - Pt + 1 + Ft;
    for(let e = 0; e < i; e++){
        let e = 2 ** r;
        sizeLods.push(e);
        let i = 1 / (e - 2);
        let a = -i;
        let o = 1 + i;
        let s = [
            a,
            a,
            o,
            a,
            o,
            o,
            a,
            a,
            o,
            o,
            a,
            o
        ];
        let c = new Float32Array(108);
        let l = new Float32Array(108);
        for(let e = 0; e < 6; e++){
            let t = e % 3 * 2 / 3 - 1;
            let n = e > 2 ? 0 : -1;
            let r = [
                t,
                n,
                0,
                t + 2 / 3,
                n,
                0,
                t + 2 / 3,
                n + 1,
                0,
                t,
                n,
                0,
                t + 2 / 3,
                n + 1,
                0,
                t,
                n + 1,
                0
            ];
            c.set(r, 18 * e);
            for(let t = 0; t < 6; t++){
                let n = s[t * 2] * 2 - 1;
                let r = s[t * 2 + 1] * 2 - 1;
                switch(e){
                    case 0:
                        Gt.set(1, r, n);
                        break;
                    case 1:
                        Gt.set(-n, 1, -r);
                        break;
                    case 2:
                        Gt.set(-n, r, 1);
                        break;
                    case 3:
                        Gt.set(-1, r, -n);
                        break;
                    case 4:
                        Gt.set(-n, -1, r);
                        break;
                    default:
                        Gt.set(n, r, -1);
                }
                Gt.toArray(l, (e * 6 + t) * 3);
            }
        }
        let u = new I;
        u.setAttribute(`position`, new F(c, 3));
        u.setAttribute(`outputDirection`, new F(l, 3));
        lodMeshes.push(new vt(u, null));
        if (r > Pt) {
            r--;
        }
    }
    return {
        lodMeshes,
        sizeLods
    };
}
function Jt(e, t, n) {
    let r = new Zn_1(e, t, n);
    r.texture.mapping = 306;
    r.texture.name = `PMREM.cubeUv`;
    r.scissorTest = true;
    return r;
}
function Yt(e, t, n, r, i) {
    e.viewport.set(t, n, r, i);
    e.scissor.set(t, n, r, i);
}
function Xt(_lodMax, t, n) {
    return new Mn_1({
        name: `PMREMGGXConvolution`,
        defines: {
            GGX_SAMPLES,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / n,
            CUBEUV_MAX_MIP: `${_lodMax}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            roughness: {
                value: 0
            },
            mipInt: {
                value: 0
            }
        },
        vertexShader: en(),
        fragmentShader: `

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
		`,
        blending: 0,
        depthTest: false,
        depthWrite: false
    });
}
function Zt(_lodMax, t, n) {
    return new Mn_1({
        name: `SphericalGaussianBlur`,
        defines: {
            SAMPLES,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / n,
            CUBEUV_MAX_MIP: `${_lodMax}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            sigma: {
                value: 0
            },
            mipInt: {
                value: 0
            }
        },
        vertexShader: en(),
        fragmentShader: `

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
		`,
        blending: 0,
        depthTest: false,
        depthWrite: false
    });
}
function Qt() {
    return new Mn_1({
        name: `EquirectangularToCubeUV`,
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: en(),
        fragmentShader: `

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
		`,
        blending: 0,
        depthTest: false,
        depthWrite: false
    });
}
function $t() {
    return new Mn_1({
        name: `CubemapToCubeUV`,
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: en(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: 0,
        depthTest: false,
        depthWrite: false
    });
}
function en() {
    return `

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
class tn extends Zn_1 {
    constructor(e = 1, t = {}){
        super(e, e, t);
        this.isWebGLCubeRenderTarget = true;
        let n = {
            width: e,
            height: e,
            depth: 1
        };
        let r = [
            n,
            n,
            n,
            n,
            n,
            n
        ];
        this.texture = new W(r);
        this._setTextureOptions(t);
        this.texture.isRenderTargetTexture = true;
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type;
        this.texture.colorSpace = t.colorSpace;
        this.texture.generateMipmaps = t.generateMipmaps;
        this.texture.minFilter = t.minFilter;
        this.texture.magFilter = t.magFilter;
        let n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        };
        let i = new P(5, 5, 5);
        let a = new Mn_1({
            name: `CubemapFromEquirect`,
            uniforms: $n_1(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: 1,
            blending: 0
        });
        a.uniforms.tEquirect.value = t;
        let o = new vt(i, a);
        let t_minFilter = t.minFilter;
        if (t.minFilter === 1008) {
            t.minFilter = dt;
        }
        new H(1, 10, this).update(e, o);
        t.minFilter = t_minFilter;
        o.geometry.dispose();
        o.material.dispose();
        return this;
    }
    clear(e, t = true, n = true, r = true) {
        let i = e.getRenderTarget();
        for(let i = 0; i < 6; i++){
            e.setRenderTarget(this, i);
            e.clear(t, n, r);
        }
        e.setRenderTarget(i);
    }
}
function nn(e) {
    let t = new WeakMap;
    let n = new WeakMap;
    let r = null;
    function i(e, t = false) {
        if (e == null) {
            return null;
        }
        if (t) {
            return o(e);
        }
        return a(e);
    }
    function a(n) {
        if (n && n.isTexture) {
            let r = n.mapping;
            if (r === 303 || r === 304) {
                if (t.has(n)) {
                    let e = t.get(n).texture;
                    return s(e, n.mapping);
                }
                {
                    let r = n.image;
                    if (r && r.height > 0) {
                        let i = new tn(r.height);
                        i.fromEquirectangularTexture(e, n);
                        t.set(n, i);
                        n.addEventListener(`dispose`, l);
                        return s(i.texture, n.mapping);
                    }
                    return null;
                }
            }
        }
        return n;
    }
    function o(t) {
        if (t && t.isTexture) {
            let i = t.mapping;
            let a = i === 303 || i === 304;
            let o = i === 301 || i === 302;
            if (a || o) {
                let i = n.get(t);
                let s = i === undefined ? 0 : i.texture.pmremVersion;
                if (t.isRenderTargetTexture && t.pmremVersion !== s) {
                    if (r === null) {
                        r = new Kt(e);
                    }
                    i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i);
                    i.texture.pmremVersion = t.pmremVersion;
                    n.set(t, i);
                    return i.texture;
                }
                if (i !== undefined) {
                    return i.texture;
                }
                {
                    let s = t.image;
                    if (a && s && s.height > 0 || o && s && c(s)) {
                        if (r === null) {
                            r = new Kt(e);
                        }
                        i = a ? r.fromEquirectangular(t) : r.fromCubemap(t);
                        i.texture.pmremVersion = t.pmremVersion;
                        n.set(t, i);
                        t.addEventListener(`dispose`, u);
                        return i.texture;
                    }
                    return null;
                }
            }
        }
        return t;
    }
    function s(e, mapping) {
        if (mapping === 303) {
            e.mapping = 301;
        } else if (mapping === 304) {
            e.mapping = 302;
        }
        return e;
    }
    function c(e) {
        let t = 0;
        for(let n = 0; n < 6; n++){
            if (e[n] !== undefined) {
                t++;
            }
        }
        return t === 6;
    }
    function l({ target }) {
        target.removeEventListener(`dispose`, l);
        let r = t.get(target);
        if (r !== undefined) {
            t.delete(target);
            r.dispose();
        }
    }
    function u({ target }) {
        target.removeEventListener(`dispose`, u);
        let r = n.get(target);
        if (r !== undefined) {
            n.delete(target);
            r.dispose();
        }
    }
    function d() {
        t = new WeakMap;
        n = new WeakMap;
        if (r !== null) {
            r.dispose();
            r = null;
        }
    }
    return {
        get: i,
        dispose: d
    };
}
function rn(e) {
    let t = {};
    function n(n) {
        if (t[n] !== undefined) {
            return t[n];
        }
        let r = e.getExtension(n);
        t[n] = r;
        return r;
    }
    return {
        has: function(e) {
            return n(e) !== null;
        },
        init: function() {
            n(`EXT_color_buffer_float`);
            n(`WEBGL_clip_cull_distance`);
            n(`OES_texture_float_linear`);
            n(`EXT_color_buffer_half_float`);
            n(`WEBGL_multisampled_render_to_texture`);
            n(`WEBGL_render_shared_exponent`);
        },
        get: function(e) {
            let t = n(e);
            if (t === null) {
                lr_1(`WebGLRenderer: ` + e + ` extension not supported.`);
            }
            return t;
        }
    };
}
function an(e, t, n, r) {
    let i = {};
    let a = new WeakMap;
    function o({ target }) {
        if (target.index !== null) {
            t.remove(target.index);
        }
        for(let e in target.attributes){
            t.remove(target.attributes[e]);
        }
        target.removeEventListener(`dispose`, o);
        delete i[target.id];
        let c = a.get(target);
        if (c) {
            t.remove(c);
            a.delete(target);
        }
        r.releaseStatesOfGeometry(target);
        if (target.isInstancedBufferGeometry === true) {
            delete target._maxInstanceCount;
        }
        n.memory.geometries--;
    }
    function s(e, t) {
        if (i[t.id] !== true) {
            t.addEventListener(`dispose`, o);
            i[t.id] = true;
            n.memory.geometries++;
        }
        return t;
    }
    function c({ attributes }) {
        for(let n in attributes){
            t.update(attributes[n], e.ARRAY_BUFFER);
        }
    }
    function l(e) {
        let n = [];
        let e_index = e.index;
        let position = e.attributes.position;
        let o = 0;
        if (position === undefined) {
            return;
        }
        if (e_index !== null) {
            let e = e_index.array;
            o = e_index.version;
            for(let t = 0, r = e.length; t < r; t += 3){
                let r = e[t + 0];
                let i = e[t + 1];
                let a = e[t + 2];
                n.push(r, i, i, a, a, r);
            }
        } else {
            let e = position.array;
            o = position.version;
            for(let t = 0, r = e.length / 3 - 1; t < r; t += 3){
                let e = t + 0;
                let r = t + 1;
                let i = t + 2;
                n.push(e, r, r, i, i, e);
            }
        }
        let s = new (position.count >= 65535 ? Ln_1 : In_1)(n, 1);
        s.version = o;
        let c = a.get(e);
        if (c) {
            t.remove(c);
        }
        a.set(e, s);
    }
    function getWireframeAttribute(e) {
        let t = a.get(e);
        if (t) {
            let n = e.index;
            if (n !== null && t.version < n.version) {
                l(e);
            }
        } else {
            l(e);
        }
        return a.get(e);
    }
    return {
        get: s,
        update: c,
        getWireframeAttribute
    };
}
function on(e, t, n) {
    let r;
    function i(e) {
        r = e;
    }
    let a;
    let o;
    function s(e) {
        a = e.type;
        o = e.bytesPerElement;
    }
    function c(t, i) {
        e.drawElements(r, i, a, t * o);
        n.update(i, r, 1);
    }
    function l(t, i, s) {
        if (s !== 0) {
            e.drawElementsInstanced(r, i, a, t * o, s);
            n.update(i, r, s);
        }
    }
    function u(e, i, o) {
        if (o === 0) {
            return;
        }
        t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
        let s = 0;
        for(let e = 0; e < o; e++){
            s += i[e];
        }
        n.update(s, r, 1);
    }
    this.setMode = i;
    this.setIndex = s;
    this.render = c;
    this.renderInstances = l;
    this.renderMultiDraw = u;
}
function sn(e) {
    let memory = {
        geometries: 0,
        textures: 0
    };
    let render = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function r(t, r, i) {
        render.calls++;
        switch(r){
            case e.TRIANGLES:
                render.triangles += t / 3 * i;
                break;
            case e.LINES:
                render.lines += t / 2 * i;
                break;
            case e.LINE_STRIP:
                render.lines += i * (t - 1);
                break;
            case e.LINE_LOOP:
                render.lines += i * t;
                break;
            case e.POINTS:
                render.points += i * t;
                break;
            default:
                nr_1(`WebGLInfo: Unknown draw mode:`, r);
        }
    }
    function i() {
        render.calls = 0;
        render.triangles = 0;
        render.points = 0;
        render.lines = 0;
    }
    return {
        memory,
        render,
        programs: null,
        autoReset: true,
        reset: i,
        update: r
    };
}
function cn(e, t, n) {
    let r = new WeakMap;
    let i = new Yn_1;
    function a(a, o, s) {
        let a_morphTargetInfluences = a.morphTargetInfluences;
        let l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color;
        let count = l === undefined ? 0 : l.length;
        let d = r.get(o);
        if (d === undefined || d.count !== count) {
            if (d !== undefined) {
                d.texture.dispose();
            }
            let e = o.morphAttributes.position !== undefined;
            let n = o.morphAttributes.normal !== undefined;
            let a = o.morphAttributes.color !== undefined;
            let s = o.morphAttributes.position || [];
            let c = o.morphAttributes.normal || [];
            let l = o.morphAttributes.color || [];
            let f = 0;
            if (e === true) {
                f = 1;
            }
            if (n === true) {
                f = 2;
            }
            if (a === true) {
                f = 3;
            }
            let p = o.attributes.position.count * f;
            let m = 1;
            if (p > t.maxTextureSize) {
                m = Math.ceil(p / t.maxTextureSize);
                p = t.maxTextureSize;
            }
            let h = new Float32Array(p * m * 4 * count);
            let texture = new K(h, p, m, count);
            texture.type = nt;
            texture.needsUpdate = true;
            let _ = f * 4;
            for(let t = 0; t < count; t++){
                let r = s[t];
                let o = c[t];
                let u = l[t];
                let d = p * m * 4 * t;
                for(let t = 0; t < r.count; t++){
                    let s = t * _;
                    if (e === true) {
                        i.fromBufferAttribute(r, t);
                        h[d + s + 0] = i.x;
                        h[d + s + 1] = i.y;
                        h[d + s + 2] = i.z;
                        h[d + s + 3] = 0;
                    }
                    if (n === true) {
                        i.fromBufferAttribute(o, t);
                        h[d + s + 4] = i.x;
                        h[d + s + 5] = i.y;
                        h[d + s + 6] = i.z;
                        h[d + s + 7] = 0;
                    }
                    if (a === true) {
                        i.fromBufferAttribute(u, t);
                        h[d + s + 8] = i.x;
                        h[d + s + 9] = i.y;
                        h[d + s + 10] = i.z;
                        h[d + s + 11] = u.itemSize === 4 ? i.w : 1;
                    }
                }
            }
            d = {
                count,
                texture,
                size: new qn_1(p, m)
            };
            r.set(o, d);
            function v() {
                texture.dispose();
                r.delete(o);
                o.removeEventListener(`dispose`, v);
            }
            o.addEventListener(`dispose`, v);
        }
        if (a.isInstancedMesh === true && a.morphTexture !== null) {
            s.getUniforms().setValue(e, `morphTexture`, a.morphTexture, n);
        } else {
            let t = 0;
            for(let e = 0; e < a_morphTargetInfluences.length; e++){
                t += a_morphTargetInfluences[e];
            }
            let n = o.morphTargetsRelative ? 1 : 1 - t;
            s.getUniforms().setValue(e, `morphTargetBaseInfluence`, n);
            s.getUniforms().setValue(e, `morphTargetInfluences`, a_morphTargetInfluences);
        }
        s.getUniforms().setValue(e, `morphTargetsTexture`, d.texture, n);
        s.getUniforms().setValue(e, `morphTargetsTextureSize`, d.size);
    }
    return {
        update: a
    };
}
function ln(e, t, n, r, i) {
    let a = new WeakMap;
    function o(r) {
        let frame = i.render.frame;
        let r_geometry = r.geometry;
        let l = t.get(r, r_geometry);
        if (a.get(l) !== frame) {
            t.update(l);
            a.set(l, frame);
        }
        if (r.isInstancedMesh) {
            if (r.hasEventListener(`dispose`, c) === false) {
                r.addEventListener(`dispose`, c);
            }
            if (a.get(r) !== frame) {
                n.update(r.instanceMatrix, e.ARRAY_BUFFER);
                if (r.instanceColor !== null) {
                    n.update(r.instanceColor, e.ARRAY_BUFFER);
                }
                a.set(r, frame);
            }
        }
        if (r.isSkinnedMesh) {
            let e = r.skeleton;
            if (a.get(e) !== frame) {
                e.update();
                a.set(e, frame);
            }
        }
        return l;
    }
    function s() {
        a = new WeakMap;
    }
    function c({ target }) {
        target.removeEventListener(`dispose`, c);
        r.releaseStatesOfObject(target);
        n.remove(target.instanceMatrix);
        if (target.instanceColor !== null) {
            n.remove(target.instanceColor);
        }
    }
    return {
        update: o,
        dispose: s
    };
}
const un = {
    1: `LINEAR_TONE_MAPPING`,
    2: `REINHARD_TONE_MAPPING`,
    3: `CINEON_TONE_MAPPING`,
    4: `ACES_FILMIC_TONE_MAPPING`,
    6: `AGX_TONE_MAPPING`,
    7: `NEUTRAL_TONE_MAPPING`,
    5: `CUSTOM_TONE_MAPPING`
};
function dn(type, t, n, r, depthBuffer, stencilBuffer) {
    let o = new Zn_1(t, n, {
        type,
        depthBuffer,
        stencilBuffer,
        samples: r ? 4 : 0,
        storeMultisampledDepthBuffer: false,
        storeMultisampledStencilBuffer: false,
        resolveDepthBuffer: false,
        resolveStencilBuffer: false
    });
    let s = null;
    let c = null;
    let l = new I;
    l.setAttribute(`position`, new tt([
        -1,
        3,
        0,
        -1,
        -1,
        0,
        3,
        -1,
        0
    ], 3));
    l.setAttribute(`uv`, new tt([
        0,
        2,
        0,
        0,
        2,
        0
    ], 2));
    let u = new vn_1({
        uniforms: {
            tDiffuse: {
                value: null
            }
        },
        vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
        fragmentShader: `
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
			}`,
        depthTest: false,
        depthWrite: false
    });
    let d = new vt(l, u);
    let f = new kt_1(-1, 1, 1, -1, 0, 1);
    let p = null;
    let m = null;
    let h = false;
    let g;
    let _ = null;
    let v = [];
    let y = false;
    this.setSize = function(e, t) {
        o.setSize(e, t);
        if (s !== null) {
            s.setSize(e, t);
        }
        if (c !== null) {
            c.setSize(e, t);
        }
        for (const r of v){
            if (r.setSize) {
                r.setSize(e, t);
            }
        }
    };
    this.setEffects = function(e) {
        v = e;
        y = v.length > 0 && v[0].isRenderPass === true;
        let o_width = o.width;
        let o_height = o.height;
        if (v.length > 0 && s === null) {
            s = new Zn_1(o_width, o_height, {
                type: ot_1,
                depthBuffer: false,
                stencilBuffer: false
            });
            c = new Zn_1(o_width, o_height, {
                type: ot_1,
                depthBuffer: false,
                stencilBuffer: false
            });
        }
        for (const r of v){
            if (r.setSize) {
                r.setSize(o_width, o_height);
            }
        }
    };
    this.begin = function(e, t) {
        if (h || e.toneMapping === 0 && v.length === 0) {
            return false;
        }
        _ = t;
        if (t !== null) {
            let e = t.width;
            let n = t.height;
            if (o.width !== e || o.height !== n) {
                this.setSize(e, n);
            }
        }
        if (y === false) {
            e.setRenderTarget(o);
        }
        g = e.toneMapping;
        e.toneMapping = 0;
        return true;
    };
    this.hasRenderPass = function() {
        return y;
    };
    this.end = function(e, t) {
        e.toneMapping = g;
        h = true;
        let n = o;
        let r = s;
        for (const a of v){
            if (a.enabled !== false) {
                a.render(e, r, n, t);
                if (a.needsSwap !== false) {
                    n = r;
                    r = r === s ? c : s;
                }
            }
        }
        if (p !== e.outputColorSpace || m !== e.toneMapping) {
            p = e.outputColorSpace;
            m = e.toneMapping;
            u.defines = {};
            if (V_1.getTransfer(p) === `srgb`) {
                u.defines.SRGB_TRANSFER = ``;
            }
            let t = un[m];
            if (t) {
                u.defines[t] = ``;
            }
            u.needsUpdate = true;
        }
        u.uniforms.tDiffuse.value = n.texture;
        e.setRenderTarget(_);
        e.render(d, f);
        _ = null;
        h = false;
    };
    this.isCompositing = function() {
        return h;
    };
    this.dispose = function() {
        o.dispose();
        if (s !== null) {
            s.dispose();
        }
        if (c !== null) {
            c.dispose();
        }
        l.dispose();
        u.dispose();
    };
}
var fn = new Fn_1;
const pn = new X_1(1, 1);
const mn = new K;
const hn = new G;
const gn = new W;
const _n = [];
const vn = [];
const yn = new Float32Array(16);
const bn = new Float32Array(9);
const xn = new Float32Array(4);
function Sn(e, size, n) {
    let r = e[0];
    if (r <= 0 || r > 0) {
        return e;
    }
    let i = size * n;
    let a = _n[i];
    if (a === undefined) {
        a = new Float32Array(i);
        _n[i] = a;
    }
    if (size !== 0) {
        r.toArray(a, 0);
        for(let r = 1, i = 0; r !== size; ++r){
            i += n;
            e[r].toArray(a, i);
        }
    }
    return a;
}
function Cn(cache, t) {
    if (cache.length !== t.length) {
        return false;
    }
    for(let n = 0, r = cache.length; n < r; n++){
        if (cache[n] !== t[n]) {
            return false;
        }
    }
    return true;
}
function wn(cache, t) {
    for(let n = 0, r = t.length; n < r; n++){
        cache[n] = t[n];
    }
}
function Tn(e, t) {
    let n = vn[t];
    if (n === undefined) {
        n = new Int32Array(t);
        vn[t] = n;
    }
    for(let r = 0; r !== t; ++r){
        n[r] = e.allocateTextureUnit();
    }
    return n;
}
function En(e, t) {
    let cache = this.cache;
    if (cache[0] !== t) {
        e.uniform1f(this.addr, t);
        cache[0] = t;
    }
}
function Dn(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y) {
            e.uniform2f(this.addr, t.x, t.y);
            cache[0] = t.x;
            cache[1] = t.y;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform2fv(this.addr, t);
        wn(cache, t);
    }
}
function On(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y || cache[2] !== t.z) {
            e.uniform3f(this.addr, t.x, t.y, t.z);
            cache[0] = t.x;
            cache[1] = t.y;
            cache[2] = t.z;
        }
    } else if (t.r !== undefined) {
        if (cache[0] !== t.r || cache[1] !== t.g || cache[2] !== t.b) {
            e.uniform3f(this.addr, t.r, t.g, t.b);
            cache[0] = t.r;
            cache[1] = t.g;
            cache[2] = t.b;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform3fv(this.addr, t);
        wn(cache, t);
    }
}
function kn(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y || cache[2] !== t.z || cache[3] !== t.w) {
            e.uniform4f(this.addr, t.x, t.y, t.z, t.w);
            cache[0] = t.x;
            cache[1] = t.y;
            cache[2] = t.z;
            cache[3] = t.w;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform4fv(this.addr, t);
        wn(cache, t);
    }
}
function An(e, t) {
    let cache = this.cache;
    let t_elements = t.elements;
    if (t_elements === undefined) {
        if (Cn(cache, t)) {
            return;
        }
        e.uniformMatrix2fv(this.addr, false, t);
        wn(cache, t);
    } else {
        if (Cn(cache, t_elements)) {
            return;
        }
        xn.set(t_elements);
        e.uniformMatrix2fv(this.addr, false, xn);
        wn(cache, t_elements);
    }
}
function jn(e, t) {
    let cache = this.cache;
    let t_elements = t.elements;
    if (t_elements === undefined) {
        if (Cn(cache, t)) {
            return;
        }
        e.uniformMatrix3fv(this.addr, false, t);
        wn(cache, t);
    } else {
        if (Cn(cache, t_elements)) {
            return;
        }
        bn.set(t_elements);
        e.uniformMatrix3fv(this.addr, false, bn);
        wn(cache, t_elements);
    }
}
function Mn(e, t) {
    let cache = this.cache;
    let t_elements = t.elements;
    if (t_elements === undefined) {
        if (Cn(cache, t)) {
            return;
        }
        e.uniformMatrix4fv(this.addr, false, t);
        wn(cache, t);
    } else {
        if (Cn(cache, t_elements)) {
            return;
        }
        yn.set(t_elements);
        e.uniformMatrix4fv(this.addr, false, yn);
        wn(cache, t_elements);
    }
}
function Nn(e, t) {
    let cache = this.cache;
    if (cache[0] !== t) {
        e.uniform1i(this.addr, t);
        cache[0] = t;
    }
}
function Pn(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y) {
            e.uniform2i(this.addr, t.x, t.y);
            cache[0] = t.x;
            cache[1] = t.y;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform2iv(this.addr, t);
        wn(cache, t);
    }
}
function Fn(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y || cache[2] !== t.z) {
            e.uniform3i(this.addr, t.x, t.y, t.z);
            cache[0] = t.x;
            cache[1] = t.y;
            cache[2] = t.z;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform3iv(this.addr, t);
        wn(cache, t);
    }
}
function In(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y || cache[2] !== t.z || cache[3] !== t.w) {
            e.uniform4i(this.addr, t.x, t.y, t.z, t.w);
            cache[0] = t.x;
            cache[1] = t.y;
            cache[2] = t.z;
            cache[3] = t.w;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform4iv(this.addr, t);
        wn(cache, t);
    }
}
function Ln(e, t) {
    let cache = this.cache;
    if (cache[0] !== t) {
        e.uniform1ui(this.addr, t);
        cache[0] = t;
    }
}
function Rn(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y) {
            e.uniform2ui(this.addr, t.x, t.y);
            cache[0] = t.x;
            cache[1] = t.y;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform2uiv(this.addr, t);
        wn(cache, t);
    }
}
function zn(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y || cache[2] !== t.z) {
            e.uniform3ui(this.addr, t.x, t.y, t.z);
            cache[0] = t.x;
            cache[1] = t.y;
            cache[2] = t.z;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform3uiv(this.addr, t);
        wn(cache, t);
    }
}
function Bn(e, t) {
    let cache = this.cache;
    if (t.x !== undefined) {
        if (cache[0] !== t.x || cache[1] !== t.y || cache[2] !== t.z || cache[3] !== t.w) {
            e.uniform4ui(this.addr, t.x, t.y, t.z, t.w);
            cache[0] = t.x;
            cache[1] = t.y;
            cache[2] = t.z;
            cache[3] = t.w;
        }
    } else {
        if (Cn(cache, t)) {
            return;
        }
        e.uniform4uiv(this.addr, t);
        wn(cache, t);
    }
}
function Vn(e, t, n) {
    let cache = this.cache;
    let i = n.allocateTextureUnit();
    if (cache[0] !== i) {
        e.uniform1i(this.addr, i);
        cache[0] = i;
    }
    let a;
    if (this.type === e.SAMPLER_2D_SHADOW) {
        pn.compareFunction = n.isReversedDepthBuffer() ? 518 : 515;
        a = pn;
    } else {
        a = fn;
    }
    n.setTexture2D(t || a, i);
}
function Hn(e, t, n) {
    let cache = this.cache;
    let i = n.allocateTextureUnit();
    if (cache[0] !== i) {
        e.uniform1i(this.addr, i);
        cache[0] = i;
    }
    n.setTexture3D(t || hn, i);
}
function Un(e, t, n) {
    let cache = this.cache;
    let i = n.allocateTextureUnit();
    if (cache[0] !== i) {
        e.uniform1i(this.addr, i);
        cache[0] = i;
    }
    n.setTextureCube(t || gn, i);
}
function Wn(e, t, n) {
    let cache = this.cache;
    let i = n.allocateTextureUnit();
    if (cache[0] !== i) {
        e.uniform1i(this.addr, i);
        cache[0] = i;
    }
    n.setTexture2DArray(t || mn, i);
}
function Gn(type) {
    switch(type){
        case 5126:
            return En;
        case 35664:
            return Dn;
        case 35665:
            return On;
        case 35666:
            return kn;
        case 35674:
            return An;
        case 35675:
            return jn;
        case 35676:
            return Mn;
        case 5124:
        case 35670:
            return Nn;
        case 35667:
        case 35671:
            return Pn;
        case 35668:
        case 35672:
            return Fn;
        case 35669:
        case 35673:
            return In;
        case 5125:
            return Ln;
        case 36294:
            return Rn;
        case 36295:
            return zn;
        case 36296:
            return Bn;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return Vn;
        case 35679:
        case 36299:
        case 36307:
            return Hn;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Un;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return Wn;
    }
}
function Kn(e, t) {
    e.uniform1fv(this.addr, t);
}
function qn(e, t) {
    let n = Sn(t, this.size, 2);
    e.uniform2fv(this.addr, n);
}
function Jn(e, t) {
    let n = Sn(t, this.size, 3);
    e.uniform3fv(this.addr, n);
}
function Yn(e, t) {
    let n = Sn(t, this.size, 4);
    e.uniform4fv(this.addr, n);
}
function Xn(e, t) {
    let n = Sn(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, false, n);
}
function Zn(e, t) {
    let n = Sn(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, false, n);
}
function Qn(e, t) {
    let n = Sn(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, false, n);
}
function $n(e, t) {
    e.uniform1iv(this.addr, t);
}
function er(e, t) {
    e.uniform2iv(this.addr, t);
}
function tr(e, t) {
    e.uniform3iv(this.addr, t);
}
function nr(e, t) {
    e.uniform4iv(this.addr, t);
}
function rr(e, t) {
    e.uniform1uiv(this.addr, t);
}
function ir(e, t) {
    e.uniform2uiv(this.addr, t);
}
function ar(e, t) {
    e.uniform3uiv(this.addr, t);
}
function or(e, t) {
    e.uniform4uiv(this.addr, t);
}
function sr(e, t, n) {
    let cache = this.cache;
    let t_length = t.length;
    let a = Tn(n, t_length);
    if (!Cn(cache, a)) {
        e.uniform1iv(this.addr, a);
        wn(cache, a);
    }
    let o;
    o = this.type === e.SAMPLER_2D_SHADOW ? pn : fn;
    for(let e = 0; e !== t_length; ++e){
        n.setTexture2D(t[e] || o, a[e]);
    }
}
function cr(e, t, n) {
    let cache = this.cache;
    let t_length = t.length;
    let a = Tn(n, t_length);
    if (!Cn(cache, a)) {
        e.uniform1iv(this.addr, a);
        wn(cache, a);
    }
    for(let e = 0; e !== t_length; ++e){
        n.setTexture3D(t[e] || hn, a[e]);
    }
}
function lr(e, t, n) {
    let cache = this.cache;
    let t_length = t.length;
    let a = Tn(n, t_length);
    if (!Cn(cache, a)) {
        e.uniform1iv(this.addr, a);
        wn(cache, a);
    }
    for(let e = 0; e !== t_length; ++e){
        n.setTextureCube(t[e] || gn, a[e]);
    }
}
function ur(e, t, n) {
    let cache = this.cache;
    let t_length = t.length;
    let a = Tn(n, t_length);
    if (!Cn(cache, a)) {
        e.uniform1iv(this.addr, a);
        wn(cache, a);
    }
    for(let e = 0; e !== t_length; ++e){
        n.setTexture2DArray(t[e] || mn, a[e]);
    }
}
function dr(type) {
    switch(type){
        case 5126:
            return Kn;
        case 35664:
            return qn;
        case 35665:
            return Jn;
        case 35666:
            return Yn;
        case 35674:
            return Xn;
        case 35675:
            return Zn;
        case 35676:
            return Qn;
        case 5124:
        case 35670:
            return $n;
        case 35667:
        case 35671:
            return er;
        case 35668:
        case 35672:
            return tr;
        case 35669:
        case 35673:
            return nr;
        case 5125:
            return rr;
        case 36294:
            return ir;
        case 36295:
            return ar;
        case 36296:
            return or;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return sr;
        case 35679:
        case 36299:
        case 36307:
            return cr;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return lr;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return ur;
    }
}
class fr {
    constructor(e, t, n){
        this.id = e;
        this.addr = n;
        this.cache = [];
        this.type = t.type;
        this.setValue = Gn(t.type);
    }
}
class pr {
    constructor(e, t, n){
        this.id = e;
        this.addr = n;
        this.cache = [];
        this.type = t.type;
        this.size = t.size;
        this.setValue = dr(t.type);
    }
}
class mr {
    constructor(e){
        this.id = e;
        this.seq = [];
        this.map = {};
    }
    setValue(e, t, n) {
        let seq = this.seq;
        for(let i = 0, a = seq.length; i !== a; ++i){
            let a = seq[i];
            a.setValue(e, t[a.id], n);
        }
    }
}
const hr = /(\w+)(\])?(\[|\.)?/g;
function gr(e, t) {
    e.seq.push(t);
    e.map[t.id] = t;
}
function _r(e, t, n) {
    let e_name = e.name;
    let r_length = e_name.length;
    for(hr.lastIndex = 0;;){
        let a = hr.exec(e_name);
        let o = hr.lastIndex;
        let s = a[1];
        let c = a[2] === `]`;
        let l = a[3];
        if (c) {
            s |= 0;
        }
        if (l === undefined || l === `[` && o + 2 === r_length) {
            gr(n, l === undefined ? new fr(s, e, t) : new pr(s, e, t));
            break;
        }
        {
            let e = n.map[s];
            if (e === undefined) {
                e = new mr(s);
                gr(n, e);
            }
            n = e;
        }
    }
}
class vr {
    constructor(e, t){
        this.seq = [];
        this.map = {};
        let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for(let r = 0; r < n; ++r){
            let n = e.getActiveUniform(t, r);
            _r(n, e.getUniformLocation(t, n.name), this);
        }
        let r = [];
        let i = [];
        for (let t of this.seq){
            if (t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW) {
                r.push(t);
            } else {
                i.push(t);
            }
        }
        if (r.length > 0) {
            this.seq = r.concat(i);
        }
    }
    setValue(e, t, n, r) {
        let i = this.map[t];
        if (i !== undefined) {
            i.setValue(e, n, r);
        }
    }
    setOptional(e, t, n) {
        let r = t[n];
        if (r !== undefined) {
            this.setValue(e, n, r);
        }
    }
    static upload(e, t, n, r) {
        for(let i = 0, a = t.length; i !== a; ++i){
            let a = t[i];
            let o = n[a.id];
            if (o.needsUpdate !== false) {
                a.setValue(e, o.value, r);
            }
        }
    }
    static seqWithValue(e, t) {
        let n = [];
        for(let r = 0, i = e.length; r !== i; ++r){
            let i = e[r];
            if (i.id in t) {
                n.push(i);
            }
        }
        return n;
    }
}
function yr(e, t, n) {
    let r = e.createShader(t);
    e.shaderSource(r, n);
    e.compileShader(r);
    return r;
}
const br = 37297;
var xr = 0;
function Sr(e, t) {
    let n = e.split(`
`);
    let r = [];
    let i = Math.max(t - 6, 0);
    let a = Math.min(t + 6, n.length);
    for(let e = i; e < a; e++){
        let i = e + 1;
        r.push(`${i === t ? `>` : ` `} ${i}: ${n[e]}`);
    }
    return r.join(`
`);
}
const Cr = new gt;
function wr(outputColorSpace) {
    V_1._getMatrix(Cr, V_1.workingColorSpace, outputColorSpace);
    let t = `mat3( ${Cr.elements.map((e)=>e.toFixed(4))} )`;
    switch(V_1.getTransfer(outputColorSpace)){
        case ht:
            return [
                t,
                `LinearTransferOETF`
            ];
        case An_1:
            return [
                t,
                `sRGBTransferOETF`
            ];
        default:
            cr_1(`WebGLProgram: Unsupported color space: `, outputColorSpace);
            return [
                t,
                `LinearTransferOETF`
            ];
    }
}
function Tr(e, t, n) {
    let r = e.getShaderParameter(t, e.COMPILE_STATUS);
    let i = (e.getShaderInfoLog(t) || ``).trim();
    if (r && i === ``) {
        return ``;
    }
    let a = /ERROR: 0:(\d+)/.exec(i);
    if (a) {
        let r = parseInt(a[1]);
        return n.toUpperCase() + `

` + i + `

` + Sr(e.getShaderSource(t), r);
    }
    return i;
}
function Er(e, outputColorSpace) {
    let n = wr(outputColorSpace);
    return [
        `vec4 ${e}( vec4 value ) {`,
        `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
        `}`
    ].join(`
`);
}
const Dr = {
    1: `Linear`,
    2: `Reinhard`,
    3: `Cineon`,
    4: `ACESFilmic`,
    6: `AgX`,
    7: `Neutral`,
    5: `Custom`
};
function Or(e, toneMapping) {
    let n = Dr[toneMapping];
    if (n === undefined) {
        cr_1(`WebGLProgram: Unsupported toneMapping:`, toneMapping);
        return `vec3 ` + e + `( vec3 color ) { return LinearToneMapping( color ); }`;
    }
    return `vec3 ` + e + `( vec3 color ) { return ` + n + `ToneMapping( color ); }`;
}
const kr = new Jn_1;
function Ar() {
    V_1.getLuminanceCoefficients(kr);
    return [
        `float luminance( const in vec3 rgb ) {`,
        `	const vec3 weights = vec3( ${kr.x.toFixed(4)}, ${kr.y.toFixed(4)}, ${kr.z.toFixed(4)} );`,
        `	return dot( weights, rgb );`,
        `}`
    ].join(`
`);
}
function jr(e) {
    return [
        e.extensionClipCullDistance ? `#extension GL_ANGLE_clip_cull_distance : require` : ``,
        e.extensionMultiDraw ? `#extension GL_ANGLE_multi_draw : require` : ``
    ].filter(Pr).join(`
`);
}
function Mr(e) {
    let t = [];
    for(let n in e){
        let r = e[n];
        if (r !== false) {
            t.push(`#define ` + n + ` ` + r);
        }
    }
    return t.join(`
`);
}
function Nr(e, t) {
    let n = {};
    let r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
    for(let i = 0; i < r; i++){
        let r = e.getActiveAttrib(t, i);
        let a = r.name;
        let locationSize = 1;
        if (r.type === e.FLOAT_MAT2) {
            locationSize = 2;
        }
        if (r.type === e.FLOAT_MAT3) {
            locationSize = 3;
        }
        if (r.type === e.FLOAT_MAT4) {
            locationSize = 4;
        }
        n[a] = {
            type: r.type,
            location: e.getAttribLocation(t, a),
            locationSize
        };
    }
    return n;
}
function Pr(e) {
    return e !== ``;
}
function Fr(e, t) {
    let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ir(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Lr = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Rr(e) {
    return e.replace(Lr, Br);
}
const zr = new Map;
function Br(e, t) {
    let n = Y[t];
    if (n === undefined) {
        let e = zr.get(t);
        if (e !== undefined) {
            n = Y[e];
            cr_1(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`, t, e);
        } else {
            throw Error(`THREE.WebGLProgram: Can not resolve #include <` + t + `>`);
        }
    }
    return Rr(n);
}
const Vr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Hr(e) {
    return e.replace(Vr, Ur);
}
function Ur(e, t, n, r) {
    let i = ``;
    for(let e = parseInt(t); e < parseInt(n); e++){
        i += r.replace(/\[\s*i\s*\]/g, `[ ` + e + ` ]`).replace(/UNROLLED_LOOP_INDEX/g, e);
    }
    return i;
}
function Wr(e) {
    let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
    if (e.precision === `highp`) {
        t += `
#define HIGH_PRECISION`;
    } else if (e.precision === `mediump`) {
        t += `
#define MEDIUM_PRECISION`;
    } else if (e.precision === `lowp`) {
        t += `
#define LOW_PRECISION`;
    }
    return t;
}
const Gr = {
    1: `SHADOWMAP_TYPE_PCF`,
    3: `SHADOWMAP_TYPE_VSM`
};
function Kr(e) {
    return Gr[e.shadowMapType] || `SHADOWMAP_TYPE_BASIC`;
}
const qr = {
    301: `ENVMAP_TYPE_CUBE`,
    302: `ENVMAP_TYPE_CUBE`,
    306: `ENVMAP_TYPE_CUBE_UV`
};
function Jr(e) {
    if (e.envMap === false) {
        return `ENVMAP_TYPE_CUBE`;
    }
    return qr[e.envMapMode] || `ENVMAP_TYPE_CUBE`;
}
const Yr = {
    302: `ENVMAP_MODE_REFRACTION`
};
function Xr(e) {
    if (e.envMap === false) {
        return `ENVMAP_MODE_REFLECTION`;
    }
    return Yr[e.envMapMode] || `ENVMAP_MODE_REFLECTION`;
}
const Zr = {
    0: `ENVMAP_BLENDING_MULTIPLY`,
    1: `ENVMAP_BLENDING_MIX`,
    2: `ENVMAP_BLENDING_ADD`
};
function Qr(e) {
    if (e.envMap === false) {
        return `ENVMAP_BLENDING_NONE`;
    }
    return Zr[e.combine] || `ENVMAP_BLENDING_NONE`;
}
function $r({ envMapCubeUVHeight }) {
    if (envMapCubeUVHeight === null) {
        return null;
    }
    let maxMip = Math.log2(envMapCubeUVHeight) - 2;
    let texelHeight = 1 / envMapCubeUVHeight;
    return {
        texelWidth: 1 / (3 * Math.max(2 ** maxMip, 112)),
        texelHeight,
        maxMip
    };
}
function ei(e, t, n, r) {
    let i = e.getContext();
    let n_defines = n.defines;
    let n_vertexShader = n.vertexShader;
    let n_fragmentShader = n.fragmentShader;
    let c = Kr(n);
    let l = Jr(n);
    let u = Xr(n);
    let d = Qr(n);
    let f = $r(n);
    let p = jr(n);
    let m = Mr(n_defines);
    let h = i.createProgram();
    let g;
    let _;
    let v = n.glslVersion ? `#version ` + n.glslVersion + `
` : ``;
    if (n.isRawShaderMaterial) {
        g = [
            `#define SHADER_TYPE ` + n.shaderType,
            `#define SHADER_NAME ` + n.shaderName,
            m
        ].filter(Pr).join(`
`);
        if (g.length > 0) {
            g += `
`;
        }
        _ = [
            `#define SHADER_TYPE ` + n.shaderType,
            `#define SHADER_NAME ` + n.shaderName,
            m
        ].filter(Pr).join(`
`);
        if (_.length > 0) {
            _ += `
`;
        }
    } else {
        g = [
            Wr(n),
            `#define SHADER_TYPE ` + n.shaderType,
            `#define SHADER_NAME ` + n.shaderName,
            m,
            n.extensionClipCullDistance ? `#define USE_CLIP_DISTANCE` : ``,
            n.batching ? `#define USE_BATCHING` : ``,
            n.batchingColor ? `#define USE_BATCHING_COLOR` : ``,
            n.instancing ? `#define USE_INSTANCING` : ``,
            n.instancingColor ? `#define USE_INSTANCING_COLOR` : ``,
            n.instancingMorph ? `#define USE_INSTANCING_MORPH` : ``,
            n.useFog && n.fog ? `#define USE_FOG` : ``,
            n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``,
            n.map ? `#define USE_MAP` : ``,
            n.envMap ? `#define USE_ENVMAP` : ``,
            n.envMap ? `#define ` + u : ``,
            n.lightMap ? `#define USE_LIGHTMAP` : ``,
            n.aoMap ? `#define USE_AOMAP` : ``,
            n.bumpMap ? `#define USE_BUMPMAP` : ``,
            n.normalMap ? `#define USE_NORMALMAP` : ``,
            n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``,
            n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``,
            n.displacementMap ? `#define USE_DISPLACEMENTMAP` : ``,
            n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``,
            n.anisotropy ? `#define USE_ANISOTROPY` : ``,
            n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``,
            n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``,
            n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``,
            n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``,
            n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``,
            n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``,
            n.specularMap ? `#define USE_SPECULARMAP` : ``,
            n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``,
            n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``,
            n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``,
            n.metalnessMap ? `#define USE_METALNESSMAP` : ``,
            n.alphaMap ? `#define USE_ALPHAMAP` : ``,
            n.alphaHash ? `#define USE_ALPHAHASH` : ``,
            n.transmission ? `#define USE_TRANSMISSION` : ``,
            n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``,
            n.thicknessMap ? `#define USE_THICKNESSMAP` : ``,
            n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``,
            n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``,
            n.mapUv ? `#define MAP_UV ` + n.mapUv : ``,
            n.alphaMapUv ? `#define ALPHAMAP_UV ` + n.alphaMapUv : ``,
            n.lightMapUv ? `#define LIGHTMAP_UV ` + n.lightMapUv : ``,
            n.aoMapUv ? `#define AOMAP_UV ` + n.aoMapUv : ``,
            n.emissiveMapUv ? `#define EMISSIVEMAP_UV ` + n.emissiveMapUv : ``,
            n.bumpMapUv ? `#define BUMPMAP_UV ` + n.bumpMapUv : ``,
            n.normalMapUv ? `#define NORMALMAP_UV ` + n.normalMapUv : ``,
            n.displacementMapUv ? `#define DISPLACEMENTMAP_UV ` + n.displacementMapUv : ``,
            n.metalnessMapUv ? `#define METALNESSMAP_UV ` + n.metalnessMapUv : ``,
            n.roughnessMapUv ? `#define ROUGHNESSMAP_UV ` + n.roughnessMapUv : ``,
            n.anisotropyMapUv ? `#define ANISOTROPYMAP_UV ` + n.anisotropyMapUv : ``,
            n.clearcoatMapUv ? `#define CLEARCOATMAP_UV ` + n.clearcoatMapUv : ``,
            n.clearcoatNormalMapUv ? `#define CLEARCOAT_NORMALMAP_UV ` + n.clearcoatNormalMapUv : ``,
            n.clearcoatRoughnessMapUv ? `#define CLEARCOAT_ROUGHNESSMAP_UV ` + n.clearcoatRoughnessMapUv : ``,
            n.iridescenceMapUv ? `#define IRIDESCENCEMAP_UV ` + n.iridescenceMapUv : ``,
            n.iridescenceThicknessMapUv ? `#define IRIDESCENCE_THICKNESSMAP_UV ` + n.iridescenceThicknessMapUv : ``,
            n.sheenColorMapUv ? `#define SHEEN_COLORMAP_UV ` + n.sheenColorMapUv : ``,
            n.sheenRoughnessMapUv ? `#define SHEEN_ROUGHNESSMAP_UV ` + n.sheenRoughnessMapUv : ``,
            n.specularMapUv ? `#define SPECULARMAP_UV ` + n.specularMapUv : ``,
            n.specularColorMapUv ? `#define SPECULAR_COLORMAP_UV ` + n.specularColorMapUv : ``,
            n.specularIntensityMapUv ? `#define SPECULAR_INTENSITYMAP_UV ` + n.specularIntensityMapUv : ``,
            n.transmissionMapUv ? `#define TRANSMISSIONMAP_UV ` + n.transmissionMapUv : ``,
            n.thicknessMapUv ? `#define THICKNESSMAP_UV ` + n.thicknessMapUv : ``,
            n.vertexTangents && n.flatShading === false ? `#define USE_TANGENT` : ``,
            n.vertexNormals ? `#define HAS_NORMAL` : ``,
            n.vertexColors ? `#define USE_COLOR` : ``,
            n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``,
            n.vertexUv1s ? `#define USE_UV1` : ``,
            n.vertexUv2s ? `#define USE_UV2` : ``,
            n.vertexUv3s ? `#define USE_UV3` : ``,
            n.pointsUvs ? `#define USE_POINTS_UV` : ``,
            n.flatShading ? `#define FLAT_SHADED` : ``,
            n.skinning ? `#define USE_SKINNING` : ``,
            n.morphTargets ? `#define USE_MORPHTARGETS` : ``,
            n.morphNormals && n.flatShading === false ? `#define USE_MORPHNORMALS` : ``,
            n.morphColors ? `#define USE_MORPHCOLORS` : ``,
            n.morphTargetsCount > 0 ? `#define MORPHTARGETS_TEXTURE_STRIDE ` + n.morphTextureStride : ``,
            n.morphTargetsCount > 0 ? `#define MORPHTARGETS_COUNT ` + n.morphTargetsCount : ``,
            n.doubleSided ? `#define DOUBLE_SIDED` : ``,
            n.flipSided ? `#define FLIP_SIDED` : ``,
            n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``,
            n.shadowMapEnabled ? `#define ` + c : ``,
            n.sizeAttenuation ? `#define USE_SIZEATTENUATION` : ``,
            n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``,
            n.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``,
            n.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``,
            `uniform mat4 modelMatrix;`,
            `uniform mat4 modelViewMatrix;`,
            `uniform mat4 projectionMatrix;`,
            `uniform mat4 viewMatrix;`,
            `uniform mat3 normalMatrix;`,
            `uniform vec3 cameraPosition;`,
            `uniform bool isOrthographic;`,
            `#ifdef USE_INSTANCING`,
            `	attribute mat4 instanceMatrix;`,
            `#endif`,
            `#ifdef USE_INSTANCING_COLOR`,
            `	attribute vec3 instanceColor;`,
            `#endif`,
            `#ifdef USE_INSTANCING_MORPH`,
            `	uniform sampler2D morphTexture;`,
            `#endif`,
            `attribute vec3 position;`,
            `attribute vec3 normal;`,
            `attribute vec2 uv;`,
            `#ifdef USE_UV1`,
            `	attribute vec2 uv1;`,
            `#endif`,
            `#ifdef USE_UV2`,
            `	attribute vec2 uv2;`,
            `#endif`,
            `#ifdef USE_UV3`,
            `	attribute vec2 uv3;`,
            `#endif`,
            `#ifdef USE_TANGENT`,
            `	attribute vec4 tangent;`,
            `#endif`,
            `#if defined( USE_COLOR_ALPHA )`,
            `	attribute vec4 color;`,
            `#elif defined( USE_COLOR )`,
            `	attribute vec3 color;`,
            `#endif`,
            `#ifdef USE_SKINNING`,
            `	attribute vec4 skinIndex;`,
            `	attribute vec4 skinWeight;`,
            `#endif`,
            `
`
        ].filter(Pr).join(`
`);
        _ = [
            Wr(n),
            `#define SHADER_TYPE ` + n.shaderType,
            `#define SHADER_NAME ` + n.shaderName,
            m,
            n.useFog && n.fog ? `#define USE_FOG` : ``,
            n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``,
            n.alphaToCoverage ? `#define ALPHA_TO_COVERAGE` : ``,
            n.map ? `#define USE_MAP` : ``,
            n.matcap ? `#define USE_MATCAP` : ``,
            n.envMap ? `#define USE_ENVMAP` : ``,
            n.envMap ? `#define ` + l : ``,
            n.envMap ? `#define ` + u : ``,
            n.envMap ? `#define ` + d : ``,
            f ? `#define CUBEUV_TEXEL_WIDTH ` + f.texelWidth : ``,
            f ? `#define CUBEUV_TEXEL_HEIGHT ` + f.texelHeight : ``,
            f ? `#define CUBEUV_MAX_MIP ` + f.maxMip + `.0` : ``,
            n.lightMap ? `#define USE_LIGHTMAP` : ``,
            n.aoMap ? `#define USE_AOMAP` : ``,
            n.bumpMap ? `#define USE_BUMPMAP` : ``,
            n.normalMap ? `#define USE_NORMALMAP` : ``,
            n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``,
            n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``,
            n.packedNormalMap ? `#define USE_PACKED_NORMALMAP` : ``,
            n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``,
            n.anisotropy ? `#define USE_ANISOTROPY` : ``,
            n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``,
            n.clearcoat ? `#define USE_CLEARCOAT` : ``,
            n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``,
            n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``,
            n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``,
            n.dispersion ? `#define USE_DISPERSION` : ``,
            n.retroreflection ? `#define USE_RETROREFLECTION` : ``,
            n.iridescence ? `#define USE_IRIDESCENCE` : ``,
            n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``,
            n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``,
            n.specularMap ? `#define USE_SPECULARMAP` : ``,
            n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``,
            n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``,
            n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``,
            n.metalnessMap ? `#define USE_METALNESSMAP` : ``,
            n.alphaMap ? `#define USE_ALPHAMAP` : ``,
            n.alphaTest ? `#define USE_ALPHATEST` : ``,
            n.alphaHash ? `#define USE_ALPHAHASH` : ``,
            n.sheen ? `#define USE_SHEEN` : ``,
            n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``,
            n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``,
            n.transmission ? `#define USE_TRANSMISSION` : ``,
            n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``,
            n.thicknessMap ? `#define USE_THICKNESSMAP` : ``,
            n.vertexTangents && n.flatShading === false ? `#define USE_TANGENT` : ``,
            n.vertexColors || n.instancingColor ? `#define USE_COLOR` : ``,
            n.vertexAlphas || n.batchingColor ? `#define USE_COLOR_ALPHA` : ``,
            n.vertexUv1s ? `#define USE_UV1` : ``,
            n.vertexUv2s ? `#define USE_UV2` : ``,
            n.vertexUv3s ? `#define USE_UV3` : ``,
            n.pointsUvs ? `#define USE_POINTS_UV` : ``,
            n.gradientMap ? `#define USE_GRADIENTMAP` : ``,
            n.flatShading ? `#define FLAT_SHADED` : ``,
            n.doubleSided ? `#define DOUBLE_SIDED` : ``,
            n.flipSided ? `#define FLIP_SIDED` : ``,
            n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``,
            n.shadowMapEnabled ? `#define ` + c : ``,
            n.premultipliedAlpha ? `#define PREMULTIPLIED_ALPHA` : ``,
            n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``,
            n.numLightProbeGrids > 0 ? `#define USE_LIGHT_PROBES_GRID` : ``,
            n.decodeVideoTexture ? `#define DECODE_VIDEO_TEXTURE` : ``,
            n.decodeVideoTextureEmissive ? `#define DECODE_VIDEO_TEXTURE_EMISSIVE` : ``,
            n.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``,
            n.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``,
            `uniform mat4 viewMatrix;`,
            `uniform vec3 cameraPosition;`,
            `uniform bool isOrthographic;`,
            n.toneMapping === 0 ? `` : `#define TONE_MAPPING`,
            n.toneMapping === 0 ? `` : Y.tonemapping_pars_fragment,
            n.toneMapping === 0 ? `` : Or(`toneMapping`, n.toneMapping),
            n.dithering ? `#define DITHERING` : ``,
            n.opaque ? `#define OPAQUE` : ``,
            Y.colorspace_pars_fragment,
            Er(`linearToOutputTexel`, n.outputColorSpace),
            Ar(),
            n.useDepthPacking ? `#define DEPTH_PACKING ` + n.depthPacking : ``,
            `
`
        ].filter(Pr).join(`
`);
    }
    n_vertexShader = Rr(n_vertexShader);
    n_vertexShader = Fr(n_vertexShader, n);
    n_vertexShader = Ir(n_vertexShader, n);
    n_fragmentShader = Rr(n_fragmentShader);
    n_fragmentShader = Fr(n_fragmentShader, n);
    n_fragmentShader = Ir(n_fragmentShader, n);
    n_vertexShader = Hr(n_vertexShader);
    n_fragmentShader = Hr(n_fragmentShader);
    if (n.isRawShaderMaterial !== true) {
        v = `#version 300 es
`;
        g = [
            p,
            `#define attribute in`,
            `#define varying out`,
            `#define texture2D texture`
        ].join(`
`) + `
` + g;
        _ = [
            `#define varying in`,
            n.glslVersion === `300 es` ? `` : `layout(location = 0) out highp vec4 pc_fragColor;`,
            n.glslVersion === `300 es` ? `` : `#define gl_FragColor pc_fragColor`,
            `#define gl_FragDepthEXT gl_FragDepth`,
            `#define texture2D texture`,
            `#define textureCube texture`,
            `#define texture2DProj textureProj`,
            `#define texture2DLodEXT textureLod`,
            `#define texture2DProjLodEXT textureProjLod`,
            `#define textureCubeLodEXT textureLod`,
            `#define texture2DGradEXT textureGrad`,
            `#define texture2DProjGradEXT textureProjGrad`,
            `#define textureCubeGradEXT textureGrad`
        ].join(`
`) + `
` + _;
    }
    let y = v + g + n_vertexShader;
    let b = v + _ + n_fragmentShader;
    let x = yr(i, i.VERTEX_SHADER, y);
    let S = yr(i, i.FRAGMENT_SHADER, b);
    i.attachShader(h, x);
    i.attachShader(h, S);
    if (n.index0AttributeName === undefined) {
        if (n.hasPositionAttribute === true) {
            i.bindAttribLocation(h, 0, `position`);
        }
    } else {
        i.bindAttribLocation(h, 0, n.index0AttributeName);
    }
    i.linkProgram(h);
    function C(t) {
        if (e.debug.checkShaderErrors) {
            let n = i.getProgramInfoLog(h) || ``;
            let r = i.getShaderInfoLog(x) || ``;
            let a = i.getShaderInfoLog(S) || ``;
            let programLog = n.trim();
            let s = r.trim();
            let c = a.trim();
            let runnable = true;
            let u = true;
            if (i.getProgramParameter(h, i.LINK_STATUS) === false) {
                runnable = false;
                if (typeof e.debug.onShaderError == `function`) {
                    e.debug.onShaderError(i, h, x, S);
                } else {
                    let e = Tr(i, x, `vertex`);
                    let n = Tr(i, S, `fragment`);
                    nr_1(`WebGLProgram: Shader Error ` + i.getError() + ` - VALIDATE_STATUS ` + i.getProgramParameter(h, i.VALIDATE_STATUS) + `

Material Name: ` + t.name + `
Material Type: ` + t.type + `

Program Info Log: ` + programLog + `
` + e + `
` + n);
                }
            } else {
                if (programLog === ``) {
                    if (s === `` || c === ``) {
                        u = false;
                    }
                } else {
                    cr_1(`WebGLProgram: Program Info Log:`, programLog);
                }
            }
            if (u) {
                t.diagnostics = {
                    runnable,
                    programLog,
                    vertexShader: {
                        log: s,
                        prefix: g
                    },
                    fragmentShader: {
                        log: c,
                        prefix: _
                    }
                };
            }
        }
        i.deleteShader(x);
        i.deleteShader(S);
        w = new vr(i, h);
        T = Nr(i, h);
    }
    let w;
    this.getUniforms = function() {
        if (w === undefined) {
            C(this);
        }
        return w;
    };
    let T;
    this.getAttributes = function() {
        if (T === undefined) {
            C(this);
        }
        return T;
    };
    let E = n.rendererExtensionParallelShaderCompile === false;
    this.isReady = function() {
        if (E === false) {
            E = i.getProgramParameter(h, br);
        }
        return E;
    };
    this.destroy = function() {
        r.releaseStatesOfProgram(this);
        i.deleteProgram(h);
        this.program = undefined;
    };
    this.type = n.shaderType;
    this.name = n.shaderName;
    this.id = xr++;
    this.cacheKey = t;
    this.usedTimes = 1;
    this.program = h;
    this.vertexShader = x;
    this.fragmentShader = S;
    return this;
}
let ti = 0;
class ni {
    constructor(){
        this.shaderCache = new Map;
        this.materialCache = new Map;
    }
    update(e, t, n) {
        let r = this._getShaderCacheForMaterial(e);
        if (r.has(t) === false) {
            r.add(t);
            t.usedTimes++;
        }
        if (r.has(n) === false) {
            r.add(n);
            n.usedTimes++;
        }
        return this;
    }
    remove(e) {
        let t = this.materialCache.get(e);
        for (let e of t){
            e.usedTimes--;
            if (e.usedTimes === 0) {
                this.shaderCache.delete(e.code);
            }
        }
        this.materialCache.delete(e);
        return this;
    }
    getVertexShaderStage(e) {
        return this._getShaderStage(e.vertexShader);
    }
    getFragmentShaderStage(e) {
        return this._getShaderStage(e.fragmentShader);
    }
    dispose() {
        this.shaderCache.clear();
        this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
        let materialCache = this.materialCache;
        let n = materialCache.get(e);
        if (n === undefined) {
            n = new Set;
            materialCache.set(e, n);
        }
        return n;
    }
    _getShaderStage(e) {
        let shaderCache = this.shaderCache;
        let n = shaderCache.get(e);
        if (n === undefined) {
            n = new ri(e);
            shaderCache.set(e, n);
        }
        return n;
    }
}
var ri = class {
    constructor(e){
        this.id = ti++;
        this.code = e;
        this.usedTimes = 0;
    }
};
function ii(format) {
    return format === 1030 || format === 37490 || format === 36285;
}
function ai(e, t, n, r, i, a) {
    let o = new ut;
    let s = new ni;
    let c = new Set;
    let programs = [];
    let u = new Map;
    let r_logarithmicDepthBuffer = r.logarithmicDepthBuffer;
    let r_precision = r.precision;
    let p = {
        MeshDepthMaterial: `depth`,
        MeshDistanceMaterial: `distance`,
        MeshNormalMaterial: `normal`,
        MeshBasicMaterial: `basic`,
        MeshLambertMaterial: `lambert`,
        MeshPhongMaterial: `phong`,
        MeshToonMaterial: `toon`,
        MeshStandardMaterial: `physical`,
        MeshPhysicalMaterial: `physical`,
        MeshMatcapMaterial: `matcap`,
        LineBasicMaterial: `basic`,
        LineDashedMaterial: `dashed`,
        PointsMaterial: `points`,
        ShadowMaterial: `shadow`,
        SpriteMaterial: `sprite`
    };
    function m(channel) {
        c.add(channel);
        if (channel === 0) {
            return `uv`;
        }
        return `uv${channel}`;
    }
    function getParameters(i, o, l, u, h, g) {
        let u_fog = u.fog;
        let h_geometry = h.geometry;
        let y = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null;
        let b = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap;
        let x = t.get(i.envMap || y, b);
        let envMapCubeUVHeight = x && x.mapping === 306 ? x.image.height : null;
        let shaderID = p[i.type];
        if (i.precision !== null) {
            r_precision = r.getMaxPrecision(i.precision);
            if (r_precision !== i.precision) {
                cr_1(`WebGLProgram.getParameters:`, i.precision, `not supported, using`, r_precision, `instead.`);
            }
        }
        let w = h_geometry.morphAttributes.position || h_geometry.morphAttributes.normal || h_geometry.morphAttributes.color;
        let morphTargetsCount = w === undefined ? 0 : w.length;
        let morphTextureStride = 0;
        if (h_geometry.morphAttributes.position !== undefined) {
            morphTextureStride = 1;
        }
        if (h_geometry.morphAttributes.normal !== undefined) {
            morphTextureStride = 2;
        }
        if (h_geometry.morphAttributes.color !== undefined) {
            morphTextureStride = 3;
        }
        let D;
        let O;
        let customVertexShaderID;
        let customFragmentShaderID;
        if (shaderID) {
            let e = Tt[shaderID];
            D = e.vertexShader;
            O = e.fragmentShader;
        } else {
            D = i.vertexShader;
            O = i.fragmentShader;
            let e = s.getVertexShaderStage(i);
            let t = s.getFragmentShaderStage(i);
            s.update(i, e, t);
            customVertexShaderID = e.id;
            customFragmentShaderID = t.id;
        }
        let A = e.getRenderTarget();
        let reversedDepthBuffer = e.state.buffers.depth.getReversed();
        let instancing = h.isInstancedMesh === true;
        let batching = h.isBatchedMesh === true;
        let ne = !!i.map;
        let matcap = !!i.matcap;
        let envMap = !!x;
        let P = !!i.aoMap;
        let ie = !!i.lightMap;
        let ae = !!i.bumpMap && i.wireframe === false;
        let oe = !!i.normalMap;
        let se = !!i.displacementMap;
        let ce = !!i.emissiveMap;
        let le = !!i.metalnessMap;
        let ue = !!i.roughnessMap;
        let F = i.anisotropy > 0;
        let I = i.clearcoat > 0;
        let dispersion = i.dispersion > 0;
        let retroreflection = i.retroreflectivity > 0;
        let R = i.iridescence > 0;
        let pe = i.sheen > 0;
        let me = i.transmission > 0;
        let he = F && !!i.anisotropyMap;
        let ge = I && !!i.clearcoatMap;
        let _e = I && !!i.clearcoatNormalMap;
        let ve = I && !!i.clearcoatRoughnessMap;
        let ye = R && !!i.iridescenceMap;
        let be = R && !!i.iridescenceThicknessMap;
        let xe = pe && !!i.sheenColorMap;
        let Se = pe && !!i.sheenRoughnessMap;
        let Ce = !!i.specularMap;
        let we = !!i.specularColorMap;
        let Te = !!i.specularIntensityMap;
        let z = me && !!i.transmissionMap;
        let Ee = me && !!i.thicknessMap;
        let gradientMap = !!i.gradientMap;
        let Oe = !!i.alphaMap;
        let alphaTest = i.alphaTest > 0;
        let alphaHash = !!i.alphaHash;
        let je = !!i.extensions;
        let toneMapping = 0;
        if (i.toneMapped && (A === null || A.isXRRenderTarget === true)) {
            toneMapping = e.toneMapping;
        }
        let Ne = {
            shaderID,
            shaderType: i.type,
            shaderName: i.name,
            vertexShader: D,
            fragmentShader: O,
            defines: i.defines,
            customVertexShaderID,
            customFragmentShaderID,
            isRawShaderMaterial: i.isRawShaderMaterial === true,
            glslVersion: i.glslVersion,
            precision: r_precision,
            batching,
            batchingColor: batching && h._colorsTexture !== null,
            instancing,
            instancingColor: instancing && h.instanceColor !== null,
            instancingMorph: instancing && h.morphTexture !== null,
            outputColorSpace: A === null ? e.outputColorSpace : A.isXRRenderTarget === true ? A.texture.colorSpace : V_1.workingColorSpace,
            alphaToCoverage: !!i.alphaToCoverage,
            map: ne,
            matcap,
            envMap,
            envMapMode: envMap && x.mapping,
            envMapCubeUVHeight,
            aoMap: P,
            lightMap: ie,
            bumpMap: ae,
            normalMap: oe,
            displacementMap: se,
            emissiveMap: ce,
            normalMapObjectSpace: oe && i.normalMapType === 1,
            normalMapTangentSpace: oe && i.normalMapType === 0,
            packedNormalMap: oe && i.normalMapType === 0 && ii(i.normalMap.format),
            metalnessMap: le,
            roughnessMap: ue,
            anisotropy: F,
            anisotropyMap: he,
            clearcoat: I,
            clearcoatMap: ge,
            clearcoatNormalMap: _e,
            clearcoatRoughnessMap: ve,
            dispersion,
            retroreflection,
            iridescence: R,
            iridescenceMap: ye,
            iridescenceThicknessMap: be,
            sheen: pe,
            sheenColorMap: xe,
            sheenRoughnessMap: Se,
            specularMap: Ce,
            specularColorMap: we,
            specularIntensityMap: Te,
            transmission: me,
            transmissionMap: z,
            thicknessMap: Ee,
            gradientMap,
            opaque: i.transparent === false && i.blending === 1 && i.alphaToCoverage === false,
            alphaMap: Oe,
            alphaTest,
            alphaHash,
            combine: i.combine,
            mapUv: ne && m(i.map.channel),
            aoMapUv: P && m(i.aoMap.channel),
            lightMapUv: ie && m(i.lightMap.channel),
            bumpMapUv: ae && m(i.bumpMap.channel),
            normalMapUv: oe && m(i.normalMap.channel),
            displacementMapUv: se && m(i.displacementMap.channel),
            emissiveMapUv: ce && m(i.emissiveMap.channel),
            metalnessMapUv: le && m(i.metalnessMap.channel),
            roughnessMapUv: ue && m(i.roughnessMap.channel),
            anisotropyMapUv: he && m(i.anisotropyMap.channel),
            clearcoatMapUv: ge && m(i.clearcoatMap.channel),
            clearcoatNormalMapUv: _e && m(i.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: ve && m(i.clearcoatRoughnessMap.channel),
            iridescenceMapUv: ye && m(i.iridescenceMap.channel),
            iridescenceThicknessMapUv: be && m(i.iridescenceThicknessMap.channel),
            sheenColorMapUv: xe && m(i.sheenColorMap.channel),
            sheenRoughnessMapUv: Se && m(i.sheenRoughnessMap.channel),
            specularMapUv: Ce && m(i.specularMap.channel),
            specularColorMapUv: we && m(i.specularColorMap.channel),
            specularIntensityMapUv: Te && m(i.specularIntensityMap.channel),
            transmissionMapUv: z && m(i.transmissionMap.channel),
            thicknessMapUv: Ee && m(i.thicknessMap.channel),
            alphaMapUv: Oe && m(i.alphaMap.channel),
            vertexTangents: !!h_geometry.attributes.tangent && (oe || F),
            vertexNormals: !!h_geometry.attributes.normal,
            vertexColors: i.vertexColors,
            vertexAlphas: i.vertexColors === true && !!h_geometry.attributes.color && h_geometry.attributes.color.itemSize === 4,
            pointsUvs: h.isPoints === true && !!h_geometry.attributes.uv && (ne || Oe),
            fog: !!u_fog,
            useFog: i.fog === true,
            fogExp2: !!u_fog && u_fog.isFogExp2,
            flatShading: i.wireframe === false && (i.flatShading === true || h_geometry.attributes.normal === undefined && oe === false && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
            sizeAttenuation: i.sizeAttenuation === true,
            logarithmicDepthBuffer: r_logarithmicDepthBuffer,
            reversedDepthBuffer,
            skinning: h.isSkinnedMesh === true,
            hasPositionAttribute: h_geometry.attributes.position !== undefined,
            morphTargets: h_geometry.morphAttributes.position !== undefined,
            morphNormals: h_geometry.morphAttributes.normal !== undefined,
            morphColors: h_geometry.morphAttributes.color !== undefined,
            morphTargetsCount,
            morphTextureStride,
            numSunLights: o.sun.length,
            numDirLights: o.directional.length,
            numPointLights: o.point.length,
            numSpotLights: o.spot.length,
            numSpotLightMaps: o.spotLightMap.length,
            numRectAreaLights: o.rectArea.length,
            numHemiLights: o.hemi.length,
            numSunLightShadows: o.sunShadowMap.length,
            numDirLightShadows: o.directionalShadowMap.length,
            numPointLightShadows: o.pointShadowMap.length,
            numSpotLightShadows: o.spotShadowMap.length,
            numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
            numLightProbes: o.numLightProbes,
            numLightProbeGrids: g.length,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            dithering: i.dithering,
            shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
            shadowMapType: e.shadowMap.type,
            toneMapping,
            decodeVideoTexture: ne && i.map.isVideoTexture === true && V_1.getTransfer(i.map.colorSpace) === `srgb`,
            decodeVideoTextureEmissive: ce && i.emissiveMap.isVideoTexture === true && V_1.getTransfer(i.emissiveMap.colorSpace) === `srgb`,
            premultipliedAlpha: i.premultipliedAlpha,
            doubleSided: i.side === 2,
            flipSided: i.side === 1,
            useDepthPacking: i.depthPacking >= 0,
            depthPacking: i.depthPacking || 0,
            index0AttributeName: i.index0AttributeName,
            extensionClipCullDistance: je && i.extensions.clipCullDistance === true && n.has(`WEBGL_clip_cull_distance`),
            extensionMultiDraw: (je && i.extensions.multiDraw === true || batching) && n.has(`WEBGL_multi_draw`),
            rendererExtensionParallelShaderCompile: n.has(`KHR_parallel_shader_compile`),
            customProgramCacheKey: i.customProgramCacheKey()
        };
        Ne.vertexUv1s = c.has(1);
        Ne.vertexUv2s = c.has(2);
        Ne.vertexUv3s = c.has(3);
        c.clear();
        return Ne;
    }
    function getProgramCacheKey(t) {
        let n = [];
        if (t.shaderID) {
            n.push(t.shaderID);
        } else {
            n.push(t.customVertexShaderID);
            n.push(t.customFragmentShaderID);
        }
        if (t.defines !== undefined) {
            for(let e in t.defines){
                n.push(e);
                n.push(t.defines[e]);
            }
        }
        if (t.isRawShaderMaterial === false) {
            _(n, t);
            v(n, t);
            n.push(e.outputColorSpace);
        }
        n.push(t.customProgramCacheKey);
        return n.join();
    }
    function _(e, t) {
        e.push(t.precision);
        e.push(t.outputColorSpace);
        e.push(t.envMapMode);
        e.push(t.envMapCubeUVHeight);
        e.push(t.mapUv);
        e.push(t.alphaMapUv);
        e.push(t.lightMapUv);
        e.push(t.aoMapUv);
        e.push(t.bumpMapUv);
        e.push(t.normalMapUv);
        e.push(t.displacementMapUv);
        e.push(t.emissiveMapUv);
        e.push(t.metalnessMapUv);
        e.push(t.roughnessMapUv);
        e.push(t.anisotropyMapUv);
        e.push(t.clearcoatMapUv);
        e.push(t.clearcoatNormalMapUv);
        e.push(t.clearcoatRoughnessMapUv);
        e.push(t.iridescenceMapUv);
        e.push(t.iridescenceThicknessMapUv);
        e.push(t.sheenColorMapUv);
        e.push(t.sheenRoughnessMapUv);
        e.push(t.specularMapUv);
        e.push(t.specularColorMapUv);
        e.push(t.specularIntensityMapUv);
        e.push(t.transmissionMapUv);
        e.push(t.thicknessMapUv);
        e.push(t.combine);
        e.push(t.fogExp2);
        e.push(t.sizeAttenuation);
        e.push(t.morphTargetsCount);
        e.push(t.morphAttributeCount);
        e.push(t.numSunLights);
        e.push(t.numDirLights);
        e.push(t.numPointLights);
        e.push(t.numSpotLights);
        e.push(t.numSpotLightMaps);
        e.push(t.numHemiLights);
        e.push(t.numRectAreaLights);
        e.push(t.numSunLightShadows);
        e.push(t.numDirLightShadows);
        e.push(t.numPointLightShadows);
        e.push(t.numSpotLightShadows);
        e.push(t.numSpotLightShadowsWithMaps);
        e.push(t.numLightProbes);
        e.push(t.shadowMapType);
        e.push(t.toneMapping);
        e.push(t.numClippingPlanes);
        e.push(t.numClipIntersection);
        e.push(t.depthPacking);
    }
    function v(e, t) {
        o.disableAll();
        if (t.instancing) {
            o.enable(0);
        }
        if (t.instancingColor) {
            o.enable(1);
        }
        if (t.instancingMorph) {
            o.enable(2);
        }
        if (t.matcap) {
            o.enable(3);
        }
        if (t.envMap) {
            o.enable(4);
        }
        if (t.normalMapObjectSpace) {
            o.enable(5);
        }
        if (t.normalMapTangentSpace) {
            o.enable(6);
        }
        if (t.clearcoat) {
            o.enable(7);
        }
        if (t.iridescence) {
            o.enable(8);
        }
        if (t.alphaTest) {
            o.enable(9);
        }
        if (t.vertexColors) {
            o.enable(10);
        }
        if (t.vertexAlphas) {
            o.enable(11);
        }
        if (t.vertexUv1s) {
            o.enable(12);
        }
        if (t.vertexUv2s) {
            o.enable(13);
        }
        if (t.vertexUv3s) {
            o.enable(14);
        }
        if (t.vertexTangents) {
            o.enable(15);
        }
        if (t.anisotropy) {
            o.enable(16);
        }
        if (t.alphaHash) {
            o.enable(17);
        }
        if (t.batching) {
            o.enable(18);
        }
        if (t.dispersion) {
            o.enable(19);
        }
        if (t.retroreflection) {
            o.enable(24);
        }
        if (t.batchingColor) {
            o.enable(20);
        }
        if (t.gradientMap) {
            o.enable(21);
        }
        if (t.packedNormalMap) {
            o.enable(22);
        }
        if (t.vertexNormals) {
            o.enable(23);
        }
        e.push(o.mask);
        o.disableAll();
        if (t.fog) {
            o.enable(0);
        }
        if (t.useFog) {
            o.enable(1);
        }
        if (t.flatShading) {
            o.enable(2);
        }
        if (t.logarithmicDepthBuffer) {
            o.enable(3);
        }
        if (t.reversedDepthBuffer) {
            o.enable(4);
        }
        if (t.skinning) {
            o.enable(5);
        }
        if (t.morphTargets) {
            o.enable(6);
        }
        if (t.morphNormals) {
            o.enable(7);
        }
        if (t.morphColors) {
            o.enable(8);
        }
        if (t.premultipliedAlpha) {
            o.enable(9);
        }
        if (t.shadowMapEnabled) {
            o.enable(10);
        }
        if (t.doubleSided) {
            o.enable(11);
        }
        if (t.flipSided) {
            o.enable(12);
        }
        if (t.useDepthPacking) {
            o.enable(13);
        }
        if (t.dithering) {
            o.enable(14);
        }
        if (t.transmission) {
            o.enable(15);
        }
        if (t.sheen) {
            o.enable(16);
        }
        if (t.opaque) {
            o.enable(17);
        }
        if (t.pointsUvs) {
            o.enable(18);
        }
        if (t.decodeVideoTexture) {
            o.enable(19);
        }
        if (t.decodeVideoTextureEmissive) {
            o.enable(20);
        }
        if (t.alphaToCoverage) {
            o.enable(21);
        }
        if (t.numLightProbeGrids > 0) {
            o.enable(22);
        }
        if (t.hasPositionAttribute) {
            o.enable(23);
        }
        e.push(o.mask);
    }
    function getUniforms(e) {
        let t = p[e.type];
        let n;
        if (t) {
            let e = Tt[t];
            n = Rn_1.clone(e.uniforms);
        } else {
            n = e.uniforms;
        }
        return n;
    }
    function acquireProgram(t, n) {
        let r = u.get(n);
        if (r === undefined) {
            r = new ei(e, n, t, i);
            programs.push(r);
            u.set(n, r);
        } else {
            ++r.usedTimes;
        }
        return r;
    }
    function releaseProgram(e) {
        if (--e.usedTimes === 0) {
            let t = programs.indexOf(e);
            programs[t] = programs[programs.length - 1];
            programs.pop();
            u.delete(e.cacheKey);
            e.destroy();
        }
    }
    function releaseShaderCache(e) {
        s.remove(e);
    }
    function C() {
        s.dispose();
    }
    return {
        getParameters,
        getProgramCacheKey,
        getUniforms,
        acquireProgram,
        releaseProgram,
        releaseShaderCache,
        programs,
        dispose: C
    };
}
function oi() {
    let e = new WeakMap;
    function has(t) {
        return e.has(t);
    }
    function n(t) {
        let n = e.get(t);
        if (n === undefined) {
            n = {};
            e.set(t, n);
        }
        return n;
    }
    function r(t) {
        e.delete(t);
    }
    function i(t, n, r) {
        e.get(t)[n] = r;
    }
    function a() {
        e = new WeakMap;
    }
    return {
        has,
        get: n,
        remove: r,
        update: i,
        dispose: a
    };
}
function si(e, t) {
    if (e.groupOrder === t.groupOrder) {
        if (e.renderOrder === t.renderOrder) {
            if (e.material.id === t.material.id) {
                if (e.materialVariant === t.materialVariant) {
                    if (e.z === t.z) {
                        return e.id - t.id;
                    }
                    return e.z - t.z;
                }
                return e.materialVariant - t.materialVariant;
            }
            return e.material.id - t.material.id;
        }
        return e.renderOrder - t.renderOrder;
    }
    return e.groupOrder - t.groupOrder;
}
function ci(e, t) {
    if (e.groupOrder === t.groupOrder) {
        if (e.renderOrder === t.renderOrder) {
            if (e.z === t.z) {
                return e.id - t.id;
            }
            return t.z - e.z;
        }
        return e.renderOrder - t.renderOrder;
    }
    return e.groupOrder - t.groupOrder;
}
function li() {
    let e = [];
    let t = 0;
    let opaque = [];
    let transmissive = [];
    let transparent = [];
    function a() {
        t = 0;
        opaque.length = 0;
        transmissive.length = 0;
        transparent.length = 0;
    }
    function o(object) {
        let t = 0;
        if (object.isInstancedMesh) {
            t += 2;
        }
        if (object.isSkinnedMesh) {
            t += 1;
        }
        return t;
    }
    function s(object, geometry, material, groupOrder, z, c) {
        let l = e[t];
        if (l === undefined) {
            l = {
                id: object.id,
                object,
                geometry,
                material,
                materialVariant: o(object),
                groupOrder,
                renderOrder: object.renderOrder,
                z,
                group: c
            };
            e[t] = l;
        } else {
            l.id = object.id;
            l.object = object;
            l.geometry = geometry;
            l.material = material;
            l.materialVariant = o(object);
            l.groupOrder = groupOrder;
            l.renderOrder = object.renderOrder;
            l.z = z;
            l.group = c;
        }
        t++;
        return l;
    }
    function push(e, t, a, o, c, l, u) {
        if (u.reversedDepth === true) {
            c = -c;
        }
        let d = s(e, t, a, o, c, l);
        if (a.transmission > 0) {
            transmissive.push(d);
        } else if (a.transparent === true) {
            transparent.push(d);
        } else {
            opaque.push(d);
        }
    }
    function unshift(e, t, a, o, c, l) {
        let u = s(e, t, a, o, c, l);
        if (a.transmission > 0) {
            transmissive.unshift(u);
        } else if (a.transparent === true) {
            transparent.unshift(u);
        } else {
            opaque.unshift(u);
        }
    }
    function sort(e, t) {
        if (opaque.length > 1) {
            opaque.sort(e || si);
        }
        if (transmissive.length > 1) {
            transmissive.sort(t || ci);
        }
        if (transparent.length > 1) {
            transparent.sort(t || ci);
        }
    }
    function finish() {
        for(let n = t, r = e.length; n < r; n++){
            let t = e[n];
            if (t.id === null) {
                break;
            }
            t.id = null;
            t.object = null;
            t.geometry = null;
            t.material = null;
            t.group = null;
        }
    }
    return {
        opaque,
        transmissive,
        transparent,
        init: a,
        push,
        unshift,
        finish,
        sort
    };
}
function ui() {
    let e = new WeakMap;
    function t(t, n) {
        let r = e.get(t);
        let i;
        if (r === undefined) {
            i = new li;
            e.set(t, [
                i
            ]);
        } else if (n >= r.length) {
            i = new li;
            r.push(i);
        } else {
            i = r[n];
        }
        return i;
    }
    function n() {
        e = new WeakMap;
    }
    return {
        get: t,
        dispose: n
    };
}
function di() {
    let e = {};
    return {
        get: function(t) {
            if (e[t.id] !== undefined) {
                return e[t.id];
            }
            let n;
            switch(t.type){
                case `SunLight`:
                case `DirectionalLight`:
                    n = {
                        direction: new Jn_1,
                        color: new B
                    };
                    break;
                case `SpotLight`:
                    n = {
                        position: new Jn_1,
                        direction: new Jn_1,
                        color: new B,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case `PointLight`:
                    n = {
                        position: new Jn_1,
                        color: new B,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case `HemisphereLight`:
                    n = {
                        direction: new Jn_1,
                        skyColor: new B,
                        groundColor: new B
                    };
                    break;
                case `RectAreaLight`:
                    n = {
                        color: new B,
                        position: new Jn_1,
                        halfWidth: new Jn_1,
                        halfHeight: new Jn_1
                    };
            }
            e[t.id] = n;
            return n;
        }
    };
}
function fi() {
    let e = {};
    return {
        get: function(t) {
            if (e[t.id] !== undefined) {
                return e[t.id];
            }
            let n;
            switch(t.type){
                case `SunLight`:
                case `DirectionalLight`:
                    n = {
                        shadowIntensity: 1,
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new qn_1
                    };
                    break;
                case `SpotLight`:
                    n = {
                        shadowIntensity: 1,
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new qn_1
                    };
                    break;
                case `PointLight`:
                    n = {
                        shadowIntensity: 1,
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new qn_1,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1000
                    };
            }
            e[t.id] = n;
            return n;
        }
    };
}
let pi = 0;
function mi(e, t) {
    return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function hi(e) {
    let t = new di;
    let n = fi();
    let r = {
        version: 0,
        hash: {
            sunLength: -1,
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numSunShadows: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [
            0,
            0,
            0
        ],
        probe: [],
        sun: [],
        sunShadow: [],
        sunShadowMap: [],
        sunShadowMatrix: [],
        sunShadowCascade: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for(let e = 0; e < 9; e++){
        r.probe.push(new Jn_1);
    }
    let i = new Jn_1;
    let a = new _t_1;
    let o = new _t_1;
    function s(i) {
        let a = 0;
        let o = 0;
        let s = 0;
        for(let e = 0; e < 9; e++){
            r.probe[e].set(0, 0, 0);
        }
        let c = 0;
        let l = 0;
        let u = 0;
        let d = 0;
        let f = 0;
        let p = 0;
        let m = 0;
        let h = 0;
        let g = 0;
        let _ = 0;
        let v = 0;
        let y = 0;
        let b = 0;
        let x = 0;
        i.sort(mi);
        for(let e = 0, S = i.length; e < S; e++){
            let S = i[e];
            let C = S.color;
            let w = S.intensity;
            let T = S.distance;
            let E = null;
            if (S.shadow && S.shadow.map) {
                E = S.shadow.map.texture.format === 1030 ? S.shadow.map.texture : S.shadow.map.depthTexture || S.shadow.map.texture;
            }
            if (S.isAmbientLight) {
                a += C.r * w;
                o += C.g * w;
                s += C.b * w;
            } else if (S.isLightProbe) {
                for(let e = 0; e < 9; e++){
                    r.probe[e].addScaledVector(S.sh.coefficients[e], w);
                }
                x++;
            } else if (S.isSunLight) {
                let e = t.get(S);
                e.color.copy(S.color).multiplyScalar(S.intensity);
                if (S.castShadow) {
                    let e = S.shadow;
                    let t = n.get(S);
                    t.shadowIntensity = e.intensity;
                    t.shadowBias = e.bias;
                    t.shadowNormalBias = e.normalBias;
                    t.shadowRadius = e.radius;
                    t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents());
                    r.sunShadow[l] = t;
                    r.sunShadowMap[l] = E;
                    let i = e.getViewportCount();
                    for(let t = 0; t < i; t++){
                        r.sunShadowMatrix[u + t] = e.getMatrix(t);
                        r.sunShadowCascade[u + t] = e._cascadeData[t];
                    }
                    u += i;
                    l++;
                }
                r.sun[c] = e;
                c++;
            } else if (S.isDirectionalLight) {
                let e = t.get(S);
                e.color.copy(S.color).multiplyScalar(S.intensity);
                if (S.castShadow) {
                    let e = S.shadow;
                    let t = n.get(S);
                    t.shadowIntensity = e.intensity;
                    t.shadowBias = e.bias;
                    t.shadowNormalBias = e.normalBias;
                    t.shadowRadius = e.radius;
                    t.shadowMapSize = e.mapSize;
                    r.directionalShadow[d] = t;
                    r.directionalShadowMap[d] = E;
                    r.directionalShadowMatrix[d] = S.shadow.matrix;
                    g++;
                }
                r.directional[d] = e;
                d++;
            } else if (S.isSpotLight) {
                let e = t.get(S);
                e.position.setFromMatrixPosition(S.matrixWorld);
                e.color.copy(C).multiplyScalar(w);
                e.distance = T;
                e.coneCos = Math.cos(S.angle);
                e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra));
                e.decay = S.decay;
                r.spot[p] = e;
                let i = S.shadow;
                if (S.map) {
                    r.spotLightMap[y] = S.map;
                    y++;
                    i.updateMatrices(S);
                    if (S.castShadow) {
                        b++;
                    }
                }
                r.spotLightMatrix[p] = i.matrix;
                if (S.castShadow) {
                    let e = n.get(S);
                    e.shadowIntensity = i.intensity;
                    e.shadowBias = i.bias;
                    e.shadowNormalBias = i.normalBias;
                    e.shadowRadius = i.radius;
                    e.shadowMapSize = i.mapSize;
                    r.spotShadow[p] = e;
                    r.spotShadowMap[p] = E;
                    v++;
                }
                p++;
            } else if (S.isRectAreaLight) {
                let e = t.get(S);
                e.color.copy(C).multiplyScalar(w);
                e.halfWidth.set(S.width * 0.5, 0, 0);
                e.halfHeight.set(0, S.height * 0.5, 0);
                r.rectArea[m] = e;
                m++;
            } else if (S.isPointLight) {
                let e = t.get(S);
                e.color.copy(S.color).multiplyScalar(S.intensity);
                e.distance = S.distance;
                e.decay = S.decay;
                if (S.castShadow) {
                    let e = S.shadow;
                    let t = n.get(S);
                    t.shadowIntensity = e.intensity;
                    t.shadowBias = e.bias;
                    t.shadowNormalBias = e.normalBias;
                    t.shadowRadius = e.radius;
                    t.shadowMapSize = e.mapSize;
                    t.shadowCameraNear = e.camera.near;
                    t.shadowCameraFar = e.camera.far;
                    r.pointShadow[f] = t;
                    r.pointShadowMap[f] = E;
                    r.pointShadowMatrix[f] = S.shadow.matrix;
                    _++;
                }
                r.point[f] = e;
                f++;
            } else if (S.isHemisphereLight) {
                let e = t.get(S);
                e.skyColor.copy(S.color).multiplyScalar(w);
                e.groundColor.copy(S.groundColor).multiplyScalar(w);
                r.hemi[h] = e;
                h++;
            }
        }
        if (m > 0) {
            if (e.has(`OES_texture_float_linear`) === true) {
                r.rectAreaLTC1 = X.LTC_FLOAT_1;
                r.rectAreaLTC2 = X.LTC_FLOAT_2;
            } else {
                r.rectAreaLTC1 = X.LTC_HALF_1;
                r.rectAreaLTC2 = X.LTC_HALF_2;
            }
        }
        r.ambient[0] = a;
        r.ambient[1] = o;
        r.ambient[2] = s;
        let r_hash = r.hash;
        if (r_hash.sunLength !== c || r_hash.directionalLength !== d || r_hash.pointLength !== f || r_hash.spotLength !== p || r_hash.rectAreaLength !== m || r_hash.hemiLength !== h || r_hash.numSunShadows !== l || r_hash.numDirectionalShadows !== g || r_hash.numPointShadows !== _ || r_hash.numSpotShadows !== v || r_hash.numSpotMaps !== y || r_hash.numLightProbes !== x) {
            r.sun.length = c;
            r.directional.length = d;
            r.spot.length = p;
            r.rectArea.length = m;
            r.point.length = f;
            r.hemi.length = h;
            r.sunShadow.length = l;
            r.sunShadowMap.length = l;
            r.sunShadowMatrix.length = u;
            r.sunShadowCascade.length = u;
            r.directionalShadow.length = g;
            r.directionalShadowMap.length = g;
            r.directionalShadowMatrix.length = g;
            r.pointShadow.length = _;
            r.pointShadowMap.length = _;
            r.pointShadowMatrix.length = _;
            r.spotShadow.length = v;
            r.spotShadowMap.length = v;
            r.spotLightMatrix.length = v + y - b;
            r.spotLightMap.length = y;
            r.numSpotLightShadowsWithMaps = b;
            r.numLightProbes = x;
            r_hash.sunLength = c;
            r_hash.directionalLength = d;
            r_hash.pointLength = f;
            r_hash.spotLength = p;
            r_hash.rectAreaLength = m;
            r_hash.hemiLength = h;
            r_hash.numSunShadows = l;
            r_hash.numDirectionalShadows = g;
            r_hash.numPointShadows = _;
            r_hash.numSpotShadows = v;
            r_hash.numSpotMaps = y;
            r_hash.numLightProbes = x;
            r.version = pi++;
        }
    }
    function setupView(e, t) {
        let n = 0;
        let s = 0;
        let c = 0;
        let l = 0;
        let u = 0;
        let d = 0;
        let t_matrixWorldInverse = t.matrixWorldInverse;
        for(let t = 0, p = e.length; t < p; t++){
            let p = e[t];
            if (p.isSunLight) {
                let e = r.sun[n];
                e.direction.setFromMatrixPosition(p.matrixWorld);
                e.direction.transformDirection(t_matrixWorldInverse);
                n++;
            } else if (p.isDirectionalLight) {
                let e = r.directional[s];
                e.direction.setFromMatrixPosition(p.matrixWorld);
                i.setFromMatrixPosition(p.target.matrixWorld);
                e.direction.sub(i);
                e.direction.transformDirection(t_matrixWorldInverse);
                s++;
            } else if (p.isSpotLight) {
                let e = r.spot[l];
                e.position.setFromMatrixPosition(p.matrixWorld);
                e.position.applyMatrix4(t_matrixWorldInverse);
                e.direction.setFromMatrixPosition(p.matrixWorld);
                i.setFromMatrixPosition(p.target.matrixWorld);
                e.direction.sub(i);
                e.direction.transformDirection(t_matrixWorldInverse);
                l++;
            } else if (p.isRectAreaLight) {
                let e = r.rectArea[u];
                e.position.setFromMatrixPosition(p.matrixWorld);
                e.position.applyMatrix4(t_matrixWorldInverse);
                o.identity();
                a.copy(p.matrixWorld);
                a.premultiply(t_matrixWorldInverse);
                o.extractRotation(a);
                e.halfWidth.set(p.width * 0.5, 0, 0);
                e.halfHeight.set(0, p.height * 0.5, 0);
                e.halfWidth.applyMatrix4(o);
                e.halfHeight.applyMatrix4(o);
                u++;
            } else if (p.isPointLight) {
                let e = r.point[c];
                e.position.setFromMatrixPosition(p.matrixWorld);
                e.position.applyMatrix4(t_matrixWorldInverse);
                c++;
            } else if (p.isHemisphereLight) {
                let e = r.hemi[d];
                e.direction.setFromMatrixPosition(p.matrixWorld);
                e.direction.transformDirection(t_matrixWorldInverse);
                d++;
            }
        }
    }
    return {
        setup: s,
        setupView,
        state: r
    };
}
function gi(e) {
    let lights = new hi(e);
    let lightsArray = [];
    let shadowsArray = [];
    let lightProbeGridArray = [];
    function a(e) {
        d.camera = e;
        lightsArray.length = 0;
        shadowsArray.length = 0;
        lightProbeGridArray.length = 0;
    }
    function pushLight(e) {
        lightsArray.push(e);
    }
    function pushShadow(e) {
        shadowsArray.push(e);
    }
    function pushLightProbeGrid(e) {
        lightProbeGridArray.push(e);
    }
    function setupLights() {
        lights.setup(lightsArray);
    }
    function setupLightsView(e) {
        lights.setupView(lightsArray, e);
    }
    let d = {
        lightsArray,
        shadowsArray,
        lightProbeGridArray,
        camera: null,
        lights,
        transmissionRenderTarget: {},
        textureUnits: 0
    };
    return {
        init: a,
        state: d,
        setupLights,
        setupLightsView,
        pushLight,
        pushShadow,
        pushLightProbeGrid
    };
}
function _i(e) {
    let t = new WeakMap;
    function n(n, r = 0) {
        let i = t.get(n);
        let a;
        if (i === undefined) {
            a = new gi(e);
            t.set(n, [
                a
            ]);
        } else if (r >= i.length) {
            a = new gi(e);
            i.push(a);
        } else {
            a = i[r];
        }
        return a;
    }
    function r() {
        t = new WeakMap;
    }
    return {
        get: n,
        dispose: r
    };
}
const vi = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
const yi = `uniform sampler2D shadow_pass;
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
}`;
const bi = [
    new Jn_1(1, 0, 0),
    new Jn_1(-1, 0, 0),
    new Jn_1(0, 1, 0),
    new Jn_1(0, -1, 0),
    new Jn_1(0, 0, 1),
    new Jn_1(0, 0, -1)
];
const xi = [
    new Jn_1(0, -1, 0),
    new Jn_1(0, -1, 0),
    new Jn_1(0, 0, 1),
    new Jn_1(0, 0, -1),
    new Jn_1(0, -1, 0),
    new Jn_1(0, -1, 0)
];
const Si = new _t_1;
const Ci = new Jn_1;
const wi = new Jn_1;
function Ti(e, t, n) {
    let r = new rt_1;
    let i = new qn_1;
    let a = new qn_1;
    let o = new Yn_1;
    let s = new bt;
    let c = new xt;
    let l = {};
    let n_maxTextureSize = n.maxTextureSize;
    let d = {
        0: 1,
        1: 0,
        2: 2
    };
    let f = new Mn_1({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new qn_1
            },
            radius: {
                value: 4
            }
        },
        vertexShader: vi,
        fragmentShader: yi
    });
    let p = f.clone();
    p.defines.HORIZONTAL_PASS = 1;
    let m = new I;
    m.setAttribute(`position`, new F(new Float32Array([
        -1,
        -1,
        0.5,
        3,
        -1,
        0.5,
        -1,
        3,
        0.5
    ]), 3));
    let h = new vt(m, f);
    let _ = this;
    this.enabled = false;
    this.autoUpdate = true;
    this.needsUpdate = false;
    this.type = 1;
    let type = this.type;
    this.render = function(t, n, s) {
        if (_.enabled === false || _.autoUpdate === false && _.needsUpdate === false || t.length === 0) {
            return;
        }
        if (this.type === 2) {
            cr_1(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`);
            this.type = 1;
        }
        let c = e.getRenderTarget();
        let l = e.getActiveCubeFace();
        let d = e.getActiveMipmapLevel();
        let e_state = e.state;
        e_state.setBlending(0);
        if (e_state.buffers.depth.getReversed() === true) {
            e_state.buffers.color.setClear(0, 0, 0, 0);
        } else {
            e_state.buffers.color.setClear(1, 1, 1, 1);
        }
        e_state.buffers.depth.setTest(true);
        e_state.setScissorTest(false);
        let p = type !== this.type;
        if (p) {
            n.traverse(function(e) {
                if (e.material) {
                    if (Array.isArray(e.material)) {
                        e.material.forEach((e)=>e.needsUpdate = true);
                    } else {
                        e.material.needsUpdate = true;
                    }
                }
            });
        }
        for(let c = 0, l = t.length; c < l; c++){
            let l = t[c];
            let d = l.shadow;
            if (d === undefined) {
                cr_1(`WebGLShadowMap:`, l, `has no shadow.`);
                continue;
            }
            if (d.autoUpdate === false && d.needsUpdate === false) {
                continue;
            }
            i.copy(d.mapSize);
            let m = d.getFrameExtents();
            i.multiply(m);
            a.copy(d.mapSize);
            if (i.x > n_maxTextureSize || i.y > n_maxTextureSize) {
                if (i.x > n_maxTextureSize) {
                    a.x = Math.floor(n_maxTextureSize / m.x);
                    i.x = a.x * m.x;
                    d.mapSize.x = a.x;
                }
                if (i.y > n_maxTextureSize) {
                    a.y = Math.floor(n_maxTextureSize / m.y);
                    i.y = a.y * m.y;
                    d.mapSize.y = a.y;
                }
            }
            let h = e.state.buffers.depth.getReversed();
            d.camera._reversedDepth = h;
            if (d.map === null || p === true) {
                if (d.map !== null) {
                    if (d.map.depthTexture !== null) {
                        d.map.depthTexture.dispose();
                        d.map.depthTexture = null;
                    }
                    d.map.dispose();
                }
                if (this.type === 3) {
                    if (l.isPointLight) {
                        cr_1(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);
                        continue;
                    }
                    d.map = new Zn_1(i.x, i.y, {
                        format: gn_1,
                        type: ot_1,
                        minFilter: dt,
                        magFilter: dt,
                        generateMipmaps: false
                    });
                    d.map.texture.name = l.name + `.shadowMap`;
                    d.map.depthTexture = new X_1(i.x, i.y, nt);
                    d.map.depthTexture.name = l.name + `.shadowMapDepth`;
                    d.map.depthTexture.format = J;
                    d.map.depthTexture.compareFunction = null;
                    d.map.depthTexture.minFilter = Tt_1;
                    d.map.depthTexture.magFilter = Tt_1;
                } else {
                    if (l.isPointLight) {
                        d.map = new tn(i.x);
                        d.map.depthTexture = new U(i.x, Un_1);
                    } else {
                        d.map = new Zn_1(i.x, i.y);
                        d.map.depthTexture = new X_1(i.x, i.y, Un_1);
                    }
                    d.map.depthTexture.name = l.name + `.shadowMap`;
                    d.map.depthTexture.format = J;
                    if (this.type === 1) {
                        d.map.depthTexture.compareFunction = h ? 518 : 515;
                        d.map.depthTexture.minFilter = dt;
                        d.map.depthTexture.magFilter = dt;
                    } else {
                        d.map.depthTexture.compareFunction = null;
                        d.map.depthTexture.minFilter = Tt_1;
                        d.map.depthTexture.magFilter = Tt_1;
                    }
                }
                d.camera.updateProjectionMatrix();
            }
            if (d.map.isWebGLCubeRenderTarget !== true && (d.map.width !== i.x || d.map.height !== i.y)) {
                d.map.setSize(i.x, i.y);
            }
            let g = d.map.isWebGLCubeRenderTarget ? 6 : d.getViewportCount();
            if (l.isPointLight !== true) {
                d.updateMatrices(l, s);
            }
            for(let t = 0; t < g; t++){
                let i = d.getCamera(t);
                if (l.isPointLight) {
                    let e = d.camera;
                    let n = d.matrix;
                    let r = l.distance || e.far;
                    if (r !== e.far) {
                        e.far = r;
                        e.updateProjectionMatrix();
                    }
                    Ci.setFromMatrixPosition(l.matrixWorld);
                    e.position.copy(Ci);
                    wi.copy(e.position);
                    wi.add(bi[t]);
                    e.up.copy(xi[t]);
                    e.lookAt(wi);
                    e.updateMatrixWorld();
                    n.makeTranslation(-Ci.x, -Ci.y, -Ci.z);
                    Si.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse);
                    d._frustum.setFromProjectionMatrix(Si, e.coordinateSystem, e.reversedDepth);
                }
                if (d.map.isWebGLCubeRenderTarget) {
                    e.setRenderTarget(d.map, t);
                    e.clear();
                } else {
                    if (t === 0) {
                        e.setRenderTarget(d.map);
                        e.clear();
                    }
                    let n = d.getViewport(t);
                    o.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w);
                    e_state.viewport(o);
                }
                r = d.getFrustum(t);
                x(n, s, i, l, this.type);
            }
            if (d.isPointLightShadow !== true && this.type === 3) {
                y(d, s);
            }
            d.needsUpdate = false;
        }
        type = this.type;
        _.needsUpdate = false;
        e.setRenderTarget(c, l, d);
    };
    function y(n, r) {
        let a = t.update(h);
        if (f.defines.VSM_SAMPLES !== n.blurSamples) {
            f.defines.VSM_SAMPLES = n.blurSamples;
            p.defines.VSM_SAMPLES = n.blurSamples;
            f.needsUpdate = true;
            p.needsUpdate = true;
        }
        if (n.mapPass === null) {
            n.mapPass = new Zn_1(i.x, i.y, {
                format: gn_1,
                type: ot_1
            });
        } else if (n.mapPass.width !== n.map.width || n.mapPass.height !== n.map.height) {
            n.mapPass.setSize(n.map.width, n.map.height);
        }
        f.uniforms.shadow_pass.value = n.map.depthTexture;
        f.uniforms.resolution.value.set(n.map.width, n.map.height);
        f.uniforms.radius.value = n.radius;
        e.setRenderTarget(n.mapPass);
        e.clear();
        e.renderBufferDirect(r, null, a, f, h, null);
        p.uniforms.shadow_pass.value = n.mapPass.texture;
        p.uniforms.resolution.value.set(n.map.width, n.map.height);
        p.uniforms.radius.value = n.radius;
        e.setRenderTarget(n.map);
        e.clear();
        e.renderBufferDirect(r, null, a, p, h, null);
    }
    function b(t, n, r, i) {
        let a = null;
        let o = r.isPointLight === true ? t.customDistanceMaterial : t.customDepthMaterial;
        if (o !== undefined) {
            a = o;
        } else {
            a = r.isPointLight === true ? c : s;
            if (e.localClippingEnabled && n.clipShadows === true && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === true) {
                let e = a.uuid;
                let t = n.uuid;
                let r = l[e];
                if (r === undefined) {
                    r = {};
                    l[e] = r;
                }
                let i = r[t];
                if (i === undefined) {
                    i = a.clone();
                    r[t] = i;
                    n.addEventListener(`dispose`, C);
                }
                a = i;
            }
        }
        a.visible = n.visible;
        a.wireframe = n.wireframe;
        if (i === 3) {
            a.side = n.shadowSide === null ? n.side : n.shadowSide;
        } else {
            a.side = n.shadowSide === null ? d[n.side] : n.shadowSide;
        }
        a.alphaMap = n.alphaMap;
        a.alphaTest = n.alphaToCoverage === true ? 0.5 : n.alphaTest;
        a.map = n.map;
        a.clipShadows = n.clipShadows;
        a.clippingPlanes = n.clippingPlanes;
        a.clipIntersection = n.clipIntersection;
        a.displacementMap = n.displacementMap;
        a.displacementScale = n.displacementScale;
        a.displacementBias = n.displacementBias;
        a.wireframeLinewidth = n.wireframeLinewidth;
        a.linewidth = n.linewidth;
        if (r.isPointLight === true && a.isMeshDistanceMaterial === true) {
            let t = e.properties.get(a);
            t.light = r;
        }
        return a;
    }
    function x(n, i, a, o, s) {
        if (n.visible === false) {
            return;
        }
        if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || n.intersectsFrustum(r))) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            let r = t.update(n);
            let c = n.material;
            if (Array.isArray(c)) {
                let t = r.groups;
                for(let l = 0, u = t.length; l < u; l++){
                    let u = t[l];
                    let d = c[u.materialIndex];
                    if (d && d.visible) {
                        let t = b(n, d, o, s);
                        n.onBeforeShadow(e, n, i, a, r, t, u);
                        e.renderBufferDirect(a, null, r, t, n, u);
                        n.onAfterShadow(e, n, i, a, r, t, u);
                    }
                }
            } else if (c.visible) {
                let t = b(n, c, o, s);
                n.onBeforeShadow(e, n, i, a, r, t, null);
                e.renderBufferDirect(a, null, r, t, n, null);
                n.onAfterShadow(e, n, i, a, r, t, null);
            }
        }
        let n_children = n.children;
        for(let e = 0, t = n_children.length; e < t; e++){
            x(n_children[e], i, a, o, s);
        }
    }
    function C(e) {
        e.target.removeEventListener(`dispose`, C);
        for(let t in l){
            let n = l[t];
            let r = e.target.uuid;
            if (r in n) {
                n[r].dispose();
                delete n[r];
            }
        }
    }
}
function Ei(e, t) {
    function n() {
        let t = false;
        let n = new Yn_1;
        let r = null;
        let i = new Yn_1(0, 0, 0, 0);
        return {
            setMask: function(n) {
                if (r !== n && !t) {
                    e.colorMask(n, n, n, n);
                    r = n;
                }
            },
            setLocked: function(e) {
                t = e;
            },
            setClear: function(t, r, a, o, s) {
                if (s === true) {
                    t *= o;
                    r *= o;
                    a *= o;
                }
                n.set(t, r, a, o);
                if (i.equals(n) === false) {
                    e.clearColor(t, r, a, o);
                    i.copy(n);
                }
            },
            reset: function() {
                t = false;
                r = null;
                i.set(-1, 0, 0, 0);
            }
        };
    }
    function r() {
        let n = false;
        let r = false;
        let i = null;
        let a = null;
        let o = null;
        return {
            setReversed: function(e) {
                if (r !== e) {
                    let n = t.get(`EXT_clip_control`);
                    if (e) {
                        n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT);
                    } else {
                        n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT);
                    }
                    r = e;
                    let i = o;
                    o = null;
                    this.setClear(i);
                }
            },
            getReversed: function() {
                return r;
            },
            setTest: function(t) {
                if (t) {
                    enable(e.DEPTH_TEST);
                } else {
                    disable(e.DEPTH_TEST);
                }
            },
            setMask: function(t) {
                if (i !== t && !n) {
                    e.depthMask(t);
                    i = t;
                }
            },
            setFunc: function(t) {
                if (r) {
                    t = Cn_1[t];
                }
                if (a !== t) {
                    switch(t){
                        case 0:
                            e.depthFunc(e.NEVER);
                            break;
                        case 1:
                            e.depthFunc(e.ALWAYS);
                            break;
                        case 2:
                            e.depthFunc(e.LESS);
                            break;
                        case 3:
                            e.depthFunc(e.LEQUAL);
                            break;
                        case 4:
                            e.depthFunc(e.EQUAL);
                            break;
                        case 5:
                            e.depthFunc(e.GEQUAL);
                            break;
                        case 6:
                            e.depthFunc(e.GREATER);
                            break;
                        case 7:
                            e.depthFunc(e.NOTEQUAL);
                            break;
                        default:
                            e.depthFunc(e.LEQUAL);
                    }
                    a = t;
                }
            },
            setLocked: function(e) {
                n = e;
            },
            setClear: function(t) {
                if (o !== t) {
                    o = t;
                    if (r) {
                        t = 1 - t;
                    }
                    e.clearDepth(t);
                }
            },
            reset: function() {
                n = false;
                i = null;
                a = null;
                o = null;
                r = false;
            }
        };
    }
    function i() {
        let t = false;
        let n = null;
        let r = null;
        let i = null;
        let a = null;
        let o = null;
        let s = null;
        let c = null;
        let l = null;
        return {
            setTest: function(n) {
                if (!t) {
                    if (n) {
                        enable(e.STENCIL_TEST);
                    } else {
                        disable(e.STENCIL_TEST);
                    }
                }
            },
            setMask: function(r) {
                if (n !== r && !t) {
                    e.stencilMask(r);
                    n = r;
                }
            },
            setFunc: function(t, n, o) {
                if (r !== t || i !== n || a !== o) {
                    e.stencilFunc(t, n, o);
                    r = t;
                    i = n;
                    a = o;
                }
            },
            setOp: function(t, n, r) {
                if (o !== t || s !== n || c !== r) {
                    e.stencilOp(t, n, r);
                    o = t;
                    s = n;
                    c = r;
                }
            },
            setLocked: function(e) {
                t = e;
            },
            setClear: function(t) {
                if (l !== t) {
                    e.clearStencil(t);
                    l = t;
                }
            },
            reset: function() {
                t = false;
                n = null;
                r = null;
                i = null;
                a = null;
                o = null;
                s = null;
                c = null;
                l = null;
            }
        };
    }
    let color = new n;
    let depth = new r;
    let stencil = new i;
    let l = new WeakMap;
    let d = new WeakMap;
    let f = {};
    let p = {};
    let m = {};
    let h = new WeakMap;
    let g = [];
    let _ = null;
    let v = false;
    let y = null;
    let b = null;
    let x = null;
    let S = null;
    let C = null;
    let w = null;
    let T = null;
    let E = new B(0, 0, 0);
    let D = 0;
    let O = false;
    let ee = null;
    let k = null;
    let A = null;
    let j = null;
    let M = null;
    let te = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let ne = false;
    let N = 0;
    let re = e.getParameter(e.VERSION);
    if (re.indexOf(`WebGL`) === -1) {
        if (re.indexOf(`OpenGL ES`) !== -1) {
            N = parseFloat(/^OpenGL ES (\d)/.exec(re)[1]);
            ne = N >= 2;
        }
    } else {
        N = parseFloat(/^WebGL (\d)/.exec(re)[1]);
        ne = N >= 1;
    }
    let P = null;
    let ie = {};
    let ae = e.getParameter(e.SCISSOR_BOX);
    let oe = e.getParameter(e.VIEWPORT);
    let se = new Yn_1().fromArray(ae);
    let ce = new Yn_1().fromArray(oe);
    function le(t, n, r, i) {
        let a = new Uint8Array(4);
        let o = e.createTexture();
        e.bindTexture(t, o);
        e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST);
        e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
        for(let o = 0; o < r; o++){
            if (t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY) {
                e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a);
            } else {
                e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
            }
        }
        return o;
    }
    let ue = {};
    ue[e.TEXTURE_2D] = le(e.TEXTURE_2D, e.TEXTURE_2D, 1);
    ue[e.TEXTURE_CUBE_MAP] = le(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
    ue[e.TEXTURE_2D_ARRAY] = le(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1);
    ue[e.TEXTURE_3D] = le(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1);
    color.setClear(0, 0, 0, 1);
    depth.setClear(1);
    stencil.setClear(0);
    enable(e.DEPTH_TEST);
    depth.setFunc(3);
    setFlipSided(false);
    setCullFace(1);
    enable(e.CULL_FACE);
    setBlending(0);
    function enable(t) {
        if (f[t] !== true) {
            e.enable(t);
            f[t] = true;
        }
    }
    function disable(t) {
        if (f[t] !== false) {
            e.disable(t);
            f[t] = false;
        }
    }
    function bindFramebuffer(t, n) {
        return m[t] !== n && (e.bindFramebuffer(t, n), m[t] = n, t === e.DRAW_FRAMEBUFFER && (m[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (m[e.DRAW_FRAMEBUFFER] = n), true);
    }
    function drawBuffers(t, n) {
        let r = g;
        let i = false;
        if (t) {
            r = h.get(n);
            if (r === undefined) {
                r = [];
                h.set(n, r);
            }
            let a = t.textures;
            if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
                for(let t = 0, n = a.length; t < n; t++){
                    r[t] = e.COLOR_ATTACHMENT0 + t;
                }
                r.length = a.length;
                i = true;
            }
        } else {
            if (r[0] !== e.BACK) {
                r[0] = e.BACK;
                i = true;
            }
        }
        if (i) {
            e.drawBuffers(r);
        }
    }
    function useProgram(t) {
        return _ !== t && (e.useProgram(t), _ = t, true);
    }
    let R = {
        100: e.FUNC_ADD,
        101: e.FUNC_SUBTRACT,
        102: e.FUNC_REVERSE_SUBTRACT
    };
    R[103] = e.MIN;
    R[104] = e.MAX;
    let pe = {
        200: e.ZERO,
        201: e.ONE,
        202: e.SRC_COLOR,
        204: e.SRC_ALPHA,
        210: e.SRC_ALPHA_SATURATE,
        208: e.DST_COLOR,
        206: e.DST_ALPHA,
        203: e.ONE_MINUS_SRC_COLOR,
        205: e.ONE_MINUS_SRC_ALPHA,
        209: e.ONE_MINUS_DST_COLOR,
        207: e.ONE_MINUS_DST_ALPHA,
        211: e.CONSTANT_COLOR,
        212: e.ONE_MINUS_CONSTANT_COLOR,
        213: e.CONSTANT_ALPHA,
        214: e.ONE_MINUS_CONSTANT_ALPHA
    };
    function setBlending(t, n, r, i, a, o, s, c, l, u) {
        if (t === 0) {
            if (v === true) {
                disable(e.BLEND);
                v = false;
            }
        } else {
            if (v === false) {
                enable(e.BLEND);
                v = true;
            }
            if (t !== 5) {
                if (t !== y || u !== O) {
                    if (b !== 100 || C !== 100) {
                        e.blendEquation(e.FUNC_ADD);
                        b = 100;
                        C = 100;
                    }
                    if (u) {
                        switch(t){
                            case 1:
                                e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                                break;
                            case 2:
                                e.blendFunc(e.ONE, e.ONE);
                                break;
                            case 3:
                                e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
                                break;
                            case 4:
                                e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
                                break;
                            default:
                                nr_1(`WebGLState: Invalid blending: `, t);
                        }
                    } else {
                        switch(t){
                            case 1:
                                e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                                break;
                            case 2:
                                e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
                                break;
                            case 3:
                                nr_1(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);
                                break;
                            case 4:
                                nr_1(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);
                                break;
                            default:
                                nr_1(`WebGLState: Invalid blending: `, t);
                        }
                    }
                    x = null;
                    S = null;
                    w = null;
                    T = null;
                    E.set(0, 0, 0);
                    D = 0;
                    y = t;
                    O = u;
                }
            } else {
                a ||= n;
                o ||= r;
                s ||= i;
                if (n !== b || a !== C) {
                    e.blendEquationSeparate(R[n], R[a]);
                    b = n;
                    C = a;
                }
                if (r !== x || i !== S || o !== w || s !== T) {
                    e.blendFuncSeparate(pe[r], pe[i], pe[o], pe[s]);
                    x = r;
                    S = i;
                    w = o;
                    T = s;
                }
                if (c.equals(E) === false || l !== D) {
                    e.blendColor(c.r, c.g, c.b, l);
                    E.copy(c);
                    D = l;
                }
                y = t;
                O = false;
            }
        }
    }
    function setMaterial(t, n) {
        if (t.side === 2) {
            disable(e.CULL_FACE);
        } else {
            enable(e.CULL_FACE);
        }
        let r = t.side === 1;
        if (n) {
            r = !r;
        }
        setFlipSided(r);
        if (t.blending === 1 && t.transparent === false) {
            setBlending(0);
        } else {
            setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha);
        }
        depth.setFunc(t.depthFunc);
        depth.setTest(t.depthTest);
        depth.setMask(t.depthWrite);
        color.setMask(t.colorWrite);
        let t_stencilWrite = t.stencilWrite;
        stencil.setTest(t_stencilWrite);
        if (t_stencilWrite) {
            stencil.setMask(t.stencilWriteMask);
            stencil.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask);
            stencil.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass);
        }
        setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
        if (t.alphaToCoverage === true) {
            enable(e.SAMPLE_ALPHA_TO_COVERAGE);
        } else {
            disable(e.SAMPLE_ALPHA_TO_COVERAGE);
        }
    }
    function setFlipSided(t) {
        if (ee !== t) {
            if (t) {
                e.frontFace(e.CW);
            } else {
                e.frontFace(e.CCW);
            }
            ee = t;
        }
    }
    function setCullFace(t) {
        if (t === 0) {
            disable(e.CULL_FACE);
        } else {
            enable(e.CULL_FACE);
            if (t !== k) {
                switch(t){
                    case 1:
                        e.cullFace(e.BACK);
                        break;
                    case 2:
                        e.cullFace(e.FRONT);
                        break;
                    default:
                        e.cullFace(e.FRONT_AND_BACK);
                }
            }
        }
        k = t;
    }
    function setLineWidth(t) {
        if (t !== A) {
            if (ne) {
                e.lineWidth(t);
            }
            A = t;
        }
    }
    function setPolygonOffset(t, n, r) {
        if (t) {
            enable(e.POLYGON_OFFSET_FILL);
            if (j !== n || M !== r) {
                j = n;
                M = r;
                if (depth.getReversed()) {
                    n = -n;
                }
                e.polygonOffset(n, r);
            }
        } else {
            disable(e.POLYGON_OFFSET_FILL);
        }
    }
    function setScissorTest(t) {
        if (t) {
            enable(e.SCISSOR_TEST);
        } else {
            disable(e.SCISSOR_TEST);
        }
    }
    function activeTexture(t = e.TEXTURE0 + te - 1) {
        if (P !== t) {
            e.activeTexture(t);
            P = t;
        }
    }
    function bindTexture(t, n, r = P === null ? e.TEXTURE0 + te - 1 : P) {
        let i = ie[r];
        if (i === undefined) {
            i = {
                type: undefined,
                texture: undefined
            };
            ie[r] = i;
        }
        if (i.type !== t || i.texture !== n) {
            if (P !== r) {
                e.activeTexture(r);
                P = r;
            }
            e.bindTexture(t, n || ue[t]);
            i.type = t;
            i.texture = n;
        }
    }
    function unbindTexture() {
        let t = ie[P];
        if (t !== undefined && t.type !== undefined) {
            e.bindTexture(t.type, null);
            t.type = undefined;
            t.texture = undefined;
        }
    }
    function compressedTexImage2D() {
        try {
            e.compressedTexImage2D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function compressedTexImage3D() {
        try {
            e.compressedTexImage3D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function texSubImage2D() {
        try {
            e.texSubImage2D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function texSubImage3D() {
        try {
            e.texSubImage3D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function compressedTexSubImage2D() {
        try {
            e.compressedTexSubImage2D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function compressedTexSubImage3D() {
        try {
            e.compressedTexSubImage3D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function texStorage2D() {
        try {
            e.texStorage2D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function texStorage3D() {
        try {
            e.texStorage3D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function texImage2D() {
        try {
            e.texImage2D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function texImage3D() {
        try {
            e.texImage3D(...arguments);
        } catch (error) {
            nr_1(`WebGLState:`, error);
        }
    }
    function getParameter(t) {
        if (p[t] === undefined) {
            return e.getParameter(t);
        }
        return p[t];
    }
    function pixelStorei(t, n) {
        if (p[t] !== n) {
            e.pixelStorei(t, n);
            p[t] = n;
        }
    }
    function scissor(t) {
        if (se.equals(t) === false) {
            e.scissor(t.x, t.y, t.z, t.w);
            se.copy(t);
        }
    }
    function viewport(t) {
        if (ce.equals(t) === false) {
            e.viewport(t.x, t.y, t.z, t.w);
            ce.copy(t);
        }
    }
    function updateUBOMapping(t, n) {
        let r = d.get(n);
        if (r === undefined) {
            r = new WeakMap;
            d.set(n, r);
        }
        let i = r.get(t);
        if (i === undefined) {
            i = e.getUniformBlockIndex(n, t.name);
            r.set(t, i);
        }
    }
    function uniformBlockBinding(t, n) {
        let r = d.get(n).get(t);
        if (l.get(n) !== r) {
            e.uniformBlockBinding(n, r, t.__bindingPointIndex);
            l.set(n, r);
        }
    }
    function U() {
        e.disable(e.BLEND);
        e.disable(e.CULL_FACE);
        e.disable(e.DEPTH_TEST);
        e.disable(e.POLYGON_OFFSET_FILL);
        e.disable(e.SCISSOR_TEST);
        e.disable(e.STENCIL_TEST);
        e.disable(e.SAMPLE_ALPHA_TO_COVERAGE);
        e.blendEquation(e.FUNC_ADD);
        e.blendFunc(e.ONE, e.ZERO);
        e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO);
        e.blendColor(0, 0, 0, 0);
        e.colorMask(true, true, true, true);
        e.clearColor(0, 0, 0, 0);
        e.depthMask(true);
        e.depthFunc(e.LESS);
        depth.setReversed(false);
        e.clearDepth(1);
        e.stencilMask(4294967295);
        e.stencilFunc(e.ALWAYS, 0, 4294967295);
        e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
        e.clearStencil(0);
        e.cullFace(e.BACK);
        e.frontFace(e.CCW);
        e.polygonOffset(0, 0);
        e.activeTexture(e.TEXTURE0);
        e.bindFramebuffer(e.FRAMEBUFFER, null);
        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null);
        e.bindFramebuffer(e.READ_FRAMEBUFFER, null);
        e.useProgram(null);
        e.lineWidth(1);
        e.scissor(0, 0, e.canvas.width, e.canvas.height);
        e.viewport(0, 0, e.canvas.width, e.canvas.height);
        e.pixelStorei(e.PACK_ALIGNMENT, 4);
        e.pixelStorei(e.UNPACK_ALIGNMENT, 4);
        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, false);
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL);
        e.pixelStorei(e.PACK_ROW_LENGTH, 0);
        e.pixelStorei(e.PACK_SKIP_PIXELS, 0);
        e.pixelStorei(e.PACK_SKIP_ROWS, 0);
        e.pixelStorei(e.UNPACK_ROW_LENGTH, 0);
        e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0);
        e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0);
        e.pixelStorei(e.UNPACK_SKIP_ROWS, 0);
        e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0);
        f = {};
        p = {};
        P = null;
        ie = {};
        m = {};
        h = new WeakMap;
        g = [];
        _ = null;
        v = false;
        y = null;
        b = null;
        x = null;
        S = null;
        C = null;
        w = null;
        T = null;
        E = new B(0, 0, 0);
        D = 0;
        O = false;
        ee = null;
        k = null;
        A = null;
        j = null;
        M = null;
        se.set(0, 0, e.canvas.width, e.canvas.height);
        ce.set(0, 0, e.canvas.width, e.canvas.height);
        color.reset();
        depth.reset();
        stencil.reset();
    }
    return {
        buffers: {
            color,
            depth,
            stencil
        },
        enable,
        disable,
        bindFramebuffer,
        drawBuffers,
        useProgram,
        setBlending,
        setMaterial,
        setFlipSided,
        setCullFace,
        setLineWidth,
        setPolygonOffset,
        setScissorTest,
        activeTexture,
        bindTexture,
        unbindTexture,
        compressedTexImage2D,
        compressedTexImage3D,
        texImage2D,
        texImage3D,
        pixelStorei,
        getParameter,
        updateUBOMapping,
        uniformBlockBinding,
        texStorage2D,
        texStorage3D,
        texSubImage2D,
        texSubImage3D,
        compressedTexSubImage2D,
        compressedTexSubImage3D,
        scissor,
        viewport,
        reset: U
    };
}
function Di(e, t, n, r, i, a, o) {
    let s = t.has(`WEBGL_multisampled_render_to_texture`) ? t.get(`WEBGL_multisampled_render_to_texture`) : null;
    let c = typeof navigator > `u` ? false : /OculusBrowser/g.test(navigator.userAgent);
    let l = new qn_1;
    let u = new WeakMap;
    let d = new Set;
    let f;
    let m = new WeakMap;
    let g = false;
    try {
        g = typeof OffscreenCanvas < `u` && new OffscreenCanvas(1, 1).getContext(`2d`) !== null;
    } catch  {}
    function _(e, t) {
        if (g) {
            return new OffscreenCanvas(e, t);
        }
        return tr_1(`canvas`);
    }
    function v(e, t, n) {
        let r = 1;
        let i = De(e);
        if (i.width > n || i.height > n) {
            r = n / Math.max(i.width, i.height);
        }
        if (r < 1) {
            if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap || typeof VideoFrame < `u` && e instanceof VideoFrame) {
                let n = Math.floor(r * i.width);
                let a = Math.floor(r * i.height);
                if (f === undefined) {
                    f = _(n, a);
                }
                let o = t ? _(n, a) : f;
                o.width = n;
                o.height = a;
                o.getContext(`2d`).drawImage(e, 0, 0, n, a);
                cr_1(`WebGLRenderer: Texture has been resized from (` + i.width + `x` + i.height + `) to (` + n + `x` + a + `).`);
                return o;
            }
            if (`data` in e) {
                cr_1(`WebGLRenderer: Image in DataTexture is too big (` + i.width + `x` + i.height + `).`);
            }
            return e;
        }
        return e;
    }
    function y(e) {
        return e.generateMipmaps;
    }
    function b(t) {
        e.generateMipmap(t);
    }
    function x(t) {
        if (t.isWebGLCubeRenderTarget) {
            return e.TEXTURE_CUBE_MAP;
        }
        if (t.isWebGL3DRenderTarget) {
            return e.TEXTURE_3D;
        }
        if (t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture) {
            return e.TEXTURE_2D_ARRAY;
        }
        return e.TEXTURE_2D;
    }
    function S(internalFormat, r, i, normalized, colorSpace, s = false) {
        if (internalFormat !== null) {
            if (e[internalFormat] !== undefined) {
                return e[internalFormat];
            }
            cr_1(`WebGLRenderer: Attempt to use non-existing WebGL internal format '` + internalFormat + `'`);
        }
        let c;
        if (normalized) {
            c = t.get(`EXT_texture_norm16`);
            if (!c) {
                cr_1(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`);
            }
        }
        let l = r;
        if (r === e.RED) {
            if (i === e.FLOAT) {
                l = e.R32F;
            }
            if (i === e.HALF_FLOAT) {
                l = e.R16F;
            }
            if (i === e.UNSIGNED_BYTE) {
                l = e.R8;
            }
            if (i === e.UNSIGNED_SHORT && c) {
                l = c.R16_EXT;
            }
            if (i === e.SHORT && c) {
                l = c.R16_SNORM_EXT;
            }
        }
        if (r === e.RED_INTEGER) {
            if (i === e.UNSIGNED_BYTE) {
                l = e.R8UI;
            }
            if (i === e.UNSIGNED_SHORT) {
                l = e.R16UI;
            }
            if (i === e.UNSIGNED_INT) {
                l = e.R32UI;
            }
            if (i === e.BYTE) {
                l = e.R8I;
            }
            if (i === e.SHORT) {
                l = e.R16I;
            }
            if (i === e.INT) {
                l = e.R32I;
            }
        }
        if (r === e.RG) {
            if (i === e.FLOAT) {
                l = e.RG32F;
            }
            if (i === e.HALF_FLOAT) {
                l = e.RG16F;
            }
            if (i === e.UNSIGNED_BYTE) {
                l = e.RG8;
            }
            if (i === e.UNSIGNED_SHORT && c) {
                l = c.RG16_EXT;
            }
            if (i === e.SHORT && c) {
                l = c.RG16_SNORM_EXT;
            }
        }
        if (r === e.RG_INTEGER) {
            if (i === e.UNSIGNED_BYTE) {
                l = e.RG8UI;
            }
            if (i === e.UNSIGNED_SHORT) {
                l = e.RG16UI;
            }
            if (i === e.UNSIGNED_INT) {
                l = e.RG32UI;
            }
            if (i === e.BYTE) {
                l = e.RG8I;
            }
            if (i === e.SHORT) {
                l = e.RG16I;
            }
            if (i === e.INT) {
                l = e.RG32I;
            }
        }
        if (r === e.RGB_INTEGER) {
            if (i === e.UNSIGNED_BYTE) {
                l = e.RGB8UI;
            }
            if (i === e.UNSIGNED_SHORT) {
                l = e.RGB16UI;
            }
            if (i === e.UNSIGNED_INT) {
                l = e.RGB32UI;
            }
            if (i === e.BYTE) {
                l = e.RGB8I;
            }
            if (i === e.SHORT) {
                l = e.RGB16I;
            }
            if (i === e.INT) {
                l = e.RGB32I;
            }
        }
        if (r === e.RGBA_INTEGER) {
            if (i === e.UNSIGNED_BYTE) {
                l = e.RGBA8UI;
            }
            if (i === e.UNSIGNED_SHORT) {
                l = e.RGBA16UI;
            }
            if (i === e.UNSIGNED_INT) {
                l = e.RGBA32UI;
            }
            if (i === e.BYTE) {
                l = e.RGBA8I;
            }
            if (i === e.SHORT) {
                l = e.RGBA16I;
            }
            if (i === e.INT) {
                l = e.RGBA32I;
            }
        }
        if (r === e.RGB) {
            if (i === e.UNSIGNED_SHORT && c) {
                l = c.RGB16_EXT;
            }
            if (i === e.SHORT && c) {
                l = c.RGB16_SNORM_EXT;
            }
            if (i === e.UNSIGNED_INT_5_9_9_9_REV) {
                l = e.RGB9_E5;
            }
            if (i === e.UNSIGNED_INT_10F_11F_11F_REV) {
                l = e.R11F_G11F_B10F;
            }
        }
        if (r === e.RGBA) {
            let t = s ? ht : V_1.getTransfer(colorSpace);
            if (i === e.FLOAT) {
                l = e.RGBA32F;
            }
            if (i === e.HALF_FLOAT) {
                l = e.RGBA16F;
            }
            if (i === e.UNSIGNED_BYTE) {
                l = t === `srgb` ? e.SRGB8_ALPHA8 : e.RGBA8;
            }
            if (i === e.UNSIGNED_SHORT && c) {
                l = c.RGBA16_EXT;
            }
            if (i === e.SHORT && c) {
                l = c.RGBA16_SNORM_EXT;
            }
            if (i === e.UNSIGNED_SHORT_4_4_4_4) {
                l = e.RGBA4;
            }
            if (i === e.UNSIGNED_SHORT_5_5_5_1) {
                l = e.RGB5_A1;
            }
        }
        if (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) {
            t.get(`EXT_color_buffer_float`);
        }
        return l;
    }
    function C(t, n) {
        let r;
        if (t) {
            if (n === null || n === 1014 || n === 1020) {
                r = e.DEPTH24_STENCIL8;
            } else if (n === 1015) {
                r = e.DEPTH32F_STENCIL8;
            } else if (n === 1012) {
                r = e.DEPTH24_STENCIL8;
                cr_1(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`);
            }
        } else if (n === null || n === 1014 || n === 1020) {
            r = e.DEPTH_COMPONENT24;
        } else if (n === 1015) {
            r = e.DEPTH_COMPONENT32F;
        } else if (n === 1012) {
            r = e.DEPTH_COMPONENT16;
        }
        return r;
    }
    function w(e, t) {
        if (y(e) === true || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006) {
            return Math.log2(Math.max(t.width, t.height)) + 1;
        }
        if (e.mipmaps !== undefined && e.mipmaps.length > 0) {
            return e.mipmaps.length;
        }
        if (e.isCompressedTexture && Array.isArray(e.image)) {
            return t.mipmaps.length;
        }
        return 1;
    }
    function T({ target }) {
        target.removeEventListener(`dispose`, T);
        D(target);
        if (target.isVideoTexture) {
            u.delete(target);
        }
        if (target.isHTMLTexture) {
            d.delete(target);
        }
    }
    function E({ target }) {
        target.removeEventListener(`dispose`, E);
        ee(target);
    }
    function D(target) {
        let t = r.get(target);
        if (t.__webglInit === undefined) {
            return;
        }
        let e_source = target.source;
        let i = m.get(e_source);
        if (i) {
            let r = i[t.__cacheKey];
            r.usedTimes--;
            if (r.usedTimes === 0) {
                O(target);
            }
            if (Object.keys(i).length === 0) {
                m.delete(e_source);
            }
        }
        r.remove(target);
    }
    function O(t) {
        let n = r.get(t);
        e.deleteTexture(n.__webglTexture);
        let t_source = t.source;
        let a = m.get(t_source);
        delete a[n.__cacheKey];
        o.memory.textures--;
    }
    function ee(target) {
        let n = r.get(target);
        if (target.depthTexture) {
            target.depthTexture.dispose();
            r.remove(target.depthTexture);
        }
        if (target.isWebGLCubeRenderTarget) {
            for(let t = 0; t < 6; t++){
                if (Array.isArray(n.__webglFramebuffer[t])) {
                    for(let r = 0; r < n.__webglFramebuffer[t].length; r++){
                        e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
                    }
                } else {
                    e.deleteFramebuffer(n.__webglFramebuffer[t]);
                }
                if (n.__webglDepthbuffer) {
                    e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
                }
            }
        } else {
            if (Array.isArray(n.__webglFramebuffer)) {
                for(let t = 0; t < n.__webglFramebuffer.length; t++){
                    e.deleteFramebuffer(n.__webglFramebuffer[t]);
                }
            } else {
                e.deleteFramebuffer(n.__webglFramebuffer);
            }
            if (n.__webglDepthbuffer) {
                e.deleteRenderbuffer(n.__webglDepthbuffer);
            }
            if (n.__webglMultisampledFramebuffer) {
                e.deleteFramebuffer(n.__webglMultisampledFramebuffer);
            }
            if (n.__webglColorRenderbuffer) {
                for(let t = 0; t < n.__webglColorRenderbuffer.length; t++){
                    if (n.__webglColorRenderbuffer[t]) {
                        e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
                    }
                }
            }
            if (n.__webglDepthRenderbuffer) {
                e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
            }
        }
        let t_textures = target.textures;
        for(let t = 0, n = t_textures.length; t < n; t++){
            let n = r.get(t_textures[t]);
            if (n.__webglTexture) {
                e.deleteTexture(n.__webglTexture);
                o.memory.textures--;
            }
            r.remove(t_textures[t]);
        }
        r.remove(target);
    }
    let k = 0;
    function A() {
        k = 0;
    }
    function j() {
        return k;
    }
    function M(e) {
        k = e;
    }
    function te() {
        let e = k;
        if (e >= i.maxTextures) {
            cr_1(`WebGLTextures: Trying to use ` + (e + 1) + ` texture units while this GPU supports only ` + i.maxTextures);
        }
        k += 1;
        return e;
    }
    function ne(e) {
        let t = [];
        t.push(e.wrapS);
        t.push(e.wrapT);
        t.push(e.wrapR || 0);
        t.push(e.magFilter);
        t.push(e.minFilter);
        t.push(e.anisotropy);
        t.push(e.internalFormat);
        t.push(e.format);
        t.push(e.type);
        t.push(e.generateMipmaps);
        t.push(e.premultiplyAlpha);
        t.push(e.flipY);
        t.push(e.unpackAlignment);
        t.push(e.colorSpace);
        return t.join();
    }
    function N(t, i) {
        let a = r.get(t);
        if (t.isVideoTexture) {
            z(t);
        }
        if (t.isRenderTargetTexture === false && t.isExternalTexture !== true && t.version > 0 && a.__version !== t.version) {
            let e = t.image;
            if (e === null) {
                cr_1(`WebGLRenderer: Texture marked for update but no image data found.`);
            } else if (e.complete === false) {
                cr_1(`WebGLRenderer: Texture marked for update but image is incomplete`);
            } else {
                fe(a, t, i);
                return;
            }
        } else {
            if (t.isExternalTexture) {
                a.__webglTexture = t.sourceTexture ? t.sourceTexture : null;
            }
        }
        n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
    }
    function re(t, i) {
        let a = r.get(t);
        if (t.isRenderTargetTexture === false && t.version > 0 && a.__version !== t.version) {
            fe(a, t, i);
        } else {
            if (t.isExternalTexture) {
                a.__webglTexture = t.sourceTexture ? t.sourceTexture : null;
            }
            n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
        }
    }
    function P(t, i) {
        let a = r.get(t);
        if (t.isRenderTargetTexture === false && t.version > 0 && a.__version !== t.version) {
            fe(a, t, i);
        } else {
            n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
        }
    }
    function ie(t, i) {
        let a = r.get(t);
        if (t.isCubeDepthTexture !== true && t.version > 0 && a.__version !== t.version) {
            R(a, t, i);
        } else {
            n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
        }
    }
    let ae = {
        [Sn_1]: e.REPEAT,
        [z_1]: e.CLAMP_TO_EDGE,
        [wt_1]: e.MIRRORED_REPEAT
    };
    let oe = {
        [Tt_1]: e.NEAREST,
        [Dt_1]: e.NEAREST_MIPMAP_NEAREST,
        [Et_1]: e.NEAREST_MIPMAP_LINEAR,
        [dt]: e.LINEAR,
        [pt]: e.LINEAR_MIPMAP_NEAREST,
        [ft_1]: e.LINEAR_MIPMAP_LINEAR
    };
    let se = {
        512: e.NEVER,
        519: e.ALWAYS,
        513: e.LESS,
        515: e.LEQUAL,
        514: e.EQUAL,
        518: e.GEQUAL,
        516: e.GREATER,
        517: e.NOTEQUAL
    };
    function le(n, a) {
        if (a.type === 1015 && t.has(`OES_texture_float_linear`) === false && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008)) {
            cr_1(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`);
        }
        e.texParameteri(n, e.TEXTURE_WRAP_S, ae[a.wrapS]);
        e.texParameteri(n, e.TEXTURE_WRAP_T, ae[a.wrapT]);
        if (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) {
            e.texParameteri(n, e.TEXTURE_WRAP_R, ae[a.wrapR]);
        }
        e.texParameteri(n, e.TEXTURE_MAG_FILTER, oe[a.magFilter]);
        e.texParameteri(n, e.TEXTURE_MIN_FILTER, oe[a.minFilter]);
        if (a.compareFunction) {
            e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE);
            e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, se[a.compareFunction]);
        }
        if (t.has(`EXT_texture_filter_anisotropic`) === true) {
            if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has(`OES_texture_float_linear`) === false) {
                return;
            }
            if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
                let o = t.get(`EXT_texture_filter_anisotropic`);
                e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy()));
                r.get(a).__currentAnisotropy = a.anisotropy;
            }
        }
    }
    function ue(t, n) {
        let r = false;
        if (t.__webglInit === undefined) {
            t.__webglInit = true;
            n.addEventListener(`dispose`, T);
        }
        let n_source = n.source;
        let a = m.get(n_source);
        if (a === undefined) {
            a = {};
            m.set(n_source, a);
        }
        let s = ne(n);
        if (s !== t.__cacheKey) {
            if (a[s] === undefined) {
                a[s] = {
                    texture: e.createTexture(),
                    usedTimes: 0
                };
                o.memory.textures++;
                r = true;
            }
            a[s].usedTimes++;
            let i = a[t.__cacheKey];
            if (i !== undefined) {
                a[t.__cacheKey].usedTimes--;
                if (i.usedTimes === 0) {
                    O(n);
                }
            }
            t.__cacheKey = s;
            t.__webglTexture = a[s].texture;
        }
        return r;
    }
    function I(e, width, n) {
        return Math.floor(Math.floor(e / n) / width);
    }
    function de(t, r, i, a) {
        let t_updateRanges = t.updateRanges;
        if (t_updateRanges.length === 0) {
            n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
        } else {
            t_updateRanges.sort((e, t)=>e.start - t.start);
            let s = 0;
            for(let e = 1; e < t_updateRanges.length; e++){
                let t = t_updateRanges[s];
                let updateRange = t_updateRanges[e];
                let i = t.start + t.count;
                let a = I(updateRange.start, r.width, 4);
                let c = I(t.start, r.width, 4);
                if (updateRange.start <= i + 1 && a === c && I(updateRange.start + updateRange.count - 1, r.width, 4) === a) {
                    t.count = Math.max(t.count, updateRange.start + updateRange.count - t.start);
                } else {
                    ++s;
                    t_updateRanges[s] = updateRange;
                }
            }
            t_updateRanges.length = s + 1;
            let c = n.getParameter(e.UNPACK_ROW_LENGTH);
            let l = n.getParameter(e.UNPACK_SKIP_PIXELS);
            let u = n.getParameter(e.UNPACK_SKIP_ROWS);
            n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
            for(let t = 0, s = t_updateRanges.length; t < s; t++){
                let updateRange = t_updateRanges[t];
                let c = Math.floor(updateRange.start / 4);
                let l = Math.ceil(updateRange.count / 4);
                let u = c % r.width;
                let d = Math.floor(c / r.width);
                let f = l;
                n.pixelStorei(e.UNPACK_SKIP_PIXELS, u);
                n.pixelStorei(e.UNPACK_SKIP_ROWS, d);
                n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data);
            }
            t.clearUpdateRanges();
            n.pixelStorei(e.UNPACK_ROW_LENGTH, c);
            n.pixelStorei(e.UNPACK_SKIP_PIXELS, l);
            n.pixelStorei(e.UNPACK_SKIP_ROWS, u);
        }
    }
    function fe(t, o, s) {
        let e_TEXTURE_2D = e.TEXTURE_2D;
        if (o.isDataArrayTexture || o.isCompressedArrayTexture) {
            e_TEXTURE_2D = e.TEXTURE_2D_ARRAY;
        }
        if (o.isData3DTexture) {
            e_TEXTURE_2D = e.TEXTURE_3D;
        }
        let l = ue(t, o);
        let o_source = o.source;
        n.bindTexture(e_TEXTURE_2D, t.__webglTexture, e.TEXTURE0 + s);
        let f = r.get(o_source);
        if (o_source.version !== f.__version || l === true) {
            n.activeTexture(e.TEXTURE0 + s);
            if (!(typeof ImageBitmap < `u` && o.image instanceof ImageBitmap)) {
                let t = V_1.getPrimaries(V_1.workingColorSpace);
                let r = o.colorSpace === `` ? null : V_1.getPrimaries(o.colorSpace);
                let i = o.colorSpace === `` || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
                n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY);
                n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha);
                n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
            }
            n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
            let t = v(o.image, false, i.maxTextureSize);
            t = Ee(o, t);
            let r = a.convert(o.format, o.colorSpace);
            let p = a.convert(o.type);
            let m = S(o.internalFormat, r, p, o.normalized, o.colorSpace, o.isVideoTexture);
            le(e_TEXTURE_2D, o);
            let h;
            let g = o.mipmaps;
            let _ = o.isVideoTexture !== true;
            let x = f.__version === undefined || l === true;
            let T = o_source.dataReady;
            let E = w(o, t);
            if (o.isDepthTexture) {
                m = C(o.format === Y_1, o.type);
                if (x) {
                    if (_) {
                        n.texStorage2D(e.TEXTURE_2D, 1, m, t.width, t.height);
                    } else {
                        n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, null);
                    }
                }
            } else if (o.isDataTexture) {
                if (g.length > 0) {
                    if (_ && x) {
                        n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height);
                    }
                    for(let t = 0, i = g.length; t < i; t++){
                        h = g[t];
                        if (_) {
                            if (T) {
                                n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data);
                            }
                        } else {
                            n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data);
                        }
                    }
                    o.generateMipmaps = false;
                } else {
                    if (_) {
                        if (x) {
                            n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height);
                        }
                        if (T) {
                            de(o, t, r, p);
                        }
                    } else {
                        n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, t.data);
                    }
                }
            } else if (o.isCompressedTexture) {
                if (o.isCompressedArrayTexture) {
                    if (_ && x) {
                        n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, g[0].width, g[0].height, t.depth);
                    }
                    for(let i = 0, a = g.length; i < a; i++){
                        h = g[i];
                        if (o.format !== 1023) {
                            if (r !== null) {
                                if (_) {
                                    if (T) {
                                        if (o.layerUpdates.size > 0) {
                                            let t = rr_1(h.width, h.height, o.format, o.type);
                                            for (let a of o.layerUpdates){
                                                let o = h.data.subarray(a * t / h.data.BYTES_PER_ELEMENT, (a + 1) * t / h.data.BYTES_PER_ELEMENT);
                                                n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, a, h.width, h.height, 1, r, o);
                                            }
                                        } else {
                                            n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, h.data);
                                        }
                                    }
                                } else {
                                    n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, h.data, 0, 0);
                                }
                            } else {
                                cr_1(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);
                            }
                        } else {
                            if (_) {
                                if (T) {
                                    n.texSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, p, h.data);
                                }
                            } else {
                                n.texImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, r, p, h.data);
                            }
                        }
                    }
                    if (o.layerUpdates.size > 0) {
                        o.clearLayerUpdates();
                    }
                } else {
                    if (_ && x) {
                        n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height);
                    }
                    for(let t = 0, i = g.length; t < i; t++){
                        h = g[t];
                        if (o.format === 1023) {
                            if (_) {
                                if (T) {
                                    n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data);
                                }
                            } else {
                                n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data);
                            }
                        } else if (r === null) {
                            cr_1(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);
                        } else if (_) {
                            if (T) {
                                n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, h.data);
                            }
                        } else {
                            n.compressedTexImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, h.data);
                        }
                    }
                }
            } else if (o.isDataArrayTexture) {
                if (_) {
                    if (x) {
                        n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, t.width, t.height, t.depth);
                    }
                    if (T) {
                        if (o.layerUpdates.size > 0) {
                            let i = rr_1(t.width, t.height, o.format, o.type);
                            for (let a of o.layerUpdates){
                                let o = t.data.subarray(a * i / t.data.BYTES_PER_ELEMENT, (a + 1) * i / t.data.BYTES_PER_ELEMENT);
                                n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, a, t.width, t.height, 1, r, p, o);
                            }
                            o.clearLayerUpdates();
                        } else {
                            n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data);
                        }
                    }
                } else {
                    n.texImage3D(e.TEXTURE_2D_ARRAY, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
                }
            } else if (o.isData3DTexture) {
                if (_) {
                    if (x) {
                        n.texStorage3D(e.TEXTURE_3D, E, m, t.width, t.height, t.depth);
                    }
                    if (T) {
                        n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data);
                    }
                } else {
                    n.texImage3D(e.TEXTURE_3D, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
                }
            } else if (o.isFramebufferTexture) {
                if (x) {
                    if (_) {
                        n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height);
                    } else {
                        let i = t.width;
                        let a = t.height;
                        for(let t = 0; t < E; t++){
                            n.texImage2D(e.TEXTURE_2D, t, m, i, a, 0, r, p, null);
                            i >>= 1;
                            a >>= 1;
                        }
                    }
                }
            } else if (o.isHTMLTexture) {
                if (`texElementImage2D` in e) {
                    let n = e.canvas;
                    if (!n.hasAttribute(`layoutsubtree`)) {
                        n.setAttribute(`layoutsubtree`, `true`);
                    }
                    if (t.parentNode !== n) {
                        n.appendChild(t);
                        d.add(o);
                        n.onpaint = (e)=>{
                            let e_changedElements = e.changedElements;
                            for (let e of d){
                                if (e_changedElements.includes(e.image)) {
                                    e.needsUpdate = true;
                                }
                            }
                        };
                        n.requestPaint();
                        return;
                    }
                    if (e.texElementImage2D.length === 3) {
                        e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
                    } else {
                        let n = e.RGBA;
                        let r = e.RGBA;
                        let i = e.UNSIGNED_BYTE;
                        e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
                    }
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
                }
            } else if (g.length > 0) {
                if (_ && x) {
                    let t = De(g[0]);
                    n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height);
                }
                for(let t = 0, i = g.length; t < i; t++){
                    h = g[t];
                    if (_) {
                        if (T) {
                            n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, p, h);
                        }
                    } else {
                        n.texImage2D(e.TEXTURE_2D, t, m, r, p, h);
                    }
                }
                o.generateMipmaps = false;
            } else if (_) {
                if (x) {
                    let r = De(t);
                    n.texStorage2D(e.TEXTURE_2D, E, m, r.width, r.height);
                }
                if (T) {
                    n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, p, t);
                }
            } else {
                n.texImage2D(e.TEXTURE_2D, 0, m, r, p, t);
            }
            if (y(o)) {
                b(e_TEXTURE_2D);
            }
            f.__version = o_source.version;
            if (o.onUpdate) {
                o.onUpdate(o);
            }
        }
        t.__version = o.version;
    }
    function R(t, o, s) {
        if (o.image.length !== 6) {
            return;
        }
        let c = ue(t, o);
        let o_source = o.source;
        n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
        let u = r.get(o_source);
        if (o_source.version !== u.__version || c === true) {
            n.activeTexture(e.TEXTURE0 + s);
            let t = V_1.getPrimaries(V_1.workingColorSpace);
            let r = o.colorSpace === `` ? null : V_1.getPrimaries(o.colorSpace);
            let d = o.colorSpace === `` || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
            n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY);
            n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha);
            n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
            n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
            let f = o.isCompressedTexture || o.image[0].isCompressedTexture;
            let p = o.image[0] && o.image[0].isDataTexture;
            let m = [];
            for(let e = 0; e < 6; e++){
                if (!f && !p) {
                    m[e] = v(o.image[e], true, i.maxCubemapSize);
                } else {
                    m[e] = p ? o.image[e].image : o.image[e];
                }
                m[e] = Ee(o, m[e]);
            }
            let h = m[0];
            let g = a.convert(o.format, o.colorSpace);
            let _ = a.convert(o.type);
            let x = S(o.internalFormat, g, _, o.normalized, o.colorSpace);
            let C = o.isVideoTexture !== true;
            let T = u.__version === undefined || c === true;
            let E = o_source.dataReady;
            let D = w(o, h);
            le(e.TEXTURE_CUBE_MAP, o);
            let O;
            if (f) {
                if (C && T) {
                    n.texStorage2D(e.TEXTURE_CUBE_MAP, D, x, h.width, h.height);
                }
                for(let t = 0; t < 6; t++){
                    O = m[t].mipmaps;
                    for(let r = 0; r < O.length; r++){
                        let i = O[r];
                        if (o.format === 1023) {
                            if (C) {
                                if (E) {
                                    n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, _, i.data);
                                }
                            } else {
                                n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, x, i.width, i.height, 0, g, _, i.data);
                            }
                        } else if (g === null) {
                            cr_1(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`);
                        } else if (C) {
                            if (E) {
                                n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, i.data);
                            }
                        } else {
                            n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, x, i.width, i.height, 0, i.data);
                        }
                    }
                }
            } else {
                O = o.mipmaps;
                if (C && T) {
                    if (O.length > 0) {
                        D++;
                    }
                    let t = De(m[0]);
                    n.texStorage2D(e.TEXTURE_CUBE_MAP, D, x, t.width, t.height);
                }
                for(let t = 0; t < 6; t++){
                    if (p) {
                        if (C) {
                            if (E) {
                                n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, m[t].width, m[t].height, g, _, m[t].data);
                            }
                        } else {
                            n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, m[t].width, m[t].height, 0, g, _, m[t].data);
                        }
                        for(let r = 0; r < O.length; r++){
                            let i = O[r].image[t].image;
                            if (C) {
                                if (E) {
                                    n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, g, _, i.data);
                                }
                            } else {
                                n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, x, i.width, i.height, 0, g, _, i.data);
                            }
                        }
                    } else {
                        if (C) {
                            if (E) {
                                n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, m[t]);
                            }
                        } else {
                            n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, g, _, m[t]);
                        }
                        for(let r = 0; r < O.length; r++){
                            let i = O[r];
                            if (C) {
                                if (E) {
                                    n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, g, _, i.image[t]);
                                }
                            } else {
                                n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, x, g, _, i.image[t]);
                            }
                        }
                    }
                }
            }
            if (y(o)) {
                b(e.TEXTURE_CUBE_MAP);
            }
            u.__version = o_source.version;
            if (o.onUpdate) {
                o.onUpdate(o);
            }
        }
        t.__version = o.version;
    }
    function pe(t, i, o, c, l, u) {
        let d = a.convert(o.format, o.colorSpace);
        let f = a.convert(o.type);
        let p = S(o.internalFormat, d, f, o.normalized, o.colorSpace);
        let m = r.get(i);
        let h = r.get(o);
        h.__renderTarget = i;
        if (!m.__hasExternalTextures) {
            let t = Math.max(1, i.width >> u);
            let r = Math.max(1, i.height >> u);
            if (l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY) {
                n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null);
            } else {
                n.texImage2D(l, u, p, t, r, 0, d, f, null);
            }
        }
        n.bindFramebuffer(e.FRAMEBUFFER, t);
        if (Te(i)) {
            s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, c, l, h.__webglTexture, 0, we(i));
        } else if (l === e.TEXTURE_2D || l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) {
            e.framebufferTexture2D(e.FRAMEBUFFER, c, l, h.__webglTexture, u);
        }
        n.bindFramebuffer(e.FRAMEBUFFER, null);
    }
    function me(t, n, r) {
        e.bindRenderbuffer(e.RENDERBUFFER, t);
        if (n.depthBuffer) {
            let i = n.depthTexture;
            let a = i && i.isDepthTexture ? i.type : null;
            let o = C(n.stencilBuffer, a);
            let c = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
            if (Te(n)) {
                s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, we(n), o, n.width, n.height);
            } else if (r) {
                e.renderbufferStorageMultisample(e.RENDERBUFFER, we(n), o, n.width, n.height);
            } else {
                e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height);
            }
            e.framebufferRenderbuffer(e.FRAMEBUFFER, c, e.RENDERBUFFER, t);
        } else {
            let t = n.textures;
            for (const o of t){
                let c = a.convert(o.format, o.colorSpace);
                let l = a.convert(o.type);
                let u = S(o.internalFormat, c, l, o.normalized, o.colorSpace);
                if (Te(n)) {
                    s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, we(n), u, n.width, n.height);
                } else if (r) {
                    e.renderbufferStorageMultisample(e.RENDERBUFFER, we(n), u, n.width, n.height);
                } else {
                    e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
                }
            }
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null);
    }
    function he(t, i, o) {
        let c = i.isWebGLCubeRenderTarget === true;
        n.bindFramebuffer(e.FRAMEBUFFER, t);
        if (!(i.depthTexture && i.depthTexture.isDepthTexture)) {
            throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);
        }
        let l = r.get(i.depthTexture);
        l.__renderTarget = i;
        if (!l.__webglTexture || i.depthTexture.image.width !== i.width || i.depthTexture.image.height !== i.height) {
            i.depthTexture.image.width = i.width;
            i.depthTexture.image.height = i.height;
            i.depthTexture.needsUpdate = true;
        }
        if (c) {
            if (l.__webglInit === undefined) {
                l.__webglInit = true;
                i.depthTexture.addEventListener(`dispose`, T);
            }
            if (l.__webglTexture === undefined) {
                l.__webglTexture = e.createTexture();
                n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture);
                le(e.TEXTURE_CUBE_MAP, i.depthTexture);
                let t = a.convert(i.depthTexture.format);
                let r = a.convert(i.depthTexture.type);
                let o;
                if (i.depthTexture.format === 1026) {
                    o = e.DEPTH_COMPONENT24;
                } else if (i.depthTexture.format === 1027) {
                    o = e.DEPTH24_STENCIL8;
                }
                for(let n = 0; n < 6; n++){
                    e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, o, i.width, i.height, 0, t, r, null);
                }
            }
        } else {
            N(i.depthTexture, 0);
        }
        let l___webglTexture = l.__webglTexture;
        let d = we(i);
        let f = c ? e.TEXTURE_CUBE_MAP_POSITIVE_X + o : e.TEXTURE_2D;
        let p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        if (i.depthTexture.format === 1026) {
            if (Te(i)) {
                s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, l___webglTexture, 0, d);
            } else {
                e.framebufferTexture2D(e.FRAMEBUFFER, p, f, l___webglTexture, 0);
            }
        } else if (i.depthTexture.format === 1027) {
            if (Te(i)) {
                s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, l___webglTexture, 0, d);
            } else {
                e.framebufferTexture2D(e.FRAMEBUFFER, p, f, l___webglTexture, 0);
            }
        } else {
            throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`);
        }
    }
    function _e(t) {
        let i = r.get(t);
        let a = t.isWebGLCubeRenderTarget === true;
        if (i.__boundDepthTexture !== t.depthTexture) {
            let e = t.depthTexture;
            if (i.__depthDisposeCallback) {
                i.__depthDisposeCallback();
            }
            if (e) {
                let t = ()=>{
                    delete i.__boundDepthTexture;
                    delete i.__depthDisposeCallback;
                    e.removeEventListener(`dispose`, t);
                };
                e.addEventListener(`dispose`, t);
                i.__depthDisposeCallback = t;
            }
            i.__boundDepthTexture = e;
        }
        if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
            if (a) {
                for(let e = 0; e < 6; e++){
                    he(i.__webglFramebuffer[e], t, e);
                }
            } else {
                let e = t.texture.mipmaps;
                if (e && e.length > 0) {
                    he(i.__webglFramebuffer[0], t, 0);
                } else {
                    he(i.__webglFramebuffer, t, 0);
                }
            }
        } else if (a) {
            i.__webglDepthbuffer = [];
            for(let r = 0; r < 6; r++){
                n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]);
                if (i.__webglDepthbuffer[r] === undefined) {
                    i.__webglDepthbuffer[r] = e.createRenderbuffer();
                    me(i.__webglDepthbuffer[r], t, false);
                } else {
                    let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
                    let a = i.__webglDepthbuffer[r];
                    e.bindRenderbuffer(e.RENDERBUFFER, a);
                    e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
                }
            }
        } else {
            let r = t.texture.mipmaps;
            if (r && r.length > 0) {
                n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]);
            } else {
                n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer);
            }
            if (i.__webglDepthbuffer === undefined) {
                i.__webglDepthbuffer = e.createRenderbuffer();
                me(i.__webglDepthbuffer, t, false);
            } else {
                let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
                let r = i.__webglDepthbuffer;
                e.bindRenderbuffer(e.RENDERBUFFER, r);
                e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
            }
        }
        n.bindFramebuffer(e.FRAMEBUFFER, null);
    }
    function ve(t, n, i) {
        let a = r.get(t);
        if (n !== undefined) {
            pe(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0);
        }
        if (i !== undefined) {
            _e(t);
        }
    }
    function ye(t) {
        let t_texture = t.texture;
        let s = r.get(t);
        let c = r.get(t_texture);
        t.addEventListener(`dispose`, E);
        let t_textures = t.textures;
        let u = t.isWebGLCubeRenderTarget === true;
        let d = t_textures.length > 1;
        if (!d) {
            if (c.__webglTexture === undefined) {
                c.__webglTexture = e.createTexture();
            }
            c.__version = t_texture.version;
            o.memory.textures++;
        }
        if (u) {
            s.__webglFramebuffer = [];
            for(let t = 0; t < 6; t++){
                if (t_texture.mipmaps && t_texture.mipmaps.length > 0) {
                    s.__webglFramebuffer[t] = [];
                    for(let n = 0; n < t_texture.mipmaps.length; n++){
                        s.__webglFramebuffer[t][n] = e.createFramebuffer();
                    }
                } else {
                    s.__webglFramebuffer[t] = e.createFramebuffer();
                }
            }
        } else {
            if (t_texture.mipmaps && t_texture.mipmaps.length > 0) {
                s.__webglFramebuffer = [];
                for(let t = 0; t < t_texture.mipmaps.length; t++){
                    s.__webglFramebuffer[t] = e.createFramebuffer();
                }
            } else {
                s.__webglFramebuffer = e.createFramebuffer();
            }
            if (d) {
                for(let t = 0, n = t_textures.length; t < n; t++){
                    let n = r.get(t_textures[t]);
                    if (n.__webglTexture === undefined) {
                        n.__webglTexture = e.createTexture();
                        o.memory.textures++;
                    }
                }
            }
            if (t.samples > 0 && Te(t) === false) {
                s.__webglMultisampledFramebuffer = e.createFramebuffer();
                s.__webglColorRenderbuffer = [];
                n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer);
                for(let n = 0; n < t_textures.length; n++){
                    let texture = t_textures[n];
                    s.__webglColorRenderbuffer[n] = e.createRenderbuffer();
                    e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
                    let i = a.convert(texture.format, texture.colorSpace);
                    let o = a.convert(texture.type);
                    let c = S(texture.internalFormat, i, o, texture.normalized, texture.colorSpace, t.isXRRenderTarget === true);
                    let u = we(t);
                    e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height);
                    e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
                }
                e.bindRenderbuffer(e.RENDERBUFFER, null);
                if (t.depthBuffer) {
                    s.__webglDepthRenderbuffer = e.createRenderbuffer();
                    me(s.__webglDepthRenderbuffer, t, true);
                }
                n.bindFramebuffer(e.FRAMEBUFFER, null);
            }
        }
        if (u) {
            n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture);
            le(e.TEXTURE_CUBE_MAP, t_texture);
            for(let n = 0; n < 6; n++){
                if (t_texture.mipmaps && t_texture.mipmaps.length > 0) {
                    for(let r = 0; r < t_texture.mipmaps.length; r++){
                        pe(s.__webglFramebuffer[n][r], t, t_texture, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
                    }
                } else {
                    pe(s.__webglFramebuffer[n], t, t_texture, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
                }
            }
            if (y(t_texture)) {
                b(e.TEXTURE_CUBE_MAP);
            }
            n.unbindTexture();
        } else if (d) {
            for(let i = 0, a = t_textures.length; i < a; i++){
                let texture = t_textures[i];
                let o = r.get(texture);
                let c = e.TEXTURE_2D;
                if (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) {
                    c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY;
                }
                n.bindTexture(c, o.__webglTexture);
                le(c, texture);
                pe(s.__webglFramebuffer, t, texture, e.COLOR_ATTACHMENT0 + i, c, 0);
                if (y(texture)) {
                    b(c);
                }
            }
            n.unbindTexture();
        } else {
            let r = e.TEXTURE_2D;
            if (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) {
                r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY;
            }
            n.bindTexture(r, c.__webglTexture);
            le(r, t_texture);
            if (t_texture.mipmaps && t_texture.mipmaps.length > 0) {
                for(let n = 0; n < t_texture.mipmaps.length; n++){
                    pe(s.__webglFramebuffer[n], t, t_texture, e.COLOR_ATTACHMENT0, r, n);
                }
            } else {
                pe(s.__webglFramebuffer, t, t_texture, e.COLOR_ATTACHMENT0, r, 0);
            }
            if (y(t_texture)) {
                b(r);
            }
            n.unbindTexture();
        }
        if (t.depthBuffer) {
            _e(t);
        }
    }
    function be(e) {
        let e_textures = e.textures;
        for(let i = 0, a = e_textures.length; i < a; i++){
            let texture = e_textures[i];
            if (y(texture)) {
                let t = x(e);
                let i = r.get(texture).__webglTexture;
                n.bindTexture(t, i);
                b(t);
                n.unbindTexture();
            }
        }
    }
    let xe = [];
    let Se = [];
    function Ce(t) {
        if (t.samples > 0) {
            if (Te(t) === false) {
                let i = t.textures;
                let a = t.width;
                let o = t.height;
                let s = e.COLOR_BUFFER_BIT;
                let l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
                let u = r.get(t);
                let d = i.length > 1;
                if (d) {
                    for(let t = 0; t < i.length; t++){
                        n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer);
                        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null);
                        n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer);
                        e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
                    }
                }
                n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
                let f = t.texture.mipmaps;
                if (f && f.length > 0) {
                    n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer[0]);
                } else {
                    n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
                }
                for(let n = 0; n < i.length; n++){
                    if (t.resolveDepthBuffer) {
                        if (t.depthBuffer) {
                            s |= e.DEPTH_BUFFER_BIT;
                        }
                        if (t.stencilBuffer && t.resolveStencilBuffer) {
                            s |= e.STENCIL_BUFFER_BIT;
                        }
                    }
                    if (d) {
                        e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, u.__webglColorRenderbuffer[n]);
                        let t = r.get(i[n]).__webglTexture;
                        e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
                    }
                    e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST);
                    if (c === true) {
                        xe.length = 0;
                        Se.length = 0;
                        xe.push(e.COLOR_ATTACHMENT0 + n);
                        if (t.depthBuffer && t.storeMultisampledDepthBuffer === false) {
                            xe.push(l);
                            Se.push(l);
                            e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Se);
                        }
                        e.invalidateFramebuffer(e.READ_FRAMEBUFFER, xe);
                    }
                }
                n.bindFramebuffer(e.READ_FRAMEBUFFER, null);
                n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null);
                if (d) {
                    for(let t = 0; t < i.length; t++){
                        n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer);
                        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, u.__webglColorRenderbuffer[t]);
                        let a = r.get(i[t]).__webglTexture;
                        n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer);
                        e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
                    }
                }
                n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
            } else if (t.depthBuffer && t.storeMultisampledDepthBuffer === false && c) {
                let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
                e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [
                    n
                ]);
            }
        }
    }
    function we(e) {
        return Math.min(i.maxSamples, e.samples);
    }
    function Te(e) {
        let n = r.get(e);
        return e.samples > 0 && t.has(`WEBGL_multisampled_render_to_texture`) === true && n.__useRenderToTexture !== false;
    }
    function z(e) {
        let frame = o.render.frame;
        if (u.get(e) !== frame) {
            u.set(e, frame);
            e.update();
        }
    }
    function Ee(e, t) {
        let e_colorSpace = e.colorSpace;
        let e_format = e.format;
        let e_type = e.type;
        if (!(e.isCompressedTexture === true || e.isVideoTexture === true)) {
            if (e_colorSpace !== `srgb-linear` && e_colorSpace !== ``) {
                if (V_1.getTransfer(e_colorSpace) === `srgb`) {
                    if (e_format !== 1023 || e_type !== 1009) {
                        cr_1(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`);
                    }
                } else {
                    nr_1(`WebGLTextures: Unsupported texture color space:`, e_colorSpace);
                }
            }
        }
        return t;
    }
    function De(e) {
        if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) {
            l.width = e.naturalWidth || e.width;
            l.height = e.naturalHeight || e.height;
        } else if (typeof VideoFrame < `u` && e instanceof VideoFrame) {
            l.width = e.displayWidth;
            l.height = e.displayHeight;
        } else {
            l.width = e.width;
            l.height = e.height;
        }
        return l;
    }
    this.allocateTextureUnit = te;
    this.resetTextureUnits = A;
    this.getTextureUnits = j;
    this.setTextureUnits = M;
    this.setTexture2D = N;
    this.setTexture2DArray = re;
    this.setTexture3D = P;
    this.setTextureCube = ie;
    this.rebindTextures = ve;
    this.setupRenderTarget = ye;
    this.updateRenderTargetMipmap = be;
    this.updateMultisampleRenderTarget = Ce;
    this.setupDepthRenderbuffer = _e;
    this.setupFrameBufferTexture = pe;
    this.useMultisampledRTT = Te;
    this.isReversedDepthBuffer = function() {
        return n.buffers.depth.getReversed();
    };
}
function Oi(e, t) {
    function convert(n, r = ``) {
        let i;
        let a = V_1.getTransfer(r);
        if (n === 1009) {
            return e.UNSIGNED_BYTE;
        }
        if (n === 1017) {
            return e.UNSIGNED_SHORT_4_4_4_4;
        }
        if (n === 1018) {
            return e.UNSIGNED_SHORT_5_5_5_1;
        }
        if (n === 35902) {
            return e.UNSIGNED_INT_5_9_9_9_REV;
        }
        if (n === 35899) {
            return e.UNSIGNED_INT_10F_11F_11F_REV;
        }
        if (n === 1010) {
            return e.BYTE;
        }
        if (n === 1011) {
            return e.SHORT;
        }
        if (n === 1012) {
            return e.UNSIGNED_SHORT;
        }
        if (n === 1013) {
            return e.INT;
        }
        if (n === 1014) {
            return e.UNSIGNED_INT;
        }
        if (n === 1015) {
            return e.FLOAT;
        }
        if (n === 1016) {
            return e.HALF_FLOAT;
        }
        if (n === 1021) {
            return e.ALPHA;
        }
        if (n === 1022) {
            return e.RGB;
        }
        if (n === 1023) {
            return e.RGBA;
        }
        if (n === 1026) {
            return e.DEPTH_COMPONENT;
        }
        if (n === 1027) {
            return e.DEPTH_STENCIL;
        }
        if (n === 1028) {
            return e.RED;
        }
        if (n === 1029) {
            return e.RED_INTEGER;
        }
        if (n === 1030) {
            return e.RG;
        }
        if (n === 1031) {
            return e.RG_INTEGER;
        }
        if (n === 1033) {
            return e.RGBA_INTEGER;
        }
        if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
            if (a === `srgb`) {
                i = t.get(`WEBGL_compressed_texture_s3tc_srgb`);
                if (i !== null) {
                    if (n === 33776) {
                        return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    }
                    if (n === 33777) {
                        return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    }
                    if (n === 33778) {
                        return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    }
                    if (n === 33779) {
                        return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                    }
                } else {
                    return null;
                }
            } else {
                i = t.get(`WEBGL_compressed_texture_s3tc`);
                if (i !== null) {
                    if (n === 33776) {
                        return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    }
                    if (n === 33777) {
                        return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    }
                    if (n === 33778) {
                        return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    }
                    if (n === 33779) {
                        return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    }
                } else {
                    return null;
                }
            }
        }
        if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
            i = t.get(`WEBGL_compressed_texture_pvrtc`);
            if (i !== null) {
                if (n === 35840) {
                    return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                }
                if (n === 35841) {
                    return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                }
                if (n === 35842) {
                    return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                }
                if (n === 35843) {
                    return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
            } else {
                return null;
            }
        }
        if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
            i = t.get(`WEBGL_compressed_texture_etc`);
            if (i !== null) {
                if (n === 36196 || n === 37492) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ETC2;
                    }
                    return i.COMPRESSED_RGB8_ETC2;
                }
                if (n === 37496) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
                    }
                    return i.COMPRESSED_RGBA8_ETC2_EAC;
                }
                if (n === 37488) {
                    return i.COMPRESSED_R11_EAC;
                }
                if (n === 37489) {
                    return i.COMPRESSED_SIGNED_R11_EAC;
                }
                if (n === 37490) {
                    return i.COMPRESSED_RG11_EAC;
                }
                if (n === 37491) {
                    return i.COMPRESSED_SIGNED_RG11_EAC;
                }
            } else {
                return null;
            }
        }
        if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
            i = t.get(`WEBGL_compressed_texture_astc`);
            if (i !== null) {
                if (n === 37808) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_4x4_KHR;
                }
                if (n === 37809) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_5x4_KHR;
                }
                if (n === 37810) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_5x5_KHR;
                }
                if (n === 37811) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_6x5_KHR;
                }
                if (n === 37812) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_6x6_KHR;
                }
                if (n === 37813) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_8x5_KHR;
                }
                if (n === 37814) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_8x6_KHR;
                }
                if (n === 37815) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_8x8_KHR;
                }
                if (n === 37816) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_10x5_KHR;
                }
                if (n === 37817) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_10x6_KHR;
                }
                if (n === 37818) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_10x8_KHR;
                }
                if (n === 37819) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_10x10_KHR;
                }
                if (n === 37820) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_12x10_KHR;
                }
                if (n === 37821) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
                    }
                    return i.COMPRESSED_RGBA_ASTC_12x12_KHR;
                }
            } else {
                return null;
            }
        }
        if (n === 36492 || n === 36494 || n === 36495) {
            i = t.get(`EXT_texture_compression_bptc`);
            if (i !== null) {
                if (n === 36492) {
                    if (a === `srgb`) {
                        return i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
                    }
                    return i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                }
                if (n === 36494) {
                    return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                }
                if (n === 36495) {
                    return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
                }
            } else {
                return null;
            }
        }
        if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
            i = t.get(`EXT_texture_compression_rgtc`);
            if (i !== null) {
                if (n === 36283) {
                    return i.COMPRESSED_RED_RGTC1_EXT;
                }
                if (n === 36284) {
                    return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                }
                if (n === 36285) {
                    return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
                }
                if (n === 36286) {
                    return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
                }
            } else {
                return null;
            }
        }
        if (n === 1020) {
            return e.UNSIGNED_INT_24_8;
        }
        if (e[n] === undefined) {
            return null;
        }
        return e[n];
    }
    return {
        convert
    };
}
const ki = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
const Ai = `
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

}`;
class ji {
    constructor(){
        this.texture = null;
        this.mesh = null;
        this.depthNear = 0;
        this.depthFar = 0;
    }
    init(e, t) {
        if (this.texture === null) {
            let n = new et(e.texture);
            if (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) {
                this.depthNear = e.depthNear;
                this.depthFar = e.depthFar;
            }
            this.texture = n;
        }
    }
    getMesh(e) {
        if (this.texture !== null && this.mesh === null) {
            let t = e.cameras[0].viewport;
            let n = new Mn_1({
                vertexShader: ki,
                fragmentShader: Ai,
                uniforms: {
                    depthColor: {
                        value: this.texture
                    },
                    depthWidth: {
                        value: t.z
                    },
                    depthHeight: {
                        value: t.w
                    }
                }
            });
            this.mesh = new vt(new Mt_1(20, 20), n);
        }
        return this.mesh;
    }
    reset() {
        this.texture = null;
        this.mesh = null;
    }
    getDepthTexture() {
        return this.texture;
    }
}
class Mi extends $_1 {
    constructor(e, t){
        super();
        let n = this;
        let r = null;
        let i = 1;
        let a = null;
        let s = `local-floor`;
        let c = 1;
        let l = null;
        let u = null;
        let d = null;
        let f = null;
        let baseLayer = null;
        let m = null;
        let h = typeof XRWebGLBinding < `u`;
        let g = new ji;
        let _ = {};
        let y = t.getContextAttributes();
        let b = null;
        let x = null;
        let S = [];
        let C = [];
        let E = new qn_1;
        let D = null;
        let O = null;
        let k = new At_1;
        k.viewport = new Yn_1;
        let A = new At_1;
        A.viewport = new Yn_1;
        let j = [
            k,
            A
        ];
        let M = new M_1;
        let te = null;
        let ne = null;
        this.cameraAutoUpdate = true;
        this.enabled = false;
        this.isPresenting = false;
        this.getController = function(e) {
            let t = S[e];
            if (t === undefined) {
                t = new Qn_1;
                S[e] = t;
            }
            return t.getTargetRaySpace();
        };
        this.getControllerGrip = function(e) {
            let t = S[e];
            if (t === undefined) {
                t = new Qn_1;
                S[e] = t;
            }
            return t.getGripSpace();
        };
        this.getHand = function(e) {
            let t = S[e];
            if (t === undefined) {
                t = new Qn_1;
                S[e] = t;
            }
            return t.getHandSpace();
        };
        function N(e) {
            let t = C.indexOf(e.inputSource);
            if (t === -1) {
                return;
            }
            let n = S[t];
            if (n !== undefined) {
                n.update(e.inputSource, e.frame, l || a);
                n.dispatchEvent({
                    type: e.type,
                    data: e.inputSource
                });
            }
        }
        function re() {
            r.removeEventListener(`select`, N);
            r.removeEventListener(`selectstart`, N);
            r.removeEventListener(`selectend`, N);
            r.removeEventListener(`squeeze`, N);
            r.removeEventListener(`squeezestart`, N);
            r.removeEventListener(`squeezeend`, N);
            r.removeEventListener(`end`, re);
            r.removeEventListener(`inputsourceschange`, P);
            for(let e = 0; e < S.length; e++){
                let t = C[e];
                if (t !== null) {
                    C[e] = null;
                    S[e].disconnect(t);
                }
            }
            te = null;
            ne = null;
            g.reset();
            for(let e in _){
                delete _[e];
            }
            e.setRenderTarget(b);
            baseLayer = null;
            f = null;
            d = null;
            r = null;
            x = null;
            I.stop();
            n.isPresenting = false;
            e.setPixelRatio(D);
            e.setSize(E.width, E.height, false);
            if (O !== null) {
                let e = O.camera;
                e.fov = O.fov;
                e.zoom = O.zoom;
                e.updateProjectionMatrix();
                O = null;
            }
            n.dispatchEvent({
                type: `sessionend`
            });
        }
        this.setFramebufferScaleFactor = function(e) {
            i = e;
            if (n.isPresenting === true) {
                cr_1(`WebXRManager: Cannot change framebuffer scale while presenting.`);
            }
        };
        this.setReferenceSpaceType = function(e) {
            s = e;
            if (n.isPresenting === true) {
                cr_1(`WebXRManager: Cannot change reference space type while presenting.`);
            }
        };
        this.getReferenceSpace = function() {
            return l || a;
        };
        this.setReferenceSpace = function(e) {
            l = e;
        };
        this.getBaseLayer = function() {
            if (f === null) {
                return baseLayer;
            }
            return f;
        };
        this.getBinding = function() {
            if (d === null && h) {
                d = new XRWebGLBinding(r, t);
            }
            return d;
        };
        this.getFrame = function() {
            return m;
        };
        this.getSession = function() {
            return r;
        };
        this.setSession = async function(o) {
            r = o;
            if (r !== null) {
                b = e.getRenderTarget();
                r.addEventListener(`select`, N);
                r.addEventListener(`selectstart`, N);
                r.addEventListener(`selectend`, N);
                r.addEventListener(`squeeze`, N);
                r.addEventListener(`squeezestart`, N);
                r.addEventListener(`squeezeend`, N);
                r.addEventListener(`end`, re);
                r.addEventListener(`inputsourceschange`, P);
                if (y.xrCompatible !== true) {
                    await t.makeXRCompatible();
                }
                D = e.getPixelRatio();
                e.getSize(E);
                if (h && `createProjectionLayer` in XRWebGLBinding.prototype) {
                    let n = null;
                    let a = null;
                    let depthFormat = null;
                    if (y.depth) {
                        depthFormat = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24;
                        n = y.stencil ? Y_1 : J;
                        a = y.stencil ? Vn_1 : Un_1;
                    }
                    let s = {
                        colorFormat: t.RGBA8,
                        depthFormat,
                        scaleFactor: i
                    };
                    d = this.getBinding();
                    f = d.createProjectionLayer(s);
                    r.updateRenderState({
                        layers: [
                            f
                        ]
                    });
                    e.setPixelRatio(1);
                    e.setSize(f.textureWidth, f.textureHeight, false);
                    x = new Zn_1(f.textureWidth, f.textureHeight, {
                        format: zt_1,
                        type: zn_1,
                        depthTexture: new X_1(f.textureWidth, f.textureHeight, a, undefined, undefined, undefined, undefined, undefined, undefined, n),
                        stencilBuffer: y.stencil,
                        colorSpace: e.outputColorSpace,
                        samples: y.antialias ? 4 : 0,
                        resolveDepthBuffer: f.ignoreDepthValues === false,
                        resolveStencilBuffer: f.ignoreDepthValues === false,
                        storeMultisampledDepthBuffer: f.ignoreDepthValues === false,
                        storeMultisampledStencilBuffer: f.ignoreDepthValues === false
                    });
                } else {
                    let n = {
                        antialias: y.antialias,
                        alpha: true,
                        depth: y.depth,
                        stencil: y.stencil,
                        framebufferScaleFactor: i
                    };
                    baseLayer = new XRWebGLLayer(r, t, n);
                    r.updateRenderState({
                        baseLayer
                    });
                    e.setPixelRatio(1);
                    e.setSize(baseLayer.framebufferWidth, baseLayer.framebufferHeight, false);
                    x = new Zn_1(baseLayer.framebufferWidth, baseLayer.framebufferHeight, {
                        format: zt_1,
                        type: zn_1,
                        colorSpace: e.outputColorSpace,
                        stencilBuffer: y.stencil,
                        resolveDepthBuffer: baseLayer.ignoreDepthValues === false,
                        resolveStencilBuffer: baseLayer.ignoreDepthValues === false,
                        storeMultisampledDepthBuffer: baseLayer.ignoreDepthValues === false,
                        storeMultisampledStencilBuffer: baseLayer.ignoreDepthValues === false
                    });
                }
                x.isXRRenderTarget = true;
                this.setFoveation(c);
                l = null;
                a = await r.requestReferenceSpace(s);
                I.setContext(r);
                I.start();
                n.isPresenting = true;
                n.dispatchEvent({
                    type: `sessionstart`
                });
            }
        };
        this.getEnvironmentBlendMode = function() {
            if (r !== null) {
                return r.environmentBlendMode;
            }
        };
        this.getDepthTexture = function() {
            return g.getDepthTexture();
        };
        function P(e) {
            for(let t = 0; t < e.removed.length; t++){
                let n = e.removed[t];
                let r = C.indexOf(n);
                if (r >= 0) {
                    C[r] = null;
                    S[r].disconnect(n);
                }
            }
            for(let t = 0; t < e.added.length; t++){
                let n = e.added[t];
                let r = C.indexOf(n);
                if (r === -1) {
                    for(let e = 0; e < S.length; e++){
                        if (e >= C.length) {
                            C.push(n);
                            r = e;
                            break;
                        } else if (C[e] === null) {
                            C[e] = n;
                            r = e;
                            break;
                        }
                    }
                    if (r === -1) {
                        break;
                    }
                }
                let i = S[r];
                if (i) {
                    i.connect(n);
                }
            }
        }
        let ae = new Jn_1;
        let oe = new Jn_1;
        function se(e, t, n) {
            ae.setFromMatrixPosition(t.matrixWorld);
            oe.setFromMatrixPosition(n.matrixWorld);
            let r = ae.distanceTo(oe);
            let elements = t.projectionMatrix.elements;
            let elements_1 = n.projectionMatrix.elements;
            let o = elements[14] / (elements[10] - 1);
            let s = elements[14] / (elements[10] + 1);
            let c = (elements[9] + 1) / elements[5];
            let l = (elements[9] - 1) / elements[5];
            let u = (elements[8] - 1) / elements[0];
            let d = (elements_1[8] + 1) / elements_1[0];
            let f = o * u;
            let p = o * d;
            let m = r / (-u + d);
            let h = m * -u;
            t.matrixWorld.decompose(e.position, e.quaternion, e.scale);
            e.translateX(h);
            e.translateZ(m);
            e.matrixWorld.compose(e.position, e.quaternion, e.scale);
            e.matrixWorldInverse.copy(e.matrixWorld).invert();
            if (elements[10] === -1) {
                e.projectionMatrix.copy(t.projectionMatrix);
                e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
            } else {
                let t = o + m;
                let n = s + m;
                let i = f - h;
                let a = p + (r - h);
                let u = c * s / n * t;
                let d = l * s / n * t;
                e.projectionMatrix.makePerspective(i, a, u, d, t, n);
                e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
            }
        }
        function ce(e, t) {
            if (t === null) {
                e.matrixWorld.copy(e.matrix);
            } else {
                e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix);
            }
            e.matrixWorldInverse.copy(e.matrixWorld).invert();
        }
        this.updateCamera = function(camera) {
            if (r === null) {
                return;
            }
            let e_near = camera.near;
            let e_far = camera.far;
            if (g.texture !== null) {
                if (g.depthNear > 0) {
                    e_near = g.depthNear;
                }
                if (g.depthFar > 0) {
                    e_far = g.depthFar;
                }
            }
            M.near = A.near = k.near = e_near;
            M.far = A.far = k.far = e_far;
            if (te !== M.near || ne !== M.far) {
                r.updateRenderState({
                    depthNear: M.near,
                    depthFar: M.far
                });
                te = M.near;
                ne = M.far;
            }
            M.layers.mask = camera.layers.mask | 6;
            k.layers.mask = M.layers.mask & -5;
            A.layers.mask = M.layers.mask & -3;
            let e_parent = camera.parent;
            let M_cameras = M.cameras;
            ce(M, e_parent);
            for(let e = 0; e < M_cameras.length; e++){
                ce(M_cameras[e], e_parent);
            }
            if (M_cameras.length === 2) {
                se(M, k, A);
            } else {
                M.projectionMatrix.copy(k.projectionMatrix);
            }
            if (O === null && camera.isPerspectiveCamera) {
                O = {
                    camera,
                    fov: camera.fov,
                    zoom: camera.zoom
                };
            }
            le(camera, M, e_parent);
        };
        function le(camera, t, n) {
            if (n === null) {
                camera.matrix.copy(t.matrixWorld);
            } else {
                camera.matrix.copy(n.matrixWorld);
                camera.matrix.invert();
                camera.matrix.multiply(t.matrixWorld);
            }
            camera.matrix.decompose(camera.position, camera.quaternion, camera.scale);
            camera.updateMatrixWorld(true);
            camera.projectionMatrix.copy(t.projectionMatrix);
            camera.projectionMatrixInverse.copy(t.projectionMatrixInverse);
            if (camera.isPerspectiveCamera) {
                camera.fov = Ft_1 * 2 * Math.atan(1 / camera.projectionMatrix.elements[5]);
                camera.zoom = 1;
            }
        }
        this.getCamera = function() {
            return M;
        };
        this.getFoveation = function() {
            if (f !== null || baseLayer !== null) {
                return c;
            }
        };
        this.setFoveation = function(e) {
            c = e;
            if (f !== null) {
                f.fixedFoveation = e;
            }
            if (baseLayer !== null && baseLayer.fixedFoveation !== undefined) {
                baseLayer.fixedFoveation = e;
            }
        };
        this.hasDepthSensing = function() {
            return g.texture !== null;
        };
        this.getDepthSensingMesh = function() {
            return g.getMesh(M);
        };
        this.getCameraTexture = function(e) {
            return _[e];
        };
        let ue = null;
        function F(t, i) {
            u = i.getViewerPose(l || a);
            m = i;
            if (u !== null) {
                let t = u.views;
                if (baseLayer !== null) {
                    e.setRenderTargetFramebuffer(x, baseLayer.framebuffer);
                    e.setRenderTarget(x);
                }
                let i = false;
                if (t.length !== M.cameras.length) {
                    M.cameras.length = 0;
                    i = true;
                }
                for(let n = 0; n < t.length; n++){
                    let r = t[n];
                    let a = null;
                    if (baseLayer !== null) {
                        a = baseLayer.getViewport(r);
                    } else {
                        let t = d.getViewSubImage(f, r);
                        a = t.viewport;
                        if (n === 0) {
                            e.setRenderTargetTextures(x, t.colorTexture, t.depthStencilTexture);
                            e.setRenderTarget(x);
                        }
                    }
                    let s = j[n];
                    if (s === undefined) {
                        s = new At_1;
                        s.layers.enable(n);
                        s.viewport = new Yn_1;
                        j[n] = s;
                    }
                    s.matrix.fromArray(r.transform.matrix);
                    s.matrix.decompose(s.position, s.quaternion, s.scale);
                    s.projectionMatrix.fromArray(r.projectionMatrix);
                    s.projectionMatrixInverse.copy(s.projectionMatrix).invert();
                    s.viewport.set(a.x, a.y, a.width, a.height);
                    if (n === 0) {
                        M.matrix.copy(s.matrix);
                        M.matrix.decompose(M.position, M.quaternion, M.scale);
                    }
                    if (i === true) {
                        M.cameras.push(s);
                    }
                }
                let a = r.enabledFeatures;
                if (a && a.includes(`depth-sensing`) && r.depthUsage == `gpu-optimized` && h) {
                    d = n.getBinding();
                    let e = d.getDepthInformation(t[0]);
                    if (e && e.isValid && e.texture) {
                        g.init(e, r.renderState);
                    }
                }
                if (a && a.includes(`camera-access`) && h) {
                    e.state.unbindTexture();
                    d = n.getBinding();
                    for(let e = 0; e < t.length; e++){
                        let n = t[e].camera;
                        if (n) {
                            let e = _[n];
                            if (!e) {
                                e = new et;
                                _[n] = e;
                            }
                            let t = d.getCameraImage(n);
                            e.sourceTexture = t;
                        }
                    }
                }
            }
            for(let e = 0; e < S.length; e++){
                let t = C[e];
                let n = S[e];
                if (t !== null && n !== undefined) {
                    n.update(t, i, l || a);
                }
            }
            if (ue) {
                ue(t, i);
            }
            if (i.detectedPlanes) {
                n.dispatchEvent({
                    type: `planesdetected`,
                    data: i
                });
            }
            m = null;
        }
        let I = new Ct;
        I.setAnimationLoop(F);
        this.setAnimationLoop = function(e) {
            ue = e;
        };
        this.dispose = function() {};
    }
}
const Ni = new _t_1;
const Pi = new gt;
Pi.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Fi(e, t) {
    function n(e, t) {
        if (e.matrixAutoUpdate === true) {
            e.updateMatrix();
        }
        t.value.copy(e.matrix);
    }
    function refreshFogUniforms(t, n) {
        n.color.getRGB(t.fogColor.value, ir_1(e));
        if (n.isFog) {
            t.fogNear.value = n.near;
            t.fogFar.value = n.far;
        } else if (n.isFogExp2) {
            t.fogDensity.value = n.density;
        }
    }
    function refreshMaterialUniforms(e, t, n, r, i) {
        if (t.isNodeMaterial) {
            t.uniformsNeedUpdate = false;
        } else if (t.isMeshBasicMaterial) {
            a(e, t);
        } else if (t.isMeshLambertMaterial) {
            a(e, t);
            if (t.envMap) {
                e.envMapIntensity.value = t.envMapIntensity;
            }
        } else if (t.isMeshToonMaterial) {
            a(e, t);
            d(e, t);
        } else if (t.isMeshPhongMaterial) {
            a(e, t);
            u(e, t);
            if (t.envMap) {
                e.envMapIntensity.value = t.envMapIntensity;
            }
        } else if (t.isMeshStandardMaterial) {
            a(e, t);
            f(e, t);
            if (t.isMeshPhysicalMaterial) {
                p(e, t, i);
            }
        } else if (t.isMeshMatcapMaterial) {
            a(e, t);
            m(e, t);
        } else if (t.isMeshDepthMaterial) {
            a(e, t);
        } else if (t.isMeshDistanceMaterial) {
            a(e, t);
            h(e, t);
        } else if (t.isMeshNormalMaterial) {
            a(e, t);
        } else if (t.isLineBasicMaterial) {
            o(e, t);
            if (t.isLineDashedMaterial) {
                s(e, t);
            }
        } else if (t.isPointsMaterial) {
            c(e, t, n, r);
        } else if (t.isSpriteMaterial) {
            l(e, t);
        } else if (t.isShadowMaterial) {
            e.color.value.copy(t.color);
            e.opacity.value = t.opacity;
        } else if (t.isShaderMaterial) {
            t.uniformsNeedUpdate = false;
        }
    }
    function a(e, r) {
        e.opacity.value = r.opacity;
        if (r.color) {
            e.diffuse.value.copy(r.color);
        }
        if (r.emissive) {
            e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity);
        }
        if (r.map) {
            e.map.value = r.map;
            n(r.map, e.mapTransform);
        }
        if (r.alphaMap) {
            e.alphaMap.value = r.alphaMap;
            n(r.alphaMap, e.alphaMapTransform);
        }
        if (r.bumpMap) {
            e.bumpMap.value = r.bumpMap;
            n(r.bumpMap, e.bumpMapTransform);
            e.bumpScale.value = r.bumpScale;
            if (r.side === 1) {
                e.bumpScale.value *= -1;
            }
        }
        if (r.normalMap) {
            e.normalMap.value = r.normalMap;
            n(r.normalMap, e.normalMapTransform);
            e.normalScale.value.copy(r.normalScale);
            if (r.side === 1) {
                e.normalScale.value.negate();
            }
        }
        if (r.displacementMap) {
            e.displacementMap.value = r.displacementMap;
            n(r.displacementMap, e.displacementMapTransform);
            e.displacementScale.value = r.displacementScale;
            e.displacementBias.value = r.displacementBias;
        }
        if (r.emissiveMap) {
            e.emissiveMap.value = r.emissiveMap;
            n(r.emissiveMap, e.emissiveMapTransform);
        }
        if (r.specularMap) {
            e.specularMap.value = r.specularMap;
            n(r.specularMap, e.specularMapTransform);
        }
        if (r.alphaTest > 0) {
            e.alphaTest.value = r.alphaTest;
        }
        let i = t.get(r);
        let i_envMap = i.envMap;
        let i_envMapRotation = i.envMapRotation;
        if (i_envMap) {
            e.envMap.value = i_envMap;
            e.envMapRotation.value.setFromMatrix4(Ni.makeRotationFromEuler(i_envMapRotation)).transpose();
            if (i_envMap.isCubeTexture && i_envMap.isRenderTargetTexture === false) {
                e.envMapRotation.value.premultiply(Pi);
            }
            e.reflectivity.value = r.reflectivity;
            e.ior.value = r.ior;
            e.refractionRatio.value = r.refractionRatio;
        }
        if (r.lightMap) {
            e.lightMap.value = r.lightMap;
            e.lightMapIntensity.value = r.lightMapIntensity;
            n(r.lightMap, e.lightMapTransform);
        }
        if (r.aoMap) {
            e.aoMap.value = r.aoMap;
            e.aoMapIntensity.value = r.aoMapIntensity;
            n(r.aoMap, e.aoMapTransform);
        }
    }
    function o(e, t) {
        e.diffuse.value.copy(t.color);
        e.opacity.value = t.opacity;
        if (t.map) {
            e.map.value = t.map;
            n(t.map, e.mapTransform);
        }
    }
    function s(e, t) {
        e.dashSize.value = t.dashSize;
        e.totalSize.value = t.dashSize + t.gapSize;
        e.scale.value = t.scale;
    }
    function c(e, t, r, i) {
        e.diffuse.value.copy(t.color);
        e.opacity.value = t.opacity;
        e.size.value = t.size * r;
        e.scale.value = i * 0.5;
        if (t.map) {
            e.map.value = t.map;
            n(t.map, e.uvTransform);
        }
        if (t.alphaMap) {
            e.alphaMap.value = t.alphaMap;
            n(t.alphaMap, e.alphaMapTransform);
        }
        if (t.alphaTest > 0) {
            e.alphaTest.value = t.alphaTest;
        }
    }
    function l(e, t) {
        e.diffuse.value.copy(t.color);
        e.opacity.value = t.opacity;
        e.rotation.value = t.rotation;
        if (t.map) {
            e.map.value = t.map;
            n(t.map, e.mapTransform);
        }
        if (t.alphaMap) {
            e.alphaMap.value = t.alphaMap;
            n(t.alphaMap, e.alphaMapTransform);
        }
        if (t.alphaTest > 0) {
            e.alphaTest.value = t.alphaTest;
        }
    }
    function u(e, t) {
        e.specular.value.copy(t.specular);
        e.shininess.value = Math.max(t.shininess, 0.0001);
    }
    function d(e, t) {
        if (t.gradientMap) {
            e.gradientMap.value = t.gradientMap;
        }
    }
    function f(e, t) {
        e.metalness.value = t.metalness;
        if (t.metalnessMap) {
            e.metalnessMap.value = t.metalnessMap;
            n(t.metalnessMap, e.metalnessMapTransform);
        }
        e.roughness.value = t.roughness;
        if (t.roughnessMap) {
            e.roughnessMap.value = t.roughnessMap;
            n(t.roughnessMap, e.roughnessMapTransform);
        }
        if (t.envMap) {
            e.envMapIntensity.value = t.envMapIntensity;
        }
    }
    function p(e, t, r) {
        e.ior.value = t.ior;
        if (t.sheen > 0) {
            e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen);
            e.sheenRoughness.value = t.sheenRoughness;
            if (t.sheenColorMap) {
                e.sheenColorMap.value = t.sheenColorMap;
                n(t.sheenColorMap, e.sheenColorMapTransform);
            }
            if (t.sheenRoughnessMap) {
                e.sheenRoughnessMap.value = t.sheenRoughnessMap;
                n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform);
            }
        }
        if (t.clearcoat > 0) {
            e.clearcoat.value = t.clearcoat;
            e.clearcoatRoughness.value = t.clearcoatRoughness;
            if (t.clearcoatMap) {
                e.clearcoatMap.value = t.clearcoatMap;
                n(t.clearcoatMap, e.clearcoatMapTransform);
            }
            if (t.clearcoatRoughnessMap) {
                e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap;
                n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform);
            }
            if (t.clearcoatNormalMap) {
                e.clearcoatNormalMap.value = t.clearcoatNormalMap;
                n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform);
                e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale);
                if (t.side === 1) {
                    e.clearcoatNormalScale.value.negate();
                }
            }
        }
        if (t.dispersion > 0) {
            e.dispersion.value = t.dispersion;
        }
        if (t.retroreflectivity > 0) {
            e.retroreflectivity.value = t.retroreflectivity;
        }
        if (t.iridescence > 0) {
            e.iridescence.value = t.iridescence;
            e.iridescenceIOR.value = t.iridescenceIOR;
            e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0];
            e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1];
            if (t.iridescenceMap) {
                e.iridescenceMap.value = t.iridescenceMap;
                n(t.iridescenceMap, e.iridescenceMapTransform);
            }
            if (t.iridescenceThicknessMap) {
                e.iridescenceThicknessMap.value = t.iridescenceThicknessMap;
                n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform);
            }
        }
        if (t.transmission > 0) {
            e.transmission.value = t.transmission;
            e.transmissionSamplerMap.value = r.texture;
            e.transmissionSamplerSize.value.set(r.width, r.height);
            if (t.transmissionMap) {
                e.transmissionMap.value = t.transmissionMap;
                n(t.transmissionMap, e.transmissionMapTransform);
            }
            e.thickness.value = t.thickness;
            if (t.thicknessMap) {
                e.thicknessMap.value = t.thicknessMap;
                n(t.thicknessMap, e.thicknessMapTransform);
            }
            e.attenuationDistance.value = t.attenuationDistance;
            e.attenuationColor.value.copy(t.attenuationColor);
        }
        if (t.anisotropy > 0) {
            e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation));
            if (t.anisotropyMap) {
                e.anisotropyMap.value = t.anisotropyMap;
                n(t.anisotropyMap, e.anisotropyMapTransform);
            }
        }
        e.specularIntensity.value = t.specularIntensity;
        e.specularColor.value.copy(t.specularColor);
        if (t.specularColorMap) {
            e.specularColorMap.value = t.specularColorMap;
            n(t.specularColorMap, e.specularColorMapTransform);
        }
        if (t.specularIntensityMap) {
            e.specularIntensityMap.value = t.specularIntensityMap;
            n(t.specularIntensityMap, e.specularIntensityMapTransform);
        }
    }
    function m(e, t) {
        if (t.matcap) {
            e.matcap.value = t.matcap;
        }
    }
    function h(e, n) {
        let light = t.get(n).light;
        e.referencePosition.value.setFromMatrixPosition(light.matrixWorld);
        e.nearDistance.value = light.shadow.camera.near;
        e.farDistance.value = light.shadow.camera.far;
    }
    return {
        refreshFogUniforms,
        refreshMaterialUniforms
    };
}
function Ii(e, t, n, r) {
    let i = {};
    let a = {};
    let o = [];
    let s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
    function bind(e, { program }) {
        r.uniformBlockBinding(e, program);
    }
    function l(e, n) {
        let o = i[e.id];
        if (o === undefined) {
            g(e);
            o = u(e);
            i[e.id] = o;
            e.addEventListener(`dispose`, v);
        }
        let n_program = n.program;
        r.updateUBOMapping(e, n_program);
        let frame = t.render.frame;
        if (a[e.id] !== frame) {
            f(e);
            a[e.id] = frame;
        }
    }
    function u(t) {
        let n = d();
        t.__bindingPointIndex = n;
        let r = e.createBuffer();
        let t___size = t.__size;
        let t_usage = t.usage;
        e.bindBuffer(e.UNIFORM_BUFFER, r);
        e.bufferData(e.UNIFORM_BUFFER, t___size, t_usage);
        e.bindBuffer(e.UNIFORM_BUFFER, null);
        e.bindBufferBase(e.UNIFORM_BUFFER, n, r);
        return r;
    }
    function d() {
        for(let e = 0; e < s; e++){
            if (o.indexOf(e) === -1) {
                o.push(e);
                return e;
            }
        }
        nr_1(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`);
        return 0;
    }
    function f(t) {
        let n = i[t.id];
        let t_uniforms = t.uniforms;
        let t___cache = t.__cache;
        e.bindBuffer(e.UNIFORM_BUFFER, n);
        for(let e = 0, t = t_uniforms.length; e < t; e++){
            let uniform = t_uniforms[e];
            if (Array.isArray(uniform)) {
                for(let n = 0, r = uniform.length; n < r; n++){
                    p(uniform[n], e, n, t___cache);
                }
            } else {
                p(uniform, e, 0, t___cache);
            }
        }
        e.bindBuffer(e.UNIFORM_BUFFER, null);
    }
    function p(t, n, r, t___cache) {
        if (h(t, n, r, t___cache) === true) {
            let n = t.__offset;
            let r = t.value;
            if (Array.isArray(r)) {
                let e = 0;
                for (const i of r){
                    let a = _(i);
                    m(i, t.__data, e);
                    if (typeof i != `number` && typeof i != `boolean` && !i.isMatrix3 && !ArrayBuffer.isView(i)) {
                        e += a.storage / Float32Array.BYTES_PER_ELEMENT;
                    }
                }
            } else {
                m(r, t.__data, 0);
            }
            e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
        }
    }
    function m(e, __data, n) {
        if (typeof e == `number` || typeof e == `boolean`) {
            __data[0] = e;
        } else if (e.isMatrix3) {
            __data[0] = e.elements[0];
            __data[1] = e.elements[1];
            __data[2] = e.elements[2];
            __data[3] = 0;
            __data[4] = e.elements[3];
            __data[5] = e.elements[4];
            __data[6] = e.elements[5];
            __data[7] = 0;
            __data[8] = e.elements[6];
            __data[9] = e.elements[7];
            __data[10] = e.elements[8];
            __data[11] = 0;
        } else if (ArrayBuffer.isView(e)) {
            __data.set(new e.constructor(e.buffer, e.byteOffset, __data.length));
        } else {
            e.toArray(__data, n);
        }
    }
    function h({ value }, t, n, t___cache) {
        let a = t + `_` + n;
        if (t___cache[a] === undefined) {
            t___cache[a] = typeof value == `number` || typeof value == `boolean` ? value : ArrayBuffer.isView(value) ? value.slice() : value.clone();
            return true;
        }
        {
            let e = t___cache[a];
            if (typeof value == `number` || typeof value == `boolean`) {
                if (e !== value) {
                    t___cache[a] = value;
                    return true;
                }
            } else if (ArrayBuffer.isView(value)) {
                return true;
            } else if (e.equals(value) === false) {
                e.copy(value);
                return true;
            }
        }
        return false;
    }
    function g(e) {
        let e_uniforms = e.uniforms;
        let n = 0;
        for(let e = 0, r = e_uniforms.length; e < r; e++){
            let r = Array.isArray(e_uniforms[e]) ? e_uniforms[e] : [
                e_uniforms[e]
            ];
            for(let e = 0, t = r.length; e < t; e++){
                let t = r[e];
                let i = Array.isArray(t.value) ? t.value : [
                    t.value
                ];
                for(let e = 0, r = i.length; e < r; e++){
                    let r = i[e];
                    let a = _(r);
                    let o = n % 16;
                    let s = o % a.boundary;
                    let c = o + s;
                    n += s;
                    if (c !== 0 && 16 - c < a.storage) {
                        n += 16 - c;
                    }
                    t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT);
                    t.__offset = n;
                    n += a.storage;
                }
            }
        }
        let r = n % 16;
        if (r > 0) {
            n += 16 - r;
        }
        e.__size = n;
        e.__cache = {};
        return this;
    }
    function _(e) {
        let t = {
            boundary: 0,
            storage: 0
        };
        if (typeof e == `number` || typeof e == `boolean`) {
            t.boundary = 4;
            t.storage = 4;
        } else if (e.isVector2) {
            t.boundary = 8;
            t.storage = 8;
        } else if (e.isVector3 || e.isColor) {
            t.boundary = 16;
            t.storage = 12;
        } else if (e.isVector4) {
            t.boundary = 16;
            t.storage = 16;
        } else if (e.isMatrix3) {
            t.boundary = 48;
            t.storage = 48;
        } else if (e.isMatrix4) {
            t.boundary = 64;
            t.storage = 64;
        } else if (e.isTexture) {
            cr_1(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`);
        } else if (ArrayBuffer.isView(e)) {
            t.boundary = 16;
            t.storage = e.byteLength;
        } else {
            cr_1(`WebGLRenderer: Unsupported uniform value type.`, e);
        }
        return t;
    }
    function v({ target }) {
        target.removeEventListener(`dispose`, v);
        let r = o.indexOf(target.__bindingPointIndex);
        o.splice(r, 1);
        e.deleteBuffer(i[target.id]);
        delete i[target.id];
        delete a[target.id];
    }
    function y() {
        for(let t in i){
            e.deleteBuffer(i[t]);
        }
        o = [];
        i = {};
        a = {};
    }
    return {
        bind,
        update: l,
        dispose: y
    };
}
const Li = new Uint16Array([
    12469,
    15057,
    12620,
    14925,
    13266,
    14620,
    13807,
    14376,
    14323,
    13990,
    14545,
    13625,
    14713,
    13328,
    14840,
    12882,
    14931,
    12528,
    14996,
    12233,
    15039,
    11829,
    15066,
    11525,
    15080,
    11295,
    15085,
    10976,
    15082,
    10705,
    15073,
    10495,
    13880,
    14564,
    13898,
    14542,
    13977,
    14430,
    14158,
    14124,
    14393,
    13732,
    14556,
    13410,
    14702,
    12996,
    14814,
    12596,
    14891,
    12291,
    14937,
    11834,
    14957,
    11489,
    14958,
    11194,
    14943,
    10803,
    14921,
    10506,
    14893,
    10278,
    14858,
    9960,
    14484,
    14039,
    14487,
    14025,
    14499,
    13941,
    14524,
    13740,
    14574,
    13468,
    14654,
    13106,
    14743,
    12678,
    14818,
    12344,
    14867,
    11893,
    14889,
    11509,
    14893,
    11180,
    14881,
    10751,
    14852,
    10428,
    14812,
    10128,
    14765,
    9754,
    14712,
    9466,
    14764,
    13480,
    14764,
    13475,
    14766,
    13440,
    14766,
    13347,
    14769,
    13070,
    14786,
    12713,
    14816,
    12387,
    14844,
    11957,
    14860,
    11549,
    14868,
    11215,
    14855,
    10751,
    14825,
    10403,
    14782,
    10044,
    14729,
    9651,
    14666,
    9352,
    14599,
    9029,
    14967,
    12835,
    14966,
    12831,
    14963,
    12804,
    14954,
    12723,
    14936,
    12564,
    14917,
    12347,
    14900,
    11958,
    14886,
    11569,
    14878,
    11247,
    14859,
    10765,
    14828,
    10401,
    14784,
    10011,
    14727,
    9600,
    14660,
    9289,
    14586,
    8893,
    14508,
    8533,
    15111,
    12234,
    15110,
    12234,
    15104,
    12216,
    15092,
    12156,
    15067,
    12010,
    15028,
    11776,
    14981,
    11500,
    14942,
    11205,
    14902,
    10752,
    14861,
    10393,
    14812,
    9991,
    14752,
    9570,
    14682,
    9252,
    14603,
    8808,
    14519,
    8445,
    14431,
    8145,
    15209,
    11449,
    15208,
    11451,
    15202,
    11451,
    15190,
    11438,
    15163,
    11384,
    15117,
    11274,
    15055,
    10979,
    14994,
    10648,
    14932,
    10343,
    14871,
    9936,
    14803,
    9532,
    14729,
    9218,
    14645,
    8742,
    14556,
    8381,
    14461,
    8020,
    14365,
    7603,
    15273,
    10603,
    15272,
    10607,
    15267,
    10619,
    15256,
    10631,
    15231,
    10614,
    15182,
    10535,
    15118,
    10389,
    15042,
    10167,
    14963,
    9787,
    14883,
    9447,
    14800,
    9115,
    14710,
    8665,
    14615,
    8318,
    14514,
    7911,
    14411,
    7507,
    14279,
    7198,
    15314,
    9675,
    15313,
    9683,
    15309,
    9712,
    15298,
    9759,
    15277,
    9797,
    15229,
    9773,
    15166,
    9668,
    15084,
    9487,
    14995,
    9274,
    14898,
    8910,
    14800,
    8539,
    14697,
    8234,
    14590,
    7790,
    14479,
    7409,
    14367,
    7067,
    14178,
    6621,
    15337,
    8619,
    15337,
    8631,
    15333,
    8677,
    15325,
    8769,
    15305,
    8871,
    15264,
    8940,
    15202,
    8909,
    15119,
    8775,
    15022,
    8565,
    14916,
    8328,
    14804,
    8009,
    14688,
    7614,
    14569,
    7287,
    14448,
    6888,
    14321,
    6483,
    14088,
    6171,
    15350,
    7402,
    15350,
    7419,
    15347,
    7480,
    15340,
    7613,
    15322,
    7804,
    15287,
    7973,
    15229,
    8057,
    15148,
    8012,
    15046,
    7846,
    14933,
    7611,
    14810,
    7357,
    14682,
    7069,
    14552,
    6656,
    14421,
    6316,
    14251,
    5948,
    14007,
    5528,
    15356,
    5942,
    15356,
    5977,
    15353,
    6119,
    15348,
    6294,
    15332,
    6551,
    15302,
    6824,
    15249,
    7044,
    15171,
    7122,
    15070,
    7050,
    14949,
    6861,
    14818,
    6611,
    14679,
    6349,
    14538,
    6067,
    14398,
    5651,
    14189,
    5311,
    13935,
    4958,
    15359,
    4123,
    15359,
    4153,
    15356,
    4296,
    15353,
    4646,
    15338,
    5160,
    15311,
    5508,
    15263,
    5829,
    15188,
    6042,
    15088,
    6094,
    14966,
    6001,
    14826,
    5796,
    14678,
    5543,
    14527,
    5287,
    14377,
    4985,
    14133,
    4586,
    13869,
    4257,
    15360,
    1563,
    15360,
    1642,
    15358,
    2076,
    15354,
    2636,
    15341,
    3350,
    15317,
    4019,
    15273,
    4429,
    15203,
    4732,
    15105,
    4911,
    14981,
    4932,
    14836,
    4818,
    14679,
    4621,
    14517,
    4386,
    14359,
    4156,
    14083,
    3795,
    13808,
    3437,
    15360,
    122,
    15360,
    137,
    15358,
    285,
    15355,
    636,
    15344,
    1274,
    15322,
    2177,
    15281,
    2765,
    15215,
    3223,
    15120,
    3451,
    14995,
    3569,
    14846,
    3567,
    14681,
    3466,
    14511,
    3305,
    14344,
    3121,
    14037,
    2800,
    13753,
    2467,
    15360,
    0,
    15360,
    1,
    15359,
    21,
    15355,
    89,
    15346,
    253,
    15325,
    479,
    15287,
    796,
    15225,
    1148,
    15133,
    1492,
    15008,
    1749,
    14856,
    1882,
    14685,
    1886,
    14506,
    1783,
    14324,
    1608,
    13996,
    1398,
    13702,
    1183
]);
let Ri = null;
function zi() {
    if (Ri === null) {
        Ri = new q(Li, 16, 16, gn_1, ot_1);
        Ri.name = `DFG_LUT`;
        Ri.minFilter = dt;
        Ri.magFilter = dt;
        Ri.wrapS = z_1;
        Ri.wrapT = z_1;
        Ri.generateMipmaps = false;
        Ri.needsUpdate = true;
    }
    return Ri;
}
class Bi {
    constructor(e = {}){
        let { canvas = er_1(), context = null, depth = true, stencil = false, alpha = false, antialias = false, premultipliedAlpha = true, preserveDrawingBuffer = false, powerPreference = `default`, failIfMajorPerformanceCaveat = false, reversedDepthBuffer = false, outputBufferType = zn_1 } = e;
        this.isWebGLRenderer = true;
        let h;
        if (context !== null) {
            if (typeof WebGLRenderingContext < `u` && context instanceof WebGLRenderingContext) {
                throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);
            }
            h = context.getContextAttributes().alpha;
        } else {
            h = alpha;
        }
        let g = outputBufferType;
        let _ = new Set([
            Bt_1,
            _n_1,
            xn_1
        ]);
        let v = new Set([
            zn_1,
            Un_1,
            Kn_1,
            Vn_1,
            Wn_1,
            Gn_1
        ]);
        let y = new Uint32Array(4);
        let x = new Int32Array(4);
        let S = new Jn_1;
        let C = null;
        let w = null;
        let E = [];
        let O = [];
        let ee = null;
        this.domElement = canvas;
        this.debug = {
            checkShaderErrors: true,
            diagnostics: {
                keywords: false
            },
            onShaderError: null
        };
        this.autoClear = true;
        this.autoClearColor = true;
        this.autoClearDepth = true;
        this.autoClearStencil = true;
        this.sortObjects = true;
        this.clippingPlanes = [];
        this.localClippingEnabled = false;
        this.toneMapping = 0;
        this.toneMappingExposure = 1;
        this.transmissionResolutionScale = 1;
        let k = this;
        let A = false;
        let j = null;
        let M = null;
        let te = null;
        let ne = null;
        this._outputColorSpace = kn_1;
        let N = 0;
        let re = 0;
        let P = null;
        let ie = -1;
        let ae = null;
        let oe = new Yn_1;
        let se = new Yn_1;
        let ce = null;
        let le = new B(0);
        let ue = 0;
        let F = canvas.width;
        let I = canvas.height;
        let R = 1;
        let me = null;
        let ge = null;
        let ve = new Yn_1(0, 0, F, I);
        let be = new Yn_1(0, 0, F, I);
        let Ce = false;
        let Te = new rt_1;
        let z = false;
        let Ee = false;
        let De = new _t_1;
        let Oe = new Jn_1;
        let ke = new Yn_1;
        let Ae = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: true
        };
        let Me = false;
        function Ne() {
            if (P === null) {
                return R;
            }
            return 1;
        }
        let V = context;
        function Fe(e, n) {
            return canvas.getContext(e, n);
        }
        let H;
        let Ie;
        let U;
        let Le;
        let W;
        let G;
        let Re;
        let ze;
        let Ve;
        let He;
        let Ue;
        let We;
        let Ge;
        let Ke;
        let q;
        let Je;
        let Ye;
        let Xe;
        let Ze;
        let Qe;
        let $e;
        let tt;
        let rt;
        try {
            let e = {
                alpha: true,
                depth,
                stencil,
                antialias,
                premultipliedAlpha,
                preserveDrawingBuffer,
                powerPreference,
                failIfMajorPerformanceCaveat
            };
            if (`setAttribute` in canvas) {
                canvas.setAttribute(`data-engine`, `three.js r186`);
            }
            canvas.addEventListener(`webglcontextlost`, ot, false);
            canvas.addEventListener(`webglcontextrestored`, st, false);
            canvas.addEventListener(`webglcontextcreationerror`, ct, false);
            if (V === null) {
                let t = `webgl2`;
                V = Fe(t, e);
                if (V === null) {
                    throw Fe(t) ? Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`) : Error(`THREE.WebGLRenderer: Error creating WebGL context.`);
                }
            }
            it();
        } catch (error) {
            canvas.removeEventListener(`webglcontextlost`, ot, false);
            canvas.removeEventListener(`webglcontextrestored`, st, false);
            canvas.removeEventListener(`webglcontextcreationerror`, ct, false);
            nr_1(`WebGLRenderer: ` + error.message);
            throw error;
        }
        function it() {
            H = new rn(V);
            H.init();
            $e = new Oi(V, H);
            Ie = new Mt(V, H, e, $e);
            U = new Ei(V, H);
            if (Ie.reversedDepthBuffer && reversedDepthBuffer) {
                U.buffers.depth.setReversed(true);
            }
            M = V.createFramebuffer();
            te = V.createFramebuffer();
            ne = V.createFramebuffer();
            Le = new sn(V);
            W = new oi;
            G = new Di(V, H, U, W, Ie, $e, Le);
            Re = new nn(k);
            ze = new wt(V);
            tt = new At(V, ze);
            Ve = new an(V, ze, Le, tt);
            He = new ln(V, Ve, ze, tt, Le);
            Xe = new cn(V, Ie, G);
            q = new Nt(W);
            Ue = new ai(k, Re, H, Ie, tt, q);
            We = new Fi(k, W);
            Ge = new ui;
            Ke = new _i(H);
            Ye = new kt(k, Re, U, He, h, premultipliedAlpha);
            Je = new Ti(k, He, Ie);
            rt = new Ii(V, Le, Ie, U);
            Ze = new jt(V, H, Le);
            Qe = new on(V, H, Le);
            Le.programs = Ue.programs;
            k.capabilities = Ie;
            k.extensions = H;
            k.properties = W;
            k.renderLists = Ge;
            k.shadowMap = Je;
            k.state = U;
            k.info = Le;
        }
        if (g !== 1009) {
            ee = new dn(g, canvas.width, canvas.height, antialias, depth, stencil);
        }
        let at = new Mi(k, V);
        this.xr = at;
        this.getContext = function() {
            return V;
        };
        this.getContextAttributes = function() {
            return V.getContextAttributes();
        };
        this.forceContextLoss = function() {
            let e = H.get(`WEBGL_lose_context`);
            if (e) {
                e.loseContext();
            }
        };
        this.forceContextRestore = function() {
            let e = H.get(`WEBGL_lose_context`);
            if (e) {
                e.restoreContext();
            }
        };
        this.getPixelRatio = function() {
            return R;
        };
        this.setPixelRatio = function(e) {
            if (e !== undefined) {
                R = e;
                this.setSize(F, I, false);
            }
        };
        this.getSize = function(e) {
            return e.set(F, I);
        };
        this.setSize = function(e, n, r = true) {
            if (at.isPresenting) {
                cr_1(`WebGLRenderer: Can't change size while VR device is presenting.`);
            } else {
                F = e;
                I = n;
                canvas.width = Math.floor(e * R);
                canvas.height = Math.floor(n * R);
                if (r === true) {
                    canvas.style.width = e + `px`;
                    canvas.style.height = n + `px`;
                }
                if (ee !== null) {
                    ee.setSize(canvas.width, canvas.height);
                }
                this.setViewport(0, 0, e, n);
            }
        };
        this.getDrawingBufferSize = function(e) {
            return e.set(F * R, I * R).floor();
        };
        this.setDrawingBufferSize = function(e, n, r) {
            F = e;
            I = n;
            R = r;
            canvas.width = Math.floor(e * r);
            canvas.height = Math.floor(n * r);
            this.setViewport(0, 0, e, n);
        };
        this.setEffects = function(e) {
            if (g === 1009) {
                nr_1(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);
            } else {
                if (e) {
                    for(let t = 0; t < e.length; t++){
                        if (e[t].isOutputPass === true) {
                            cr_1(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);
                            break;
                        }
                    }
                }
                ee.setEffects(e || []);
            }
        };
        this.getCurrentViewport = function(e) {
            return e.copy(oe);
        };
        this.getViewport = function(e) {
            return e.copy(ve);
        };
        this.setViewport = function(e, t, n, r) {
            if (e.isVector4) {
                ve.set(e.x, e.y, e.z, e.w);
            } else {
                ve.set(e, t, n, r);
            }
            U.viewport(oe.copy(ve).multiplyScalar(R).round());
        };
        this.getScissor = function(e) {
            return e.copy(be);
        };
        this.setScissor = function(e, t, n, r) {
            if (e.isVector4) {
                be.set(e.x, e.y, e.z, e.w);
            } else {
                be.set(e, t, n, r);
            }
            U.scissor(se.copy(be).multiplyScalar(R).round());
        };
        this.getScissorTest = function() {
            return Ce;
        };
        this.setScissorTest = function(e) {
            U.setScissorTest(Ce = e);
        };
        this.setOpaqueSort = function(e) {
            me = e;
        };
        this.setTransparentSort = function(e) {
            ge = e;
        };
        this.getClearColor = function(e) {
            return e.copy(Ye.getClearColor());
        };
        this.setClearColor = function() {
            Ye.setClearColor(...arguments);
        };
        this.getClearAlpha = function() {
            return Ye.getClearAlpha();
        };
        this.setClearAlpha = function() {
            Ye.setClearAlpha(...arguments);
        };
        this.clear = function(e = true, t = true, n = true) {
            let r = 0;
            if (e) {
                let e = false;
                if (P !== null) {
                    let t = P.texture.format;
                    e = _.has(t);
                }
                if (e) {
                    let e = P.texture.type;
                    let t = v.has(e);
                    let n = Ye.getClearColor();
                    let r = Ye.getClearAlpha();
                    let i = n.r;
                    let a = n.g;
                    let o = n.b;
                    if (t) {
                        y[0] = i;
                        y[1] = a;
                        y[2] = o;
                        y[3] = r;
                        V.clearBufferuiv(V.COLOR, 0, y);
                    } else {
                        x[0] = i;
                        x[1] = a;
                        x[2] = o;
                        x[3] = r;
                        V.clearBufferiv(V.COLOR, 0, x);
                    }
                } else {
                    r |= V.COLOR_BUFFER_BIT;
                }
            }
            if (t) {
                r |= V.DEPTH_BUFFER_BIT;
                this.state.buffers.depth.setMask(true);
            }
            if (n) {
                r |= V.STENCIL_BUFFER_BIT;
                this.state.buffers.stencil.setMask(4294967295);
            }
            if (r !== 0) {
                V.clear(r);
            }
        };
        this.clearColor = function() {
            this.clear(true, false, false);
        };
        this.clearDepth = function() {
            this.clear(false, true, false);
        };
        this.clearStencil = function() {
            this.clear(false, false, true);
        };
        this.setNodesHandler = function(e) {
            e.setRenderer(this);
            j = e;
        };
        this.dispose = function() {
            canvas.removeEventListener(`webglcontextlost`, ot, false);
            canvas.removeEventListener(`webglcontextrestored`, st, false);
            canvas.removeEventListener(`webglcontextcreationerror`, ct, false);
            Ye.dispose();
            Ge.dispose();
            Ke.dispose();
            W.dispose();
            Re.dispose();
            He.dispose();
            tt.dispose();
            rt.dispose();
            Ue.dispose();
            at.dispose();
            at.removeEventListener(`sessionstart`, mt);
            at.removeEventListener(`sessionend`, gt);
            _t.stop();
        };
        function ot(e) {
            e.preventDefault();
            ar_1(`WebGLRenderer: Context Lost.`);
            A = true;
        }
        function st() {
            ar_1(`WebGLRenderer: Context Restored.`);
            A = false;
            let Le_autoReset = Le.autoReset;
            let Je_enabled = Je.enabled;
            let Je_autoUpdate = Je.autoUpdate;
            let Je_needsUpdate = Je.needsUpdate;
            let Je_type = Je.type;
            it();
            Le.autoReset = Le_autoReset;
            Je.enabled = Je_enabled;
            Je.autoUpdate = Je_autoUpdate;
            Je.needsUpdate = Je_needsUpdate;
            Je.type = Je_type;
        }
        function ct(e) {
            nr_1(`WebGLRenderer: A WebGL context could not be created. Reason: `, e.statusMessage);
        }
        function lt({ target }) {
            target.removeEventListener(`dispose`, lt);
            ut(target);
        }
        function ut(target) {
            J(target);
            W.remove(target);
        }
        function J(target) {
            let programs = W.get(target).programs;
            if (programs !== undefined) {
                programs.forEach((e)=>{
                    Ue.releaseProgram(e);
                });
                if (target.isShaderMaterial) {
                    Ue.releaseShaderCache(target);
                }
            }
        }
        this.renderBufferDirect = function(e, t, n, r, i, a) {
            if (t === null) {
                t = Ae;
            }
            let o = i.isMesh && i.matrixWorld.determinantAffine() < 0;
            let s = Ot(e, t, n, r, i);
            U.setMaterial(r, o);
            let n_index = n.index;
            let l = 1;
            if (r.wireframe === true) {
                n_index = Ve.getWireframeAttribute(n);
                if (n_index === undefined) {
                    return;
                }
                l = 2;
            }
            let n_drawRange = n.drawRange;
            let position = n.attributes.position;
            let f = n_drawRange.start * l;
            let p = (n_drawRange.start + n_drawRange.count) * l;
            if (a !== null) {
                f = Math.max(f, a.start * l);
                p = Math.min(p, (a.start + a.count) * l);
            }
            if (n_index === null) {
                if (position != null) {
                    f = Math.max(f, 0);
                    p = Math.min(p, position.count);
                }
            } else {
                f = Math.max(f, 0);
                p = Math.min(p, n_index.count);
            }
            let m = p - f;
            if (m < 0 || m === Infinity) {
                return;
            }
            tt.setup(i, r, s, n, n_index);
            let h;
            let g = Ze;
            if (n_index !== null) {
                h = ze.get(n_index);
                g = Qe;
                g.setIndex(h);
            }
            if (i.isMesh) {
                if (r.wireframe === true) {
                    U.setLineWidth(r.wireframeLinewidth * Ne());
                    g.setMode(V.LINES);
                } else {
                    g.setMode(V.TRIANGLES);
                }
            } else if (i.isLine) {
                let e = r.linewidth;
                if (e === undefined) {
                    e = 1;
                }
                U.setLineWidth(e * Ne());
                if (i.isLineSegments) {
                    g.setMode(V.LINES);
                } else if (i.isLineLoop) {
                    g.setMode(V.LINE_LOOP);
                } else {
                    g.setMode(V.LINE_STRIP);
                }
            } else {
                if (i.isPoints) {
                    g.setMode(V.POINTS);
                } else if (i.isSprite) {
                    g.setMode(V.TRIANGLES);
                }
            }
            if (i.isBatchedMesh) {
                if (H.get(`WEBGL_multi_draw`)) {
                    g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
                } else {
                    let e = i._multiDrawStarts;
                    let t = i._multiDrawCounts;
                    let n = i._multiDrawCount;
                    let a = n_index ? ze.get(n_index).bytesPerElement : 1;
                    let o = W.get(r).currentProgram.getUniforms();
                    for(let r = 0; r < n; r++){
                        o.setValue(V, `_gl_DrawID`, r);
                        g.render(e[r] / a, t[r]);
                    }
                }
            } else if (i.isInstancedMesh) {
                g.renderInstances(f, m, i.count);
            } else if (n.isInstancedBufferGeometry) {
                let e = n._maxInstanceCount === undefined ? Infinity : n._maxInstanceCount;
                let t = Math.min(n.instanceCount, e);
                g.renderInstances(f, m, t);
            } else {
                g.render(f, m);
            }
        };
        function dt(e, t, n, r) {
            if (j !== null && e.isNodeMaterial) {
                j.setObject(r, e);
            }
            if (z === true) {
                q.setState(e, n, false);
            }
            if (e.transparent === true && e.side === 2 && e.forceSinglePass === false) {
                e.side = 1;
                e.needsUpdate = true;
                X(e, t, r);
                e.side = 0;
                e.needsUpdate = true;
                X(e, t, r);
                e.side = 2;
            } else {
                X(e, t, r);
            }
        }
        this.compile = function(e, t, n = null) {
            if (n === null) {
                n = e;
            }
            if (j !== null) {
                j.renderStart(e, t, n);
            }
            w = Ke.get(n);
            w.init(t);
            O.push(w);
            n.traverseVisible(function(e) {
                if (e.isLight && e.layers.test(t.layers)) {
                    w.pushLight(e);
                    if (e.castShadow) {
                        w.pushShadow(e);
                    }
                }
            });
            if (e !== n) {
                e.traverseVisible(function(e) {
                    if (e.isLight && e.layers.test(t.layers)) {
                        w.pushLight(e);
                        if (e.castShadow) {
                            w.pushShadow(e);
                        }
                    }
                });
            }
            w.setupLights();
            if (j !== null) {
                j.updateLights(w.state.lightsArray);
            }
            Ee = this.localClippingEnabled;
            z = q.init(this.clippingPlanes, Ee);
            if (z === true) {
                q.setGlobalState(this.clippingPlanes, t);
            }
            if (j !== null) {
                Je.render(w.state.shadowsArray, n, t);
            }
            let r = new Set;
            e.traverse(function(e) {
                if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) {
                    return;
                }
                let e_material = e.material;
                if (e_material) {
                    if (Array.isArray(e_material)) {
                        for (const o of e_material){
                            dt(o, n, t, e);
                            r.add(o);
                        }
                    } else {
                        dt(e_material, n, t, e);
                        r.add(e_material);
                    }
                }
            });
            w = O.pop();
            if (j !== null) {
                j.renderEnd();
            }
            return r;
        };
        this.compileAsync = function(e, t, n = null) {
            let r = this.compile(e, t, n);
            return new Promise((resolve)=>{
                function n() {
                    r.forEach((e)=>{
                        let currentProgram = W.get(e).currentProgram;
                        if (currentProgram === undefined || currentProgram.isReady()) {
                            r.delete(e);
                        }
                    });
                    if (r.size === 0) {
                        resolve(e);
                    } else {
                        setTimeout(n, 10);
                    }
                }
                if (H.get(`KHR_parallel_shader_compile`) === null) {
                    setTimeout(n, 10);
                } else {
                    n();
                }
            });
        };
        let ft = null;
        function pt(e) {
            if (ft) {
                ft(e);
            }
        }
        function mt() {
            _t.stop();
        }
        function gt() {
            _t.start();
        }
        let _t = new Ct;
        _t.setAnimationLoop(pt);
        if (typeof self < `u`) {
            _t.setContext(self);
        }
        this.setAnimationLoop = function(e) {
            ft = e;
            at.setAnimationLoop(e);
            if (e === null) {
                _t.stop();
            } else {
                _t.start();
            }
        };
        at.addEventListener(`sessionstart`, mt);
        at.addEventListener(`sessionend`, gt);
        this.render = function(e, t) {
            if (t !== undefined && t.isCamera !== true) {
                nr_1(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);
                return;
            }
            if (A === true) {
                return;
            }
            if (j !== null) {
                j.renderStart(e, t);
            }
            let n = at.enabled === true && at.isPresenting === true;
            let r = ee !== null && (P === null || n) && ee.begin(k, P);
            if (e.matrixWorldAutoUpdate === true) {
                e.updateMatrixWorld();
            }
            if (t.parent === null && t.matrixWorldAutoUpdate === true) {
                t.updateMatrixWorld();
            }
            if (at.enabled === true && at.isPresenting === true && (ee === null || ee.isCompositing() === false)) {
                if (at.cameraAutoUpdate === true) {
                    at.updateCamera(t);
                }
                t = at.getCamera();
            }
            if (e.isScene === true) {
                e.onBeforeRender(k, e, t, P);
            }
            w = Ke.get(e, O.length);
            w.init(t);
            w.state.textureUnits = G.getTextureUnits();
            O.push(w);
            De.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
            Te.setFromProjectionMatrix(De, Xn_1, t.reversedDepth);
            Ee = this.localClippingEnabled;
            z = q.init(this.clippingPlanes, Ee);
            C = Ge.get(e, E.length);
            C.init();
            E.push(C);
            if (at.enabled === true && at.isPresenting === true) {
                let e = k.xr.getDepthSensingMesh();
                if (e !== null) {
                    vt(e, t, -Infinity, k.sortObjects);
                }
            }
            vt(e, t, 0, k.sortObjects);
            C.finish();
            if (j !== null) {
                j.updateLights(w.state.lightsArray);
            }
            if (k.sortObjects === true) {
                C.sort(me, ge);
            }
            Me = at.enabled === false || at.isPresenting === false || at.hasDepthSensing() === false;
            if (Me) {
                Ye.addToRenderList(C, e);
            }
            this.info.render.frame++;
            if (this.info.autoReset === true) {
                this.info.reset();
            }
            if (z === true) {
                q.beginShadows();
            }
            let shadowsArray = w.state.shadowsArray;
            Je.render(shadowsArray, e, t);
            if (z === true) {
                q.endShadows();
            }
            if ((r && ee.hasRenderPass()) === false) {
                let n = C.opaque;
                let r = C.transmissive;
                w.setupLights();
                if (t.isArrayCamera) {
                    let i = t.cameras;
                    if (r.length > 0) {
                        for(let t = 0, a = i.length; t < a; t++){
                            let a = i[t];
                            bt(n, r, e, a);
                        }
                    }
                    if (Me) {
                        Ye.render(e);
                    }
                    for(let t = 0, n = i.length; t < n; t++){
                        let n = i[t];
                        yt(C, e, n, n.viewport);
                    }
                } else {
                    if (r.length > 0) {
                        bt(n, r, e, t);
                    }
                    if (Me) {
                        Ye.render(e);
                    }
                    yt(C, e, t);
                }
            }
            if (P !== null && re === 0) {
                G.updateMultisampleRenderTarget(P);
                G.updateRenderTargetMipmap(P);
            }
            if (r) {
                ee.end(k);
            }
            if (e.isScene === true) {
                e.onAfterRender(k, e, t);
            }
            tt.resetDefaultState();
            ie = -1;
            ae = null;
            O.pop();
            if (O.length > 0) {
                w = O[O.length - 1];
                G.setTextureUnits(w.state.textureUnits);
                if (z === true) {
                    q.setGlobalState(k.clippingPlanes, w.state.camera);
                }
            } else {
                w = null;
            }
            E.pop();
            C = E.length > 0 ? E[E.length - 1] : null;
            if (j !== null) {
                j.renderEnd();
            }
        };
        function vt(e, t, n, r) {
            if (e.visible === false) {
                return;
            }
            if (e.layers.test(t.layers)) {
                if (e.isGroup) {
                    n = e.renderOrder;
                } else if (e.isLOD) {
                    if (e.autoUpdate === true) {
                        e.update(t);
                    }
                } else if (e.isLightProbeGrid) {
                    w.pushLightProbeGrid(e);
                } else if (e.isLight) {
                    w.pushLight(e);
                    if (e.castShadow) {
                        w.pushShadow(e);
                    }
                } else if (e.isSprite) {
                    if (!e.frustumCulled || e.intersectsFrustum(Te)) {
                        if (r) {
                            ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);
                        }
                        let i = He.update(e);
                        let a = e.material;
                        if (a.visible) {
                            C.push(e, i, a, n, ke.z, null, t);
                        }
                    }
                } else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || e.intersectsFrustum(Te))) {
                    let i = He.update(e);
                    let a = e.material;
                    if (r) {
                        if (e.boundingSphere === undefined) {
                            if (i.boundingSphere === null) {
                                i.computeBoundingSphere();
                            }
                            ke.copy(i.boundingSphere.center);
                        } else {
                            if (e.boundingSphere === null) {
                                e.computeBoundingSphere();
                            }
                            ke.copy(e.boundingSphere.center);
                        }
                        ke.applyMatrix4(e.matrixWorld).applyMatrix4(De);
                    }
                    if (Array.isArray(a)) {
                        let r = i.groups;
                        for(let o = 0, s = r.length; o < s; o++){
                            let s = r[o];
                            let c = a[s.materialIndex];
                            if (c && c.visible) {
                                C.push(e, i, c, n, ke.z, s, t);
                            }
                        }
                    } else {
                        if (a.visible) {
                            C.push(e, i, a, n, ke.z, null, t);
                        }
                    }
                }
            }
            let e_children = e.children;
            for(let e = 0, a = e_children.length; e < a; e++){
                vt(e_children[e], t, n, r);
            }
        }
        function yt({ opaque, transmissive, transparent }, t, n, r) {
            w.setupLightsView(n);
            if (z === true) {
                q.setGlobalState(k.clippingPlanes, n);
            }
            if (r) {
                U.viewport(oe.copy(r));
            }
            if (opaque.length > 0) {
                St(opaque, t, n);
            }
            if (transmissive.length > 0) {
                St(transmissive, t, n);
            }
            if (transparent.length > 0) {
                St(transparent, t, n);
            }
            U.buffers.depth.setTest(true);
            U.buffers.depth.setMask(true);
            U.buffers.color.setMask(true);
            U.setPolygonOffset(false);
        }
        function bt(e, t, n, r) {
            if ((n.isScene === true ? n.overrideMaterial : null) !== null) {
                return;
            }
            if (w.state.transmissionRenderTarget[r.id] === undefined) {
                let e = H.has(`EXT_color_buffer_half_float`) || H.has(`EXT_color_buffer_float`);
                w.state.transmissionRenderTarget[r.id] = new Zn_1(1, 1, {
                    generateMipmaps: true,
                    type: e ? ot_1 : zn_1,
                    minFilter: ft_1,
                    samples: Math.max(4, Ie.samples),
                    stencilBuffer: stencil,
                    resolveDepthBuffer: false,
                    resolveStencilBuffer: false,
                    storeMultisampledDepthBuffer: false,
                    storeMultisampledStencilBuffer: false,
                    colorSpace: V_1.workingColorSpace
                });
            }
            let a = w.state.transmissionRenderTarget[r.id];
            let o = r.viewport || oe;
            a.setSize(o.z * k.transmissionResolutionScale, o.w * k.transmissionResolutionScale);
            let s = k.getRenderTarget();
            let c = k.getActiveCubeFace();
            let l = k.getActiveMipmapLevel();
            k.setRenderTarget(a);
            k.getClearColor(le);
            ue = k.getClearAlpha();
            if (ue < 1) {
                k.setClearColor(16777215, 0.5);
            }
            k.clear();
            if (Me) {
                Ye.render(n);
            }
            let k_toneMapping = k.toneMapping;
            k.toneMapping = 0;
            let r_viewport = r.viewport;
            if (r.viewport !== undefined) {
                r.viewport = undefined;
            }
            w.setupLightsView(r);
            if (z === true) {
                q.setGlobalState(k.clippingPlanes, r);
            }
            St(e, n, r);
            G.updateMultisampleRenderTarget(a);
            G.updateRenderTargetMipmap(a);
            if (H.has(`WEBGL_multisampled_render_to_texture`) === false) {
                let e = false;
                for(let i = 0, a = t.length; i < a; i++){
                    let { object, geometry, material, group } = t[i];
                    if (material.side === 2 && object.layers.test(r.layers)) {
                        let t = material.side;
                        material.side = 1;
                        material.needsUpdate = true;
                        Y(object, n, r, geometry, material, group);
                        material.side = t;
                        material.needsUpdate = true;
                        e = true;
                    }
                }
                if (e === true) {
                    G.updateMultisampleRenderTarget(a);
                    G.updateRenderTargetMipmap(a);
                }
            }
            k.setRenderTarget(s, c, l);
            k.setClearColor(le, ue);
            if (r_viewport !== undefined) {
                r.viewport = r_viewport;
            }
            k.toneMapping = k_toneMapping;
        }
        function St(e, t, n) {
            let r = t.isScene === true ? t.overrideMaterial : null;
            for(let i = 0, a = e.length; i < a; i++){
                let a = e[i];
                let { object, geometry, group } = a;
                let l = a.material;
                if (l.allowOverride === true && r !== null) {
                    l = r;
                }
                if (object.layers.test(n.layers)) {
                    Y(object, t, n, geometry, l, group);
                }
            }
        }
        function Y(object, t, n, geometry, i, group) {
            if (j !== null && i.isNodeMaterial) {
                j.setObject(object, i);
            }
            object.onBeforeRender(k, t, n, geometry, i, group);
            object.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, object.matrixWorld);
            object.normalMatrix.getNormalMatrix(object.modelViewMatrix);
            i.onBeforeRender(k, t, n, geometry, object, group);
            if (i.transparent === true && i.side === 2 && i.forceSinglePass === false) {
                i.side = 1;
                i.needsUpdate = true;
                k.renderBufferDirect(n, t, geometry, i, object, group);
                i.side = 0;
                i.needsUpdate = true;
                k.renderBufferDirect(n, t, geometry, i, object, group);
                i.side = 2;
            } else {
                k.renderBufferDirect(n, t, geometry, i, object, group);
            }
            object.onAfterRender(k, t, n, geometry, i, group);
        }
        function X(e, t, n) {
            if (t.isScene !== true) {
                t = Ae;
            }
            let r = W.get(e);
            let lights = w.state.lights;
            let shadowsArray = w.state.shadowsArray;
            let version = lights.state.version;
            let s = Ue.getParameters(e, lights.state, shadowsArray, t, n, w.state.lightProbeGridArray);
            let c = Ue.getProgramCacheKey(s);
            let r_programs = r.programs;
            r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null;
            r.fog = t.fog;
            let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
            r.envMap = Re.get(e.envMap || r.environment, u);
            r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation;
            if (r_programs === undefined) {
                e.addEventListener(`dispose`, lt);
                r_programs = new Map;
                r.programs = r_programs;
            }
            let d = r_programs.get(c);
            if (d !== undefined) {
                if (r.currentProgram === d && r.lightsStateVersion === version) {
                    Et(e, s);
                    return d;
                }
            } else {
                s.uniforms = Ue.getUniforms(e);
                if (j !== null && e.isNodeMaterial) {
                    j.build(e, n, s);
                }
                e.onBeforeCompile(s, k);
                d = Ue.acquireProgram(s, c);
                r_programs.set(c, d);
                r.uniforms = s.uniforms;
            }
            let r_uniforms = r.uniforms;
            if (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === true) {
                r_uniforms.clippingPlanes = q.uniform;
            }
            Et(e, s);
            r.needsLights = Ft(e);
            r.lightsStateVersion = version;
            if (r.needsLights) {
                r_uniforms.ambientLightColor.value = lights.state.ambient;
                r_uniforms.lightProbe.value = lights.state.probe;
                r_uniforms.sunLights.value = lights.state.sun;
                r_uniforms.sunLightShadows.value = lights.state.sunShadow;
                r_uniforms.directionalLights.value = lights.state.directional;
                r_uniforms.directionalLightShadows.value = lights.state.directionalShadow;
                r_uniforms.spotLights.value = lights.state.spot;
                r_uniforms.spotLightShadows.value = lights.state.spotShadow;
                r_uniforms.rectAreaLights.value = lights.state.rectArea;
                r_uniforms.ltc_1.value = lights.state.rectAreaLTC1;
                r_uniforms.ltc_2.value = lights.state.rectAreaLTC2;
                r_uniforms.pointLights.value = lights.state.point;
                r_uniforms.pointLightShadows.value = lights.state.pointShadow;
                r_uniforms.hemisphereLights.value = lights.state.hemi;
                r_uniforms.sunShadowMatrix.value = lights.state.sunShadowMatrix;
                r_uniforms.sunShadowCascade.value = lights.state.sunShadowCascade;
                r_uniforms.directionalShadowMatrix.value = lights.state.directionalShadowMatrix;
                r_uniforms.spotLightMatrix.value = lights.state.spotLightMatrix;
                r_uniforms.spotLightMap.value = lights.state.spotLightMap;
                r_uniforms.pointShadowMatrix.value = lights.state.pointShadowMatrix;
            }
            r.lightProbeGrid = w.state.lightProbeGridArray.length > 0;
            r.currentProgram = d;
            r.uniformsList = null;
            return d;
        }
        function Tt(e) {
            if (e.uniformsList === null) {
                let t = e.currentProgram.getUniforms();
                e.uniformsList = vr.seqWithValue(t.seq, e.uniforms);
            }
            return e.uniformsList;
        }
        function Et(e, t) {
            let n = W.get(e);
            n.outputColorSpace = t.outputColorSpace;
            n.batching = t.batching;
            n.batchingColor = t.batchingColor;
            n.instancing = t.instancing;
            n.instancingColor = t.instancingColor;
            n.instancingMorph = t.instancingMorph;
            n.skinning = t.skinning;
            n.morphTargets = t.morphTargets;
            n.morphNormals = t.morphNormals;
            n.morphColors = t.morphColors;
            n.morphTargetsCount = t.morphTargetsCount;
            n.numClippingPlanes = t.numClippingPlanes;
            n.numIntersection = t.numClipIntersection;
            n.vertexAlphas = t.vertexAlphas;
            n.vertexTangents = t.vertexTangents;
            n.toneMapping = t.toneMapping;
        }
        function Dt(lightProbeGridArray, t) {
            if (lightProbeGridArray.length === 0) {
                return null;
            }
            if (lightProbeGridArray.length === 1) {
                if (lightProbeGridArray[0].texture === null) {
                    return null;
                }
                return lightProbeGridArray[0];
            }
            S.setFromMatrixPosition(t.matrixWorld);
            for(let t = 0, n = lightProbeGridArray.length; t < n; t++){
                let n = lightProbeGridArray[t];
                if (n.texture !== null && n.boundingBox.containsPoint(S)) {
                    return n;
                }
            }
            return null;
        }
        function Ot(e, t, n, r, i) {
            if (t.isScene !== true) {
                t = Ae;
            }
            G.resetTextureUnits();
            let t_fog = t.fog;
            let o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null;
            let s = P === null ? k.outputColorSpace : P.isXRRenderTarget === true ? P.texture.colorSpace : V_1.workingColorSpace;
            let c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap;
            let l = Re.get(r.envMap || o, c);
            let u = r.vertexColors === true && !!n.attributes.color && n.attributes.color.itemSize === 4;
            let d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0);
            let f = !!n.morphAttributes.position;
            let p = !!n.morphAttributes.normal;
            let m = !!n.morphAttributes.color;
            let h = 0;
            if (r.toneMapped && (P === null || P.isXRRenderTarget === true)) {
                h = k.toneMapping;
            }
            let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color;
            let _ = g === undefined ? 0 : g.length;
            let v = W.get(r);
            let lights = w.state.lights;
            if (z === true && (Ee === true || e !== ae)) {
                let t = e === ae && r.id === ie;
                q.setState(r, e, t);
            }
            let b = false;
            if (r.version === v.__version) {
                if (v.needsLights && v.lightsStateVersion !== lights.state.version) {
                    b = true;
                } else if (v.outputColorSpace === s) {
                    if (i.isBatchedMesh && v.batching === false || !i.isBatchedMesh && v.batching === true || i.isBatchedMesh && v.batchingColor === true && i._colorsTexture === null || i.isBatchedMesh && v.batchingColor === false && i._colorsTexture !== null || i.isInstancedMesh && v.instancing === false || !i.isInstancedMesh && v.instancing === true || i.isSkinnedMesh && v.skinning === false || !i.isSkinnedMesh && v.skinning === true || i.isInstancedMesh && v.instancingColor === true && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === false && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === true && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === false && i.morphTexture !== null) {
                        b = true;
                    } else if (v.envMap === l) {
                        if (r.fog === true && v.fog !== t_fog || v.numClippingPlanes !== undefined && (v.numClippingPlanes !== q.numPlanes || v.numIntersection !== q.numIntersection)) {
                            b = true;
                        } else if (v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.toneMapping === h && v.morphTargetsCount === _) {
                            if (!!v.lightProbeGrid != w.state.lightProbeGridArray.length > 0) {
                                b = true;
                            }
                        } else {
                            b = true;
                        }
                    } else {
                        b = true;
                    }
                } else {
                    b = true;
                }
            } else {
                b = true;
                v.__version = r.version;
            }
            let v_currentProgram = v.currentProgram;
            if (b === true) {
                v_currentProgram = X(r, t, i);
                if (j && r.isNodeMaterial) {
                    j.onUpdateProgram(r, v_currentProgram, v);
                }
            }
            let S = false;
            let C = false;
            let T = false;
            let E = v_currentProgram.getUniforms();
            let v_uniforms = v.uniforms;
            if (U.useProgram(v_currentProgram.program)) {
                S = true;
                C = true;
                T = true;
            }
            if (r.id !== ie) {
                ie = r.id;
                C = true;
            }
            if (v.needsLights) {
                let e = Dt(w.state.lightProbeGridArray, i);
                if (v.lightProbeGrid !== e) {
                    v.lightProbeGrid = e;
                    C = true;
                }
            }
            if (S || ae !== e) {
                if (U.buffers.depth.getReversed() && e.reversedDepth !== true) {
                    e._reversedDepth = true;
                    e.updateProjectionMatrix();
                }
                E.setValue(V, `projectionMatrix`, e.projectionMatrix);
                E.setValue(V, `viewMatrix`, e.matrixWorldInverse);
                let t = E.map.cameraPosition;
                if (t !== undefined) {
                    t.setValue(V, Oe.setFromMatrixPosition(e.matrixWorld));
                }
                if (Ie.logarithmicDepthBuffer) {
                    E.setValue(V, `logDepthBufFC`, 2 / (Math.log(e.far + 1) / Math.LN2));
                }
                if (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) {
                    E.setValue(V, `isOrthographic`, e.isOrthographicCamera === true);
                }
                if (ae !== e) {
                    ae = e;
                    C = true;
                    T = true;
                }
            }
            if (v.needsLights) {
                if (lights.state.sunShadowMap.length > 0) {
                    E.setValue(V, `sunShadowMap`, lights.state.sunShadowMap, G);
                }
                if (lights.state.directionalShadowMap.length > 0) {
                    E.setValue(V, `directionalShadowMap`, lights.state.directionalShadowMap, G);
                }
                if (lights.state.spotShadowMap.length > 0) {
                    E.setValue(V, `spotShadowMap`, lights.state.spotShadowMap, G);
                }
                if (lights.state.pointShadowMap.length > 0) {
                    E.setValue(V, `pointShadowMap`, lights.state.pointShadowMap, G);
                }
            }
            if (i.isSkinnedMesh) {
                E.setOptional(V, i, `bindMatrix`);
                E.setOptional(V, i, `bindMatrixInverse`);
                let e = i.skeleton;
                if (e) {
                    if (e.boneTexture === null) {
                        e.computeBoneTexture();
                    }
                    E.setValue(V, `boneTexture`, e.boneTexture, G);
                }
            }
            if (i.isBatchedMesh) {
                E.setOptional(V, i, `batchingTexture`);
                E.setValue(V, `batchingTexture`, i._matricesTexture, G);
                E.setOptional(V, i, `batchingIdTexture`);
                E.setValue(V, `batchingIdTexture`, i._indirectTexture, G);
                E.setOptional(V, i, `batchingColorTexture`);
                if (i._colorsTexture !== null) {
                    E.setValue(V, `batchingColorTexture`, i._colorsTexture, G);
                }
            }
            let n_morphAttributes = n.morphAttributes;
            if (n_morphAttributes.position !== undefined || n_morphAttributes.normal !== undefined || n_morphAttributes.color !== undefined) {
                Xe.update(i, n, v_currentProgram);
            }
            if (C || v.receiveShadow !== i.receiveShadow) {
                v.receiveShadow = i.receiveShadow;
                E.setValue(V, `receiveShadow`, i.receiveShadow);
            }
            if ((r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null) {
                v_uniforms.envMapIntensity.value = t.environmentIntensity;
            }
            if (v_uniforms.dfgLUT !== undefined) {
                v_uniforms.dfgLUT.value = zi();
            }
            if (C) {
                E.setValue(V, `toneMappingExposure`, k.toneMappingExposure);
                if (v.needsLights) {
                    Pt(v_uniforms, T);
                }
                if (t_fog && r.fog === true) {
                    We.refreshFogUniforms(v_uniforms, t_fog);
                }
                We.refreshMaterialUniforms(v_uniforms, r, R, I, w.state.transmissionRenderTarget[e.id]);
                if (v.needsLights && v.lightProbeGrid) {
                    let e = v.lightProbeGrid;
                    v_uniforms.probesSH.value = e.texture;
                    v_uniforms.probesMin.value.copy(e.boundingBox.min);
                    v_uniforms.probesMax.value.copy(e.boundingBox.max);
                    v_uniforms.probesResolution.value.copy(e.resolution);
                }
                vr.upload(V, Tt(v), v_uniforms, G);
            }
            if (r.isShaderMaterial && r.uniformsNeedUpdate === true) {
                vr.upload(V, Tt(v), v_uniforms, G);
                r.uniformsNeedUpdate = false;
            }
            if (r.isSpriteMaterial) {
                E.setValue(V, `center`, i.center);
            }
            E.setValue(V, `modelViewMatrix`, i.modelViewMatrix);
            E.setValue(V, `normalMatrix`, i.normalMatrix);
            E.setValue(V, `modelMatrix`, i.matrixWorld);
            if (r.uniformsGroups !== undefined) {
                let e = r.uniformsGroups;
                for(let t = 0, n = e.length; t < n; t++){
                    let n = e[t];
                    rt.update(n, v_currentProgram);
                    rt.bind(n, v_currentProgram);
                }
            }
            return v_currentProgram;
        }
        function Pt(e, t) {
            e.ambientLightColor.needsUpdate = t;
            e.lightProbe.needsUpdate = t;
            e.sunLights.needsUpdate = t;
            e.sunLightShadows.needsUpdate = t;
            e.directionalLights.needsUpdate = t;
            e.directionalLightShadows.needsUpdate = t;
            e.pointLights.needsUpdate = t;
            e.pointLightShadows.needsUpdate = t;
            e.spotLights.needsUpdate = t;
            e.spotLightShadows.needsUpdate = t;
            e.rectAreaLights.needsUpdate = t;
            e.hemisphereLights.needsUpdate = t;
        }
        function Ft(e) {
            return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === true;
        }
        this.getActiveCubeFace = function() {
            return N;
        };
        this.getActiveMipmapLevel = function() {
            return re;
        };
        this.getRenderTarget = function() {
            return P;
        };
        this.setRenderTargetTextures = function(e, t, n) {
            let r = W.get(e);
            r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === false;
            if (r.__autoAllocateDepthBuffer === false) {
                r.__useRenderToTexture = false;
            }
            W.get(e.texture).__webglTexture = t;
            W.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? undefined : n;
            r.__hasExternalTextures = true;
        };
        this.setRenderTargetFramebuffer = function(e, t) {
            let n = W.get(e);
            n.__webglFramebuffer = t;
            n.__useDefaultFramebuffer = t === undefined;
        };
        this.setRenderTarget = function(e, t = 0, n = 0) {
            P = e;
            N = t;
            re = n;
            let r = null;
            let i = false;
            let a = false;
            if (e) {
                let o = W.get(e);
                if (o.__useDefaultFramebuffer !== undefined) {
                    U.bindFramebuffer(V.FRAMEBUFFER, o.__webglFramebuffer);
                    oe.copy(e.viewport);
                    se.copy(e.scissor);
                    ce = e.scissorTest;
                    U.viewport(oe);
                    U.scissor(se);
                    U.setScissorTest(ce);
                    ie = -1;
                    return;
                }
                if (o.__webglFramebuffer === undefined) {
                    G.setupRenderTarget(e);
                } else if (o.__hasExternalTextures) {
                    G.rebindTextures(e, W.get(e.texture).__webglTexture, W.get(e.depthTexture).__webglTexture);
                } else if (e.depthBuffer) {
                    let t = e.depthTexture;
                    if (o.__boundDepthTexture !== t) {
                        if (t !== null && W.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) {
                            throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);
                        }
                        G.setupDepthRenderbuffer(e);
                    }
                }
                let s = e.texture;
                if (s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) {
                    a = true;
                }
                let c = W.get(e).__webglFramebuffer;
                if (e.isWebGLCubeRenderTarget) {
                    r = Array.isArray(c[t]) ? c[t][n] : c[t];
                    i = true;
                } else {
                    r = e.samples > 0 && G.useMultisampledRTT(e) === false ? W.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c;
                }
                oe.copy(e.viewport);
                se.copy(e.scissor);
                ce = e.scissorTest;
            } else {
                oe.copy(ve).multiplyScalar(R).floor();
                se.copy(be).multiplyScalar(R).floor();
                ce = Ce;
            }
            if (n !== 0) {
                r = M;
            }
            if (U.bindFramebuffer(V.FRAMEBUFFER, r)) {
                U.drawBuffers(e, r);
            }
            U.viewport(oe);
            U.scissor(se);
            U.setScissorTest(ce);
            if (i) {
                let r = W.get(e.texture);
                V.framebufferTexture2D(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
            } else if (a) {
                let r = t;
                for(let t = 0; t < e.textures.length; t++){
                    let i = W.get(e.textures[t]);
                    V.framebufferTextureLayer(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
                }
            } else if (e !== null && n !== 0) {
                let t = W.get(e.texture);
                V.framebufferTexture2D(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_2D, t.__webglTexture, n);
            }
            ie = -1;
        };
        function It(e) {
            let t = W.get(e);
            if (t.__readFormat !== e.format || t.__readType !== e.type) {
                t.__readFormat = e.format;
                t.__readType = e.type;
                t.__formatReadable = Ie.textureFormatReadable(e.format);
                t.__typeReadable = Ie.textureTypeReadable(e.type);
            }
            return t;
        }
        this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
            if (!(e && e.isWebGLRenderTarget)) {
                nr_1(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
                return;
            }
            let __webglFramebuffer = W.get(e).__webglFramebuffer;
            if (e.isWebGLCubeRenderTarget && o !== undefined) {
                __webglFramebuffer = __webglFramebuffer[o];
            }
            if (__webglFramebuffer) {
                U.bindFramebuffer(V.FRAMEBUFFER, __webglFramebuffer);
                try {
                    let o = e.textures[s];
                    let c = o.format;
                    let l = o.type;
                    if (e.textures.length > 1) {
                        V.readBuffer(V.COLOR_ATTACHMENT0 + s);
                    }
                    let u = It(o);
                    if (u.__formatReadable === false) {
                        nr_1(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);
                        return;
                    }
                    if (u.__typeReadable === false) {
                        nr_1(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);
                        return;
                    }
                    if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
                        V.readPixels(t, n, r, i, $e.convert(c), $e.convert(l), a);
                    }
                } finally{
                    let e = P === null ? null : W.get(P).__webglFramebuffer;
                    U.bindFramebuffer(V.FRAMEBUFFER, e);
                }
            }
        };
        this.readRenderTargetPixelsAsync = async (e, t, n, r, i, a, o, s = 0)=>{
            if (!(e && e.isWebGLRenderTarget)) {
                throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
            }
            let __webglFramebuffer = W.get(e).__webglFramebuffer;
            if (e.isWebGLCubeRenderTarget && o !== undefined) {
                __webglFramebuffer = __webglFramebuffer[o];
            }
            if (__webglFramebuffer) {
                if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
                    U.bindFramebuffer(V.FRAMEBUFFER, __webglFramebuffer);
                    let o = e.textures[s];
                    let l = o.format;
                    let u = o.type;
                    if (e.textures.length > 1) {
                        V.readBuffer(V.COLOR_ATTACHMENT0 + s);
                    }
                    let d = It(o);
                    if (d.__formatReadable === false) {
                        throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);
                    }
                    if (d.__typeReadable === false) {
                        throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);
                    }
                    let f = V.createBuffer();
                    V.bindBuffer(V.PIXEL_PACK_BUFFER, f);
                    V.bufferData(V.PIXEL_PACK_BUFFER, a.byteLength, V.STREAM_READ);
                    V.readPixels(t, n, r, i, $e.convert(l), $e.convert(u), 0);
                    V.bindBuffer(V.PIXEL_PACK_BUFFER, null);
                    let p = P === null ? null : W.get(P).__webglFramebuffer;
                    U.bindFramebuffer(V.FRAMEBUFFER, p);
                    let m = V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    V.flush();
                    await sr_1(V, m, 4);
                    V.bindBuffer(V.PIXEL_PACK_BUFFER, f);
                    V.getBufferSubData(V.PIXEL_PACK_BUFFER, 0, a);
                    V.bindBuffer(V.PIXEL_PACK_BUFFER, null);
                    V.deleteBuffer(f);
                    V.deleteSync(m);
                    return a;
                }
                throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`);
            }
        };
        this.copyFramebufferToTexture = function(e, t = null, n = 0) {
            let r = 2 ** -n;
            let i = Math.floor(e.image.width * r);
            let a = Math.floor(e.image.height * r);
            let o = t === null ? 0 : t.x;
            let s = t === null ? 0 : t.y;
            G.setTexture2D(e, 0);
            V.copyTexSubImage2D(V.TEXTURE_2D, n, 0, 0, o, s, i, a);
            U.unbindTexture();
        };
        this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
            let o;
            let s;
            let c;
            let l;
            let u;
            let d;
            let f;
            let p;
            let m;
            let h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
            if (n !== null) {
                o = n.max.x - n.min.x;
                s = n.max.y - n.min.y;
                c = n.isBox3 ? n.max.z - n.min.z : 1;
                l = n.min.x;
                u = n.min.y;
                d = n.isBox3 ? n.min.z : 0;
            } else {
                let t = 2 ** -i;
                o = Math.floor(h.width * t);
                s = Math.floor(h.height * t);
                c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1;
                l = 0;
                u = 0;
                d = 0;
            }
            if (r === null) {
                f = 0;
                p = 0;
                m = 0;
            } else {
                f = r.x;
                p = r.y;
                m = r.z;
            }
            let g = $e.convert(t.format);
            let _ = $e.convert(t.type);
            let v;
            if (t.isData3DTexture) {
                G.setTexture3D(t, 0);
                v = V.TEXTURE_3D;
            } else if (t.isDataArrayTexture || t.isCompressedArrayTexture) {
                G.setTexture2DArray(t, 0);
                v = V.TEXTURE_2D_ARRAY;
            } else {
                G.setTexture2D(t, 0);
                v = V.TEXTURE_2D;
            }
            U.activeTexture(V.TEXTURE0);
            U.pixelStorei(V.UNPACK_FLIP_Y_WEBGL, t.flipY);
            U.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha);
            U.pixelStorei(V.UNPACK_ALIGNMENT, t.unpackAlignment);
            let y = U.getParameter(V.UNPACK_ROW_LENGTH);
            let b = U.getParameter(V.UNPACK_IMAGE_HEIGHT);
            let x = U.getParameter(V.UNPACK_SKIP_PIXELS);
            let S = U.getParameter(V.UNPACK_SKIP_ROWS);
            let C = U.getParameter(V.UNPACK_SKIP_IMAGES);
            U.pixelStorei(V.UNPACK_ROW_LENGTH, h.width);
            U.pixelStorei(V.UNPACK_IMAGE_HEIGHT, h.height);
            U.pixelStorei(V.UNPACK_SKIP_PIXELS, l);
            U.pixelStorei(V.UNPACK_SKIP_ROWS, u);
            U.pixelStorei(V.UNPACK_SKIP_IMAGES, d);
            let w = e.isDataArrayTexture || e.isData3DTexture;
            let T = t.isDataArrayTexture || t.isData3DTexture;
            if (e.isDepthTexture) {
                let n = W.get(e);
                let r = W.get(t);
                let h = W.get(n.__renderTarget);
                let g = W.get(r.__renderTarget);
                U.bindFramebuffer(V.READ_FRAMEBUFFER, h.__webglFramebuffer);
                U.bindFramebuffer(V.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
                for(let n = 0; n < c; n++){
                    if (w) {
                        V.framebufferTextureLayer(V.READ_FRAMEBUFFER, V.COLOR_ATTACHMENT0, W.get(e).__webglTexture, i, d + n);
                        V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER, V.COLOR_ATTACHMENT0, W.get(t).__webglTexture, a, m + n);
                    }
                    V.blitFramebuffer(l, u, o, s, f, p, o, s, V.DEPTH_BUFFER_BIT, V.NEAREST);
                }
                U.bindFramebuffer(V.READ_FRAMEBUFFER, null);
                U.bindFramebuffer(V.DRAW_FRAMEBUFFER, null);
            } else if (i !== 0 || e.isRenderTargetTexture || W.has(e)) {
                let n = W.get(e);
                let r = W.get(t);
                U.bindFramebuffer(V.READ_FRAMEBUFFER, te);
                U.bindFramebuffer(V.DRAW_FRAMEBUFFER, ne);
                for(let e = 0; e < c; e++){
                    if (w) {
                        V.framebufferTextureLayer(V.READ_FRAMEBUFFER, V.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e);
                    } else {
                        V.framebufferTexture2D(V.READ_FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_2D, n.__webglTexture, i);
                    }
                    if (T) {
                        V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER, V.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e);
                    } else {
                        V.framebufferTexture2D(V.DRAW_FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_2D, r.__webglTexture, a);
                    }
                    if (i === 0) {
                        if (T) {
                            V.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s);
                        } else {
                            V.copyTexSubImage2D(v, a, f, p, l, u, o, s);
                        }
                    } else {
                        V.blitFramebuffer(l, u, o, s, f, p, o, s, V.COLOR_BUFFER_BIT, V.NEAREST);
                    }
                }
                U.bindFramebuffer(V.READ_FRAMEBUFFER, null);
                U.bindFramebuffer(V.DRAW_FRAMEBUFFER, null);
            } else {
                if (T) {
                    if (e.isDataTexture || e.isData3DTexture) {
                        V.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data);
                    } else if (t.isCompressedArrayTexture) {
                        V.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data);
                    } else {
                        V.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h);
                    }
                } else if (e.isDataTexture) {
                    V.texSubImage2D(V.TEXTURE_2D, a, f, p, o, s, g, _, h.data);
                } else if (e.isCompressedTexture) {
                    V.compressedTexSubImage2D(V.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data);
                } else {
                    V.texSubImage2D(V.TEXTURE_2D, a, f, p, o, s, g, _, h);
                }
            }
            U.pixelStorei(V.UNPACK_ROW_LENGTH, y);
            U.pixelStorei(V.UNPACK_IMAGE_HEIGHT, b);
            U.pixelStorei(V.UNPACK_SKIP_PIXELS, x);
            U.pixelStorei(V.UNPACK_SKIP_ROWS, S);
            U.pixelStorei(V.UNPACK_SKIP_IMAGES, C);
            if (a === 0 && t.generateMipmaps) {
                V.generateMipmap(v);
            }
            U.unbindTexture();
        };
        this.initRenderTarget = function(e) {
            if (W.get(e).__webglFramebuffer === undefined) {
                G.setupRenderTarget(e);
            }
        };
        this.initTexture = function(e) {
            if (e.isCubeTexture) {
                G.setTextureCube(e, 0);
            } else if (e.isData3DTexture) {
                G.setTexture3D(e, 0);
            } else if (e.isDataArrayTexture || e.isCompressedArrayTexture) {
                G.setTexture2DArray(e, 0);
            } else {
                G.setTexture2D(e, 0);
            }
            U.unbindTexture();
        };
        this.resetState = function() {
            N = 0;
            re = 0;
            P = null;
            U.reset();
            tt.reset();
        };
        if (typeof __THREE_DEVTOOLS__ < `u`) {
            __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, {
                detail: this
            }));
        }
    }
    get coordinateSystem() {
        return Xn_1;
    }
    get outputColorSpace() {
        return this._outputColorSpace;
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e;
        let t = this.getContext();
        t.drawingBufferColorSpace = V_1._getDrawingBufferColorSpace(e);
        t.unpackColorSpace = V_1._getUnpackColorSpace();
    }
}
class Vi extends jn_1 {
    constructor(){
        super();
        this.name = `RoomEnvironment`;
        this.position.y = -3.5;
        let e = new P;
        e.deleteAttribute(`uv`);
        let t = new Ct_1({
            side: 1
        });
        let n = new Ct_1;
        let r = new Nt_1(16777215, 900, 28, 2);
        r.position.set(0.418, 16.199, 0.3);
        this.add(r);
        let i = new vt(e, t);
        i.position.set(-0.757, 13.219, 0.717);
        i.scale.set(31.713, 28.305, 28.591);
        this.add(i);
        let a = new ct(e, n, 6);
        let o = new Ot_1;
        o.position.set(-10.906, 2.009, 1.846);
        o.rotation.set(0, -0.195, 0);
        o.scale.set(2.328, 7.905, 4.651);
        o.updateMatrix();
        a.setMatrixAt(0, o.matrix);
        o.position.set(-5.607, -0.754, -0.758);
        o.rotation.set(0, 0.994, 0);
        o.scale.set(1.97, 1.534, 3.955);
        o.updateMatrix();
        a.setMatrixAt(1, o.matrix);
        o.position.set(6.167, 0.857, 7.803);
        o.rotation.set(0, 0.561, 0);
        o.scale.set(3.927, 6.285, 3.687);
        o.updateMatrix();
        a.setMatrixAt(2, o.matrix);
        o.position.set(-2.017, 0.018, 6.124);
        o.rotation.set(0, 0.333, 0);
        o.scale.set(2.002, 4.566, 2.064);
        o.updateMatrix();
        a.setMatrixAt(3, o.matrix);
        o.position.set(2.291, -0.756, -2.621);
        o.rotation.set(0, -0.286, 0);
        o.scale.set(1.546, 1.552, 1.496);
        o.updateMatrix();
        a.setMatrixAt(4, o.matrix);
        o.position.set(-2.193, -0.369, -5.547);
        o.rotation.set(0, 0.516, 0);
        o.scale.set(3.875, 3.487, 2.986);
        o.updateMatrix();
        a.setMatrixAt(5, o.matrix);
        this.add(a);
        let s = new vt(e, Hi(50));
        s.position.set(-16.116, 14.37, 8.208);
        s.scale.set(0.1, 2.428, 2.739);
        this.add(s);
        let c = new vt(e, Hi(50));
        c.position.set(-16.109, 18.021, -8.207);
        c.scale.set(0.1, 2.425, 2.751);
        this.add(c);
        let l = new vt(e, Hi(17));
        l.position.set(14.904, 12.198, -1.832);
        l.scale.set(0.15, 4.265, 6.331);
        this.add(l);
        let u = new vt(e, Hi(43));
        u.position.set(-0.462, 8.89, 14.52);
        u.scale.set(4.38, 5.441, 0.088);
        this.add(u);
        let f = new vt(e, Hi(20));
        f.position.set(3.235, 11.486, -12.541);
        f.scale.set(2.5, 2, 0.1);
        this.add(f);
        let p = new vt(e, Hi(100));
        p.position.set(0, 20, 0);
        p.scale.set(1, 0.1, 1);
        this.add(p);
    }
    dispose() {
        let e = new Set;
        this.traverse((t)=>{
            if (t.isMesh) {
                e.add(t.geometry);
                e.add(t.material);
            }
        });
        for (let t of e){
            t.dispose();
        }
    }
}
function Hi(emissiveIntensity) {
    return new St({
        color: 0,
        emissive: 16777215,
        emissiveIntensity
    });
}
const Ui = {
    linear: (e)=>e,
    inOutCubic: (e)=>{
        if (e < 0.5) {
            return 4 * e * e * e;
        }
        return 1 - (-2 * e + 2) ** 3 / 2;
    },
    outCubic: (e)=>1 - (1 - e) ** 3,
    outQuart: (e)=>1 - (1 - e) ** 4,
    inCubic: (e)=>e * e * e,
    outBack: (e)=>1 + 2.70158 * (e - 1) ** 3 + 1.70158 * (e - 1) ** 2,
    inBack: (e)=>2.70158 * e * e * e - 1.70158 * e * e
};
class Wi {
    constructor(){
        this.list = new Set;
        this.speed = 1;
    }
    add({ duration = 600, delay = 0, easing = Ui.inOutCubic, onUpdate, onComplete, onStart }) {
        let o = {
            start: performance.now() + delay * this.speed,
            duration: Math.max(1, duration * this.speed),
            easing,
            onUpdate,
            onComplete,
            onStart,
            started: false,
            done: false,
            cancel: ()=>{
                o.done = true;
                this.list.delete(o);
            }
        };
        this.list.add(o);
        return o;
    }
    wait(delay) {
        return new Promise((resolve)=>this.add({
                duration: 1,
                delay,
                onComplete: resolve
            }));
    }
    get active() {
        return this.list.size > 0;
    }
    update(e = performance.now()) {
        for (let t of [
            ...this.list
        ]){
            if (e < t.start) {
                continue;
            }
            if (!t.started) {
                t.started = true;
                t.onStart?.();
            }
            let n = Math.min(1, (e - t.start) / t.duration);
            t.onUpdate?.(t.easing(n), n);
            if (n >= 1) {
                this.list.delete(t);
                t.done = true;
                t.onComplete?.();
            }
        }
    }
}
const Gi = Math.PI / 180;
const Ki = 90 * Gi;
const qi = 3.2;
const Ji = 22;
const Yi = 760;
const Xi = 110;
const Zi = 4.5;
const Qi = 340;
const $i = (e)=>Math.atan2(Math.sin(e), Math.cos(e));
const ea = (e, t, n)=>Math.min(n, Math.max(t, e));
const ta = {
    KeyW: [
        0,
        -1
    ],
    ArrowUp: [
        0,
        -1
    ],
    KeyS: [
        0,
        1
    ],
    ArrowDown: [
        0,
        1
    ],
    KeyA: [
        -1,
        0
    ],
    ArrowLeft: [
        -1,
        0
    ],
    KeyD: [
        1,
        0
    ],
    ArrowRight: [
        1,
        0
    ]
};
class na {
    constructor(e, { tweens, toStage, getSize, onChange, onClick, onDragState, onGrab }){
        this.el = e;
        this.tweens = tweens;
        this.toStage = toStage;
        this.getSize = getSize;
        this.onChange = onChange;
        this.onClick = onClick;
        this.onDragState = onDragState;
        this.onGrab = onGrab;
        this.glide = new qn_1;
        this.grab = null;
        this.view = {
            target: new Jn_1,
            azimuth: 36 * Gi,
            elevation: 43 * Gi,
            zoom: 8.4
        };
        this.zoomGoal = this.view.zoom;
        this.zoomAnchor = null;
        this.velocity = new qn_1;
        this.keys = new Set;
        this.pointers = new Map;
        this.drag = null;
        this.anim = null;
        this.fit = 1;
        this.bounds = {
            minX: -90,
            maxX: 150,
            minZ: -110,
            maxZ: 90
        };
        e.addEventListener(`pointerdown`, (e)=>this.down(e));
        e.addEventListener(`pointermove`, (e)=>this.move(e));
        e.addEventListener(`pointerup`, (e)=>this.up(e));
        e.addEventListener(`pointercancel`, (e)=>this.up(e));
        e.addEventListener(`lostpointercapture`, (e)=>this.up(e));
        e.addEventListener(`wheel`, (e)=>this.wheel(e), {
            passive: false
        });
        e.addEventListener(`contextmenu`, (e)=>{
            if (!this.overUi(e)) {
                e.preventDefault();
            }
        });
        e.addEventListener(`auxclick`, (e)=>e.button === 1 && e.preventDefault());
        window.addEventListener(`keydown`, (e)=>this.keydown(e));
        window.addEventListener(`keyup`, (e)=>this.keys.delete(e.code));
        window.addEventListener(`blur`, ()=>this.keys.clear());
    }
    overUi(e) {
        return !!e.target.closest?.(`.callout, .viewbar, .tag, .hotspot, .readout, .minimap, .inspector`);
    }
    down(e) {
        if (this.overUi(e)) {
            return;
        }
        if (e.button === 1) {
            e.preventDefault();
        }
        this.glide.set(0, 0);
        if (e.button === 0 && this.pointers.size === 0 && !this.grab) {
            let handler = this.onGrab?.(e);
            if (handler) {
                this.stopAnimation();
                this.el.setPointerCapture(e.pointerId);
                this.grab = {
                    id: e.pointerId,
                    handler
                };
                this.onDragState?.(`part`);
                return;
            }
        }
        this.stopAnimation();
        this.el.setPointerCapture(e.pointerId);
        let t = this.toStage(e.clientX, e.clientY);
        this.pointers.set(e.pointerId, t);
        let e_timeStamp = e.timeStamp;
        this.drag = {
            mode: this.pointers.size > 1 ? `touch` : e.button === 1 ? `rotate` : `pan`,
            start: t,
            last: t,
            moved: 0,
            panning: false,
            ratchet: 0,
            samples: [
                {
                    t: e_timeStamp,
                    x: t.x,
                    y: t.y
                }
            ],
            touch: this.touchState()
        };
        this.onDragState?.(this.drag.mode);
    }
    touchState() {
        let e = [
            ...this.pointers.values()
        ];
        if (e.length < 2) {
            return null;
        }
        return {
            dist: Math.hypot(e[0].x - e[1].x, e[0].y - e[1].y),
            angle: Math.atan2(e[1].y - e[0].y, e[1].x - e[0].x),
            mid: {
                x: (e[0].x + e[1].x) / 2,
                y: (e[0].y + e[1].y) / 2
            },
            twist: this.drag?.touch?.twist ?? 0
        };
    }
    sample(e, t, n) {
        let t_2 = n ?? performance.now();
        for(e.samples.push({
            t: t_2,
            x: t.x,
            y: t.y
        }); e.samples.length > 2 && t_2 - e.samples[0].t > 100;){
            e.samples.shift();
        }
    }
    move(e) {
        if (this.grab && e.pointerId === this.grab.id) {
            this.grab.handler.move?.(e);
            this.onChange();
            return;
        }
        if (!this.drag || !this.pointers.has(e.pointerId)) {
            return;
        }
        if (!e.buttons) {
            this.up(e);
            return;
        }
        let t = this.toStage(e.clientX, e.clientY);
        this.pointers.set(e.pointerId, t);
        let drag = this.drag;
        if (drag.mode === `touch`) {
            let t = this.touchState();
            if (t && drag.touch) {
                this.zoomAt(t.dist / Math.max(1, drag.touch.dist), t.mid);
                this.zoomGoal = this.view.zoom;
                this.panBy(t.mid.x - drag.touch.mid.x, t.mid.y - drag.touch.mid.y);
                this.sample(drag, t.mid, e.timeStamp);
                t.twist = drag.touch.twist + $i(t.angle - drag.touch.angle);
                if (Math.abs(t.twist) > 40 * Gi) {
                    this.turn(t.twist > 0 ? 1 : -1);
                    t.twist = 0;
                }
            }
            drag.touch = t;
            drag.moved += 10;
            drag.panning = true;
            this.onChange();
            return;
        }
        let r = t.x - drag.last.x;
        let i = t.y - drag.last.y;
        drag.last = t;
        drag.moved += Math.abs(r) + Math.abs(i);
        if (drag.mode === `rotate`) {
            drag.ratchet += r;
            if (Math.abs(drag.ratchet) > Xi) {
                this.turn(drag.ratchet > 0 ? -1 : 1);
                drag.ratchet = 0;
            }
        } else {
            this.sample(drag, t, e.timeStamp);
            if (drag.panning) {
                this.panBy(r, i);
            } else {
                if (Math.hypot(t.x - drag.start.x, t.y - drag.start.y) < 4) {
                    return;
                }
                drag.panning = true;
                this.panBy(t.x - drag.start.x, t.y - drag.start.y);
            }
            this.onChange();
        }
    }
    up(e) {
        if (this.grab && e.pointerId === this.grab.id) {
            this.grab.handler.up?.(e);
            this.grab = null;
            this.onDragState?.(null);
            this.onChange();
            return;
        }
        if (!this.pointers.has(e.pointerId)) {
            return;
        }
        this.pointers.delete(e.pointerId);
        let drag = this.drag;
        if (drag) {
            if (this.pointers.size === 0) {
                if (drag.panning) {
                    this.fling(drag, e.timeStamp);
                } else if (drag.mode === `pan` && e.button === 0) {
                    this.onClick?.(e);
                }
                this.drag = null;
                this.onDragState?.(null);
            } else {
                drag.touch = this.touchState();
            }
        }
    }
    fling({ samples }, t = performance.now()) {
        let r = samples[samples.length - 1];
        if (!r || t - r.t > 60) {
            return;
        }
        let i = samples.find((e)=>r.t - e.t <= 90) ?? samples[0];
        let a = r.t - i.t;
        if (a < 8) {
            return;
        }
        let o = (r.x - i.x) / a;
        let s = (r.y - i.y) / a;
        let c = Math.hypot(o, s);
        if (c < 0.08) {
            return;
        }
        let l = Math.min(1, Zi / c);
        this.glide.set(o * l, s * l);
        this.onChange();
    }
    wheel(e) {
        if (this.overUi(e)) {
            return;
        }
        e.preventDefault();
        this.stopAnimation();
        let t = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
        this.zoomGoal = ea(this.zoomGoal * Math.exp(-t * 0.0018), qi, Ji);
        this.zoomAnchor = this.toStage(e.clientX, e.clientY);
        this.onChange();
    }
    keydown(e) {
        if (e.metaKey || e.ctrlKey || e.altKey) {
            return;
        }
        let document_activeElement = document.activeElement;
        if (!document_activeElement?.matches?.(`input, textarea, select`) && !(e.code.startsWith(`Arrow`) && document_activeElement?.matches?.(`[role="tab"], [role="radio"]`))) {
            if (ta[e.code]) {
                this.keys.add(e.code);
                this.stopAnimation();
                this.glide.set(0, 0);
                e.preventDefault();
                this.onChange();
            } else if (!e.repeat) {
                if (e.code === `KeyQ`) {
                    this.turn(-1);
                } else if (e.code === `KeyE`) {
                    this.turn(1);
                } else if (e.key === `+` || e.key === `=` || e.code === `PageUp`) {
                    this.zoomBy(1.3);
                } else if (e.key === `-` || e.key === `_` || e.code === `PageDown`) {
                    this.zoomBy(1 / 1.3);
                } else {
                    return;
                }
                e.preventDefault();
            }
        }
    }
    axes() {
        let azimuth = this.view.azimuth;
        return {
            right: new Jn_1(Math.cos(azimuth), 0, -Math.sin(azimuth)),
            away: new Jn_1(-Math.sin(azimuth), 0, -Math.cos(azimuth))
        };
    }
    panBy(e, t) {
        let { right, away } = this.axes();
        let i = this.view.zoom * this.fit;
        let a = Math.sin(this.view.elevation);
        this.view.target.addScaledVector(right, -e / i).addScaledVector(away, t / (i * a));
        this.clampTarget();
    }
    clampTarget() {
        let target = this.view.target;
        let bounds = this.bounds;
        let n = ea(target.x, bounds.minX, bounds.maxX);
        let r = ea(target.z, bounds.minZ, bounds.maxZ);
        if (n !== target.x || r !== target.z) {
            this.glide.set(0, 0);
        }
        target.x = n;
        target.z = r;
    }
    groundAt(e, t) {
        let { cx, cy } = this.getSize();
        let { right, away } = this.axes();
        let o = this.view.zoom * this.fit;
        let s = Math.sin(this.view.elevation);
        return this.view.target.clone().addScaledVector(right, (e - cx) / o).addScaledVector(away, -(t - cy) / (o * s));
    }
    zoomAt(e, t) {
        let view = this.view;
        let n_zoom = view.zoom;
        let i = ea(n_zoom * e, qi, Ji);
        if (t) {
            let { cx, cy } = this.getSize();
            let { right, away } = this.axes();
            let c = Math.sin(view.elevation);
            let l = (1 / n_zoom - 1 / i) / this.fit;
            view.target.addScaledVector(right, (t.x - cx) * l).addScaledVector(away, -((t.y - cy) * l) / c);
            this.clampTarget();
        }
        view.zoom = i;
    }
    zoomBy(e) {
        this.stopAnimation();
        let { cx: x_1, cy: y_1 } = this.getSize();
        this.zoomGoal = ea(this.zoomGoal * e, qi, Ji);
        this.zoomAnchor = {
            x: x_1,
            y: y_1
        };
        this.onChange();
    }
    stopAnimation() {
        if (this.anim) {
            this.anim.cancel();
            this.anim = null;
            this.zoomGoal = this.view.zoom;
        }
    }
    jumpTo(e) {
        this.stopAnimation();
        this.velocity.set(0, 0);
        this.glide.set(0, 0);
        let view = this.view;
        if (e.target) {
            view.target.set(...e.target);
        }
        if (e.azimuth !== undefined) {
            view.azimuth = e.azimuth;
        }
        if (e.elevation !== undefined) {
            view.elevation = e.elevation;
        }
        if (e.zoom !== undefined) {
            view.zoom = e.zoom;
        }
        this.zoomGoal = view.zoom;
        this.onChange();
    }
    animateTo(e, { duration = 1200, easing = Ui.inOutCubic } = {}) {
        this.stopAnimation();
        this.velocity.set(0, 0);
        this.glide.set(0, 0);
        let view = this.view;
        let i = {
            target: view.target.clone(),
            azimuth: view.azimuth,
            elevation: view.elevation,
            zoom: view.zoom
        };
        let a = e.target ? new Jn_1().fromArray(e.target.toArray ? e.target.toArray() : e.target) : i.target;
        let o = e.azimuth === undefined ? 0 : $i(e.azimuth - i.azimuth);
        let elevation = e.elevation ?? i.elevation;
        let zoom = e.zoom ?? i.zoom;
        return new Promise((resolve)=>{
            let l = this.tweens.add({
                duration,
                easing,
                onUpdate: (e)=>{
                    view.target.lerpVectors(i.target, a, e);
                    view.azimuth = $i(i.azimuth + o * e);
                    view.elevation = i.elevation + (elevation - i.elevation) * e;
                    view.zoom = Math.exp(Math.log(i.zoom) + (Math.log(zoom) - Math.log(i.zoom)) * e);
                    this.zoomGoal = view.zoom;
                    this.onChange();
                },
                onComplete: ()=>{
                    if (this.anim === l) {
                        this.anim = null;
                    }
                    resolve();
                }
            });
            l.goal = i.azimuth + o;
            l.to = {
                target: a.toArray(),
                elevation,
                zoom
            };
            l.end = performance.now() + duration;
            this.anim = l;
        });
    }
    turn(e, t = 36 * Gi) {
        let n = this.anim?.goal ?? this.view.azimuth;
        let r = Math.round($i(n - t) / Ki) + e;
        let i = this.anim?.to ?? {};
        let a = this.anim ? this.anim.end - performance.now() : 0;
        return this.animateTo({
            ...i,
            azimuth: $i(t + r * Ki)
        }, {
            duration: Math.max(620, a)
        });
    }
    update(e) {
        let t = false;
        let n = new qn_1;
        let r = this.keys.has(`ShiftLeft`) || this.keys.has(`ShiftRight`) ? 2 : 1;
        for (let e of this.keys){
            let t = ta[e];
            if (t) {
                n.x += t[0];
                n.y += t[1];
            }
        }
        if (n.lengthSq()) {
            n.normalize().multiplyScalar(Yi * r);
        }
        let i = 1 - Math.exp(-e / 70);
        this.velocity.x += (n.x - this.velocity.x) * i;
        this.velocity.y += (n.y - this.velocity.y) * i;
        if (this.velocity.lengthSq() > 1) {
            if (n.lengthSq()) {
                this.stopAnimation();
            }
            this.panBy(-this.velocity.x * e / 1000, -this.velocity.y * e / 1000);
            t = true;
        } else {
            this.velocity.set(0, 0);
        }
        if (this.glide.lengthSq() > 0.0004 && !this.drag) {
            this.panBy(this.glide.x * e, this.glide.y * e);
            this.glide.multiplyScalar(Math.exp(-e / Qi));
            t = true;
        } else if (!this.drag) {
            this.glide.set(0, 0);
        }
        if (!this.anim && Math.abs(Math.log(this.zoomGoal / this.view.zoom)) > 0.0001) {
            let n = (this.zoomGoal / this.view.zoom) ** (1 - Math.exp(-e / 75));
            this.zoomAt(n, this.zoomAnchor);
            t = true;
        }
        if (t) {
            this.onChange();
        }
        return t;
    }
    get destination() {
        let anim = this.anim;
        if (anim) {
            return {
                target: new Jn_1(...anim.to.target),
                azimuth: anim.goal,
                elevation: anim.to.elevation,
                zoom: anim.to.zoom
            };
        }
        return this.view;
    }
    isNear(e, t = this.view) {
        let n = new Jn_1(...e.target);
        return Math.abs($i(t.azimuth - e.azimuth)) < 3 * Gi && Math.abs(t.elevation - e.elevation) < 3 * Gi && Math.abs(Math.log(t.zoom / e.zoom)) < 0.06 && t.target.distanceTo(n) < 3;
    }
}
const ra = Math.PI / 180;
const ia = new Jn_1(64, -4, -50);
const aa = -4;
const Z = (e, t)=>u(e, t).add(ia);
const oa = (e)=>new Jn_1(...k(e));
const sa = (e)=>{
    let t = Z(e, `e`);
    t.z = ia.z;
    return t;
};
const Q = {
    red: `#d64a3a`,
    navy: `#2f3547`,
    orange: `#f0a53a`,
    yellow: `#f0b53a`,
    green: `#3fae6a`,
    blue: `#3d6fc4`,
    coral: `#ee7f62`,
    purple: `#8a63c9`,
    brown: `#7a5034`
};
const ca = {
    id: `breadboard`,
    build: a,
    at: ia
};
function $(e, t, n, r, i) {
    let a = typeof t == `string` ? oa(t) : t;
    let o = typeof n == `string` ? oa(n) : n;
    return {
        id: e,
        key: [
            e,
            ...a.toArray(),
            ...o.toArray(),
            r
        ].join(`|`),
        wire: true,
        build: ()=>d(a, o, r, i)
    };
}
function la(e) {
    let t = Z(e + 1.5, `b`);
    t.y += 15.6;
    return {
        id: `sensor`,
        build: D,
        at: t,
        rot: [
            90 * ra,
            0,
            0
        ]
    };
}
const ua = 0.8;
const da = ia.z + 11.43 + 12.8;
const fa = (gap)=>da + gap * ua;
const pa = (e)=>(e - da) / ua;
function ma(e) {
    return {
        id: `obstacle`,
        key: (e)=>`obstacle|${e.obstacle}`,
        build: (e)=>g(e.obstacle),
        at: (t)=>new Jn_1(e, aa, fa(t.gap)),
        interact: {
            type: `slide`,
            param: `gap`,
            toParam: (e)=>pa(e.z)
        }
    };
}
const ha = Z(20.5, `c`);
const ga = ha.clone().setY(ha.y + 7);
const _a = new Jn_1(Math.cos(36 * ra), 0, -Math.sin(36 * ra));
const va = 20;
const ya = 0.5;
const ba = Math.atan2(_a.x, _a.z);
const xa = (dist)=>ha.clone().setY(aa).addScaledVector(_a, va + dist * ya);
const toParam = (e)=>(e.clone().sub(ha).setY(0).dot(_a) - va) / ya;
function Ca(e) {
    if (e.lamp) {
        return Math.round(70 + 930 / (1 + (e.dist / 14) ** 2));
    }
    return 70;
}
function wa(at, t = `color`) {
    return {
        id: `led`,
        build: (e)=>p(t_1[e[t]] ?? t_1.red),
        apply: (e, n)=>C(e, t_1[n[t]] ?? t_1.red),
        at
    };
}
const Ta = {
    board: {
        parts: []
    },
    blink: {
        parts: [
            ca,
            {
                id: `resistor`,
                key: (e)=>`resistor|${e.ohms}`,
                build: (e)=>b(e.ohms),
                at: Z(12, `b`)
            },
            wa(Z(14.5, `c`)),
            $(`w-d13`, `D13`, Z(10, `a`), Q.orange, {
                arch: 12
            }),
            $(`w-gnd`, `GND`, Z(15, `a`), Q.navy, {
                arch: 16
            })
        ]
    },
    button: {
        parts: [
            ca,
            {
                id: `button`,
                build: ()=>v(),
                at: sa(9),
                interact: {
                    type: `press`,
                    input: `button`
                }
            },
            {
                id: `pulldown`,
                build: ()=>b(10000),
                at: Z(12, `b`)
            },
            {
                id: `resistor`,
                build: ()=>b(220),
                at: Z(17, `b`)
            },
            wa(Z(19.5, `c`)),
            $(`w-5v`, `5V`, Z(8, `a`), Q.red, {
                arch: 20
            }),
            $(`w-d2`, `D2`, Z(10, `a`), Q.blue, {
                arch: 12
            }),
            $(`w-gnd`, `GND`, Z(14, `a`), Q.navy, {
                arch: 19
            }),
            $(`w-d13`, `D13`, Z(15, `a`), Q.orange, {
                arch: 17
            }),
            $(`w-bridge`, Z(14, `e`), Z(20, `e`), Q.navy, {
                arch: 4,
                lean: 0.3
            })
        ]
    },
    knob: {
        parts: [
            ca,
            {
                id: `pot`,
                build: _,
                at: Z(10, `e`),
                apply: (e, t)=>{
                    e.userData.knob.rotation.y = -(t.pot / 1023 * 270 - 135) * ra;
                },
                interact: {
                    type: `knob`,
                    param: `pot`,
                    min: 0,
                    max: 1023,
                    sweep: 270
                }
            },
            {
                id: `resistor`,
                build: ()=>b(220),
                at: Z(17, `b`)
            },
            wa(Z(19.5, `c`)),
            $(`w-5v`, `5V`, Z(9, `a`), Q.red, {
                arch: 20
            }),
            $(`w-a0`, `A0`, Z(10, `a`), Q.green, {
                arch: 27
            }),
            $(`w-gnd-p`, `GND1`, Z(11, `a`), Q.navy, {
                arch: 12
            }),
            $(`w-d9`, `D9`, Z(15, `a`), Q.orange, {
                arch: 12
            }),
            $(`w-bridge`, Z(11, `b`), Z(20, `e`), Q.navy, {
                arch: 4,
                lean: 0.3
            })
        ]
    },
    rgb: {
        parts: [
            ca,
            {
                id: `rgb`,
                build: ()=>x(),
                at: Z(16.5, `d`),
                apply: (e, t)=>w(e, t.r, t.g, t.b)
            },
            {
                id: `r-red`,
                build: ()=>b(220),
                at: Z(13, `b`)
            },
            {
                id: `r-green`,
                build: ()=>b(220),
                at: Z(19, `b`)
            },
            {
                id: `r-blue`,
                build: ()=>b(220, 4 * r, {
                        lift: 6.4
                    }),
                at: Z(20, `c`)
            },
            $(`w-d9`, `D9`, Z(11, `a`), Q.coral, {
                arch: 7
            }),
            $(`w-d10`, `D10`, Z(21, `a`), Q.green, {
                arch: 15
            }),
            $(`w-d11`, `D11`, Z(22, `a`), Q.blue, {
                arch: 18
            }),
            $(`w-gnd`, `GND`, Z(16, `a`), Q.navy, {
                arch: 22
            })
        ]
    },
    light: {
        parts: [
            ca,
            {
                id: `resistor`,
                build: ()=>b(220),
                at: Z(10, `b`)
            },
            {
                id: `led`,
                build: ()=>p(t_1.yellow),
                at: Z(12.5, `c`)
            },
            {
                id: `ldr`,
                build: f,
                at: ha
            },
            {
                id: `pulldown`,
                build: ()=>b(10000),
                at: Z(19, `b`)
            },
            {
                id: `lamp`,
                build: s,
                at: (e)=>xa(e.dist),
                rot: [
                    0,
                    ba,
                    0
                ],
                apply: (e, t)=>i(e, ga, {
                        on: t.lamp,
                        level: (Ca(t) - 70) / 930,
                        floorY: ha.y
                    }),
                interact: {
                    type: `slide`,
                    param: `dist`,
                    toParam
                }
            },
            $(`w-d9`, `D9`, Z(8, `a`), Q.orange, {
                arch: 12
            }),
            $(`w-gnd`, `GND`, Z(13, `a`), Q.navy, {
                arch: 16
            }),
            $(`w-5v`, `5V`, Z(20, `a`), Q.red, {
                arch: 20
            }),
            $(`w-a0`, `A0`, Z(21, `a`), Q.green, {
                arch: 24
            }),
            $(`w-gnd-p`, `GND1`, Z(17, `a`), Q.navy, {
                arch: 17
            })
        ]
    },
    sensor: {
        parts: [
            ca,
            la(10),
            ma(ia.x - 1.27),
            $(`w-5v`, `5V`, Z(10, `e`), Q.red, {
                arch: 36,
                leanB: 0
            }),
            $(`w-gnd-p`, `GND1`, Z(13, `e`), Q.navy, {
                arch: 33,
                leanB: 0
            }),
            $(`w-d9`, `D9`, Z(11, `e`), Q.yellow, {
                arch: 30,
                leanB: 0
            }),
            $(`w-d10`, `D10`, Z(12, `e`), Q.green, {
                arch: 33,
                leanB: 0
            })
        ]
    },
    sound: {
        parts: [
            ca,
            {
                id: `buzzer`,
                build: o,
                at: Z(12.5, `e`)
            },
            $(`w-d8`, `D8`, Z(11, `a`), Q.orange, {
                arch: 12
            }),
            $(`w-gnd`, `GND`, Z(14, `a`), Q.navy, {
                arch: 16
            })
        ]
    },
    motor: {
        parts: [
            ca,
            {
                id: `r1k`,
                build: ()=>y([
                        `brown`,
                        `black`,
                        `red`,
                        `gold`
                    ], 4 * r, {
                        name: `1 kΩ resistor`
                    }),
                at: Z(11, `b`)
            },
            {
                id: `transistor`,
                build: E,
                at: Z(14, `c`)
            },
            {
                id: `motor`,
                build: h,
                at: new Jn_1(58, aa, -1)
            },
            $(`w-d6`, `D6`, Z(9, `a`), Q.orange, {
                arch: 12
            }),
            $(`w-gnd`, `GND`, Z(15, `a`), Q.navy, {
                arch: 16,
                leanB: 0
            }),
            $(`w-m-plus`, new Jn_1(62.5, 18.4, -26.5), `5V`, Q.red, {
                arch: 12,
                endA: false
            }),
            $(`w-m-minus`, new Jn_1(53.5, 18.4, -26.5), Z(14, `a`), Q.navy, {
                arch: 6,
                endA: false
            })
        ]
    },
    servo: {
        parts: [
            {
                id: `servo`,
                build: S,
                at: new Jn_1(62, aa, -40)
            },
            $(`w-s-gnd`, new Jn_1(50.6, -0.6000000000000001, -41.3), `GND2`, Q.brown, {
                arch: 10,
                endA: false
            }),
            $(`w-s-5v`, new Jn_1(50.6, -0.6000000000000001, -40), `5V`, Q.red, {
                arch: 13,
                endA: false
            }),
            $(`w-s-sig`, new Jn_1(50.6, -0.6000000000000001, -38.7), `D9`, Q.orange, {
                arch: 8,
                endA: false
            })
        ]
    },
    project: {
        parts: [
            ca,
            la(8),
            {
                id: `lights`,
                build: T,
                at: Z(21.5, `b`)
            },
            ma(ia.x - 6.35),
            $(`w-5v`, `5V`, Z(8, `e`), Q.red, {
                arch: 37,
                leanB: 0
            }),
            $(`w-gnd-p`, `GND1`, Z(11, `e`), Q.navy, {
                arch: 33,
                leanB: 0
            }),
            $(`w-d9`, `D9`, Z(9, `e`), Q.blue, {
                arch: 30,
                leanB: 0
            }),
            $(`w-d10`, `D10`, Z(10, `e`), Q.purple, {
                arch: 33,
                leanB: 0
            }),
            $(`w-bridge`, Z(11, `d`), Z(20, `d`), Q.navy, {
                arch: 4,
                lean: 0.3
            }),
            $(`w-d4`, `D4`, Z(21, `e`), Q.coral, {
                arch: 26,
                leanB: 0
            }),
            $(`w-d3`, `D3`, Z(22, `e`), Q.yellow, {
                arch: 30,
                leanB: 0
            }),
            $(`w-d2`, `D2`, Z(23, `e`), Q.green, {
                arch: 34,
                leanB: 0
            })
        ]
    }
};
const Ea = {
    board: {
        target: [
            0,
            0,
            0
        ],
        zoom: 8.4,
        frame: [
            0,
            -1.7,
            86.8,
            62.7
        ],
        mark: {
            at: [
                43.5,
                -18
            ],
            along: [
                0,
                -1
            ],
            up: [
                -1,
                0
            ],
            width: 32
        }
    },
    blink: {
        target: [
            30,
            0,
            -24
        ],
        zoom: 6,
        frame: [
            -1.8,
            -6.5,
            159.9,
            74.7
        ]
    },
    button: {
        target: [
            30,
            0,
            -24
        ],
        zoom: 6,
        frame: [
            -1.8,
            -6.3,
            159.9,
            74.2
        ]
    },
    knob: {
        target: [
            30,
            0,
            -24
        ],
        zoom: 6,
        frame: [
            -1.8,
            -5.2,
            159.9,
            72.2
        ]
    },
    rgb: {
        target: [
            30,
            0,
            -24
        ],
        zoom: 6,
        frame: [
            -1.8,
            -7.6,
            159.9,
            76.9
        ]
    },
    light: {
        target: [
            50,
            0,
            -32
        ],
        zoom: 5,
        frame: [
            -7.9,
            -5.1,
            189.6,
            84.6
        ]
    },
    sensor: {
        target: [
            30,
            0,
            -16
        ],
        zoom: 5.6,
        frame: [
            2.9,
            -4.2,
            159.9,
            94.3
        ]
    },
    sound: {
        target: [
            30,
            0,
            -24
        ],
        zoom: 6,
        frame: [
            -1.8,
            -6.5,
            159.9,
            74.7
        ]
    },
    motor: {
        target: [
            30,
            0,
            -18
        ],
        zoom: 5.7,
        frame: [
            1.7,
            -4.5,
            159.9,
            85.2
        ]
    },
    servo: {
        target: [
            26,
            0,
            -20
        ],
        zoom: 6.4,
        frame: [
            -8.5,
            -2,
            135.5,
            75
        ]
    },
    project: {
        target: [
            30,
            0,
            -16
        ],
        zoom: 5.5,
        frame: [
            2.9,
            -5.2,
            159.9,
            92.3
        ]
    }
};
function Da(e, t = {}) {
    return (Ta[e] ?? Ta.board).parts.map((e)=>({
            ...e,
            key: typeof e.key == `function` ? e.key(t) : e.key ?? e.id,
            at: typeof e.at == `function` ? e.at(t) : e.at,
            build: ()=>e.build(t)
        }));
}
const Oa = new B(`#ffb340`);
function ka(e, t) {
    if (e) {
        e.emissive.copy(e.userData.baseEmissive ??= e.emissive.clone());
        if (t) {
            e.emissive.copy(Oa);
        }
        e.emissiveIntensity = t ? 1.6 : 0.35;
    }
}
function Aa(e, t) {
    if (e) {
        e.lens.emissiveIntensity = 0.05 + t * (e.gain ?? 1.4);
        e.glow.material.opacity = t * 0.85;
        if (e.hue) {
            e.lens.color.copy(e.base).lerp(e.hue, Math.min(1, t * 1.3) * 0.85);
        }
    }
}
function ja(e, value = 0.6) {
    let n = new Mt_1(160, 160);
    n.rotateX(-Math.PI / 2);
    let r = new vt(n, new Mn_1({
        transparent: true,
        depthWrite: false,
        side: 2,
        uniforms: {
            color: {
                value: new B(e)
            },
            radius: {
                value: 2
            },
            opacity: {
                value: 0
            },
            spread: {
                value
            }
        },
        vertexShader: `
        varying vec2 vP;
        void main() {
          vP = (uv - 0.5) * ${160..toFixed(1)};
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
        fragmentShader: `
        uniform vec3 color;
        uniform float radius;
        uniform float opacity;
        uniform float spread;
        varying vec2 vP;
        void main() {
          float d = length(vP);
          float a = abs(atan(vP.x, -vP.y));
          float ring = 1.0 - smoothstep(0.45, 1.0, abs(d - radius));
          float cone = 1.0 - smoothstep(spread - 0.1, spread + 0.08, a);
          float alpha = ring * cone * opacity;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(color, alpha);
          #include <colorspace_fragment>
        }
      `
    }));
    r.layers.set(1);
    return r;
}
class Ma {
    constructor(e, t){
        this.scene = e;
        this.sensor = t;
        this.arcs = [];
        this.last = 0;
        let n = new Mt_1(1.1, 1);
        n.rotateX(-Math.PI / 2);
        this.tape = new vt(n, new Mn_1({
            transparent: true,
            depthWrite: false,
            uniforms: {
                length: {
                    value: 10
                },
                color: {
                    value: new B(`#1aa3a1`)
                }
            },
            vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
            fragmentShader: `
          uniform float length;
          uniform vec3 color;
          varying vec2 vUv;
          void main() {
            float d = fract(vUv.y * length / 3.0);
            if (d > 0.55) discard;
            gl_FragColor = vec4(color, 0.95);
            #include <colorspace_fragment>
          }
        `
        }));
        this.tape.layers.set(1);
        e.add(this.tape);
    }
    update(e, t) {
        let sensor = this.sensor;
        let r = new Jn_1(-13, 13, 0).applyMatrix4(sensor.matrixWorld);
        let i = new Jn_1(13, 13, 0).applyMatrix4(sensor.matrixWorld);
        if (e - this.last > 220) {
            this.last = e;
            this.spawn(r, `#1aa3a1`, 1, t, e);
        }
        for (let n of [
            ...this.arcs
        ]){
            let r = (e - n.born) / n.life;
            if (r >= 1) {
                this.scene.remove(n.mesh);
                n.mesh.geometry.dispose();
                n.mesh.material.dispose();
                this.arcs.splice(this.arcs.indexOf(n), 1);
                if (n.dir > 0) {
                    this.spawn(i.clone().setZ(i.z + t), `#f0a53a`, -1, t, e);
                }
            } else {
                n.mesh.material.uniforms.radius.value = 2 + r * t;
                n.mesh.position.copy(n.origin);
                n.mesh.material.uniforms.opacity.value = Math.sin(r * Math.PI) * 0.9;
            }
        }
        let a = t + 12;
        this.tape.scale.set(1, 1, a);
        this.tape.position.set((r.x + i.x) / 2, -3.9, r.z - 12 + a / 2);
        this.tape.material.uniforms.length.value = a;
    }
    spawn(e, t, dir, r, i) {
        let a = ja(t);
        if (dir < 0) {
            a.rotation.y = Math.PI;
        }
        a.position.copy(e);
        this.scene.add(a);
        this.arcs.push({
            mesh: a,
            origin: e.clone(),
            dir,
            born: i,
            life: 260 + r * 12
        });
    }
    dispose() {
        for (let e of this.arcs){
            this.scene.remove(e.mesh);
            e.mesh.geometry.dispose();
            e.mesh.material.dispose();
        }
        this.scene.remove(this.tape);
        this.tape.geometry.dispose();
        this.tape.material.dispose();
    }
}
class Na {
    constructor(e){
        this.scene = e;
        this.rings = [];
    }
    emit(e, t, n = `#1aa3a1`) {
        let r = ja(n, Math.PI + 0.2);
        r.position.copy(e);
        this.scene.add(r);
        this.rings.push({
            mesh: r,
            born: t,
            life: 700
        });
    }
    update(e) {
        for (let t of [
            ...this.rings
        ]){
            let n = (e - t.born) / t.life;
            if (n >= 1) {
                this.scene.remove(t.mesh);
                t.mesh.geometry.dispose();
                t.mesh.material.dispose();
                this.rings.splice(this.rings.indexOf(t), 1);
            } else {
                t.mesh.material.uniforms.radius.value = 6 + n * 26;
                t.mesh.material.uniforms.opacity.value = (1 - n) * 0.9;
            }
        }
        return this.rings.length > 0;
    }
    dispose() {
        for (let e of this.rings){
            this.scene.remove(e.mesh);
            e.mesh.geometry.dispose();
            e.mesh.material.dispose();
        }
    }
}
function Pa(e = 220, t = `red`) {
    return (5 - (n_2[t] ?? 2)) / e * 1000;
}
const Fa = (e, t)=>Math.min(1, (Pa(e, t) / 13.6) ** 0.55);
const Ia = [
    `C`,
    `C#`,
    `D`,
    `D#`,
    `E`,
    `F`,
    `F#`,
    `G`,
    `G#`,
    `A`,
    `A#`,
    `B`
];
function La(e) {
    if (!e) {
        return `rest`;
    }
    let t = Math.round(12 * Math.log2(e / 440)) + 57;
    return `${Ia[(t % 12 + 12) % 12]}${Math.floor(t / 12)}`;
}
const Ra = 170;
class za {
    constructor(e){
        this.fn = e;
        this.key = null;
        this.walk = null;
    }
    at(text, nth = 0) {
        let n = text ? `${text}#${nth}` : null;
        if (n !== this.key) {
            this.key = n;
            this.fn?.(text ? {
                text,
                nth
            } : null);
        }
    }
    play(steps, t0, { loop = false, intro = [] } = {}) {
        this.walk = {
            intro,
            steps,
            loop,
            t0
        };
        this.update(t0);
    }
    update(e) {
        let walk = this.walk;
        if (!walk) {
            return;
        }
        let n = (e)=>e.reduce((acc, item)=>acc + (item[2] ?? Ra), 0);
        let r = e - walk.t0;
        let t_intro = walk.intro;
        if (r >= n(walk.intro)) {
            r -= n(walk.intro);
            t_intro = walk.steps;
            if (walk.loop) {
                r %= n(walk.steps) || 1;
            }
        }
        let a = 0;
        while(a < t_intro.length - 1 && r >= (t_intro[a][2] ?? Ra)){
            r -= t_intro[a][2] ?? Ra;
            a++;
        }
        let [o, s = 0] = t_intro[a] ?? [];
        this.at(typeof o == `function` ? o() : o, s);
    }
    clear() {
        this.walk = null;
        this.at(null);
    }
}
function Ba(n, r) {
    let { scene, parts, leds, out, readout, params, inputs, setParam } = r;
    let f = performance.now();
    let p = (e)=>parts.get(e)?.group;
    let m = new za(r.trace);
    let h = 0;
    let g = (e, t, n = 280)=>{
        if (!(e - h < n)) {
            h = e;
            out(t);
        }
    };
    if (n === `builtin`) {
        out(`pinMode(13, OUTPUT)`);
        let e = false;
        m.play([
            [
                `digitalWrite(LED_BUILTIN, HIGH)`,
                0,
                260
            ],
            [
                `delay(1000)`,
                0,
                740
            ]
        ], f, {
            loop: true,
            intro: [
                [
                    `pinMode(LED_BUILTIN`,
                    0,
                    600
                ]
            ]
        });
        return {
            update (t) {
                m.update(t);
                return !e && (e = true, ka(leds.L, true), out(`D13 → HIGH`), true);
            },
            stop () {
                m.clear();
                ka(leds.L, false);
            }
        };
    }
    if (n === `blink`) {
        let e = null;
        let t = 0;
        let n = f;
        return {
            update (r) {
                t += r - n;
                n = r;
                let i = params.on + params.off;
                t %= i;
                let a = t < params.on;
                let c = p(`led`)?.userData.light;
                Aa(c, a ? Fa(params.ohms, params.color) : 0);
                m.update(r);
                if (a === e) {
                    return false;
                }
                e = a;
                let u = Math.min(Ra, (a ? params.on : params.off) * 0.4);
                m.play([
                    [
                        `digitalWrite(LED_PIN, ${a ? `HIGH` : `LOW`})`,
                        0,
                        u
                    ],
                    [
                        `delay(`,
                        +!a
                    ]
                ], r);
                ka(leds.L, a);
                out(`D13 → ${a ? `HIGH` : `LOW`}`);
                return true;
            },
            stop () {
                m.clear();
                Aa(p(`led`)?.userData.light, 0);
                ka(leds.L, false);
            }
        };
    }
    if (n === `button`) {
        let e = null;
        let t = false;
        let n = false;
        let r = -1;
        let i = null;
        let a = ()=>{
            if (params.mode === `toggle`) {
                return [
                    [
                        `int now = digitalRead(BUTTON)`
                    ],
                    [
                        `if (now == HIGH`
                    ],
                    [
                        `last = now`
                    ]
                ];
            }
            return [
                [
                    `digitalRead(BUTTON)`,
                    0,
                    220
                ],
                [
                    `digitalWrite(LED, pressed)`,
                    0,
                    220
                ]
            ];
        };
        return {
            update (c) {
                let d = !!inputs.button;
                if (d !== e) {
                    e = d;
                    out(`D2 → ${d ? `HIGH (pressed)` : `LOW`}`);
                }
                if (params.mode !== i) {
                    i = params.mode;
                    m.play(a(), c, {
                        loop: true
                    });
                }
                if (params.mode === `toggle`) {
                    if (d && !n) {
                        t = !t;
                        m.play(a(), c, {
                            loop: true,
                            intro: [
                                [
                                    `lit = !lit`,
                                    0,
                                    220
                                ],
                                [
                                    `digitalWrite(LED, lit)`,
                                    0,
                                    220
                                ],
                                [
                                    `delay(30)`,
                                    0,
                                    220
                                ]
                            ]
                        });
                    }
                } else {
                    t = d;
                }
                m.update(c);
                n = d;
                let f = +!!t;
                Aa(p(`led`)?.userData.light, f * Fa(220, params.color));
                return f !== r && (r = f, ka(leds.L, !!f), true);
            },
            stop () {
                m.clear();
                Aa(p(`led`)?.userData.light, 0);
                ka(leds.L, false);
            }
        };
    }
    if (n === `knob`) {
        let e = -1;
        m.play([
            [
                `analogRead(POT)`
            ],
            [
                `analogWrite(LED`
            ],
            [
                `Serial.println(value)`
            ],
            [
                `delay(50)`
            ]
        ], f, {
            loop: true
        });
        return {
            update (t) {
                m.update(t);
                let n = Math.round(params.pot);
                let r = Math.floor(n / 4);
                Aa(p(`led`)?.userData.light, r / 255 * Fa(220, params.color));
                let i = p(`pot`);
                if (i) {
                    readout({
                        text: `${n} → ${r}`,
                        position: i.position.clone().add(new Jn_1(0, 30, -1.5))
                    });
                }
                g(t, `${n}`, 300);
                return n !== e && (e = n, true);
            },
            stop () {
                m.clear();
                Aa(p(`led`)?.userData.light, 0);
                readout(null);
            }
        };
    }
    if (n === `rgb`) {
        let e = ``;
        m.play([
            [
                `analogWrite(RED`
            ],
            [
                `analogWrite(GREEN`
            ],
            [
                `analogWrite(BLUE`
            ],
            [
                `delay(100)`
            ]
        ], f, {
            loop: true
        });
        return {
            update (t) {
                m.update(t);
                let n = Math.round(params.r);
                let r = Math.round(params.g);
                let i = Math.round(params.b);
                let a = p(`rgb`);
                Aa(a?.userData.light, Math.max(n, r, i) / 255);
                if (a) {
                    readout({
                        text: `R ${n} · G ${r} · B ${i}`,
                        position: a.position.clone().add(new Jn_1(0, 26, 0))
                    });
                }
                let o = `${n},${r},${i}`;
                return o !== e && (e = o, out(`analogWrite(9, ${n})  analogWrite(10, ${r})  analogWrite(11, ${i})`), true);
            },
            stop () {
                m.clear();
                Aa(p(`rgb`)?.userData.light, 0);
                readout(null);
            }
        };
    }
    if (n === `light`) {
        let e = null;
        let t = 0;
        let n = Ca(params);
        let r = false;
        m.play([
            [
                `analogRead(SENSOR)`
            ],
            [
                `Serial.println(light)`
            ],
            [
                `if (light <`
            ],
            [
                ()=>{
                    if (r) {
                        return `digitalWrite(LED, HIGH)`;
                    }
                    return `digitalWrite(LED, LOW)`;
                },
                0,
                260
            ],
            [
                `delay(100)`
            ]
        ], f, {
            loop: true
        });
        return {
            update (i) {
                if (i - t > 100) {
                    t = i;
                    n = Math.max(0, Math.min(1023, Ca(params) + Math.round((Math.random() * 2 - 1) * 6)));
                    g(i, `${n}`, 320);
                }
                let a = n < params.threshold;
                r = a;
                m.update(i);
                let o = p(`ldr`);
                if (o) {
                    readout({
                        text: `light ${n}${a ? ` · dark` : ``}`,
                        position: o.position.clone().add(new Jn_1(0, 22, 0))
                    });
                }
                if (a !== e) {
                    e = a;
                    Aa(p(`led`)?.userData.light, a ? Fa(220, `yellow`) : 0);
                    out(a ? `${n} < ${params.threshold} · dark, night light ON` : `${n} ≥ ${params.threshold} · bright, night light off`);
                }
                return true;
            },
            stop () {
                m.clear();
                Aa(p(`led`)?.userData.light, 0);
                readout(null);
            }
        };
    }
    if (n === `sensor` || n === `project`) {
        let e = p(`sensor`);
        if (!e) {
            return null;
        }
        let pinger = new Ma(scene, e);
        let r = null;
        let a = null;
        let o = 0;
        let u = params.gap;
        let h = [
            [
                `digitalWrite(TRIG, HIGH)`
            ],
            [
                `delayMicroseconds(10)`
            ],
            [
                `digitalWrite(TRIG, LOW)`
            ],
            [
                `pulseIn(ECHO`,
                0,
                260
            ]
        ];
        let g = ()=>[
                `digitalWrite(RED`,
                `digitalWrite(YLW`,
                `digitalWrite(GRN`
            ][r ?? 2];
        m.play(n === `sensor` ? [
            ...h,
            [
                `Serial.println(cm)`
            ],
            [
                `delay(`,
                0,
                300
            ]
        ] : [
            ...h,
            [
                g,
                0,
                340
            ],
            [
                `delay(60)`
            ]
        ], f, {
            loop: true
        });
        return {
            shadows: true,
            pinger,
            update (i) {
                m.update(i);
                if (params.sweep) {
                    let e = 26 + 20 * Math.sin((i - f) * 0.00055 - 0.4);
                    setParam(`gap`, Math.round(e * 10) / 10);
                }
                let h = p(`obstacle`);
                if (h) {
                    if (a !== null) {
                        for (let e of h.userData.wheels ?? []){
                            e.rotation.z += (h.position.z - a) / 3.168;
                        }
                    }
                    a = h.position.z;
                }
                e.updateMatrixWorld(true);
                pinger.update(i, params.gap * ua);
                if (i - o > (params.interval ?? 60)) {
                    o = i;
                    let e = h?.userData.echo ?? {
                        jitter: 0,
                        miss: 0
                    };
                    u = Math.random() < e.miss ? 0 : Math.max(2, Math.round(params.gap + (Math.random() * 2 - 1) * e.jitter));
                    if (n === `sensor`) {
                        out(u ? `${u} cm` : `0  (no echo)`);
                    }
                }
                let position = new Jn_1(e.position.x, -2, e.position.z + 13 + params.gap * ua / 2);
                readout({
                    text: u ? `${u} cm` : `no echo`,
                    position
                });
                let _ = p(`lights`)?.userData.lights;
                if (_ && u) {
                    let e = u > params.far ? 2 : +(u > params.near);
                    if (e !== r) {
                        r = e;
                        _.forEach((t, n)=>Aa(t, +(n === e)));
                        out(`${u} cm · ${[
                            `RED · stop!`,
                            `YELLOW · slow down`,
                            `GREEN · all clear`
                        ][e]}`);
                    }
                }
                return true;
            },
            stop () {
                m.clear();
                pinger.dispose();
                readout(null);
                p(`lights`)?.userData.lights?.forEach((e)=>Aa(e, 0));
            }
        };
    }
    if (n === `sound`) {
        let n = new Na(scene);
        let a = -1;
        let o = f;
        return {
            update (i) {
                let u = n_1[params.melody] ?? n_1.scale;
                let d = p(`buzzer`);
                let params_note = params.note;
                if (i >= o && u.length) {
                    a = (a + 1) % (u.length + 1);
                    if (a === u.length) {
                        o = i + 1000;
                        m.play([
                            [
                                `delay(1000)`
                            ]
                        ], i);
                    } else {
                        m.play([
                            [
                                `tone(BUZZER`,
                                0,
                                Math.min(Ra, params_note * 0.5)
                            ],
                            [
                                `delay(`
                            ]
                        ], i);
                        let e = u[a];
                        if (r.sound()) {
                            t(e, params_note, params.volume / 100);
                        }
                        if (d) {
                            n.emit(d.userData.top.clone().applyMatrix4(d.matrixWorld), i);
                        }
                        out(`tone(8, ${e}, ${params_note})  ${La(e)}`);
                        if (d) {
                            readout({
                                text: `♪ ${La(e)}`,
                                position: d.position.clone().add(new Jn_1(0, 22, 0))
                            });
                        }
                        o = i + params_note + 50;
                    }
                }
                n.update(i);
                m.update(i);
                return true;
            },
            stop () {
                m.clear();
                n.dispose();
                readout(null);
            }
        };
    }
    if (n === `motor`) {
        let e = p(`motor`)?.userData.prop;
        let t = 0;
        let n = -1;
        return {
            shadows: true,
            update (r, i) {
                let params_top = params.top;
                let o = Math.max(1, params.step);
                let u = Math.ceil(params_top / o) * 40;
                let d = (r - f) % (u + 3000);
                let h = 0;
                if (d < u) {
                    h = Math.min(params_top, Math.floor(d / 40) * o);
                } else if (d < u + 1500) {
                    h = params_top;
                }
                if (d < u) {
                    m.at(Math.floor(d / Ra) % 2 ? `delay(40)` : `analogWrite(MOTOR, s)`);
                } else if (d < u + 1500) {
                    m.at(`delay(1500)`, 0);
                } else if (d < u + 1500 + 340) {
                    m.at(`analogWrite(MOTOR, 0)`);
                } else {
                    m.at(`delay(1500)`, 1);
                }
                let g = h / 255 * 26;
                t += (g - t) * Math.min(1, i / (h ? 380 : 900));
                if (e) {
                    e.rotation.z += t * i / 1000;
                }
                if (h !== n && (h === params_top || h === 0 || Math.floor(h / 50) !== Math.floor(n / 50))) {
                    out(`analogWrite(6, ${h})`);
                }
                n = h;
                readout({
                    text: `${Math.round(t / 26 * 100)}%`,
                    position: p(`motor`).position.clone().add(new Jn_1(0, 38, 9))
                });
                return true;
            },
            stop () {
                m.clear();
                readout(null);
            }
        };
    }
    if (n === `servo`) {
        let e = p(`servo`)?.userData.horn;
        let t = params.from;
        let n = 1;
        let r = 0;
        let i = null;
        return {
            update (a, o) {
                let u = Math.min(params.from, params.to);
                let d = Math.max(params.from, params.to);
                r += o;
                let f = Math.max(1, params.wait);
                while(r >= f){
                    r -= f;
                    t += n;
                    if (t >= d) {
                        t = d;
                        n = -1;
                    } else if (t <= u) {
                        t = u;
                        n = 1;
                    }
                }
                if (e) {
                    e.rotation.y = (90 - t) * (Math.PI / 180);
                }
                m.at(Math.floor(a / Ra) % 2 ? `delay(` : `arm.write(a)`, n > 0 ? 0 : 1);
                let h = Math.round(t);
                let g = Math.floor(h / 15);
                if (g !== i) {
                    out(`arm.write(${h})`);
                }
                i = g;
                let _ = p(`servo`);
                if (_) {
                    readout({
                        text: `${h}°`,
                        position: _.position.clone().add(new Jn_1(5.6, 40, 0))
                    });
                }
                return true;
            },
            stop () {
                m.clear();
                readout(null);
            }
        };
    }
    return null;
}
function Va(leds) {
    for (let t of Object.values(leds)){
        if (t.userData.baseEmissive) {
            ka(t, false);
        }
    }
}
function Ha(leds, t = 1100) {
    let n = performance.now();
    return {
        update (r) {
            let i = r - n;
            if (this.finished) {
                return false;
            }
            let a = i > t;
            ka(leds.TX, !a && Math.sin(i * 0.09) > 0.2);
            ka(leds.RX, !a && Math.sin(i * 0.13 + 1) > 0.4);
            if (a) {
                this.finished = true;
            }
            return true;
        }
    };
}
const Ua = `M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.15h7.6l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z`;
const Wa = `#bba78a`;
const Ga = `x.com/DilumSanjaya`;
const Ka = 900;
const qa = 0.8;
function Ja() {
    let e = document.createElement(`canvas`);
    let t = e.getContext(`2d`);
    let n = `700 84px "Barlow Semi Condensed", sans-serif`;
    t.font = n;
    t.letterSpacing = `3px`;
    let width = t.measureText(Ga).width;
    e.width = Math.ceil(159 + width + 20);
    e.height = 140;
    t.fillStyle = Wa;
    t.save();
    t.translate(20, 28);
    t.scale(84 / 24, 84 / 24);
    t.fill(new Path2D(Ua));
    t.restore();
    t.fillRect(130, 24, 3, 92);
    t.font = n;
    t.letterSpacing = `3px`;
    t.textBaseline = `middle`;
    t.fillText(Ga, 159, 74);
    let tex = new R(e);
    tex.colorSpace = kn_1;
    tex.anisotropy = 8;
    return {
        tex,
        aspect: 140 / e.width
    };
}
class Ya {
    constructor(){
        let { tex, aspect } = Ja();
        this.aspect = aspect;
        this.mesh = new vt(new Mt_1(1, 1), new yt({
            map: tex,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            side: 2
        }));
        this.mesh.layers.set(1);
        this.mesh.renderOrder = -1.5;
        this.mesh.visible = false;
        this.shown = 0;
    }
    get active() {
        return this.mesh.visible;
    }
    place(e, t, n, r) {
        let mesh = this.mesh;
        mesh.position.copy(e);
        mesh.quaternion.setFromRotationMatrix(new _t_1().makeBasis(t, n, new Jn_1().crossVectors(t, n)));
        mesh.scale.set(r, r * this.aspect, 1);
    }
    show(e) {
        this.shown = e;
        this.mesh.visible = true;
    }
    hide() {
        this.mesh.visible = false;
        this.mesh.material.opacity = 0;
    }
    update(e) {
        if (!this.mesh.visible) {
            return false;
        }
        let t = Math.max(0, Math.min(1, (e - this.shown) / Ka));
        let n = qa * t * t * (3 - 2 * t);
        return n !== this.mesh.material.opacity && (this.mesh.material.opacity = n, true);
    }
}
const Xa = {
    floorCredit: true,
    instantRun: false
};
const Za = 1;
const Qa = -4;
const $a = Math.PI / 180;
const eo = 500;
const to = {
    azimuth: 36 * $a,
    elevation: 43 * $a
};
const no = new N;
function ro(e, t = new N) {
    t.makeEmpty();
    e.updateWorldMatrix(true, true);
    e.traverse((e)=>{
        if (e.isMesh && e.layers.isEnabled(0)) {
            if (!e.geometry.boundingBox) {
                e.geometry.computeBoundingBox();
            }
            t.union(no.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld));
        }
    });
    return t;
}
const io = 6;
const ao = new Jn_1;
function oo(e, t = new N) {
    let n = e.scale.clone();
    e.scale.set(1, 1, 1);
    ro(e, t);
    e.scale.copy(n);
    e.updateWorldMatrix(true, true);
    return t;
}
function so() {
    return new Mn_1({
        transparent: true,
        depthWrite: false,
        uniforms: {
            color: {
                value: new B(`#d9c7ae`)
            },
            cell: {
                value: 9
            },
            center: {
                value: new qn_1
            },
            inner: {
                value: 38
            },
            outer: {
                value: 84
            },
            strength: {
                value: 0.9
            }
        },
        vertexShader: `
      varying vec2 vPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vPos = wp.xz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
        fragmentShader: `
      uniform vec3 color;
      uniform float cell;
      uniform vec2 center;
      uniform float inner;
      uniform float outer;
      uniform float strength;
      varying vec2 vPos;
      void main() {
        vec2 g = abs(fract(vPos / cell - 0.5) - 0.5) / fwidth(vPos / cell);
        float line = 1.0 - min(min(g.x, g.y), 1.0);
        vec2 q = (vPos - center) / vec2(1.25, 1.0);
        float fade = 1.0 - smoothstep(inner, outer, length(q));
        float a = line * fade * strength;
        gl_FragColor = vec4(color, a);
        #include <colorspace_fragment>
      }
    `
    });
}
function co(e) {
    let t = [
        ...e
    ].sort((e, t)=>e[0] - t[0] || e[1] - t[1]);
    let n = (e, t, n)=>(t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]);
    let r = [];
    for (let e of t){
        while(r.length >= 2 && n(r[r.length - 2], r[r.length - 1], e) <= 0){
            r.pop();
        }
        r.push(e);
    }
    let i = [];
    for(let e = t.length - 1; e >= 0; e--){
        let r = t[e];
        while(i.length >= 2 && n(i[i.length - 2], i[i.length - 1], r) <= 0){
            i.pop();
        }
        i.push(r);
    }
    return r.slice(0, -1).concat(i.slice(0, -1));
}
function lo(e, t, n = 0) {
    for (let r of [
        e,
        t
    ]){
        for(let i = 0; i < r.length; i++){
            let [a, o] = r[i];
            let [s, c] = r[(i + 1) % r.length];
            let l = c - o;
            let u = a - s;
            let d = Math.hypot(l, u) || 1;
            let f = Infinity;
            let p = -Infinity;
            let m = Infinity;
            let h = -Infinity;
            for (let [t, n] of e){
                let e = (t * l + n * u) / d;
                f = Math.min(f, e);
                p = Math.max(p, e);
            }
            for (let [e, n] of t){
                let t = (e * l + n * u) / d;
                m = Math.min(m, t);
                h = Math.max(h, t);
            }
            if (p + n < m || h + n < f) {
                return false;
            }
        }
    }
    return true;
}
export class BoardStage {
    constructor(canvas, t, n = {}){
        this.canvas = canvas;
        this.el = t;
        this.hooks = n;
        this.renderer = new Bi({
            canvas,
            antialias: false,
            alpha: true,
            premultipliedAlpha: true,
            powerPreference: `high-performance`
        });
        this.renderer.setClearColor(0, 0);
        this.renderer.outputColorSpace = kn_1;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = 3;
        this.renderer.shadowMap.autoUpdate = false;
        this.renderer.shadowMap.needsUpdate = true;
        this.scene = new jn_1;
        this.camera = new kt_1(-1, 1, 1, -1, 1, 900);
        this.composer = new A(this.renderer, {
            lineColor: `#141a2c`,
            thickness: 1.3
        });
        let r = new Kt(this.renderer);
        this.scene.environment = r.fromScene(new Vi, 0.04).texture;
        this.scene.environmentIntensity = 0.4;
        r.dispose();
        this.setupLights();
        this.setupGround();
        this.mark = new Ya;
        this.scene.add(this.mark.mesh);
        this.markAz = null;
        this.markToken = 0;
        this.markCheck = 0;
        let { root, anchors, leds } = O(this.renderer);
        this.board = root;
        this.boardAnchors = anchors;
        this.leds = leds;
        this.scene.add(root);
        this.tweens = new Wi;
        this.size = {
            w: 1,
            h: 1,
            cx: 0,
            cy: 0
        };
        this.parts = new Map;
        this.pins = new Map;
        this.tmp = new Jn_1;
        this.raycaster = new yn_1;
        this.raycaster.layers.set(0);
        this.ndc = new qn_1;
        this.hovered = null;
        this.pointer = null;
        this.dirty = true;
        this.shadowDirty = true;
        this.autoRotate = false;
        this.lastInput = performance.now();
        this.sim = null;
        this.flicker = null;
        this.readoutState = null;
        this.lessonId = `board`;
        this.values = {};
        this.inputs = {};
        this.selection = null;
        this.controls = new na(t, {
            tweens: this.tweens,
            toStage: n.toStage,
            getSize: ()=>this.size,
            onChange: ()=>this.touch(),
            onClick: (e)=>this.click(e),
            onDragState: (e)=>{
                this.dragging = e;
                t.dataset.drag = e ?? ``;
                if (e) {
                    this.setHovered(null);
                }
            },
            onGrab: (e)=>this.grab(e)
        });
        this.setupSelectionRing();
        this.controls.view.azimuth = to.azimuth;
        this.controls.view.elevation = to.elevation;
        t.addEventListener(`pointermove`, (e)=>{
            this.pointer = {
                x: e.clientX,
                y: e.clientY,
                target: e.target
            };
        });
        t.addEventListener(`pointerleave`, ()=>{
            this.pointer = null;
            this.setHovered(null);
        });
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }
    setupLights() {
        this.scene.add(new st(`#fffaf3`, `#c2ae90`, 0.5));
        let e = new Z_1(`#fff6ea`, 1.2);
        e.position.set(-55, 100, 62);
        this.scene.add(e);
        let t = new Z_1(`#ffffff`, 0.001);
        t.position.set(70, 104, -34);
        t.target.position.set(30, 0, 0);
        t.castShadow = true;
        t.shadow.mapSize.set(2048, 2048);
        let camera = t.shadow.camera;
        camera.left = -120;
        camera.right = 120;
        camera.top = 120;
        camera.bottom = -120;
        camera.near = 20;
        camera.far = 300;
        t.shadow.radius = 11;
        t.shadow.blurSamples = 20;
        t.shadow.bias = -0.0004;
        this.scene.add(t);
        this.scene.add(t.target);
    }
    setupGround() {
        let e = new vt(new Mt_1(900, 900), new Nn_1({
            color: `#7a5532`,
            opacity: 0.32,
            depthWrite: false
        }));
        e.rotation.x = -Math.PI / 2;
        e.position.y = Qa;
        e.receiveShadow = true;
        e.layers.set(Za);
        e.renderOrder = -1;
        this.scene.add(e);
        this.grid = new vt(new Mt_1(900, 900), so());
        this.grid.rotation.x = -Math.PI / 2;
        this.grid.position.y = -4.01;
        this.grid.layers.set(Za);
        this.grid.renderOrder = -2;
        this.scene.add(this.grid);
    }
    get view() {
        return this.controls.view;
    }
    homeView(e = this.lessonId) {
        let t = Ea[e] ?? Ea.board;
        let n = {
            target: t.target,
            zoom: t.zoom,
            azimuth: to.azimuth,
            elevation: to.elevation
        };
        if (!this.frame || !t.frame) {
            return n;
        }
        let [r, i, a, o] = t.frame;
        let fit = this.controls.fit;
        let zoom = Math.min(22, Math.max(3.2, Math.min(this.frame.w / a, this.frame.h / o) / fit));
        let l = new Jn_1(Math.cos(to.azimuth), 0, -Math.sin(to.azimuth));
        let u = new Jn_1(-Math.sin(to.azimuth), 0, -Math.cos(to.azimuth));
        let d = new Jn_1(...t.target).addScaledVector(l, r).addScaledVector(u, -i / Math.sin(to.elevation));
        return {
            ...n,
            target: d.toArray(),
            zoom
        };
    }
    isHome() {
        return this.controls.isNear(this.homeView());
    }
    headingHome() {
        return this.controls.isNear(this.homeView(), this.controls.destination);
    }
    resetView(duration = 1100) {
        return this.controls.animateTo(this.homeView(), {
            duration
        });
    }
    touch() {
        this.dirty = true;
        this.lastInput = performance.now();
    }
    resize(w, h, cx, cy, i, a = 1, o = null) {
        this.size = {
            w,
            h,
            cx,
            cy
        };
        this.controls.fit = a;
        this.frame = o;
        this.markCheck = performance.now() + 300;
        this.markForce = true;
        this.renderer.setPixelRatio(i);
        this.renderer.setSize(w, h, false);
        this.composer.setSize(w, h, i);
        this.dirty = true;
        this.render();
    }
    placeCamera() {
        let { target, azimuth, elevation } = this.view;
        let r = this.view.zoom * this.controls.fit;
        let { w, h, cx, cy } = this.size;
        let camera = this.camera;
        camera.left = -cx / r;
        camera.right = (w - cx) / r;
        camera.top = cy / r;
        camera.bottom = -(h - cy) / r;
        camera.updateProjectionMatrix();
        camera.position.set(target.x + Math.sin(azimuth) * Math.cos(elevation) * 320, target.y + Math.sin(elevation) * 320, target.z + Math.cos(azimuth) * Math.cos(elevation) * 320);
        camera.lookAt(target);
        camera.updateMatrixWorld();
        let uniforms = this.grid.material.uniforms;
        uniforms.center.value.set(target.x, target.z);
        let u = 8.4 / r;
        uniforms.inner.value = 38 * u;
        uniforms.outer.value = 84 * u;
    }
    anchor(e) {
        if (e.startsWith(`part:`)) {
            return this.parts.get(e.slice(5))?.group.userData.anchor ?? null;
        }
        if (e.startsWith(`pin:`)) {
            let t = e.slice(4);
            if (!this.pins.has(t)) {
                let e = new Ot_1;
                e.position.copy(oa(t));
                this.scene.add(e);
                this.pins.set(t, e);
            }
            return this.pins.get(t);
        }
        return this.boardAnchors[e] ?? null;
    }
    project(e) {
        e.getWorldPosition(this.tmp);
        return this.projectPoint(this.tmp);
    }
    projectPoint(e) {
        let t = this.tmp.copy(e).project(this.camera);
        return [
            (t.x * 0.5 + 0.5) * this.size.w,
            (-t.y * 0.5 + 0.5) * this.size.h
        ];
    }
    partKey(e) {
        return e.key ?? e.id;
    }
    setLesson(e, { instant = false, values = {} } = {}) {
        this.stopSim();
        this.select(null);
        this.mark.hide();
        this.markAz = null;
        this.setHovered(null);
        this.hooks.onHover?.(null, null);
        this.lessonId = e;
        this.values = values;
        this.inputs = {};
        let r = Da(e, values);
        let i = new Map(r.map((e)=>[
                e.id,
                e
            ]));
        let a = +!instant;
        for (let [e, t] of [
            ...this.parts
        ]){
            let n = i.get(e);
            if (!n || this.partKey(n) !== this.partKey(t.spec)) {
                this.parts.delete(e);
                this.exitPart(t, a);
            }
        }
        let o = 0;
        let s = 0;
        let c = 0;
        for (let e of r){
            let t = this.parts.get(e.id);
            if (t) {
                this.movePart(t, e, a);
                continue;
            }
            let n = this.buildPart(e);
            let r = e.wire ? 650 + s++ * 140 : 220 + o++ * 130;
            c = Math.max(c, r + (e.wire ? 700 : 750));
            this.enterPart(n, r * a, a);
        }
        this.shadowDirty = true;
        this.dirty = true;
        let l = ++this.markToken;
        if (instant) {
            this.controls.jumpTo(this.homeView());
            this.tweens.update(performance.now() + 1000000);
            this.markCheck = performance.now() + eo;
            this.markForce = true;
            return Promise.resolve();
        }
        this.controls.animateTo(this.homeView(), {
            duration: 1300
        });
        return this.tweens.wait(Math.max(c, 1300)).then(()=>{
            if (l === this.markToken) {
                this.placeMark();
            }
        });
    }
    buildPart(spec) {
        let t = spec.build();
        if (spec.at) {
            t.position.copy(spec.at);
        }
        if (spec.rot) {
            t.rotation.set(...spec.rot);
        }
        t.userData.baseY = t.position.y;
        t.traverse((e)=>{
            if (e.isMesh) {
                e.castShadow = true;
            }
        });
        spec.apply?.(t, this.values);
        let n = {
            group: t,
            spec
        };
        this.parts.set(spec.id, n);
        this.scene.add(t);
        return n;
    }
    updateParams(e) {
        this.values = e;
        for (let t of Da(this.lessonId, e)){
            let n = this.parts.get(t.id);
            if (!n) {
                continue;
            }
            if (t.key !== n.spec.key) {
                this.exitPart(n, 0.55);
                let e = this.buildPart(t);
                this.enterPart(e, 120, 0.7, {
                    drop: 14
                });
                if (this.selection?.id === t.id) {
                    this.selection.group = e.group;
                }
                continue;
            }
            n.spec = t;
            let r = n.group;
            if (t.at && !n.moving) {
                r.position.x = t.at.x;
                r.position.z = t.at.z;
            }
            t.apply?.(r, e);
        }
        this.shadowDirty = true;
        this.dirty = true;
        this.markCheck = performance.now() + eo;
    }
    applyY(e) {
        let e_userData = e.userData;
        e.position.y = (e_userData.baseY ?? 0) + (e_userData.dropY ?? 0) + (e_userData.hoverY ?? 0);
    }
    enterPart({ group, spec }, delay, r, { drop } = {}) {
        let wire = group.userData.wire;
        if (wire) {
            let { tube, count, ends } = wire;
            tube.geometry.setDrawRange(0, 0);
            ends.forEach((e)=>e.scale.setScalar(0.001));
            this.tweens.add({
                delay,
                duration: 260 * r + 1,
                easing: Ui.outBack,
                onUpdate: (e)=>ends[0].scale.setScalar(Math.max(0.001, e))
            });
            this.tweens.add({
                delay: delay + 120 * r,
                duration: 620 * r + 1,
                easing: Ui.inOutCubic,
                onUpdate: (n)=>{
                    tube.geometry.setDrawRange(0, Math.ceil(n * count / 48) * 48);
                    this.shadowDirty = true;
                }
            });
            this.tweens.add({
                delay: delay + 700 * r,
                duration: 260 * r + 1,
                easing: Ui.outBack,
                onUpdate: (e)=>ends[1].scale.setScalar(Math.max(0.001, e))
            });
            return;
        }
        let o = drop ?? (spec.id === `breadboard` ? 24 : 46);
        group.userData.dropY = o;
        group.scale.setScalar(0.001);
        this.applyY(group);
        this.tweens.add({
            delay,
            duration: 720 * r + 1,
            easing: Ui.linear,
            onUpdate: (t)=>{
                group.userData.dropY = o * (1 - Ui.outCubic(t));
                group.scale.setScalar(Math.max(0.001, Ui.outBack(Math.min(1, t * 1.15))));
                this.applyY(group);
                this.shadowDirty = true;
            }
        });
    }
    exitPart({ group }, t) {
        if (this.hovered === group) {
            this.setHovered(null);
        }
        if (this.selection?.group === group && !this.parts.has(this.selection.id)) {
            this.select(null);
        }
        let wire = group.userData.wire;
        let onComplete = ()=>{
            this.scene.remove(group);
            c(group);
            this.shadowDirty = true;
        };
        if (wire) {
            let { tube, count, ends } = wire;
            this.tweens.add({
                duration: 380 * t + 1,
                easing: Ui.inCubic,
                onUpdate: (t)=>{
                    tube.geometry.setDrawRange(0, Math.floor((1 - t) * count / 48) * 48);
                    ends.forEach((e)=>e.scale.setScalar(Math.max(0.001, 1 - t)));
                    this.shadowDirty = true;
                },
                onComplete
            });
            return;
        }
        let i = group.scale.x;
        this.tweens.add({
            delay: 60 * t,
            duration: 420 * t + 1,
            easing: Ui.linear,
            onUpdate: (t)=>{
                group.scale.setScalar(Math.max(0.001, i * (1 - Ui.inBack(t))));
                group.userData.dropY = 30 * t * t;
                this.applyY(group);
                this.shadowDirty = true;
            },
            onComplete
        });
    }
    movePart(e, t, n) {
        e.spec = t;
        let e_group = e.group;
        let i = e_group.position.clone();
        i.y = e_group.userData.baseY;
        let a = t.at ? t.at.clone() : i.clone();
        let o = e_group.rotation.clone();
        let s = t.rot ? new Q_1(...t.rot) : o;
        if (!(i.distanceTo(a) < 0.01 && o.equals(s))) {
            e.moving = true;
            this.tweens.add({
                delay: 120 * n,
                duration: 800 * n + 1,
                easing: Ui.inOutCubic,
                onUpdate: (e, t)=>{
                    e_group.position.lerpVectors(i, a, e);
                    e_group.userData.baseY = e_group.position.y;
                    e_group.userData.dropY = Math.sin(t * Math.PI) * 16;
                    e_group.rotation.set(o.x + (s.x - o.x) * e, o.y + (s.y - o.y) * e, o.z + (s.z - o.z) * e);
                    this.applyY(e_group);
                    this.shadowDirty = true;
                },
                onComplete: ()=>{
                    e.moving = false;
                }
            });
        }
    }
    pick(e, t) {
        let n = this.canvas.getBoundingClientRect();
        this.ndc.set((e - n.left) / n.width * 2 - 1, -((t - n.top) / n.height) * 2 + 1);
        this.raycaster.setFromCamera(this.ndc, this.camera);
        let r = [
            this.board,
            ...[
                ...this.parts.values()
            ].map((e)=>e.group)
        ];
        let i = this.raycaster.intersectObjects(r, true);
        for (let e of i){
            let t = e.object;
            let n = null;
            let r = null;
            while(t){
                if (t.userData.part) {
                    n ??= t;
                }
                let e = [
                    ...this.parts
                ].find(([, e])=>e.group === t);
                if (e) {
                    r = e[0];
                    if (t.userData.part) {
                        n = t;
                    }
                    break;
                }
                t = t.parent;
            }
            if (n) {
                return {
                    group: n,
                    info: n.userData.part,
                    point: e.point,
                    id: r
                };
            }
        }
        return null;
    }
    setupSelectionRing() {
        let e = new at;
        let t = new yt({
            color: `#1aa3a1`,
            transparent: true,
            opacity: 0.85,
            depthWrite: false
        });
        let n = new vt(new wn_1(0.93, 1, 72), t);
        let r = new vt(new wn_1(0.8, 0.84, 72), t.clone());
        r.material.opacity = 0.45;
        for (let t of [
            n,
            r
        ]){
            t.rotation.x = -Math.PI / 2;
            t.layers.set(Za);
            e.add(t);
        }
        e.visible = false;
        e.renderOrder = -1;
        this.scene.add(e);
        this.ring = e;
    }
    select(e) {
        if (!e) {
            if (this.selection) {
                this.selection = null;
                this.ring.visible = false;
                this.dirty = true;
                this.hooks.onSelect?.(null);
            }
            return;
        }
        let t = typeof e == `string`;
        let n = t ? e : [
            ...this.parts
        ].find(([, t])=>t.group === e)?.[0] ?? null;
        let r = t ? this.parts.get(n)?.group : e;
        if (r) {
            this.selection = {
                id: n,
                group: r
            };
            this.ring.visible = true;
            this.placeRing();
            this.dirty = true;
            this.hooks.onSelect?.({
                id: n,
                info: r.userData.part,
                group: r
            });
        }
    }
    placeRing() {
        let selection = this.selection;
        if (!selection) {
            return;
        }
        let e_group = selection.group;
        if (selection.sizedFor !== e_group) {
            let n = oo(e_group);
            if (n.isEmpty()) {
                return;
            }
            let r = e_group.getWorldPosition(new Jn_1);
            selection.offset = n.getCenter(new Jn_1).sub(r);
            let i = n.getSize(new Jn_1);
            selection.radius = Math.max(8, Math.hypot(i.x, i.z) / 2 + 3);
            selection.rise = n.max.y - r.y;
            selection.sizedFor = e_group;
            selection.seatAt = null;
        }
        let n = e_group.getWorldPosition(ao).add(selection.offset);
        let r = `${n.x.toFixed(1)}|${n.z.toFixed(1)}`;
        if (selection.seatAt !== r) {
            selection.seat = this.seatBelow(e_group, n, n.y - selection.offset.y + selection.rise);
            selection.seatAt = r;
        }
        this.ring.position.set(n.x, selection.seat + 0.25, n.z);
        this.ring.scale.setScalar(selection.radius);
    }
    seatBelow(e, t, n) {
        this.raycaster.set(new Jn_1(t.x, n + 40, t.z), new Jn_1(0, -1, 0));
        let r = [
            this.board,
            ...[
                ...this.parts.values()
            ].map((e)=>e.group)
        ].filter((t)=>t !== e);
        let i = (object)=>{
            for(let n = object; n; n = n.parent){
                if (n === e) {
                    return true;
                }
            }
            return false;
        };
        let a = this.raycaster.intersectObjects(r, true).find((e)=>!i(e.object));
        if (a) {
            return Math.max(Qa, a.point.y);
        }
        return Qa;
    }
    revealSelection(e) {
        let t = this.selectionScreen();
        if (!t || !e) {
            return;
        }
        let { w, h } = this.size;
        let i = h - e;
        if (t[1] > 24 && t[1] < i - 24 && t[0] > 0 && t[0] < w) {
            return;
        }
        let a = [
            w / 2,
            Math.max(40, i * 0.55)
        ];
        let controls = this.controls;
        let s = controls.groundAt(t[0], t[1]);
        let c = controls.groundAt(a[0], a[1]);
        let l = controls.view.target.clone().add(s.sub(c));
        controls.animateTo({
            target: l.toArray()
        }, {
            duration: 600
        });
    }
    selectionScreen() {
        let selection = this.selection;
        if (!selection) {
            return null;
        }
        let anchor = selection.group.userData.anchor;
        let n = anchor ? anchor.getWorldPosition(new Jn_1) : ro(selection.group).getCenter(new Jn_1);
        return this.projectPoint(n);
    }
    grab(e) {
        if (e.target !== this.canvas) {
            return null;
        }
        let t = this.pick(e.clientX, e.clientY);
        if (!t?.id) {
            return null;
        }
        let n = this.parts.get(t.id);
        let r = n?.spec.interact;
        if (!r) {
            return null;
        }
        let n_group = n.group;
        this.select(t.id);
        this.setHovered(null);
        if (r.type === `slide`) {
            let e = new jt_1(new Jn_1(0, 1, 0), -t.point.y);
            let n = t.point.clone().sub(n_group.position).setY(0);
            let a = new Jn_1;
            let o = false;
            return {
                move: (t)=>{
                    if (!o) {
                        o = true;
                        this.hooks.onParam?.(`sweep`, false);
                    }
                    let i = this.canvas.getBoundingClientRect();
                    this.ndc.set((t.clientX - i.left) / i.width * 2 - 1, -((t.clientY - i.top) / i.height) * 2 + 1);
                    this.raycaster.setFromCamera(this.ndc, this.camera);
                    if (this.raycaster.ray.intersectPlane(e, a)) {
                        this.hooks.onParam?.(r.param, r.toParam(a.sub(n)));
                    }
                }
            };
        }
        if (r.type === `knob`) {
            let t = n_group.userData.knob ?? n_group;
            let n = this.project(t);
            let a = this.hooks.toStage;
            let o = (e)=>{
                let t = a(e.clientX, e.clientY);
                return Math.atan2(t.y - n[1], t.x - n[0]);
            };
            let s = o(e);
            let c = this.values[r.param] ?? r.min;
            let l = (r.max - r.min) / (r.sweep * Math.PI / 180);
            return {
                move: (e)=>{
                    let t = o(e);
                    let n = Math.atan2(Math.sin(t - s), Math.cos(t - s));
                    s = t;
                    c = Math.min(r.max, Math.max(r.min, c + n * l));
                    this.hooks.onParam?.(r.param, Math.round(c));
                }
            };
        }
        if (r.type === `press`) {
            let e = n_group.userData.cap;
            let t = (t)=>{
                this.inputs[r.input] = t;
                if (e) {
                    let n = e.position.y;
                    let r = n_group.userData.capY - (t ? 1.3 : 0);
                    this.tweens.add({
                        duration: 90,
                        easing: Ui.outCubic,
                        onUpdate: (t)=>{
                            e.position.y = n + (r - n) * t;
                        }
                    });
                }
                this.hooks.onInput?.(r.input, t);
                this.dirty = true;
            };
            t(true);
            return {
                up: ()=>t(false)
            };
        }
        return null;
    }
    setHovered(e) {
        if (this.hovered === e) {
            return;
        }
        let hovered = this.hovered;
        this.hovered = e;
        let n = (e, t)=>{
            if (!e || e.userData.part?.lift === false || e.userData.wire) {
                return;
            }
            e.userData.baseY ??= e.position.y;
            let n = e.userData.hoverY ?? 0;
            e.userData.hoverAnim?.cancel();
            e.userData.hoverAnim = this.tweens.add({
                duration: 220,
                easing: Ui.outCubic,
                onUpdate: (r)=>{
                    e.userData.hoverY = n + (t - n) * r;
                    this.applyY(e);
                    this.shadowDirty = true;
                }
            });
        };
        n(hovered, 0);
        n(e, e?.userData.part?.big ? 2.5 : 1.6);
        this.el.classList.toggle(`is-pointing`, !!e);
        let r = e ? [
            ...this.parts.values()
        ].find((t)=>t.group === e)?.spec.interact?.type : null;
        this.el.dataset.hand = r ?? ``;
        this.hooks.onHover?.(e ? e.userData.part : null, this.pointer);
    }
    updateHover() {
        if (!this.pointer || this.dragging) {
            return;
        }
        let pointer = this.pointer;
        if (pointer.target !== this.canvas) {
            this.setHovered(null);
            return;
        }
        if (pointer.done) {
            return;
        }
        pointer.done = true;
        let t = this.pick(pointer.x, pointer.y);
        this.setHovered(t?.group ?? null);
        if (t) {
            this.hooks.onHover?.(t.info, pointer);
        }
    }
    click(e) {
        if (document.elementFromPoint(e.clientX, e.clientY) !== this.canvas) {
            return;
        }
        let t = this.pick(e.clientX, e.clientY);
        if (t && t.info.lift !== false) {
            this.select(t.id ?? t.group);
        } else {
            this.select(null);
        }
        this.hooks.onPick?.(t);
    }
    focusPoint(e, t = 1.9) {
        let view = this.view;
        return this.controls.animateTo({
            target: [
                e.x,
                Math.max(0, Math.min(e.y, 12)),
                e.z
            ],
            zoom: Math.min(22, Math.max(view.zoom, this.homeView().zoom) * t)
        }, {
            duration: 1000
        });
    }
    focusAnchor(e) {
        let t = this.anchor(e);
        if (t) {
            return this.focusPoint(t.getWorldPosition(new Jn_1));
        }
        return null;
    }
    focusGroup(e) {
        let t = ro(e);
        let n = t.getCenter(new Jn_1);
        let r = t.getSize(new Jn_1).length();
        return this.focusPoint(n, Math.min(2.6, Math.max(1.4, 70 / r)));
    }
    screenHull(e) {
        let t = ro(e);
        if (t.isEmpty()) {
            return null;
        }
        let n = [];
        let r = new Jn_1;
        for (let e of [
            t.min.x,
            t.max.x
        ]){
            for (let i of [
                t.min.y,
                t.max.y
            ]){
                for (let a of [
                    t.min.z,
                    t.max.z
                ]){
                    n.push(this.projectPoint(r.set(e, i, a)));
                }
            }
        }
        return co(n);
    }
    markAxes() {
        let azimuth = this.controls.view.azimuth;
        let t = new Jn_1(Math.cos(azimuth), 0, -Math.sin(azimuth));
        let n = new Jn_1(-Math.sin(azimuth), 0, -Math.cos(azimuth));
        let r = [
            new Jn_1(1, 0, 0),
            new Jn_1(-1, 0, 0),
            new Jn_1(0, 0, 1),
            new Jn_1(0, 0, -1)
        ];
        let i = (e, t)=>e.reduce((acc, item)=>{
                if (item.dot(t) > acc.dot(t)) {
                    return item;
                }
                return acc;
            });
        let a = i(r, t);
        return {
            along: a,
            up: i(r.filter((e)=>Math.abs(e.dot(a)) < 0.5), n)
        };
    }
    markQuad(e, t, n, r, i) {
        let a = new Jn_1;
        return [
            [
                -1,
                -1
            ],
            [
                1,
                -1
            ],
            [
                1,
                1
            ],
            [
                -1,
                1
            ]
        ].map(([o, s])=>{
            a.copy(e).addScaledVector(t, o * r / 2).addScaledVector(n, s * i / 2);
            return this.projectPoint(a);
        });
    }
    partHulls() {
        return [
            this.board,
            ...[
                ...this.parts.values()
            ].map((e)=>e.group)
        ].map((e)=>this.screenHull(e)).filter(Boolean);
    }
    placeMark() {
        this.mark.hide();
        this.markAz = null;
        if (!Xa.floorCredit) {
            return;
        }
        let { w, h: h_1 } = this.size;
        if (w < 200 || h_1 < 160) {
            return;
        }
        this.placeCamera();
        this.camera.updateMatrixWorld();
        let controls = this.controls;
        let r = controls.view.zoom * controls.fit;
        let i = Math.min(270, Math.max(180, w * 0.25)) / r;
        let a = i * this.mark.aspect;
        let { along, up } = this.markAxes();
        let c = this.partHulls();
        if (!c.length) {
            return;
        }
        let l = (this.hooks.blockers?.() ?? []).map((e)=>e.poly ?? [
                [
                    e.x0,
                    e.y0
                ],
                [
                    e.x1,
                    e.y0
                ],
                [
                    e.x1,
                    e.y1
                ],
                [
                    e.x0,
                    e.y1
                ]
            ]);
        let u = [
            ...c,
            ...l
        ];
        let d = (n)=>!n.some(([n, r])=>n < 10 || r < 10 || n > w - 10 || r > h_1 - 10) && !u.some((e)=>lo(n, e, 8));
        let f = Ea[this.lessonId]?.mark;
        let p = Math.abs(Math.atan2(Math.sin(controls.view.azimuth - to.azimuth), Math.cos(controls.view.azimuth - to.azimuth)));
        if (f && p < 10 * $a) {
            let e = new Jn_1(f.at[0], -3.95, f.at[1]);
            let t = new Jn_1(f.along[0], 0, f.along[1]);
            let n = new Jn_1(f.up[0], 0, f.up[1]);
            let r = f.width * this.mark.aspect;
            if (d(this.markQuad(e, t, n, f.width, r))) {
                this.layMark(e, t, n, f.width, r);
                return;
            }
        }
        let m = Infinity;
        let h = -Infinity;
        let g = -Infinity;
        for (let e of c){
            for (let [t, n] of e){
                m = Math.min(m, t);
                h = Math.max(h, t);
                g = Math.max(g, n);
            }
        }
        let _ = [
            (m + h) / 2,
            g + 20
        ];
        let v = new jt_1(new Jn_1(0, 1, 0), 4);
        let y = new Jn_1;
        let b = null;
        for(let n = 16; n < h_1 - 16; n += 14){
            for(let r = 16; r < w - 16; r += 14){
                this.ndc.set(r / w * 2 - 1, -(n / h_1) * 2 + 1);
                this.raycaster.setFromCamera(this.ndc, this.camera);
                if (!this.raycaster.ray.intersectPlane(v, y)) {
                    continue;
                }
                let score = Math.hypot(r - _[0], (n - _[1]) * 1.6);
                if (!(b && score >= b.score)) {
                    if (d(this.markQuad(y, along, up, i, a))) {
                        b = {
                            score,
                            at: y.clone()
                        };
                    }
                }
            }
        }
        if (b) {
            this.layMark(b.at.setY(-3.95), along, up, i, a);
        }
    }
    layMark(e, t, up, width, height) {
        this.mark.place(e, t, up, width);
        this.markSpot = {
            along: t,
            up,
            width,
            height
        };
        this.markAz = this.controls.view.azimuth;
        this.mark.show(performance.now());
        this.dirty = true;
    }
    markCovered() {
        if (!this.mark.active || !this.markSpot) {
            return false;
        }
        let { along, up, width, height } = this.markSpot;
        let i = this.markQuad(this.mark.mesh.position, along, up, width, height);
        return this.partHulls().some((e)=>lo(i, e, 4));
    }
    footprints() {
        let e = new N;
        this.boardFootprint ||= (ro(this.board, e), {
            kind: `board`,
            x0: e.min.x,
            z0: e.min.z,
            x1: e.max.x,
            z1: e.max.z
        });
        let t = [
            this.boardFootprint
        ];
        for (let [kind, r] of this.parts){
            let i = r.group;
            if (i.userData.wire) {
                continue;
            }
            let a = `${i.position.x.toFixed(1)}|${i.position.z.toFixed(1)}|${i.scale.x.toFixed(2)}|${i.rotation.y.toFixed(3)}`;
            if (r.printKey !== a) {
                ro(i, e);
                r.printKey = a;
                r.print = e.isEmpty() ? null : {
                    kind,
                    x0: e.min.x,
                    z0: e.min.z,
                    x1: e.max.x,
                    z1: e.max.z
                };
            }
            if (r.print) {
                t.push(r.print);
            }
        }
        return t;
    }
    setGrid(e) {
        this.grid.visible = e;
        this.dirty = true;
    }
    setReducedMotion(e) {
        this.tweens.speed = e ? 0.05 : 1;
    }
    async runSketch(e, { out, trace }) {
        this.stopSim();
        let r = ++this.runToken;
        if (!Xa.instantRun) {
            this.flicker = Ha(this.leds, 1150 * this.tweens.speed);
            out(`Compiling sketch…`);
            await this.tweens.wait(600);
            if (r !== this.runToken || (out(`Uploading to Arduino Uno…`), await this.tweens.wait(600), r !== this.runToken)) {
                return false;
            }
            out(`Done uploading.`);
        }
        this.sim = Ba(e, {
            trace,
            scene: this.scene,
            parts: this.parts,
            leds: this.leds,
            params: new Proxy({}, {
                get: (e, t)=>this.values[t]
            }),
            inputs: this.inputs,
            sound: ()=>this.hooks.sound?.() ?? true,
            setParam: (e, t)=>this.hooks.onParam?.(e, t, {
                    fromSim: true
                }),
            out,
            readout: (e)=>{
                this.readoutState = e;
            }
        });
        this.dirty = true;
        return true;
    }
    stopSim() {
        this.runToken = (this.runToken ?? 0) + 1;
        this.sim &&= (this.sim.stop(), null);
        this.flicker = null;
        Va(this.leds);
        this.readoutState = null;
        this.shadowDirty = true;
        this.dirty = true;
    }
    loop(e) {
        requestAnimationFrame(this.loop);
        let t = Math.min(64, e - (this.lastFrame ?? e));
        this.lastFrame = e;
        let dirty = this.dirty;
        if (this.tweens.active) {
            this.tweens.update(e);
            dirty = true;
        }
        if (this.controls.update(t)) {
            dirty = true;
        }
        if (this.autoRotate && !this.dragging && !this.controls.anim && e - this.lastInput > 4500) {
            this.controls.turn(1, to.azimuth);
        }
        if (this.flicker?.update(e)) {
            dirty = true;
        }
        let r = !this.dragging && !this.controls.anim && !this.tweens.active;
        if (r && this.markAz !== null && Math.abs(Math.atan2(Math.sin(this.view.azimuth - this.markAz), Math.cos(this.view.azimuth - this.markAz))) > 45 * $a) {
            this.placeMark();
        }
        if (r && this.markCheck && e > this.markCheck) {
            let e = this.markForce || this.markCovered();
            this.markCheck = 0;
            this.markForce = false;
            if (e) {
                this.placeMark();
            }
        }
        if (this.mark.update(e)) {
            dirty = true;
        }
        if (this.sim && this.sim.update(e, t)) {
            dirty = true;
            if (this.sim?.shadows) {
                this.shadowDirty = true;
            }
        }
        this.updateHover();
        if (dirty) {
            this.render();
        }
    }
    render() {
        this.dirty = false;
        this.shadowDirty &&= (this.renderer.shadowMap.needsUpdate = true, false);
        this.placeCamera();
        if (this.selection) {
            this.placeRing();
        }
        let e = this.view.zoom * this.controls.fit;
        this.composer.setLineScale(Math.min(1, Math.max(0.6, Math.sqrt(e / io))));
        this.composer.render(this.scene, this.camera);
        this.hooks.onFrame?.(this);
    }
}
