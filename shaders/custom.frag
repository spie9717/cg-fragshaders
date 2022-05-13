#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;
uniform float time;

out vec4 FragColor;

void main() {
    vec2 texcoord2 = ((texcoord * 2.0) - 1.0);
    float theta = atan(texcoord2.y, texcoord2.x);
    float radius = pow(sqrt(pow(texcoord2.x,2.0) + pow(texcoord2.y,2.0)),1.5);
    vec2 fishCoord = vec2((radius * cos(theta)), (radius * sin(theta)));
    texcoord2 = (0.5 * (fishCoord + 1.0));

    vec2 texcoord3 = ((texcoord2 * 2.0) - 1.0);
    radius = sqrt(pow(texcoord3.x,2.0) + pow(texcoord3.y,2.0));
    vec2 texcoordOffset = texcoord3 * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    texcoord3 = texcoord2 + texcoordOffset;
    
    FragColor = texture(image, texcoord3);

    float red = round(FragColor.r * 4.0) / 4.0;
    float green = round(FragColor.g * 4.0) / 4.0;
    float blue = round(FragColor.b * 4.0) / 4.0;
    
    FragColor = vec4(blue, red, green, FragColor.a);
}
