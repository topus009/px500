import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export default () => {
  const [layout, setLayout] = useState({});

  const setWindowLayout = () => {
    const { width, height } = Dimensions.get('window');
    const orientation = width > height ? 'landscape' : 'portrait';
    setLayout({ width, height, orientation });
  };

  useEffect(() => {
    setWindowLayout();
  }, []);

  return [layout, setWindowLayout];
};
