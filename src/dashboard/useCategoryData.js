import useDashboardData from "./useDashboardData";

export default function useCategoryData() {
    const { receivedData } = useDashboardData();

    function getNearToExpiry(expiry) 
    {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const expiryDate = new Date(expiry);
        expiryDate.setHours(0, 0, 0, 0);

        const diffTime = expiryDate - today; 
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    function getCategories(receivedData) {
        const grouped = {};

        receivedData.forEach((item) => 
        {
            const daysLeft = getNearToExpiry(item.expiryDate);
            let status = "safe";

            if(daysLeft > 0 && daysLeft <= 30) status = "nearExpiry"
            else if(daysLeft <= 0) status =  "expired"
            else status = "safe";

            if(!grouped[item.category]){
                grouped[item.category] = {
                    category: item.category,
                    expired: 0,
                    nearExpiry: 0,
                    safe: 0,
                }
            }
            grouped[item.category][status] += 1;
        })
    return Object.values(grouped);
    }

    const categoryData = getCategories(receivedData);

    return { categoryData }
}
