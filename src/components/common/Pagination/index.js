import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { getKeyExtractor } from '../../../helpers';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handleSetPages = () => (totalPages > 100 ? 100 : totalPages);

  const [maxPages, setMaxPages] = useState(handleSetPages());

  useEffect(() => {
    setMaxPages(handleSetPages(totalPages));
  }, [totalPages]);

  const getActivePageStyle = index =>
    index === currentPage
      ? {
          ...styles.pageItem,
          ...styles.activePageItem,
        }
      : styles.pageItem;

  const pageItems = Array.from(Array(maxPages).keys(), page => page + 1);

  return (
    <View style={styles.container}>
      <FlatList
        data={pageItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setPage(item)} style={getActivePageStyle(item)}>
            <Text style={styles.page}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={getKeyExtractor}
        horizontal
      />
    </View>
  );
};

export default Pagination;
