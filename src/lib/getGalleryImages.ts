import cloudinary from './cloudinary';

/**
 * Fetches all images from a specific Cloudinary folder
 * @param folderPath - The folder path in Cloudinary (e.g., 'gallery', 'portfolio/photos')
 * @param maxResults - Maximum number of results per request (default: 500)
 * @returns Array of image resources
 */
export async function getGalleryImages(folderPath = 'gallery', maxResults = 500) {
  try {
    // Use Search API for more flexible filtering
    const { resources } = await cloudinary.search
      .expression(`folder:${folderPath}/*`)  // Search within specific folder
      .sort_by('created_at', 'desc')         // Most recent first
      .max_results(maxResults)
      .execute();

    return resources;
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}

/**
 * Alternative method using Admin API with prefix filter
 */
export async function getGalleryImagesByPrefix(folderPath = 'gallery', maxResults = 500) {
  try {
    const { resources } = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderPath,      // Folder path in Cloudinary
      max_results: maxResults,
      resource_type: 'image'   // Only fetch images
    });

    return resources;
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}

/**
 * Fetch images with pagination support
 */
export async function getGalleryImagesWithPagination(folderPath = 'gallery', nextCursor: string | null = null) {
  try {
    const searchQuery = cloudinary.search
      .expression(`folder:${folderPath}/*`)
      .sort_by('created_at', 'desc')
      .max_results(30);

    if (nextCursor) {
      searchQuery.next_cursor(nextCursor);
    }

    const result = await searchQuery.execute();

    return {
      resources: result.resources,
      nextCursor: result.next_cursor || null,
      totalCount: result.total_count
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return { resources: [], nextCursor: null, totalCount: 0 };
  }
}
