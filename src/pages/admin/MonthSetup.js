import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import EditModalPopUp from '../../components/EditModalPopUp';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { monthSetupData, monthList } from '../../constant';
import { Button } from 'react-bootstrap';


class MonthSetup extends Component {

    state = {
        isToggle: false,
        startDate: '',
        endDate: '',
        selectedMonth: monthList[0],
    }

    handleToggle = () => {
        if (this.state.isToggle) {
            this.setState({
                isToggle: false,
            })
        } else {
            this.setState({
                isToggle: true,
            })
        }
    }

    handleStartDate = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleEndDate = (date) => {
        this.setState({
            endDate: date
        });
    }

    monthChange = (selectedMonth) => {
        this.setState({ selectedMonth });
    };

    render() {
        const { selectedMonth, startDate, endDate } = this.state;
        const columns = [{
            Header: 'Start Date',
            accessor: 'startDate',
            sortable: true,
            minWidth: 120,
        }, {
            Header: 'End Date',
            accessor: 'endDate',
            sortable: true,
            minWidth: 120,
        }, {
            Header: 'Month',
            accessor: 'month',
            sortable: true,
            minWidth: 120,
        }, {
            Header: 'Action',
            accessor: 'action',
						Cell: <EditModalPopUp />,
					}]
					return (
						<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
							<SideMenu page="admin" />
							<div id="page-content-wrapper">
								<Navbar {...this.props} handleToggle={this.handleToggle} page="admin" />
								<div className="container right__content">
									<div className="row mt-3 d-flex justify-content-between align-items-end">
										<div className="col-md-3">
											<label className="font-weight-bold">Select Start Date</label>
											<div className="input-group input-group-append">
												<DatePicker
													selected={startDate}
													onChange={this.handleStartDate}
													dateFormat='dd/MM/yyyy'
													placeholderText="DD/MM/YYYY"
												/>
												<span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
											</div>
										</div>
										<div className="col-md-3">
											<label className="font-weight-bold">Select End Date</label>
											<div className="input-group input-group-append">
												<DatePicker
													selected={endDate}
													onChange={this.handleEndDate}
													dateFormat='dd/MM/yyyy'
													placeholderText="DD/MM/YYYY"
												/>
												<span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
											</div>
										</div>
										<div className="col-md-2">
											<label className="font-weight-bold">Select Month</label>
											<Select
												name="selectedMonth"
												value={selectedMonth}
												onChange={this.monthChange}
												options={monthList}
												placeholder="Month"
											/>
										</div>
										<div className="col-md-2">
											<Button className="px-4 py-2 generate-btn btn btn-primary">Create </Button>
										</div>
									</div>
									<div className="mt-4">
										<ReactTable
											data={monthSetupData}
											columns={columns}
											defaultPageSize={5}
										/>
									</div>
								</div>
							</div>
						</div>
					)
				}
			}
			
			export default MonthSetup