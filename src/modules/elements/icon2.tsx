import * as React from 'react';
import { Button, Dimensions, Slider, Text, View } from 'react-native';
import Svg, { SvgXml, Circle, Defs, G, Rect, Use, Symbol, Path } from 'react-native-svg';
import { Telicon } from '@dfhernandez/sds-react-native-components';
import Icons from '@/components/icons/icons.svg';
import DragonSvg from '@/components/icons/dragon.svg';
import Autocode from '@/components/icons/logos/autocode.svg';
import Bower from '@/components/icons/logos/bower.svg';
import Drupal from '@/components/icons/logos/drupal.svg';
import Firefox from '@/components/icons/logos/firefox.svg';
import Hostgator from '@/components/icons/logos/hostgator.svg';
import ReduxObservable from '@/components/icons/logos/redux-observable.svg';
import Stylelint from '@/components/icons/logos/stylelint.svg';
import { SvgComponent } from '@/components/svg-component';
import BallIcon from '@/components/icons/dynamic-colors/ball.svg';
import AvatarIcon from '@/components/icons/dynamic-colors/avatar.svg';
import HeartIcon from '@/components/icons/dynamic-colors/heart.svg';
import SymbolExample from '@/components/icons/symbol-example.svg';
import SymbolExample2 from '@/components/icons/symbol-example2.svg';
import Award from '@/components/icons/award.svg';
import Planet from '@/components/Planet';
// import Telicon from '../telicon/Telicon';
import SvgFlame from '../SvgFlame';

const { width } = Dimensions.get('window');
const iconSize = width * 0.15;

const colors = [
  'rgb(0, 0, 0)', // black
  'rgb(255, 159, 64)', // orange
  'brown',
  'rgb(255, 99, 132)', // pink
  'rgb(54, 162, 235)', // blue
  'rgb(0, 100, 192)', // green
  'rgb(255, 206, 86)', // yellow
  'rgb(153, 102, 255)', // purple
  '#45914f',
  '#205070',
  'orange',
  'lightgreen',
  'cyan',
];

interface Icon2Props {
  name: string;
}

const exXml = `
<svg xmlns="http://www.w3.org/2000/svg" >
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" fill="green" />
  </symbol>

  <symbol id="beaker" viewBox="214.7 0 182.6 792" width="200" height="200">
    <circle cx="344.8" cy="20.2" r="20.2" fill="blue" />
    <circle cx="344.8" cy="92.9" r="20.2" fill="blue" />
    <circle cx="320.5" cy="169.7" r="24.2" fill="blue" />
    <circle cx="243" cy="141.4" r="24.2" fill="blue" />
    <circle cx="284.2" cy="56.6" r="36.4" fill="blue" />
    <circle cx="1" cy="1" r="1" fill="green" />
    <path
      d="M397.3 768.5l-11.3-343.5v-178.5l9.7-20.2h-29.9l-4 13.7 2.4 189.9 9.7 316.8c1.6 14.5-19.4 12.9-34.8 12.9h-33.9s-38.8.8-46.1 0c-14.5-.8-18.6 1.6-17-29.1 1.6-25.2.8-95.5 5.7-301.5l-2.4-189.9-3.2-12.9h-27.5l9.7 20.2v178.6s-3.2 323.3-3.2 343.5c0 26.7 22.6 23.4 22.6 23.4h128.5c7.2 0 25 0 25-23.4zM259.9 473.5h93.8l-1.6-79.9h-92.2zM356.1 611.7l-2.4-132.6v5.7h-93.8l-.8 126.9zM352.1 382.3l-1.7-99.4h-89.7l-.8 99.4zM259.1 623l-.8 123.6h101l-2.4-123.6z" fill="blue"
    />
  </symbol>

  <symbol id="fish" viewBox="0 26 100 48" width="100" height="100">
    <path
      d="M98.5,47.5C96.5,45.5,81,35,62,35c-2.1,0-4.2,0.1-6.2,0.3L39,26c0,4.5,1.3,9,2.4,12.1C31.7,40.7,23.3,44,16,44L0,34
  c0,8,4,16,4,16s-4,8-4,16l16-10c7.3,0,15.7,3.3,25.4,5.9C40.3,65,39,69.5,39,74l16.8-9.3c2,0.2,4.1,0.3,6.2,0.3
  c19,0,34.5-10.5,36.5-12.5S100.5,49.5,98.5,47.5z M85.5,50c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5
  C88,48.9,86.9,50,85.5,50z" fill="blue"
    />
  </symbol>

  <use href="#fish" width="100" height="100" />
  <use href="#beaker" width="200" height="200" />
  <!-- <use href="#fish" width="200" height="100" fill="red" y="50" /> -->
  <use href="#myDot" x="35" y="5" style="opacity: 0.6" width="190" height="10" />
</svg>
`;

