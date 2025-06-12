import {StyleSheet} from 'react-native';

const incomecss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  // New Custom Header Styles
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  headerLeft: {
    alignItems: 'flex-start',
  },

  headerCenter: {
    alignItems: 'center',
    fontSize: 25,
    color: '#999',
  },

  StatusIconSection: {
    alignItems: 'flex-end',
    // justifyContent: '',
    padding: 8,
    borderRadius: 8,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
  },
  welcomeTitle: {
    fontSize: 27,
    color: '#000000',
    textAlign: 'center',
    marginRight: 5,
    color: '#7d65db',
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 20,
    color: '#000000',
    marginLeft: 30,
    marginTop: 30,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  appName: {
    color: '#7d65db',
    fontWeight: '600',
  },
  formSection: {
    flex: 1,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
    marginTop: 7,
  },
  input: {
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderRadius: 15,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: 'white',
    color: '#333',
    marginHorizontal: 60,
  },
  passwordInput: {
    paddingRight: 60,
  },
  calendarIcon: {
    position: 'absolute',
    right: 70,
    top: '45%',
    transform: [{translateY: -10}], // Adjusted for icon centering
    padding: 4,
  },
  loginButton: {
    backgroundColor: '#7d65db',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 12,
    marginHorizontal: 60,
    shadowColor: '#7d65db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default incomecss;
