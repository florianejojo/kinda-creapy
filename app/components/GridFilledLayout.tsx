export const GridFilledLayout = ({ gap, colNumbers = 3, elements }) => {
    const makeCols = () => {
        const columns = Array.from({ length: colNumbers }, () => []);

        elements.forEach((element, index) => {
            const colIndex = index % colNumbers;
            columns[colIndex].push(<div>{element}</div>);
        });

        return columns;
    };

    const columns = makeCols();

    return (
        <div className={`grid grid-cols-${colNumbers} gap-${gap}`}>
            {columns.map((col, index) => {
                return (
                    <div
                        key={index}
                        className={`flex flex-col gap-${10} w-full h-full`}
                    >
                        {col}
                    </div>
                );
            })}
        </div>
    );
};
