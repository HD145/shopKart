import CategoryView from "@/components/category/category-view";

export default function ProductPage({params}){
    const { category } = params;
    console.log(category);
    return (
        <CategoryView category={category}/>
    )
}