
import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

function DataPlot() { // Changed component name to DataPlot
    const { incomes, expenses } = useGlobalContext();

    // Prepare data for Plotly
    const incomeData = {
        x: incomes.map((inc) => dateFormat(inc.date)), // X-axis labels
        y: incomes.map((inc) => inc.amount), // Y-axis data
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Income',
        marker: { color: 'green' },
    };

    const expenseData = {
        x: expenses.map((exp) => dateFormat(exp.date)), // X-axis labels
        y: expenses.map((exp) => exp.amount), // Y-axis data
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Expenses',
        marker: { color: 'red' },
    };

    const data = [incomeData, expenseData]; // Combine the two datasets

    const layout = {
        title: 'Income and Expenses Over Time',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Amount' },
    };

    return (
        <ChartStyled>
            <Plot
                data={data}
                layout={layout}
                config={{ responsive: true }}
            />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default DataPlot; // Changed export name to DataPlot
