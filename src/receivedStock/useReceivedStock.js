import { useSearchParams } from "react-router-dom";

export default function  useReceivedStock({dashboardStocks = []}) {

    const [searchParams] = useSearchParams();

    const filterValue = searchParams.get('category') || 'All';
    let filteredStock;
    if(filterValue === 'All') filteredStock = dashboardStocks;
    if(filterValue === 'Tablets') filteredStock = dashboardStocks.filter((stock) => stock.category === 'Tablets');
    if(filterValue === 'Capsules') filteredStock = dashboardStocks.filter((stock) => stock.category === "Capsules");
    if(filterValue === 'Syrups') filteredStock = dashboardStocks.filter((stock) => stock.category === "Syrups");
    if(filterValue === 'Injections') filteredStock = dashboardStocks.filter((stock) => stock.category === 'Injections');
    if(filterValue === 'Ointments') filteredStock = dashboardStocks.filter((stock) => stock.category === "Ointments");
    if(filterValue === 'Others') filteredStock = dashboardStocks.filter((stock) => stock.category === "Others");


  //   function getNearToExpiry(expiry) {
  //   const today = new Date();
  //   const expiryDate = new Date(expiry);
  //   // const diffTime = expiryDate - today;
  //   // return Math.ceil(diffTime / (1000 * 60 * 60 *24));

  //   const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  //   const utcExpiry = Date.UTC(expiryDate.getFullYear(), expiryDate.getMonth(), expiryDate.getDate());

  //   const diffDays = Math.floor((utcExpiry - utcToday) / (1000 * 60 * 60 * 24));
  //   return diffDays;
  // }


function getNearToExpiry(expiry) {
    const today = new Date();
    // Reset today's time to 00:00:00
    today.setHours(0, 0, 0, 0);

    const expiryDate = new Date(expiry);
    // Reset expiry date time to 00:00:00
    expiryDate.setHours(0, 0, 0, 0);

    const diffTime = expiryDate - today; // difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

const stocksWithDays = filteredStock.map((stock) => {
    const daysLeft = getNearToExpiry(stock.expiryDate);
    return {
        ...stock,
        daysLeft,
        isExpiringSoon: daysLeft > 0 && daysLeft <= 30,
        alreadyExpired: daysLeft <= 0,
    };
});

  const nearExpiry = stocksWithDays.filter((stock) => stock.daysLeft <= 30 && stock.daysLeft > 0);
  const lengthOfNearExpiry = nearExpiry.length;

  // Filter By Expiry Date
  const DateValue = searchParams.get('date') || 'none';
  let finalStocks = stocksWithDays;

  if(DateValue === 'none') finalStocks = stocksWithDays;

    if (DateValue === 'nearToExpiry') {
        finalStocks = stocksWithDays.filter((stock) => stock.isExpiringSoon);
    }

    if (DateValue === 'alreadyExpired') {
        finalStocks = stocksWithDays.filter((stock) => stock.daysLeft <= 0);
    }

    return {stocksWithDays, lengthOfNearExpiry, finalStocks, getNearToExpiry}

}