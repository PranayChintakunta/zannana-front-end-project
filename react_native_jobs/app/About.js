import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from "expo-router";
const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/about_img_1.png')}
            style={styles.miniature}
          />
          <Text style={styles.miniText}>
            Change the game for your gatherings
          </Text>
          <Text style={styles.miniTextTwo}>
            ZANNANA IS HERE TO MAKE HOSTING AND JOINING GAME NIGHTS A LOT
            EASIER.
          </Text>
          <Text style={styles.vision}>Vision</Text>
          <Text style={styles.visionText}>
            At Zannana, we envision a world where tabletop gaming transcends{'\n'}
            boundaries, bringing people together and igniting imaginations.
          </Text>
          <Text style={styles.visionText}>
            {'\n'}
            Through our dedication to fostering a thriving gaming community and{'\n'}
            providing exceptional products and experiences, we strive to make{'\n'}
            every visit to Zannana an unforgettable journey into the world of{'\n'}
            tabletop gaming.
          </Text>
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/upsideDownRedHeart.png')}
            style={styles.upsideDownRedHeart}
          />
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/upsideDownBlackHeart.png')}
            style={styles.upsideDownBlackHeart}
          />
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/blackHeart.png')}
            style={styles.blackHeart}
          />
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/redHeart.png')}
            style={styles.redHeart}
          />
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/cards.png')}
            style={styles.cards}
          />
          <View style={styles.missionbox}>
            <Text style={styles.ourmission}>Our mission</Text>
            <Text style={styles.missionContent}>
              Zannana was created specifically for tabletop game{'\n'}
              lovers, by tabletop game lovers. Our purpose is to{'\n'}
              make it easier to host and join tabletop game{'\n'}
              events near you, in addition to trading, buying, and{'\n'}
              selling your tabletop games.
            </Text>
          </View>
          <Text style={styles.tenets}>The Five Tenets of Zannana</Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: 'bold' }}>
              Inclusivity and Diversity:
            </Text>{' '}
            Ensure events are welcoming{'\n'}to diverse backgrounds, genders, ages,
            and abilities,{'\n'}fostering an inclusive environment where everyone{'\n'}
            feels valued and respected, regardless of their gaming{'\n'} expertise.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: 'bold' }}>
              Quality Gaming Experience:
            </Text>{' '}
            Prioritize well-organized{'\n'}events with clear rules, offering a
            variety of games for{'\n'}different interests and skill levels. Maintain
            high{'\n'}standards for gaming materials and facilities.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: 'bold' }}>Community Building:</Text>{' '}
            Focus on building a strong gaming{'\n'}community through social
            interaction, tournaments, and{'\n'}events. Foster friendships and
            connections among{'\n'}players.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: 'bold' }}>Continuous Improvement:</Text>{' '}
            Solicit feedback and adapt to{'\n'}preferences, staying updated on gaming
            trends.{'\n'}Proactively incorporate new games and formats.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: 'bold' }}>
              Accessibility and Affordability:
            </Text>{' '}
            Strive for affordability{'\n'}and flexibility in participation. Consider
            venue location,{'\n'}transportation, and scheduling for accessibility.
            Provide{'\n'}resources for newcomers to learn and enjoy gaming{'\n'}
            without intimidation.
          </Text>
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/one.png')}
            style={styles.threeCards}
          />
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/two.png')}
            style={styles.threeCards}
          />
          <Image
            source={require('C:/Users/pkchi/GitRepoTest/zannana-front-end-project/react_native_jobs/app/three.png')}
            style={styles.threeCards}
          />
          <Text style={styles.one}>1.</Text>
          <Text style={styles.one}>2.</Text>
          <Text style={styles.one}>3.</Text>
          <Text style={styles.one}>4.</Text>
          <Text style={styles.one}>5.</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.lineTwo}></View>
        <View style={styles.preregister}>
          <Text style={styles.preregisterContent}>Ready to join the community?</Text>
          <Text style={{fontSize: 25, paddingTop: 25, paddingLeft: 85}}>Change the game and play more. Preregister to be the first one joining our community.</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/Login")}>
            <Text style={styles.buttonText}>PREREGISTER</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  miniature: {
    height: 500,
    width: 1050,
    top: 25,
    left: 175,
    borderRadius: 10,
  },
  miniText: {
    fontSize: 57.5,
    color: 'white',
    fontWeight: 'bold',
    top: 140,
    left: 280,
    right: 450,
    position: 'absolute',
  },
  miniTextTwo: {
    fontSize: 25,
    color: 'white',
    top: 330,
    left: 280,
    right: 450,
    position: 'absolute',
  },
  vision: {
    top: 100,
    fontSize: 40,
    color: '#C70039',
    left: 375,
  },
  visionText: {
    top: 125,
    fontSize: 20,
    color: 'black',
    left: 375,
  },
  upsideDownRedHeart: {
    width: 26,
    height: 26,
    left: 235,
    transform: [{ translateY: -130 }],
  },
  upsideDownBlackHeart: {
    width: 26,
    height: 26,
    left: 1100,
    transform: [{ translateY: -150 }],
  },
  redHeart: {
    width: 26,
    height: 26,
    left: 1100,
    top: 75,
  },
  blackHeart: {
    width: 26,
    height: 26,
    left: 235,
    top: 100,
  },
  cards: {
    height: 500,
    width: 1050,
    top: 150,
    left: 175,
    borderRadius: 10,
  },
  missionbox: {
    height: 260,
    width: 530,
    backgroundColor: 'white',
    borderRadius: 10,
    left: 275,
    //bottom: 150,
    transform: [{translateY: -150}],
  },
  ourmission: {
    fontSize: 35,
    color: '#C70039',
    top: 30,
    left: 45,
  },
  missionContent: {
    fontSize: 20,
    top: 45,
    left: 45,
  },
  tenets: {
    fontSize: 45,
    left: 210,
    //bottom: 85,
    transform: [{translateY: -85}],
  },
  tenetContent: {
    fontSize: 20,
    paddingTop: 80,
    paddingHorizontal: 325,
    //bottom: 75,
    transform: [{translateY: -75}],
  },
  threeCards: {
    left: 900,
    //bottom: 1090,
    transform: [{translateY: -1090}],
  },
  one: {
    fontSize: 60,
    fontWeight: '600',
    color: '#C70039',
    //bottom: 2100,
    transform: [{translateY: -2100}],
    left: 220,
    paddingTop: 105,
  },
  line: {
    backgroundColor: 'black',
    width: 2,
    height: 200,
    left: 247,
    transform: [{translateY: -3950}],
    //bottom: 3950,
  },
  lineTwo: {
    backgroundColor: 'black',
    width: 2,
    height: 200,
    left: 1112,
    //bottom: 4150,
    transform: [{translateY: -4150}],
  },
  preregister: {
    backgroundColor: 'pink',
    width: 1500,  
    height: 300,
    bottom: 2400,
  },
  preregisterContent: {
    fontSize: 40,
    paddingLeft: 80,
    paddingTop: 55,
  },
  button: {
    borderWidth: 2, // Set the border width
    borderColor: 'black', // Set the border color
    borderRadius: 10,
    paddingHorizontal: 75, // Add horizontal padding around the text
    paddingVertical: 5,
    alignSelf: 'flex-start',
    top: 25,
    left: 85,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: "center",
  },
});
