#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord2 = ((texcoord * 2.0) - 1.0);
    float radius = sqrt(pow(texcoord2.x,2.0) + pow(texcoord2.y,2.0));
    vec2 texcoordOffset = texcoord2 * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    texcoord2 = texcoord + texcoordOffset;
    FragColor = texture(image, texcoord2);
}
