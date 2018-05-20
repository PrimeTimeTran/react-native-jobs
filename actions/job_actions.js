import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  CLEAR_LIKED_JOBS,
  FETCH_JOBS,
  LIKE_JOB
} from './types';
// Job Links
// https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823
// http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=java&l=austin%2C+tx&v=2&format=json
const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'react native'
}

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
  return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let response = await axios.get(url);
    console.log('Response: ', response)
    dispatch({ type: FETCH_JOBS, payload: response.data });

    callback();
  } catch(e) {
    console.log(e);
  }
}

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  }
}

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS }
}