import clsx from 'clsx'
import React from 'react'
import './table.scss'

export interface ITableHeader {
  title: string
  Icon?: React.FC
  isMobileViewHidden?: boolean
}
interface IProps {
  isSelectable?: boolean
  tableHeader: ITableHeader[]
  TableBody?: React.FC
  tableData?: any
  children?: React.ReactNode
}

export const Table: React.FC<IProps> = ({
  isSelectable,
  tableHeader,
  TableBody,
  tableData,
  children,
}) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__header-row">
          {tableHeader.map(({ title, Icon, isMobileViewHidden }, index) =>
            isMobileViewHidden ? (
              <th className="table__hidden-header-item" key={index}>
                {title}
              </th>
            ) : (
              <th
                className={clsx(
                  'header-item',
                  `article-table__header-item--${title}`
                )}
                key={index}
              >
                {title}
              </th>
            )
          )}
        </tr>
      </thead>

      <tbody className="uni-table__body">
        {children || (TableBody && <TableBody />)}
      </tbody>
    </table>
  )
}
