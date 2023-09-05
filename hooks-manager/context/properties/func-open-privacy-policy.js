import { Linking } from 'react-native';

export default function funcOpenPrivacyPolicy({
    useCallback,
  }) {
    return useCallback(() => {
        Linking.openURL('https://www.freeprivacypolicy.com/live/f6e12007-1198-4cc8-8f98-37c55a0b4a44')
    }, []);
  }
  