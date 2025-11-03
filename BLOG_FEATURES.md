# Blog Features Guide

## TipTap Rich Text Editor

Your portfolio now includes a powerful rich text editor for creating and editing blog posts with the following features:

### Features
- **Text Formatting**: Bold, Italic
- **Headings**: H1, H2, H3
- **Lists**: Bullet lists, Numbered lists
- **Blockquotes**: For highlighting quotes or important text
- **Undo/Redo**: Full editing history support

### Blog Pages

#### 1. Blog List (`/blog`)
- View all published blog posts
- Click any blog card to view the full post
- "Write New Post" button to create a new blog
- Shows title, date, tags, and content preview

#### 2. Create New Blog (`/blog/new`)
- TipTap rich text editor for content
- Title input
- Tags input (comma-separated)
- Content is saved as HTML
- Automatically saves to localStorage
- Redirects to blog list after creation

#### 3. View Blog Post (`/blog/[id]`)
- Full blog post display with rich text formatting
- Shows title, date, and tags
- Properly rendered HTML content
- Edit and Delete buttons
- Back button to return to blog list

#### 4. Edit Blog Post (`/blog/edit/[id]`)
- Pre-filled form with existing blog data
- Same TipTap editor for content editing
- Save changes or cancel
- Updates existing blog in localStorage

### Storage
- All blog posts are stored in browser localStorage using Jotai
- Data persists across page refreshes
- Blog state is managed with `blogsAtom`

### Styling
- Custom TipTap styles for the editor interface
- Prose styles for displaying blog content
- Dark mode support for both editor and content
- Responsive design for all screen sizes

### Usage Flow
1. Navigate to `/blog`
2. Click "Write New Post"
3. Fill in title, tags, and content using the rich text editor
4. Click "Publish Post"
5. View your post in the blog list
6. Click on any post to view full content
7. Use Edit button to modify or Delete button to remove

### Technical Details
- **Editor**: TipTap (React 19 compatible)
- **Extensions**: StarterKit, Placeholder
- **State Management**: Jotai with localStorage persistence
- **Styling**: Tailwind CSS with custom prose classes
- **Routing**: Next.js App Router with dynamic routes

### Note
Blog data is stored locally in your browser. Clearing browser data will remove all posts.
