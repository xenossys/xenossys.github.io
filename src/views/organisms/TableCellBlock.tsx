import React from 'react';

function TableCellBlock({ children, align, isHeader }: any) {
	let style: any = {
		textAlin: align ? align : 'center',
		padding: 5,
	};
	if (isHeader) {
		style.background = '#ff0';
		style.border = '1px solid #ccc';
		style.borderLeft = 0;
		style.borderRight = 0;
	} else {
		style.borderBottom = '1px solid #eee';
	}

	return <td style={style}>{children}</td>;
}

export default TableCellBlock;
