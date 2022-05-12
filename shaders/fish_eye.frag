#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord2 = ((texcoord * 2.0) - 1.0);
    float theta = atan(texcoord2.y, texcoord2.x);
    float radius = pow(sqrt(pow(texcoord2.x,2.0) + pow(texcoord2.y,2.0)),1.5);
    vec2 fishCoord = vec2((radius * cos(theta)), (radius * sin(theta)));
    texcoord2 = (0.5 * (fishCoord + 1.0));
    FragColor = texture(image, texcoord2);
}