const xml2 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M472.916 224h-24.909a24.534 24.534 0 0 0-23.417-18H398v-65.024a6.86 6.86 0 0 0-3.346-6.062L207.077 26.572a6.927 6.927 0 0 0-6.962 0L12.48 134.914A6.981 6.981 0 0 0 9 140.976v216.685a7 7 0 0 0 3.5 6.062l187.654 108.342a7 7 0 0 0 3.5.938 7.361 7.361 0 0 0 3.6-.938L306 415.108v41.174A29.642 29.642 0 0 0 335.891 486h137.025A29.807 29.807 0 0 0 503 456.282v-202.1A30.2 30.2 0 0 0 472.916 224zm-48.077-4A10.161 10.161 0 0 1 435 230.161v.678A10.161 10.161 0 0 1 424.839 241h-40.678A10.161 10.161 0 0 1 374 230.839v-.678A10.161 10.161 0 0 1 384.161 220zM203.654 40.717l77.974 45.018-173.642 100.252-77.973-45.018zM197 453.878L23 353.619V153.085l174 100.259zm6.654-212.658l-81.668-47.151L295.628 93.818l81.672 47.151zM306 254.182v144.761l-95 54.935V253.344l173-100.259V206h.217a24.533 24.533 0 0 0-23.417 18h-24.909A30.037 30.037 0 0 0 306 254.182zm183 202.1A15.793 15.793 0 0 1 472.916 472H335.891A15.628 15.628 0 0 1 320 456.282v-202.1A16.022 16.022 0 0 1 335.891 238h25.182a23.944 23.944 0 0 0 23.144 17h40.373a23.942 23.942 0 0 0 23.143-17h25.183A16.186 16.186 0 0 1 489 254.182z"/>
    <path d="M343.949 325h7.327a7 7 0 1 0 0-14H351v-19h19.307a6.739 6.739 0 0 0 6.655 4.727 7.019 7.019 0 0 0 7.038-6.984v-4.71a7.093 7.093 0 0 0-7.076-7.033h-32.975a6.985 6.985 0 0 0-6.949 7.033v32.975a6.95 6.95 0 0 0 6.949 6.992zm.051 64h33a7 7 0 0 0 7-7v-33a7 7 0 0 0-7-7h-33a7 7 0 0 0-7 7v33a7 7 0 0 0 7 7zm7-33h19v19h-19zm.277 83H351v-19h18.929a7.037 7.037 0 0 0 14.071.014v-6.745a7.3 7.3 0 0 0-7.076-7.269h-32.975a7.191 7.191 0 0 0-6.949 7.269v32.975a6.752 6.752 0 0 0 6.949 6.756h7.328a7 7 0 1 0 0-14z"/>
    <path d="M393.041 286.592l-20.5 20.5-6.236-6.237a7 7 0 1 0-9.9 9.9l11.187 11.186a7 7 0 0 0 9.9 0l25.452-25.452a7 7 0 0 0-9.9-9.9zm0 129.249l-20.5 20.5-6.236-6.237a7 7 0 1 0-9.9 9.9l11.187 11.186a7 7 0 0 0 9.9 0l25.452-25.452a7 7 0 0 0-9.9-9.9zM464.857 295h-43.966a7 7 0 0 0 0 14h43.966a7 7 0 0 0 0-14zm0 64h-43.966a7 7 0 0 0 0 14h43.966a7 7 0 0 0 0-14zm0 64h-43.966a7 7 0 0 0 0 14h43.966a7 7 0 0 0 0-14z"/>
</svg>
`;
const xml3 = `
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <defs>
    <symbol id="audio2" stroke="currentColor" viewBox="0 0 24 24" >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </symbol>
    <symbol id="svg-sync" viewBox="0 0 56.693 56.693">
      <path
        d="M34.693 18.318v4.43a1.018 1.018 0 001.616.823l9.37-6.804a1.016 1.016 0 000-1.648l-9.37-6.805a1.017 1.017 0 00-1.617.822v4.43H14.07c-5.802 0-10.52 4.72-10.52 10.522v7.928c0 1.312 1.063 2.377 2.375 2.377S8.3 33.328 8.3 32.015v-7.928c0-3.18 2.59-5.77 5.77-5.77h20.623zm15.819 3.392a2.376 2.376 0 00-2.375 2.376v7.928a5.775 5.775 0 01-5.77 5.77h-20.72v-4.433a1.017 1.017 0 00-1.617-.821l-9.37 6.804c-.265.19-.42.498-.42.824s.155.633.42.824l9.37 6.807c.177.128.386.192.597.192a1.019 1.019 0 001.019-1.017v-4.43h20.722c5.8 0 10.52-4.72 10.52-10.52v-7.93a2.376 2.376 0 00-2.376-2.374z"
      ></path>
    </symbol>
  </defs>

  <use href="#audio2" width="100" height="100" />
  <use href="#svg-sync" width="100" height="100" x="10" y="80" />
