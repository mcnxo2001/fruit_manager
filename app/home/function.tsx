import React from "react"
import ReactDOM from "react-dom/client"

export const handleClickDelete = (event: React.MouseEvent) => {
    let x = `formItem${event.currentTarget.id.substr(12)}`
    document.getElementById(x)!.remove()
}

export const fnAddForm = () => {
    let formContent = document.getElementById('formContent')!
    let index = formContent.children.length + 1;

    let formItem = document.createElement('form')
    formItem.setAttribute('class', 'border p-3 rounded-3 border-primary mb-2')
    formItem.setAttribute('id', `formItem${index}`)

    let row = React.createElement('div', { className: 'row' },
        React.createElement('div', {
            className: 'col-12 col-sm-2 col-md-3 col-lg-2'
        },
            React.createElement('div', {
                className: 'form-group',
            },
                React.createElement('label', {
                    className: 'fw-semibold',
                }, 'Tên loại quả'),
                React.createElement('input', {
                    type: 'text',
                    className: 'form-control mt-2',
                    id: `fruitName${index}`,
                }))),

        React.createElement('div', {
            className: 'col-12 col-sm-2 col-md-3 col-lg-2'
        },
            React.createElement('div', {
                className: 'form-group',
            },
                React.createElement('label', {
                    className: 'fw-semibold',
                }, 'Số lượng thùng'),
                React.createElement('input', {
                    type: 'text',
                    className: 'form-control mt-2',
                    id: `amountBoxFruit${index}`,
                }))),

        React.createElement('div', {
            className: 'col-12 col-sm-12 col-md-3 col-lg-2'
        },
            React.createElement('div', {
                className: 'form-group',
            },
                React.createElement('label', {
                    className: 'fw-semibold',
                }, 'Trọng lượng mỗi thùng'),
                React.createElement('input', {
                    type: 'text',
                    className: 'form-control mt-2',
                    id: `weightFruit${index}`,
                }))),

        React.createElement('div', {
            className: 'col-12 col-sm-12 col-md-3 col-lg-2'
        },
            React.createElement('div', {
                className: 'form-group',
            },
                React.createElement('label', {
                    className: 'fw-semibold',
                }, 'Trọng lượng hàng tốt'),
                React.createElement('input', {
                    type: 'text',
                    className: 'form-control mt-2',
                    id: `perfectweightFruit${index}`,
                }))),

        React.createElement('div', {
            className: 'col-12 col-sm-12 col-md-3 col-lg-2 coverbtn d-flex flex-column justify-content-end'
        },
            React.createElement('button', {
                className: 'btn btDelete mt-3 btn-danger',
                id: `btDeleteForm${index}`,
                type: 'button',
                onClick: handleClickDelete
            }, "Delete Form"))
    )
    ReactDOM.createRoot(formItem).render(row)
    formContent.appendChild(formItem)
}

