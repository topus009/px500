import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import Api from '../../api';
import useStyles from './styles';
import Pagination from '../../components/common/Pagination';
import Loader from '../../components/common/Loader';
import { getKeyExtractor } from '../../helpers';
import useWindowLayout from '../../hoc/useWindowLayout';

const Gallery = ({ navigation }) => {
  const [layout, setWindowLayout] = useWindowLayout();
  const [photos, setPhotos] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const styles = useStyles(layout);
  const preparePhotoData = data => data.map(({ id, image_url }) => ({ id, image_url }));

  const getPhotos = (page = currentPage) => {
    setFetching(true);
    setPhotos([]);
    Api.gallery
      .getPhotos({ page })
      .then(data => {
        setPhotos(preparePhotoData(data.photos));
        setTotalPages(data.total_pages);
      })
      .catch(console.warn)
      .finally(() => setFetching(false));
  };

  const handleSetCurrentPage = page => {
    getPhotos(page);
    setCurrentPage(page);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const goToPhoto = source => navigation.navigate('Photo', { source });

  const numColumns = layout.orientation === 'portrait' ? 2 : 4;

  return (
    <View style={styles.container} onLayout={setWindowLayout}>
      {fetching && <Loader />}
      {photos.length ? (
        <FlatList
          contentContainerStyle={styles.list}
          key={layout.orientation}
          data={photos}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.imageWrapper} onPress={() => goToPhoto(item.image_url[0])}>
              <Image style={styles.image} source={{ uri: item.image_url[0] }} />
            </TouchableOpacity>
          )}
          numColumns={numColumns}
          keyExtractor={getKeyExtractor}
        />
      ) : (
        !fetching && <Text>No photos</Text>
      )}
      {!fetching && totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} setPage={handleSetCurrentPage} />
      )}
    </View>
  );
};

export default Gallery;
