
type DateCheckerProps = {
    startDate: string | number;
    endDate: string | number
}
export const isStartDateBeforeEndDate = ({ startDate, endDate }: DateCheckerProps): boolean => {
    const startTime = new Date(startDate);
    const endTime = new Date(endDate);

    return startTime.getTime() <= endTime.getTime();
};