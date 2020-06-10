/**
 * Calculate a weighted estimate for the interval until the next purchase
 * Current purchase a tiny bit less weight than all previous purchases
 *
 * @param {Number} lastEstimate The last estimated purchase interval
 * @param {Number} latestInterval The number of days between the most recent and previous purchases
 * @param {Number} numberOfPurchases Total number of purchases for the item
 *
 * @return {Number} Estimated number of days until the next purchase
 */
const calculateEstimate = (lastEstimate, latestInterval, numberOfPurchases) => {
    if (numberOfPurchases >= 2) {
        if (isNaN(lastEstimate)) {
            lastEstimate = 14;
        }
        let previousFactor = lastEstimate * numberOfPurchases;
        let latestFactor = latestInterval * (numberOfPurchases - 1);
        let totalDivisor = numberOfPurchases * 2 - 1;
        return Math.round((previousFactor + latestFactor) / totalDivisor);
    } else {
        return latestInterval;
    }
};

export default calculateEstimate;
