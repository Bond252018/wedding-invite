import React from 'react';
import styles from './GallerySection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      placeholder: 'Фото 1',
      src: '/images/gallery-1.jpg'
    },
    {
      id: 2,
      placeholder: 'Фото 2',
      src: '/images/gallery-2.jpg'
    },
    {
      id: 3,
      placeholder: 'Фото 3',
      src: '/images/gallery-3.jpg'
    },
    {
      id: 4,
      placeholder: 'Фото 4',
      src: '/images/gallery-4.jpg'
    },
     {
      id: 5,
      placeholder: 'Фото 5',
      src: '/images/gallery-5.jpg'
    },
    {
      id: 6,
      placeholder: 'Фото 6',
      src: '/images/gallery-6.jpg'
    },
    {
      id: 7,
      placeholder: 'Фото 7',
      src: '/images/gallery-7.jpg'
    },
    {
      id: 8,
      placeholder: 'Фото 8',
      src: '/images/gallery-8.jpg'
    },
    {
      id: 9,
      placeholder: 'Фото 9',
      src: '/images/gallery-9.jpg'
    }
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContent}>
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            style={{ padding: '2rem 0' }}
             breakpoints={{
              0: {            
                slidesPerView: 1,
              },
              580: {          
                slidesPerView: 3,
              },
            }}
          >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className={styles.galleryItem}>
                <img 
                  src={image.src}
                  alt={image.description}
                  className={styles.galleryPhoto}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.imagePlaceholder}>
                  <div className={styles.imageText}>{image.placeholder}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection; 