import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const RenderItem: React.FC<DataProps> = ({
  id,
  image,
  title,
  description,
  time,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />

        <View>
          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default RenderItem;

interface DataProps {
  id: number;
  image: string;
  title: string;
  description: string;
  time: string;
}

export const dataA: DataProps[] = [
  {
    id: 1,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 2,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 3,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 4,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 5,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 6,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 7,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 8,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 9,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
  {
    id: 10,
    image: 'https://www.bachhoaxanh.com/static/icon-192x192.png',
    title: 'Bách hóa xanh bán đậu cove nhiễm Cyhalothrin vượt giới hạn',
    description:
      'Tiến hành kiểm tra chuyên ngành về an toàn thực phẩm năm 2023, cơ quan chức năng tỉnh Tây Ninh đã phát hiện cửa hàng Bách hóa xanh Tây Ninh số 12 có hành vi kinh doanh thực phẩm không đảm bảo chất lượng nên đã ra quyết định xử phạt.',
    time: '08:13 07/05/2024',
  },
];