</svg>
`;
const xml4 = `
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <defs>
    <symbol id="audio2" stroke="currentColor" viewBox="0 0 24 24" >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </symbol>
    <symbol id="svg-sync" viewBox="0 0 56.693 56.693">
      <path
        d="M34.693 18.318v4.43a1.018 1.018 0 001.616.823l9.37-6.804a1.016 1.016 0 000-1.648l-9.37-6.805a1.017 1.017 0 00-1.617.822v4.43H14.07c-5.802 0-10.52 4.72-10.52 10.522v7.928c0 1.312 1.063 2.377 2.375 2.377S8.3 33.328 8.3 32.015v-7.928c0-3.18 2.59-5.77 5.77-5.77h20.623zm15.819 3.392a2.376 2.376 0 00-2.375 2.376v7.928a5.775 5.775 0 01-5.77 5.77h-20.72v-4.433a1.017 1.017 0 00-1.617-.821l-9.37 6.804c-.265.19-.42.498-.42.824s.155.633.42.824l9.37 6.807c.177.128.386.192.597.192a1.019 1.019 0 001.019-1.017v-4.43h20.722c5.8 0 10.52-4.72 10.52-10.52v-7.93a2.376 2.376 0 00-2.376-2.374z"
      ></path>
    </symbol>
  </defs>
<!--</svg>

<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">-->
  <use href="#audio2" width="100" height="100" />
  <use href="#svg-sync" width="100" height="100" x="10" y="80" />
