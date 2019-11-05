import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Api from '../../api';
import useStyles from './styles';
import Pagination from '../../components/common/Pagination';
import Loader from '../../components/common/Loader';

const Gallery = ({ navigation }) => {
  const [layout, setLayout] = useState({});
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
    console.clear();
    const { width, height } = Dimensions.get('window');
    const orientation = width > height ? 'landscape' : 'portrait';
    getPhotos();
    setLayout({ width, height, orientation });
  }, []);

  const goToPhoto = source => navigation.navigate('Photo', { source });

  const onLayout = () => {
    const { width, height } = Dimensions.get('window');
    const orientation = width > height ? 'landscape' : 'portrait';
    setLayout({ width, height, orientation });
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
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
          numColumns={layout.orientation === 'portrait' ? 2 : 4}
          keyExtractor={(item, index) => index.toString()}
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
