/**
 * Sinh ID tiếp theo dựa trên danh sách hiện có.
 */
export function generateNextId(
    ids: string[]
): string {

    if (ids.length === 0) {
        return "1";
    }

    const maxId = Math.max(
        ...ids.map(id => Number(id))
    );

    return String(maxId + 1);

}