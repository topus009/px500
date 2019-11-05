import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../../styles/common';

const Loader = () => <ActivityIndicator color={colors.white[100]} size="large" />;

export default Loader;
