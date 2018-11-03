import React from 'react';

const bug = (props) => {
    return (
        <svg height="100%" viewBox="0 0 200 200" >
            <path id="bug" d="M164.899,171.42l12.818,6.345c0.998,0.494,2.057,0.729,3.101,0.729c2.577,0,5.058-1.43,6.278-3.896
	c1.715-3.465,0.297-7.664-3.168-9.379l-11.979-5.929c4.868-10.375,7.599-21.968,7.599-34.209c0-1.175-0.038-2.341-0.088-3.504
	h12.183c3.866,0,7-3.134,7-7s-3.134-7-7-7h-14.019c-2.887-13.058-8.928-24.909-17.282-34.709l8.784-6.116
	c3.173-2.209,3.954-6.572,1.745-9.745c-2.211-3.173-6.573-3.953-9.745-1.745l-9.586,6.674c-0.451,0.314-0.848,0.675-1.2,1.067
	c-7.472-6.163-16.08-10.968-25.454-14.079c1.357-1.161,2.136-2.5,2.136-4.025c0-7.483-4.163-14.132-10.611-18.355
	c0.3-0.561,0.5-1.187,0.566-1.858C116.989,24.569,118.374,13,139.146,13c5.419,0,9.105,1.677,10.38,4.721
	c1.154,2.757,0.327,6.56-1.923,8.845c-1.808,1.835-4.027,2.245-6.597,1.214c-2.564-1.028-5.475,0.218-6.502,2.781
	c-1.026,2.563,0.219,5.474,2.781,6.501c2.115,0.848,4.256,1.264,6.342,1.264c4.12,0,8.027-1.623,11.101-4.743
	c5.073-5.152,6.728-13.263,4.021-19.724C155.859,6.958,148.715,3,139.146,3c-22.643,0-30.635,12.265-31.963,19.622
	c-2.288-0.539-4.694-0.832-7.183-0.832s-4.896,0.293-7.184,0.832C91.489,15.265,83.496,3,60.854,3
	C51.285,3,44.14,6.958,41.25,13.859c-2.706,6.461-1.051,14.572,4.022,19.724c3.074,3.121,6.979,4.743,11.1,4.743
	c2.085,0,4.227-0.416,6.342-1.264c2.563-1.027,3.808-3.938,2.781-6.501c-1.027-2.563-3.938-3.809-6.501-2.781
	c-2.57,1.029-4.788,0.622-6.596-1.214c-2.251-2.286-3.078-6.088-1.923-8.845C51.75,14.677,55.436,13,60.854,13
	C81.049,13,82.94,24.134,83.03,24.761c0.073,0.644,0.274,1.241,0.562,1.781c-6.451,4.223-10.615,10.873-10.615,18.358
	c0,1.524,0.778,2.865,2.136,4.025c-9.257,3.072-17.763,7.801-25.168,13.853c-0.337-0.343-0.712-0.657-1.129-0.933L38.739,55.17
	c-3.222-2.134-7.565-1.253-9.701,1.971c-2.135,3.223-1.252,7.566,1.971,9.701l8.811,5.836c-8.438,9.836-14.539,21.756-17.443,34.898
	H8.357c-3.866,0-7,3.134-7,7s3.134,7,7,7H20.54c-0.05,1.163-0.088,2.329-0.088,3.504c0,12.241,2.73,23.834,7.598,34.209
	l-11.979,5.929c-3.465,1.715-4.884,5.914-3.168,9.379c1.221,2.467,3.701,3.896,6.279,3.896c1.043,0,2.102-0.234,3.1-0.729
	l12.819-6.345c6.574,9.329,15.073,17.186,24.92,22.97l5.375-11.644c10.363,5.205,22.124,8.159,34.604,8.159
	c12.479,0,24.243-2.949,34.606-8.152l5.372,11.637C149.826,188.605,158.325,180.749,164.899,171.42z M100,31.79
	c8.023,0,14.964,4.539,16.639,10.395c-2.782,1.035-8.427,2.287-16.639,2.287c-8.212,0-13.857-1.252-16.639-2.287
	C85.036,36.328,91.977,31.79,100,31.79z M40.003,160.583c-6.249-10.715-9.551-22.991-9.551-35.503
	c0-38.698,31.199-70.181,69.548-70.181c38.35,0,69.549,31.483,69.549,70.181c0,12.511-3.303,24.788-9.552,35.502
	c-4.179,7.166-9.595,13.527-15.942,18.778l-34.976-75.764L100,83.929l-9.079,19.667L55.945,179.36
	C49.598,174.109,44.182,167.748,40.003,160.583z M100,180.905c-10.632,0-20.925-2.788-30.066-7.988L100,107.788l30.065,65.129
	C120.925,178.117,110.632,180.905,100,180.905z M57.372,87.114c1.907-6.045,8.941-9.964,15.709-8.754s10.708,7.092,8.8,13.136
	c-1.908,6.045-8.941,9.964-15.709,8.754S55.463,93.159,57.372,87.114z M51.921,146.101c-7.226-0.805-11.879-7.571-10.395-15.112
	c1.484-7.54,8.544-13,15.77-12.194c7.225,0.805,11.879,7.571,10.395,15.112C66.206,141.446,59.146,146.906,51.921,146.101z
	 M118.119,91.496c-1.909-6.044,2.031-11.926,8.8-13.136s13.803,2.709,15.709,8.754c1.909,6.045-2.031,11.926-8.8,13.136
	S120.026,97.541,118.119,91.496z M158.475,130.988c1.484,7.541-3.17,14.308-10.396,15.112c-7.225,0.806-14.285-4.654-15.77-12.194
	c-1.484-7.541,3.17-14.308,10.396-15.112C149.93,117.988,156.99,123.448,158.475,130.988z"/>
        </svg>
    );
}

export default bug;