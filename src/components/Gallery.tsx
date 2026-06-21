```tsx
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/data/siteData";

import gallery1 from "@/assets/img0.jpeg";
import gallery2 from "@/assets/img01.jpeg";
import gallery3 from "@/assets/img2.jpeg";
import gallery4 from "@/assets/img3.jpeg";
import gallery5 from "@/assets/img4.jpeg";
import gallery6 from "@/assets/img5.jpeg";
import gallery7 from "@/assets/img6.jpeg";
import gallery8 from "@/assets/img7.jpeg";
import gallery9 from "@/assets/img8.jpeg";
import gallery10 from "@/assets/img9.jpeg";
// Add more images as needed
// import gallery11 from "@/assets/img10.jpeg";
// import gallery12 from "@/assets/img11.jpeg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [selected, setSelected] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const items = galleryItems.map((item, i) => ({
    ...item,
    src: images[i % images.length],
  }));

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginatedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section
      id="gallery"
      className="section-padding bg-background"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">
            Field Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Gallery
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedItems.map((item, i) => {
            const actualIndex =
              (currentPage - 1) * ITEMS_PER_PAGE + i;

            return (
              <motion.button
                key={`${item.id}-${actualIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setSelected(actualIndex)}
                className="relative group aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/60 transition-colors duration-300 flex flex-col items-center justify-center">
                  <p className="text-primary-foreground font-heading text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </p>

                  <p className="text-white font-body text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border border-border disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-md transition-colors ${
                  currentPage === index + 1
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border border-border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(
                  selected > 0 ? selected - 1 : items.length - 1
                );
              }}
              className="absolute left-4 md:left-8 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(
                  selected < items.length - 1 ? selected + 1 : 0
                );
              }}
              className="absolute right-4 md:right-8 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.img
              key={selected}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={items[selected].src}
              alt={items[selected].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selected + 1} / {items.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
```
