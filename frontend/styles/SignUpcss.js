

import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
   
  headerSection: {
    alignItems: 'center',
    marginBottom: 50,
    paddingTop: 20,
  },
  
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  
  appName: {
    color: '#6366f1',
    fontWeight: '700',
    fontSize: 16,
  },
  
  formSection: {
    flex: 1,
  },
  
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  
  input: {
    borderWidth: 1.5,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#1f2937',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    fontWeight: '500',
  },
  
  passwordInput: {
    paddingRight: 60,
  },
  
  eyeIcon: {
    position: 'absolute',
    right: 18,
    top: '50%',
    transform: [{translateY: -12}],
    padding: 8,
    borderRadius: 20,
  },
  
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 32,
    marginTop: -8,
  },
  
  forgotPasswordText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  },
  
  loginButton: {
    backgroundColor: '#6366f1',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 4,
  },
  
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  
  dividerText: {
    color: '#6b7280',
    fontSize: 14,
    paddingHorizontal: 16,
    fontWeight: '500',
    backgroundColor: '#f8f9fa',
  },
  
  signUpText: {
    color: '#6366f1',
    fontWeight: '700',
    fontSize: 14,
  },
  
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 20,
  },
  
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  
  googleButton: {
    backgroundColor: '#ffffff',
  },
  
  appleButton: {
    backgroundColor: '#000000',
  },
  
  facebookButton: {
    backgroundColor: '#1877f2',
  },
  
  // Input focus states (you can add these with state management)
  inputFocused: {
    borderColor: '#6366f1',
    borderWidth: 2,
    shadowColor: '#6366f1',
    shadowOpacity: 0.1,
  },
  
  // Additional gradient overlay for container (optional)
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.3,
    backgroundColor: 'transparent',
  },
  
  // Floating label styles (if you want to implement floating labels)
  floatingLabel: {
    position: 'absolute',
    left: 20,
    top: -8,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 4,
    fontSize: 12,
    color: '#6366f1',
    fontWeight: '600',
  },
  
  // Error state styles
  inputError: {
    borderColor: '#ef4444',
    borderWidth: 2,
  },
  
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
    fontWeight: '500',
  },
  
  // Success state
  inputSuccess: {
    borderColor: '#10b981',
    borderWidth: 2,
  },
  
  // Loading state for button
  loginButtonLoading: {
    backgroundColor: '#9ca3af',
  },
  
  // Animated elements
  fadeIn: {
    opacity: 1,
  },
  
  slideUp: {
    transform: [{translateY: 0}],
  },
});

export default styles;