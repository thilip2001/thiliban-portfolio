# Adding Your Profile Picture

## Quick Guide

### 1. Add Your Image

Place your profile picture in the `public` folder:
- File name: `profile.jpg` (or `.png`, `.webp`)
- Recommended size: 800x800px (square)
- Format: JPG, PNG, or WebP

### 2. Update Home Page

Edit `app/page.tsx`:

Replace the placeholder div (around line 155):

```tsx
// Current placeholder
<div className="w-full h-full bg-linear-to-br from-primary to-blue-600 flex items-center justify-center text-white text-8xl font-bold">
  TR
</div>
```

With:

```tsx
import Image from "next/image";

// Add this in the component
<Image
  src="/profile.jpg"
  alt="Thiliban Ravichandran"
  fill
  className="object-cover"
  priority
/>
```

### 3. Update the Parent Div

Change the parent motion.div to remove the flex centering:

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
>
  <Image
    src="/profile.jpg"
    alt="Thiliban Ravichandran"
    fill
    className="object-cover"
    priority
  />
</motion.div>
```

## Alternative: Use Avatar Component

For a more polished look, create an avatar component in `components/ui/avatar.tsx`:

```tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-32 h-32",
    lg: "w-64 h-64",
    xl: "w-80 h-80",
  };

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden border-4 border-primary",
        sizeClasses[size],
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
```

Then use it:

```tsx
import { Avatar } from "@/components/ui/avatar";

<Avatar
  src="/profile.jpg"
  alt="Thiliban Ravichandran"
  size="xl"
/>
```

## Image Optimization Tips

1. **Optimize before upload**: Use tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (for Mac)

2. **Recommended specs**:
   - Size: 800x800px to 1200x1200px
   - Format: WebP (best), PNG, or JPG
   - File size: < 200KB

3. **Next.js will automatically**:
   - Optimize images
   - Generate responsive sizes
   - Lazy load (except with `priority`)
   - Serve WebP where supported

## Need a Placeholder?

If you don't have a photo yet, you can use:
- **Initials**: Keep the current "TR" design
- **Avataaars**: https://getavataaars.com
- **UI Avatars**: https://ui-avatars.com/api/?name=Thiliban+Ravichandran&size=800
- **Boring Avatars**: https://boringavatars.com

Example with UI Avatars (no file needed):

```tsx
<Image
  src="https://ui-avatars.com/api/?name=Thiliban+Ravichandran&size=800&background=random"
  alt="Thiliban Ravichandran"
  fill
  className="object-cover"
/>
```

---

That's it! Your profile picture will now appear on the home page with proper optimization. 🎉