</svg>
`;

export const Icon2: React.FunctionComponent<Icon2Props> = () => {
  const [index, setIndex] = React.useState(1);
  const primaryColor = colors[index - 1];
  const secondaryColor = colors[index % colors.length];

  return (
    <View>
      <View style={styles.row}>
        <Telicon name="star" size="large" fill={primaryColor} fillSecondary={secondaryColor} />
      </View>

      <View style={styles.row}>
        <Telicon name="warning--octagon" size="small" fill={primaryColor} fillSecondary={secondaryColor} />
      </View>

      <View style={styles.row}>
        <SvgFlame width={iconSize} height={iconSize} fill={primaryColor} fillSecondary={secondaryColor}>
          <Use
            href="#flame_svg__fire"
            x="0"
            y="-10"
            width={iconSize}
            height={iconSize}
            fill={primaryColor}
            stroke={secondaryColor}
            // stroke="orange"
            strokeWidth="5px"
          />
          <Use
            href="#flame_svg__fire"
            x="40"
            y="-5"
            width={iconSize}
            height={iconSize}
            fill={secondaryColor}
            stroke={primaryColor}
            // stroke="orange"
            strokeWidth="5px"
          />
        </SvgFlame>
      </View>

      <Button onPress={() => console.log('Hello you son of a thousand bitches!')} title="Hey you MF" />

      {/* <SvgXml height={40} width={120} fill="#5901cd" xml={Bower} /> */}
      {/* <SvgXml height={40} width={120} fill="#5901cd" xml={Drupal} /> */}
      {/* <SvgXml height={40} width={180} fill="blue" xml={DragonSvg} /> */}
      {/* <SvgXml height={40} width={40} xml={Firefox} /> */}
      {/* <SvgXml height={40} width={40} xml={Autocode} />
      <SvgXml height={40} width={40} xml={Hostgator} />
      <SvgXml height={40} width={40} xml={Stylelint} />
      <SvgXml height={40} width={40} xml={ReduxObservable} /> */}

      {/* <Text>#audio2</Text>
      <SvgXml xml={Icons} height="50" width="100">
        <Use href="#audio2" x="5" y="5" width="100" height="50" />
        <Use href="#svg-sync" x="20" y="5" width="100" height="50" />
        <Use href="#svg-sync" x="35" y="5" width="100" height="50" /> */}
      {/* <Use href="#svg-sync" x="50" y="5" width="100" height="50" />
        <Use href="#svg-sync" x="65" y="5" width="100" height="50" /> */}
      {/* </SvgXml> */}

      <Svg height="100" width="300" fill="green">
        <Defs>
          <G id="shape">
            <G>
              <Circle cx="50" cy="50" r="50" />
              <Rect x="50" y="50" width="50" height="50" />
              <Circle cx="50" cy="50" r="5" fill="blue" />
            </G>
          </G>
        </Defs>
        <Use href="#shape" x="20" y="0" />
        <Use href="#shape" x="170" y="0" />
      </Svg>

      <View style={styles.containerPlanet}>
        <Planet
          style={styles.planet}
          width={200}
          height={200}
          planetColor="#ff4d30"
          craterColor="#d33f2f"
          ringColor="#90c8ec"
          hasRing={true}
        />
        <Planet style={styles.planet} width={150} height={150} planetColor="#4caf50" craterColor="#2e7d32" />
        <Planet style={styles.planet} width={50} height={50} planetColor="#ff9800" craterColor="#ef6c00" />
      </View>

      {/* <BallIcon width={iconSize} height={iconSize} fill={primaryColor} />
      <AvatarIcon width={iconSize} height={iconSize} fill={primaryColor} fillSecondary={secondaryColor} />
      <HeartIcon width={iconSize} height={iconSize} fill={primaryColor} fillSecondary={secondaryColor} /> */}
      <View style={styles.row}>
        <BallIcon width={iconSize} height={iconSize} fill={primaryColor} />
      </View>
      <View style={styles.row}>
        <AvatarIcon width={iconSize} height={iconSize} fill={primaryColor} fillSecondary={secondaryColor} />
      </View>
      <View style={styles.row}>
        <HeartIcon width={iconSize} height={iconSize} fill={primaryColor} fillSecondary={secondaryColor} />
      </View>
      <View style={styles.row}>
        <Telicon name="global" size="default" fill={primaryColor} fillSecondary={secondaryColor} />
        <Telicon name="volume-slash" size="default" fill={primaryColor} fillSecondary={secondaryColor} />
      </View>

      <Slider step={1} minimumValue={1} maximumValue={colors.length} onValueChange={setIndex} style={styles.slider} />

      <Button onPress={() => setIndex((idx) => idx + 1)} title="Ohhh Shiiiit" />

      <Svg height="100" width="110">
        <Symbol id="symbol" viewBox="0 0 150 110" width="100" height="50">
          <Circle cx="50" cy="50" r="40" strokeWidth="8" stroke="red" fill="red" />
          <Circle cx="90" cy="60" r="40" strokeWidth="8" stroke="green" fill="white" />
        </Symbol>

        <Use href="#symbol" x="0" y="0" width="100" height="50" fill="yellow" />
        <Use href="#symbol" x="0" y="50" width="75" height="38" />
        {/* <Use href="#symbol" x="0" y="100" width="50" height="25" />
        <Use href="#symbol" x="50" y="100" width="75" height="38" /> */}
      </Svg>

      {/* <Text>symbol example 1</Text> */}
      {/* <SvgXml height={100} width={200} xml={SymbolExample}> */}
      {/* <Use href="#symbol" x={5} y={5} width={10} height={10} />
        <Use href="#symbol" x={20} y={5} opacity={0.8} width={10} height={10} />
        <Use href="#symbol" x={35} y={5} opacity={0.6} width={10} height={10} />
        <Use href="#symbol" x={50} y={5} opacity={0.4} width={10} height={10} /> */}
      {/* <Use href="#symbol" x={65} y={5} opacity={0.2} width={10} height={10} />
      </SvgXml> */}

      {/* <Text>symbol example 2</Text>
      <SvgXml height={200} width={300} xml={SymbolExample2} /> */}

      <Award />
      {/* Provide height and width props as per your need. */}
      {/* <SvgXml xml={Award} height={30} width={50} /> */}

      <Svg height="100px" width="200px" viewBox="0 0 80 20">
        <Symbol id="symbol" viewBox="0 0 2 2">
          <Circle cx="1" cy="1" r="1" fill="#9e4747" />
        </Symbol>
        <Path d="M0 10h80M10 0v20M25 0v20M40 0v20M55 0v20M70 0v20" fill="none" stroke="pink" />

        <Use href="#symbol" x={5} y={5} width={10} height={10} fill="#9e4747" />
        <Use href="#symbol" x={20} y={5} opacity={0.8} width={10} height={10} fill="#9e4747" />
        <Use href="#symbol" x={35} y={5} opacity={0.6} width={10} height={10} />
        <Use href="#symbol" x={50} y={5} opacity={0.4} width={10} height={10} />
        <Use href="#symbol" x={65} y={5} opacity={0.2} width={10} height={10} />
      </Svg>

      <SvgXml height={100} width={200} xml={exXml} />
      {/* <SvgXml height={200} width={200} xml={exXml2} /> */}

      <SvgXml width={100} height={100} xml={xml2} fill="magenta" />
      <SvgXml width={100} height={200} xml={xml3} fill="orange" />

      <SvgXml width={100} height={200} xml={xml4} fill="red" />

      {/* <SvgComponent /> */}

      <SymbolExample width={100} height={100} fill="magenta" />
    </View>
  );
};

const styles = {
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    paddingTop: 20,
  },
  slider: {
    marginTop: 30,
    width: '90%',
  },
  scrollView: {
    // width: '100%',
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerPlanet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planet: {
    margin: 10,
  },
};
