import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ImageOff } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/siteData";

interface ImageCardProps {
  item: GalleryItem;
  onClick: () => void;
  priority: boolean;
}

const ImageCard = ({ item, onClick, priority }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    const img = e.currentTarget;
    if (img.naturalHeight > img.naturalWidth) {
      setIsPortrait(true);
    }
  };

  return (
    <motion.button
      onClick={hasError ? undefined : onClick}
      disabled={hasError}
      className={`group relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-secondary/5 border border-border shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
        hasError ? "cursor-not-allowed" : ""
      }`}
      whileHover={hasError ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-secondary/30 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-4 border-accent border-t-transparent animate-spin" />
        </div>
      )}

      {/* Error Fallback */}
      {hasError ? (
        <div className="absolute inset-0 bg-secondary/15 flex flex-col items-center justify-center p-4 text-center">
          <ImageOff className="w-8 h-8 text-muted-foreground mb-2" />
          <span className="text-sm font-semibold text-foreground/80">Image Unavailable</span>
          {item.caption && (
            <span className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {item.caption}
            </span>
          )}
        </div>
      ) : (
        <>
          {/* Blurred backdrop for portrait images to cover grid cards beautifully without crop side effects */}
          {isPortrait && isLoaded && (
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-md opacity-45 scale-105 pointer-events-none"
            />
          )}

          {/* Actual image */}
          <img
            src={item.image}
            alt={item.caption || "Field Work Gallery Image"}
            loading={priority ? "eager" : "lazy"}
            {...({ fetchpriority: priority ? "high" : "low" } as any)}
            onLoad={handleLoad}
            onError={() => setHasError(true)}
            className={`w-full h-full transition-all duration-750 ease-out group-hover:scale-105 ${
              isPortrait ? "object-contain relative z-10 p-1.5" : "object-cover"
            } ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          />
        </>
      )}

      {/* Overlay & Caption */}
      {!hasError && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left z-20">
          {item.showCaption && item.caption ? (
            <p className="text-white text-sm font-medium leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {item.caption}
            </p>
          ) : (
            <span className="text-white/80 text-xs flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ZoomIn className="w-3.5 h-3.5 text-accent" />
              Click to view
            </span>
          )}
        </div>
      )}
    </motion.button>
  );
};

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const inView = useInView(galleryRef, { once: true, margin: "-100px" });
  
  const [selected, setSelected] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);
  const [lightboxError, setLightboxError] = useState(false);
  const [isLightboxPortrait, setIsLightboxPortrait] = useState(false);
  
  const itemsPerPage = 12;
  const totalPages = galleryItems ? Math.ceil(galleryItems.length / itemsPerPage) : 0;

  // Guard against currentPage being out of range
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [galleryItems, totalPages, currentPage]);

  // Reset lightbox states when the selected image changes
  useEffect(() => {
    setLightboxError(false);
    setLightboxLoaded(false);
    setIsLightboxPortrait(false);
  }, [selected]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selected === null || !galleryItems || galleryItems.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelected((prev) => (prev !== null ? (prev > 0 ? prev - 1 : galleryItems.length - 1) : null));
      } else if (e.key === "ArrowRight") {
        setSelected((prev) => (prev !== null ? (prev < galleryItems.length - 1 ? prev + 1 : 0) : null));
      } else if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  // Handle empty gallery state
  if (!galleryItems || galleryItems.length === 0) {
    return (
      <section id="gallery" className="section-padding bg-background" ref={galleryRef}>
        <div className="max-w-6xl mx-auto text-center py-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Gallery</h2>
          <div className="bg-secondary/10 border border-border rounded-xl p-8 max-w-md mx-auto">
            <ImageOff className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-foreground font-medium">No images available</p>
            <p className="text-muted-foreground text-sm mt-1">Please add items to siteData.ts</p>
          </div>
        </div>
      </section>
    );
  }

  // Paginate items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = galleryItems.slice(startIndex, endIndex);

  // Scroll to top of gallery on page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="gallery" className="section-padding bg-background" ref={galleryRef}>
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">Field Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Gallery</h2>
        </motion.div>

        {/* Gallery Grid with Framer Motion Page Transition */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedItems.map((item) => {
                const absoluteIndex = galleryItems.indexOf(item);
                return (
                  <ImageCard
                    key={item.id}
                    item={item}
                    priority={currentPage === 1} // Eager load for first page images to optimize visual loading speed
                    onClick={() => setSelected(absoluteIndex)}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 flex items-center gap-1.5 text-sm font-medium shadow-sm"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-200 ${
                  currentPage === page
                    ? "bg-accent text-accent-foreground shadow-md shadow-accent/20 scale-105"
                    : "border border-border bg-card text-foreground hover:bg-accent/15"
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 flex items-center gap-1.5 text-sm font-medium shadow-sm"
              aria-label="Next page"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selected !== null && selected >= 0 && selected < galleryItems.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            {/* Background prefetching for next/previous lightbox images (enhances loading speed) */}
            <div className="hidden" aria-hidden="true">
              <img src={galleryItems[(selected + 1) % galleryItems.length].image} alt="" />
              <img src={galleryItems[(selected - 1 + galleryItems.length) % galleryItems.length].image} alt="" />
            </div>

            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
              className="absolute top-6 right-6 z-[60] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="Close gallery lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((prev) => (prev !== null ? (prev > 0 ? prev - 1 : galleryItems.length - 1) : null));
              }}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right/Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((prev) => (prev !== null ? (prev < galleryItems.length - 1 ? prev + 1 : 0) : null));
              }}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Central image container — fills available space, caption overlays on hover */}
            {/* Note: stopPropagation only on the inner image wrapper, not the full-screen div */}
            <div
              className="group relative w-full h-full flex items-center justify-center z-40 px-16 md:px-24"
            >
              {/* Loading spinner */}
              {!lightboxLoaded && !lightboxError && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full border-4 border-accent border-t-transparent animate-spin" />
                </div>
              )}

              {/* Blurred background for portrait images */}
              {isLightboxPortrait && lightboxLoaded && (
                <img
                  src={galleryItems[selected].image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-25 scale-110 pointer-events-none"
                />
              )}

              {lightboxError ? (
                <div className="flex flex-col items-center justify-center p-8 bg-secondary/15 border border-white/10 rounded-xl text-center z-10">
                  <ImageOff className="w-12 h-12 text-destructive mb-3" />
                  <h3 className="text-white font-heading text-lg font-semibold">Failed to Load Image</h3>
                  <p className="text-white/60 text-sm mt-1">
                    {galleryItems[selected].caption || "This image could not be loaded."}
                  </p>
                </div>
              ) : (
                <div
                  className="relative flex items-center justify-center max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selected}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      src={galleryItems[selected].image}
                      alt={galleryItems[selected].caption || "Gallery Image"}
                      onLoad={(e) => {
                        setLightboxLoaded(true);
                        const img = e.currentTarget;
                        if (img.naturalHeight > img.naturalWidth) {
                          setIsLightboxPortrait(true);
                        }
                      }}
                      onError={() => setLightboxError(true)}
                      className={`max-w-[calc(100vw-8rem)] md:max-w-[calc(100vw-12rem)] max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/5 transition-opacity duration-300 relative z-10 ${
                        lightboxLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </AnimatePresence>

                  {/* Caption overlay — hidden by default, slides in on hover */}
                  {galleryItems[selected].showCaption && galleryItems[selected].caption && (
                    <div className="absolute bottom-0 left-0 right-0 z-20 rounded-b-xl overflow-hidden pointer-events-none">
                      <div
                        className="px-5 py-3 bg-gradient-to-t from-black/85 to-transparent text-white text-sm md:text-base font-medium text-center leading-relaxed backdrop-blur-[2px] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                      >
                        {galleryItems[selected].caption}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
