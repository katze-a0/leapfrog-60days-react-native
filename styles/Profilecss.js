import {StyleSheet} from 'react-native';
const Profilecss = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  avatarImage: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#ffffff', // Placeholder color
    marginRight: 8,
    overflow: 'hidden', 
    backgroundColor: '#ffffff',
    marginRight: 8,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userName: {
    fontSize: 20,
    color: '#333',
    marginTop: 10,
  },
});
export default Profilecss;
