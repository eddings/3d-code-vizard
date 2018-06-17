#version 300 es

precision mediump float;

in vec3 vTextureCoord;

out vec4 fragColor;

uniform samplerCube uSkyCube;

const vec3 ambientLight = vec3(144) / 255.0;
const vec3 directionalLightColor = vec3(239, 210, 183) / 512.0;

void main(void) {
  vec4 color = texture(uSkyCube, vTextureCoord);
  color.rgb *= (ambientLight + directionalLightColor) * 1.1;
  fragColor = color;
}
