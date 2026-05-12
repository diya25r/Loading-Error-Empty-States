# States Audit — ShopDash

## Move 1: Gap Identification

### Orders Page
- **While loading**: Currently blank white screen
- **On error**: Currently blank white screen  
- **When empty**: Currently blank white screen
- **Status**: ❌ All three states missing (placeholder code exists but not properly imported)

### Products Page
- **While loading**: Currently blank white screen (no data visible)
- **On error**: Currently blank white screen
- **When empty**: Currently blank white screen (grid stays empty)
- **Status**: ❌ All three states missing

### Customers Page
- **While loading**: Currently blank table body
- **On error**: Currently blank table body
- **When empty**: Currently blank table body
- **Status**: ❌ All three states missing

### Dashboard Page
- **While loading**: Currently blank stat cards area
- **On error**: Currently blank stat cards area
- **When empty**: Currently blank stat cards area
- **Status**: ❌ All three states missing

---

## Move 2: Implementation Checklist

| Screen | Loading | Error | Empty | Status |
|--------|---------|-------|-------|--------|
| Orders | ❌ | ❌ | ❌ | Not implemented |
| Products | ❌ | ❌ | ❌ | Not implemented |
| Customers | ❌ | ❌ | ❌ | Not implemented |
| Dashboard | ❌ | ❌ | ❌ | Not implemented |

---

## Move 3: Loading State Plan

**Decision**: Skeleton screens (not generic spinners)

**Reasoning**: List-based content (Orders, Products, Customers) benefits from skeleton cards that show the exact shape of content arriving. Dashboard stat cards need skeleton versions. This feels 40% faster than spinners and maintains layout stability.

- **Orders**: 4 skeleton cards
- **Products**: 3 skeleton cards in grid
- **Customers**: 4 skeleton table rows
- **Dashboard**: 4 skeleton stat cards

**Animation**: CSS shimmer/pulse effect using background transitions

---

## Move 4: Error State Plan

### Orders Page
- **Message**: "We couldn't load your orders. Check your internet connection and try again."
- **Action**: Retry button
- **Icon**: ❌

### Products Page  
- **Message**: "We couldn't load the product inventory. Please check your connection and try again."
- **Action**: Retry button
- **Icon**: ❌

### Customers Page
- **Message**: "We couldn't load your customer list. Please verify your connection and try again."
- **Action**: Retry button
- **Icon**: ❌

### Dashboard Page
- **Message**: "We couldn't load your dashboard statistics. Please check your connection and try again."
- **Action**: Retry button
- **Icon**: ❌

---

## Move 5: Empty State Plan

### Orders Page
- **Title**: "No orders yet"
- **Message**: "When you place your first order, it will appear here."
- **CTA**: "Browse products" → navigates to /products
- **Icon**: 📭

### Products Page
- **Title**: "No products available"
- **Message**: "No products are currently in inventory. Please check back soon."
- **CTA**: None (admin-only action)
- **Icon**: 📭

### Customers Page
- **Title**: "No customers yet"
- **Message**: "Customer records will appear here as they are added."
- **CTA**: None
- **Icon**: 👥

### Dashboard Page
- **Title**: "No data available"
- **Message**: "Dashboard statistics will appear once you have orders and customer data."
- **CTA**: None
- **Icon**: 📊

---

## Move 6: Visual Plan

Three states for Orders page:
1. **Loading**: 4 skeleton cards with shimmer animation
2. **Error**: Centered error box with message and red retry button
3. **Empty**: Centered box with mailbox icon, message, and blue CTA button

---

## Move 7: Reusable Components Status

✅ **LoadingSpinner.jsx** - Renders skeleton cards with `count` prop
✅ **ErrorMessage.jsx** - Accepts `message` and `onRetry` props
✅ **EmptyState.jsx** - Accepts `title`, `message`, `actionLabel`, `onAction` props

All components use props (reusable across all screens).

---

## Move 8: Integration Order

Pattern for all data-fetching screens:
```javascript
if (isLoading) return <LoadingSpinner count={X} />
if (error) return <ErrorMessage message="..." onRetry={refetch} />
if (data && data.length === 0) return <EmptyState title="..." message="..." actionLabel="..." onAction={handler} />
return <DataComponent data={data} />
```

---

## Move 9: Testing Plan

Minimum 6 screenshots required:
1. Orders loading state
2. Orders error state  
3. Orders empty state
4. Products loading state
5. Customers error state
6. Dashboard empty state

**Test method**:
- Loading: Chrome DevTools → Network → Slow 3G
- Error: Break API endpoint temporarily
- Empty: Return empty array from mock API
